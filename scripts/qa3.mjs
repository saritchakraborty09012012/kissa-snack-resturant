import { chromium } from 'playwright'
import fs from 'node:fs'

const base = process.env.QA_BASE || 'http://localhost:5180'
const out = process.env.QA_OUT || 'screens/qa3'
fs.mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

const errors = []

const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
page.on('pageerror', (e) => errors.push('PAGE ' + e.message))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push('CONSOLE ' + m.text().slice(0, 300))
})

await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(4200)
await page.mouse.move(720, 450)

// ---- menu overlay
await page.locator('nav a', { hasText: 'Menu' }).first().click()
await page.waitForTimeout(1400)
await page.screenshot({ path: `${out}/menu-overlay.png` })
console.log('menu overlay')

await page
  .locator('div[aria-hidden="false"] button', { hasText: 'Signature Chai' })
  .first()
  .hover({ force: true })
await page.waitForTimeout(900)
await page.screenshot({ path: `${out}/menu-overlay-hover.png` })
console.log('menu overlay hover')

await page.keyboard.press('Escape')
await page.waitForTimeout(1000)

// ---- booking modal
await page.locator('header button', { hasText: 'Book a table' }).first().click()
await page.waitForTimeout(1400)
await page.screenshot({ path: `${out}/booking.png` })
console.log('booking')

await page.locator('input[placeholder="Full name"]').fill('Aarav Mehta')
await page.locator('input[placeholder="+91"]').fill('9820000003')
await page.locator('button[type="submit"]', { hasText: 'Request table' }).click()
await page.waitForTimeout(2200)
await page.screenshot({ path: `${out}/booking-done.png` })
console.log('booking done')

await page.keyboard.press('Escape')
await page.waitForTimeout(900)

// ---- mobile
const m = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
m.on('pageerror', (e) => errors.push('MOBILE PAGE ' + e.message))
m.on('console', (msg) => {
  if (msg.type() === 'error') errors.push('MOBILE CONSOLE ' + msg.text().slice(0, 300))
})
await m.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await m.waitForTimeout(4200)
await m.screenshot({ path: `${out}/mobile-hero.png` })
console.log('mobile hero')

for (const [name, idx] of [['dish-01', 0], ['dish-04', 3]]) {
  await m.evaluate((i) => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    window.scrollTo({ top: start + ((i + 0.62) / 8) * travel, behavior: 'instant' })
  }, idx)
  await m.waitForTimeout(2000)
  await m.screenshot({ path: `${out}/mobile-${name}.png` })
  console.log('mobile', name)
}

for (const [name, sel] of [['story', '#story'], ['menu', '#menu'], ['visit', '#visit']]) {
  await m.evaluate((s) => {
    const el = document.querySelector(s)
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'instant' })
  }, sel)
  await m.waitForTimeout(1500)
  await m.screenshot({ path: `${out}/mobile-${name}.png` })
  console.log('mobile', name)
}

await m.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }))
await m.waitForTimeout(1200)
await m.screenshot({ path: `${out}/mobile-footer.png` })

// mobile menu
await m.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
await m.waitForTimeout(600)
await m.locator('button[aria-label="Open menu"]').click()
await m.waitForTimeout(1300)
await m.screenshot({ path: `${out}/mobile-menu.png` })
console.log('mobile menu')

console.log('ERRORS:', errors.length ? '\n' + errors.join('\n') : 'none')
await browser.close()
