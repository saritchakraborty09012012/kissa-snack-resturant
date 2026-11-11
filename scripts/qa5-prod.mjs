import { chromium } from 'playwright'
import fs from 'node:fs'

const base = process.env.QA_BASE || 'http://localhost:8788'
const out = process.env.QA_OUT || 'screens/qa-prod'
fs.mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('pageerror', (e) => errors.push('PAGE ' + e.message))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push('CONSOLE ' + m.text().slice(0, 300))
})

await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(4200)
await page.screenshot({ path: `${out}/prod-hero.png` })

await page.evaluate(() => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  window.scrollTo({ top: start + (2.62 / 8) * travel, behavior: 'instant' })
})
await page.waitForTimeout(2200)
await page.screenshot({ path: `${out}/prod-dish-03.png` })

await page.locator('header button', { hasText: 'Book a table' }).first().click()
await page.waitForTimeout(1200)
await page.locator('input[placeholder="Full name"]').fill('Production Test')
await page.locator('input[placeholder="+91"]').fill('9820000004')
await page.locator('button[type="submit"]', { hasText: 'Request table' }).click()
await page.waitForTimeout(2000)
const code = await page.locator('text=/MCW-\\d{4}-\\d{4}/').first().textContent().catch(() => '')
await page.screenshot({ path: `${out}/prod-booking-done.png` })
console.log('reference:', code)

const health = await page.evaluate(async () => {
  const r = await fetch('/api/health')
  return r.ok ? await r.json() : { ok: false }
})
console.log('api health:', JSON.stringify(health))
console.log('ERRORS:', errors.length ? '\n' + errors.join('\n') : 'none')
await browser.close()
