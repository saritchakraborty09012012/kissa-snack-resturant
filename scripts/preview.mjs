import { chromium } from 'playwright'
import fs from 'node:fs'

const base = process.env.QA_BASE || 'http://localhost:5180'
const out = process.env.QA_OUT || 'screens/live'
fs.mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('pageerror', (e) => errors.push('PAGE ' + e.message))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push('CONSOLE ' + m.text().slice(0, 200))
})

const goTo = async (px) =>
  page.evaluate((p) => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    window.__lenis?.scrollTo(start + p * travel, { immediate: true, force: true })
    window.scrollTo({ top: start + p * travel, behavior: 'instant' })
  }, px)

await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(5000)
await page.mouse.move(760, 430)
await page.screenshot({ path: `${out}/01-hero.png` })
console.log('hero')

for (const [name, idx] of [
  ['02-dish-01', 0],
  ['03-dish-04', 3],
  ['04-dish-07', 6],
]) {
  await goTo((idx + 0.62) / 8)
  await page.waitForTimeout(4200)
  await page.screenshot({ path: `${out}/${name}.png` })
  console.log(name)
}

for (const [name, sel] of [
  ['05-story', '#story'],
  ['06-menu', '#menu'],
  ['07-visit', '#visit'],
]) {
  await page.evaluate((s) => {
    const el = document.querySelector(s)
    window.__lenis?.scrollTo(el.getBoundingClientRect().top + window.scrollY, { immediate: true, force: true })
  }, sel)
  await page.waitForTimeout(2600)
  await page.screenshot({ path: `${out}/${name}.png` })
  console.log(name)
}

await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }))
await page.waitForTimeout(2200)
await page.screenshot({ path: `${out}/08-footer.png` })
console.log('footer')

const api = await page.evaluate(async () => {
  try {
    const r = await fetch('/api/health')
    return { status: r.status, body: await r.text() }
  } catch (e) {
    return { status: 0, body: String(e) }
  }
})
console.log('api', JSON.stringify(api))
console.log('ERRORS:', errors.length ? '\n' + errors.join('\n') : 'none')
await browser.close()
