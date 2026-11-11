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
await page.waitForTimeout(4200)

const scrollTo = (progress) =>
  page.evaluate((p) => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    window.scrollTo({ top: start + p * travel, behavior: 'instant' })
  }, progress)

// frames across the dish 01 -> 02 handoff (local 0.72 .. 1.25)
for (const [name, p] of [
  ['t-070', 0.7 / 8],
  ['t-078', 0.78 / 8],
  ['t-086', 0.86 / 8],
  ['t-094', 0.94 / 8],
  ['t-102', 1.02 / 8],
  ['t-110', 1.1 / 8],
]) {
  await scrollTo(p)
  await page.waitForTimeout(260)
  await page.screenshot({ path: `${out}/${name}.png` })
  console.log(name)
}

// fps sample while scrolling through two dishes
const fps = await page.evaluate(async () => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  const t0 = performance.now()
  let frames = 0
  let done = false
  const loop = () => {
    frames++
    if (performance.now() - t0 < 2000) requestAnimationFrame(loop)
    else done = true
  }
  requestAnimationFrame(loop)
  const s0 = performance.now()
  while (performance.now() - s0 < 2000) {
    const t = (performance.now() - s0) / 2000
    window.scrollTo({ top: start + (0.5 + t * 2) / 8 * travel, behavior: 'instant' })
    await new Promise((r) => setTimeout(r, 16))
  }
  while (!done) await new Promise((r) => setTimeout(r, 50))
  return (frames / 2).toFixed(1)
})
console.log('fps (software renderer):', fps)

await browser.close()
