import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message))
page.on('console', (m) => {
  if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 200))
})
await page.goto('http://localhost:5174/?lite=1&skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)
await page.screenshot({ path: 'screens/qa-hero.png', animations: 'disabled', timeout: 30000 })
console.log('hero')

for (let i = 0; i < 8; i++) {
  const t = Date.now()
  await page.evaluate((idx) => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    window.scrollTo({ top: start + ((idx + 0.58) / 8) * travel, behavior: 'instant' })
  }, i)
  await page.waitForTimeout(2800)
  await page.screenshot({ path: `screens/qa-dish-0${i + 1}.png`, animations: 'disabled', timeout: 40000 })
  console.log('dish', i + 1, Date.now() - t, 'ms')
}
await browser.close()
