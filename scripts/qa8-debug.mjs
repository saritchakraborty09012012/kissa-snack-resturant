import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning') console.log(m.type(), m.text().slice(0, 160))
})
await page.goto('http://localhost:5180/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(4000)
await page.evaluate(() => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  window.scrollTo({ top: start + (6.62 / 8) * travel, behavior: 'instant' })
})
await page.waitForTimeout(3000)
const info = await page.evaluate(() =>
  Array.from(document.querySelectorAll('.plate-layer')).map((el) => {
    const img = el.querySelector('img.plate-img')
    return {
      op: el.style.opacity,
      vis: el.style.visibility,
      src: img?.getAttribute('src'),
      complete: img?.complete,
      w: img?.naturalWidth,
      rect: el.getBoundingClientRect().width,
    }
  }),
)
console.log(JSON.stringify(info, null, 1))
const state = await page.evaluate(() => window.__stage || null)
console.log('stage', state)
await browser.close()
