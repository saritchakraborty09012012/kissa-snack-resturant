import os, glob
from PIL import Image, ImageDraw, ImageFont

root = r'_analysis/food3'
files = sorted(glob.glob(os.path.join(root, 'chaatx-*.jpg')))
COLS, CELL, PAD, LABEL = 4, 320, 6, 22
rows = (len(files) + COLS - 1) // COLS
W = COLS * (CELL + PAD) + PAD
H = rows * (CELL + LABEL + PAD) + PAD
sheet = Image.new('RGB', (W, H), (14, 14, 16))
d = ImageDraw.Draw(sheet)
font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 15)
for i, p in enumerate(files):
    im = Image.open(p).convert('RGB')
    im.thumbnail((CELL, CELL))
    x = PAD + (i % COLS) * (CELL + PAD)
    y = PAD + (i // COLS) * (CELL + LABEL + PAD)
    sheet.paste(im, (x + (CELL - im.width) // 2, y + (CELL - im.height) // 2))
    d.text((x + 3, y + CELL + 3), os.path.basename(p), fill=(220, 200, 170), font=font)
sheet.save(os.path.join(root, 'sheet_chaatx.jpg'), quality=88)
print(sheet.size)
