import { chromium } from 'playwright'

const base = process.env.QA_BASE || 'http://localhost:5180'
const out = process.env.QA_OUT || 'screens/qa2'
const tag = process.env.QA_TAG || ''

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message))
page.on('console', (m) => {
  if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 300))
})

await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(4500)
await page.screenshot({ path: `${out}/hero${tag}.png` })
console.log('hero')

for (let i = 0; i < 8; i++) {
  await page.evaluate((idx) => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    window.scrollTo({ top: start + ((idx + 0.62) / 8) * travel, behavior: 'instant' })
  }, i)
  await page.waitForTimeout(2200)
  await page.screenshot({ path: `${out}/dish-0${i + 1}${tag}.png` })
  console.log('dish', i + 1)
}

for (const [name, sel] of [
  ['story', '#story'],
  ['spices', '#spices'],
  ['hours', '#hours'],
  ['invitation', '#invitation'],
  ['menu', '#menu'],
  ['quote', '#quote'],
  ['visit', '#visit'],
]) {
  await page.evaluate((s) => {
    const el = document.querySelector(s)
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'instant' })
  }, sel)
  await page.waitForTimeout(1400)
  await page.screenshot({ path: `${out}/${name}${tag}.png` })
  console.log(name)
}

await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }))
await page.waitForTimeout(1200)
await page.screenshot({ path: `${out}/footer${tag}.png` })

await browser.close()
