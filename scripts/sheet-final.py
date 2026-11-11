import os, glob
from PIL import Image, ImageDraw, ImageFont

files = sorted(glob.glob('public/photos/dish-*.webp'))
COLS, CELL, PAD, LABEL = 4, 330, 10, 22
rows = (len(files) + COLS - 1) // COLS
W = COLS * (CELL + PAD) + PAD
H = rows * (CELL + LABEL + PAD) + PAD
sheet = Image.new('RGB', (W, H), (5, 6, 9))
d = ImageDraw.Draw(sheet)
font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 15)
for i, p in enumerate(files):
    im = Image.open(p).convert('RGBA')
    im.thumbnail((CELL, CELL))
    x = PAD + (i % COLS) * (CELL + PAD)
    y = PAD + (i // COLS) * (CELL + LABEL + PAD)
    sheet.paste(im, (x + (CELL - im.width) // 2, y + (CELL - im.height) // 2), im)
    d.text((x + 3, y + CELL + 3), os.path.basename(p), fill=(220, 200, 170), font=font)
sheet.save('_analysis/food3/sheet_final.jpg', quality=90)
print(sheet.size)
