import { chromium } from 'playwright'

// Smoke-test the built site served by `npm run server` on :8787.
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text().slice(0, 200))
})

await page.goto('http://localhost:8787/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(8000)
await page.screenshot({ path: 'screens/prod-hero.png', timeout: 60000 })

await page.evaluate(() => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  window.scrollTo({ top: start + (0.56 / 8) * travel, behavior: 'instant' })
})
await page.waitForTimeout(4000)
await page.screenshot({ path: 'screens/prod-dish.png', timeout: 60000 })

await page.evaluate(() => {
  const el = document.querySelector('#spices')
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 380, behavior: 'instant' })
})
await page.waitForTimeout(8000)
await page.screenshot({ path: 'screens/prod-spices.png', timeout: 60000 })

console.log(
  JSON.stringify({
    canvases: await page.evaluate(() => document.querySelectorAll('canvas').length),
    scrollY: await page.evaluate(() => Math.round(window.scrollY)),
    errors: errors.length ? errors.slice(0, 4) : 'none',
  })
)
await browser.close()
