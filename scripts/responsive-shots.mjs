import { chromium } from 'playwright'
import fs from 'node:fs'

const base = process.env.QA_BASE || 'http://localhost:5180'
const out = process.env.QA_OUT || 'screens/responsive'
const sizes = (process.env.SIZES || '320x568,390x844,768x1024,1024x768,1920x1080,844x390')
  .split(',')
  .map((s) => s.split('x').map(Number))

fs.mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

for (const [w, h] of sizes) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: w < 700,
    hasTouch: w < 700,
    deviceScaleFactor: 1,
  })
  const page = await ctx.newPage()
  const tag = `${w}x${h}`
  await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(2600)

  const to = async (sel) => {
    await page.evaluate((s) => {
      const el = document.querySelector(s)
      if (!el) return
      const y = el.getBoundingClientRect().top + window.scrollY
      window.__lenis?.scrollTo(y, { immediate: true, force: true })
      window.scrollTo({ top: y, behavior: 'instant' })
    }, sel)
    await page.waitForTimeout(2400)
  }

  await page.screenshot({ path: `${out}/${tag}-hero.png` })

  await page.evaluate(() => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    const y = start + (3.62 / 8) * travel
    window.__lenis?.scrollTo(y, { immediate: true, force: true })
    window.scrollTo({ top: y, behavior: 'instant' })
  })
  await page.waitForTimeout(3400)
  await page.screenshot({ path: `${out}/${tag}-dish.png` })

  await to('#visit')
  await page.screenshot({ path: `${out}/${tag}-visit.png` })

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }))
  await page.waitForTimeout(2000)
  await page.screenshot({ path: `${out}/${tag}-footer.png` })

  console.log(tag)
  await ctx.close()
}

await browser.close()
