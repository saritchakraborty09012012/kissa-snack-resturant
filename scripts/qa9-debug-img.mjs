import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5180/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(3500)
await page.evaluate(() => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  window.__lenis?.scrollTo(start + (6.62 / 8) * travel, { immediate: true, force: true })
})
await page.waitForTimeout(2500)

const info = await page.evaluate(async () => {
  const layer = document.querySelectorAll('.plate-layer')[6]
  const img = layer.querySelector('img.plate-img')
  const cs = getComputedStyle(img)
  const c = document.createElement('canvas')
  c.width = 200
  c.height = 200
  const ctx = c.getContext('2d')
  ctx.drawImage(img, 0, 0, 200, 200)
  const d = ctx.getImageData(0, 0, 200, 200).data
  let sum = 0
  let alpha = 0
  for (let i = 0; i < d.length; i += 4) {
    sum += d[i] + d[i + 1] + d[i + 2]
    alpha += d[i + 3]
  }
  return {
    src: img.getAttribute('src'),
    filter: cs.filter,
    mask: cs.maskImage.slice(0, 120),
    blend: cs.mixBlendMode,
    opacity: cs.opacity,
    rect: img.getBoundingClientRect().toJSON(),
    avgColor: sum / (d.length / 4) / 3,
    avgAlpha: alpha / (d.length / 4),
  }
})
console.log(JSON.stringify(info, null, 1))
const url = await page.evaluate(async () => {
  const r = await fetch('/photos/dish-07.webp')
  const b = await r.blob()
  return { status: r.status, type: b.type, size: b.size }
})
console.log('fetch', url)
await browser.close()
