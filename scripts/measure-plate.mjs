import { chromium } from 'playwright'

const base = process.env.QA_BASE || 'http://localhost:8787'
const sizes = (process.env.SIZES || '365x581,390x844,320x568,430x932').split(',').map((s) =>
  s.split('x').map(Number),
)

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

for (const [w, h] of sizes) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: true, hasTouch: true })
  const page = await ctx.newPage()
  await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(2800)

  await page.evaluate(() => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    const y = start + (3.62 / 8) * travel
    window.__lenis?.scrollTo(y, { immediate: true, force: true })
    window.scrollTo({ top: y, behavior: 'instant' })
  })
  await page.waitForTimeout(4200)

  const geo = await page.evaluate(() => {
    const r = (sel) => {
      const el = document.querySelector(sel)
      if (!el) return null
      const b = el.getBoundingClientRect()
      return {
        top: Math.round(b.top),
        bottom: Math.round(b.bottom),
        left: Math.round(b.left),
        right: Math.round(b.right),
        w: Math.round(b.width),
        h: Math.round(b.height),
      }
    }
    const shell = document.querySelector('#dishes .shell')
    const headerRow = shell?.firstElementChild
    const copy = document.querySelector('.stage-copy')
    const plate = document.querySelector('.plate-media')
    const glow = document.querySelector('.plate-glow')
    const plateBox = plate ? getComputedStyle(plate) : null
    return {
      vw: innerWidth,
      vh: innerHeight,
      header: headerRow ? (() => { const b = headerRow.getBoundingClientRect(); return { top: Math.round(b.top), bottom: Math.round(b.bottom), h: Math.round(b.height) } })() : null,
      copy: copy ? (() => { const b = copy.getBoundingClientRect(); return { top: Math.round(b.top), bottom: Math.round(b.bottom), h: Math.round(b.height) } })() : null,
      plate: plate ? (() => { const b = plate.getBoundingClientRect(); return { top: Math.round(b.top), bottom: Math.round(b.bottom), left: Math.round(b.left), right: Math.round(b.right), w: Math.round(b.width), h: Math.round(b.height) } })() : null,
      plateCss: plateBox ? { width: plateBox.width, top: plateBox.top, left: plateBox.left } : null,
      glow: glow ? (() => { const b = glow.getBoundingClientRect(); return { w: Math.round(b.width), h: Math.round(b.height) } })() : null,
    }
  })
  console.log(`${w}x${h} ${JSON.stringify(geo)}`)
  await ctx.close()
}

await browser.close()
