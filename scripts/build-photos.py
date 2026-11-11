"""Build the site's photographic assets from curated reference shots.

- Square, feathered-alpha dish plates (WebP with alpha)
- Hero photograph
- Smoke layers (black-background, used with mix-blend-mode: screen)
- Spice stills
"""
import math
import os
from PIL import Image, ImageEnhance, ImageFilter

SRC = '_analysis/food3'
OUT = 'public/photos'
os.makedirs(OUT, exist_ok=True)

SIZE = 1400


def load(name):
    return Image.open(os.path.join(SRC, name)).convert('RGB')


def crop_frac(im, box):
    w, h = im.size
    l, t, r, b = box
    return im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))


def pad_square(im, pad):
    """Place the photo on a blurred, darkened cover crop of itself.

    The foreground is pasted through a soft-edged mask so there is no visible
    rectangle seam, then the whole plate gets a radial alpha in the caller.
    """
    w, h = im.size
    scale = max(SIZE / w, SIZE / h)
    bg = im.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
    bg = bg.crop(
        (
            (bg.width - SIZE) // 2,
            (bg.height - SIZE) // 2,
            (bg.width - SIZE) // 2 + SIZE,
            (bg.height - SIZE) // 2 + SIZE,
        )
    )
    bg = bg.filter(ImageFilter.GaussianBlur(90))
    bg = ImageEnhance.Brightness(bg).enhance(0.34)
    bg = ImageEnhance.Color(bg).enhance(0.75)

    inner = int(SIZE * (1 - 2 * pad))
    fg = im.copy()
    fg.thumbnail((inner, inner), Image.LANCZOS)

    feather = max(18, int(min(fg.size) * 0.07))
    mask = Image.new('L', fg.size, 0)
    mask.paste(255, (feather, feather, fg.width - feather, fg.height - feather))
    mask = mask.filter(ImageFilter.GaussianBlur(feather * 0.7))

    bg.paste(fg, ((SIZE - fg.width) // 2, (SIZE - fg.height) // 2), mask)
    return bg


def radial_shade(im, start=0.52, floor=0.0):
    """Darken the outer ring of the plate so cropped edges melt into the page."""
    w, h = im.size
    sw = 360
    sh = int(sw * h / w)
    small = Image.new('L', (sw, sh), 0)
    px = small.load()
    cx, cy = sw / 2, sh / 2
    rx, ry = sw / 2, sh / 2
    for y in range(sh):
        dy = (y - cy) / ry
        for x in range(sw):
            dx = (x - cx) / rx
            d = math.sqrt(dx * dx + dy * dy)
            if d <= start:
                a = 255
            elif d >= 1:
                a = int(255 * floor)
            else:
                t = (d - start) / max(1e-6, 1 - start)
                a = int(255 * (1 - (1 - floor) * (t ** 1.15)))
            px[x, y] = a
    mask = small.resize((w, h), Image.LANCZOS)
    return Image.composite(im, Image.new('RGB', im.size, (0, 0, 0)), mask)


def ellipse_alpha(size, inner=0.36, outer=0.5, softness=1.0):
    """Radial alpha mask; computed small then upscaled for smooth edges."""
    w, h = size
    sw = 360
    sh = int(sw * h / w)
    small = Image.new('L', (sw, sh), 0)
    px = small.load()
    cx, cy = sw / 2, sh / 2
    rx, ry = sw * outer, sh * outer
    solid = inner / outer
    for y in range(sh):
        dy = (y - cy) / ry
        for x in range(sw):
            dx = (x - cx) / rx
            d = math.sqrt(dx * dx + dy * dy)
            if d >= 1:
                a = 0
            elif d <= solid:
                a = 255
            else:
                t = (d - solid) / max(1e-6, 1 - solid)
                a = int(255 * (1 - (t ** (1.25 * softness))))
            px[x, y] = a
    return small.resize((w, h), Image.LANCZOS)


def grade(im, brightness=1.0, contrast=1.06, saturation=1.03, warm=0.0, sharp=1.0):
    im = ImageEnhance.Brightness(im).enhance(brightness)
    im = ImageEnhance.Contrast(im).enhance(contrast)
    im = ImageEnhance.Color(im).enhance(saturation)
    if warm:
        tint = Image.new('RGB', im.size, (255, 168, 96) if warm > 0 else (120, 170, 255))
        im = Image.blend(im, tint, min(0.18, abs(warm)))
    if sharp > 1:
        im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=int(55 * (sharp - 1)), threshold=3))
    return im


def save_webp(im, name, quality=88):
    path = os.path.join(OUT, name)
    im.save(path, 'WEBP', quality=quality, method=6)
    print(name, im.size, f'{os.path.getsize(path) / 1024:.0f}kb')


DISHES = [
    dict(
        out='dish-01.webp',
        src='chai-13.jpg',
        crop=(0.10, 0.07, 0.68, 0.98),
        pad=0.05,
        brightness=0.96,
        contrast=1.08,
        warm=0.05,
        sharp=1.35,
    ),
    dict(
        out='dish-02.webp',
        src='shake-03.jpg',
        crop=(0.02, 0.0, 0.98, 0.98),
        pad=0.03,
        brightness=1.0,
        contrast=1.04,
        warm=0.02,
        sharp=1.3,
    ),
    dict(
        out='dish-03.webp',
        src='vadapav-00.jpg',
        crop=(0.10, 0.04, 0.90, 0.96),
        pad=0.03,
        brightness=0.95,
        contrast=1.1,
        warm=0.06,
        sharp=1.4,
    ),
    dict(
        out='dish-04.webp',
        src='sandwich-07.jpg',
        crop=(0.04, 0.36, 0.88, 0.98),
        pad=0.03,
        brightness=1.0,
        contrast=1.05,
        warm=0.04,
        sharp=1.3,
    ),
    dict(
        out='dish-05.webp',
        src='maggi-16.jpg',
        crop=(0.09, 0.24, 0.95, 0.92),
        pad=0.03,
        brightness=1.02,
        contrast=1.06,
        warm=0.02,
        sharp=1.35,
    ),
    dict(
        out='dish-06.webp',
        src='pasta-01.jpg',
        crop=(0.15, 0.07, 0.91, 0.95),
        pad=0.02,
        brightness=1.0,
        contrast=1.07,
        warm=0.03,
        sharp=1.4,
    ),
    dict(
        out='dish-07.webp',
        src='paratha-13.jpg',
        crop=(0.12, 0.03, 0.9, 0.94),
        pad=0.06,
        brightness=1.02,
        contrast=1.06,
        warm=0.06,
        sharp=1.4,
    ),
    dict(
        out='dish-08.webp',
        src='chaatx-13.jpg',
        crop=(0.04, 0.04, 0.96, 0.96),
        pad=0.02,
        brightness=1.0,
        contrast=1.1,
        warm=0.03,
        sharp=1.4,
    ),
]

for d in DISHES:
    im = load(d['src'])
    im = crop_frac(im, d['crop'])
    im = grade(
        im,
        d.get('brightness', 1),
        d.get('contrast', 1.06),
        d.get('saturation', 1.03),
        d.get('warm', 0),
        d.get('sharp', 1),
    )
    im = pad_square(im, d.get('pad', 0.04))
    if d.get('edge'):
        im = radial_shade(im, start=d.get('edge_start', 0.52), floor=d.get('edge_floor', 0.0))
    rgba = im.convert('RGBA')
    alpha = ellipse_alpha(im.size, inner=d.get('inner', 0.34), outer=d.get('outer', 0.5))
    rgba.putalpha(alpha)
    save_webp(rgba, d['out'])

# ------------------------------------------------------------------ hero
hero = load('hero-05.jpg')
hero = grade(hero, 1.0, 1.06, 1.02, 0.03, 1.25)
hero = hero.resize((1600, int(1600 * hero.height / hero.width)), Image.LANCZOS)
save_webp(hero, 'hero.webp', 90)

# ------------------------------------------------------------------ smoke
for src, out in [('smoke-08.jpg', 'smoke-a.webp'), ('smoke-01.jpg', 'smoke-b.webp'), ('smoke-13.jpg', 'smoke-c.webp')]:
    im = load(src)
    im.thumbnail((1200, 1200), Image.LANCZOS)
    im = ImageEnhance.Contrast(im).enhance(1.15)
    save_webp(im, out, 78)

# ------------------------------------------------------------------ spices
SPICES = [
    ('sp-cardamom-01.jpg', 'spice-01.webp', (0.1, 0.1, 0.9, 0.9)),
    ('sp-ginger-00.jpg', 'spice-02.webp', (0.15, 0.1, 0.9, 0.9)),
    ('sp-clove-00.jpg', 'spice-03.webp', (0.05, 0.0, 0.95, 0.85)),
    ('sp-cinnamon-05.jpg', 'spice-04.webp', (0.0, 0.05, 0.95, 0.95)),
    ('sp-fennel-03.jpg', 'spice-05.webp', (0.03, 0.05, 0.95, 0.95)),
    ('sp-pepper-00.jpg', 'spice-06.webp', (0.05, 0.05, 0.9, 0.9)),
]
for src, out, box in SPICES:
    im = crop_frac(load(src), box)
    im = grade(im, 0.98, 1.05, 1.02, 0.02, 1.2)
    im.thumbnail((1100, 1100), Image.LANCZOS)
    save_webp(im, out, 84)

print('done')


