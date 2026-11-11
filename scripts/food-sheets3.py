import json, os, sys
from PIL import Image, ImageDraw, ImageFont

root = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '_analysis', 'food3')
idx = json.load(open(os.path.join(root, 'index.json'), encoding='utf-8'))

COLS = 4
CELL = 320
PAD = 6
LABEL = 22

for key, items in idx.items():
    if not items:
        continue
    rows = (len(items) + COLS - 1) // COLS
    W = COLS * (CELL + PAD) + PAD
    H = rows * (CELL + LABEL + PAD) + PAD
    sheet = Image.new('RGB', (W, H), (14, 14, 16))
    d = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 15)
    except Exception:
        font = ImageFont.load_default()
    for i, it in enumerate(items):
        p = os.path.join(os.path.dirname(root), '..', it['file'])
        p = os.path.normpath(os.path.join(os.getcwd(), it['file']))
        try:
            im = Image.open(p).convert('RGB')
        except Exception:
            continue
        im.thumbnail((CELL, CELL))
        x = PAD + (i % COLS) * (CELL + PAD)
        y = PAD + (i // COLS) * (CELL + LABEL + PAD)
        sheet.paste(im, (x + (CELL - im.width) // 2, y + (CELL - im.height) // 2))
        d.text((x + 3, y + CELL + 3), os.path.basename(it['file']), fill=(220, 200, 170), font=font)
    out = os.path.join(root, f'sheet_{key}.jpg')
    sheet.save(out, quality=88)
    print(out, sheet.size)
