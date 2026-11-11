import { chromium } from 'playwright'

const base = process.env.QA_BASE || 'http://localhost:5180'
const sizes = (process.env.SIZES || '320x568,360x800,390x844,430x932,768x1024,820x1180,1024x768,1280x800,1440x900,1920x1080,2560x1440')
  .split(',')
  .map((s) => s.split('x').map(Number))

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
  await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(2200)

  const report = await page.evaluate(() => {
    const de = document.documentElement
    const vw = window.innerWidth
    const off = []
    document.querySelectorAll('body *').forEach((el) => {
      const cs = getComputedStyle(el)
      if (cs.position === 'fixed' || cs.visibility === 'hidden' || cs.display === 'none') return
      const r = el.getBoundingClientRect()
      if (!r.width || !r.height) return
      if (r.right > vw + 2 || r.left < -2) {
        const clipped = el.closest('.overflow-hidden, .overflow-x-hidden, .plate-stage')
        if (!clipped) {
          off.push({
            tag: el.tagName.toLowerCase(),
            cls: String(el.className).slice(0, 70),
            left: Math.round(r.left),
            right: Math.round(r.right),
          })
        }
      }
    })
    return {
      docW: de.scrollWidth,
      bodyW: document.body.scrollWidth,
      vw,
      innerH: window.innerHeight,
      off: off.slice(0, 6),
    }
  })

  const overflow = report.docW - report.vw
  console.log(
    `${w}x${h} | doc ${report.docW} vw ${report.vw} overflow ${overflow}${
      report.off.length ? ' | ' + JSON.stringify(report.off) : ''
    }`,
  )
  await ctx.close()
}

await browser.close()
