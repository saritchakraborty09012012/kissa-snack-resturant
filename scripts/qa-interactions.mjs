import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message))
page.on('console', (m) => {
  if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 200))
})
await page.goto('http://localhost:5174/?lite=1&skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)
await page.mouse.move(8, 8)

// menu section lower part + rail
await page.evaluate(() => {
  const el = document.querySelector('#menu')
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 720, behavior: 'instant' })
})
await page.waitForTimeout(2600)
await page.screenshot({ path: 'screens/qa-menu-rail.png', animations: 'disabled', timeout: 40000 })
console.log('rail')

// stats full
await page.evaluate(() => {
  const el = document.querySelector('#invitation')
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 500, behavior: 'instant' })
})
await page.waitForTimeout(4000)
await page.screenshot({ path: 'screens/qa-stats.png', animations: 'disabled', timeout: 40000 })
console.log('stats')

// booking modal
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
await page.waitForTimeout(1500)
await page.getByRole('button', { name: /book a table/i }).first().click()
await page.waitForTimeout(1400)
console.log('modal open', await page.evaluate(() => !!document.querySelector('[data-booking], form')))
await page.screenshot({ path: 'screens/qa-booking.png', animations: 'disabled', timeout: 40000 })
await page.keyboard.press('Escape')
await page.waitForTimeout(1000)

// menu overlay
await page.locator('nav a').first().click()
await page.waitForTimeout(1400)
await page.screenshot({ path: 'screens/qa-menu-overlay.png', animations: 'disabled', timeout: 40000 })
console.log('overlay')

// mobile
await page.setViewportSize({ width: 390, height: 844 })
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
await page.waitForTimeout(3200)
await page.screenshot({ path: 'screens/qa-mobile-hero.png', animations: 'disabled', timeout: 40000 })
console.log('mobile hero')

await page.evaluate(() => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  window.scrollTo({ top: start + (0.58 / 8) * travel, behavior: 'instant' })
})
await page.waitForTimeout(3200)
await page.screenshot({ path: 'screens/qa-mobile-dish.png', animations: 'disabled', timeout: 40000 })
console.log('mobile dish')

await browser.close()
