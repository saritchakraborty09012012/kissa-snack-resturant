import { chromium } from 'playwright'
import fs from 'node:fs'

const base = process.env.QA_BASE || 'http://localhost:5180'
const out = process.env.QA_OUT || 'screens/qa3'
fs.mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(4000)

await page.evaluate(() => {
  const el = document.querySelector('#menu')
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 620, behavior: 'instant' })
})
await page.waitForTimeout(1800)
await page.screenshot({ path: `${out}/menu-cards.png` })
console.log('menu cards')

// horizontal scroll inside the card rail
await page.evaluate(() => {
  const rail = document.querySelector('#menu .snap-x')
  if (rail) rail.scrollTo({ left: 700, behavior: 'instant' })
})
await page.waitForTimeout(900)
await page.screenshot({ path: `${out}/menu-cards-scrolled.png` })

const m = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
await m.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded' })
await m.waitForTimeout(4000)
await m.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }))
await m.waitForTimeout(1400)
await m.screenshot({ path: `${out}/mobile-footer2.png` })
console.log('mobile footer')

await browser.close()
