import { chromium } from 'playwright'
import fs from 'node:fs'

const base = process.env.QA_BASE || 'http://localhost:5180'
const out = process.env.QA_OUT || 'screens/qa'
const sizes = (process.env.SIZES || '320x568,390x844,768x1024,1024x768,1440x900')
  .split(',')
  .map((s) => s.split('x').map(Number))

fs.mkdirSync(out, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

const scrollTo = async (page, sel) => {
  await page.evaluate((s) => {
    const el = document.querySelector(s)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY
    window.__lenis?.scrollTo(y, { immediate: true, force: true })
    window.scrollTo({ top: y, behavior: 'instant' })
  }, sel)
  await page.waitForTimeout(2600)
}

for (const [w, h] of sizes) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: w < 700,
    hasTouch: w < 700,
    deviceScaleFactor: 1,
  })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(String(e)))
  const tag = `${w}x${h}`

  await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(2600)

  await scrollTo(page, '#hours')
  await page.screenshot({ path: `${out}/${tag}-hours.png` })

  await scrollTo(page, '#menu')
  await page.screenshot({ path: `${out}/${tag}-menu.png` })

  await scrollTo(page, '#invitation')
  await page.screenshot({ path: `${out}/${tag}-stats.png` })

  await scrollTo(page, '#visit')
  await page.waitForTimeout(2600)
  await page.screenshot({ path: `${out}/${tag}-visit.png` })

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }))
  await page.waitForTimeout(2200)
  await page.screenshot({ path: `${out}/${tag}-footer.png` })

  // booking modal
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button')].find((b) =>
      /book a table/i.test(b.textContent || ''),
    )
    btn?.click()
  })
  await page.waitForTimeout(1400)
  await page.screenshot({ path: `${out}/${tag}-booking.png` })

  const filled = await page.evaluate(() => {
    const name = document.querySelector('input[placeholder="Full name"]')
    const phone = document.querySelector('input[placeholder="+91"]')
    if (name) {
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set
      setter.call(name, 'Sample Guest')
      name.dispatchEvent(new Event('input', { bubbles: true }))
    }
    if (phone) {
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set
      setter.call(phone, '9820000003')
      phone.dispatchEvent(new Event('input', { bubbles: true }))
    }
    return Boolean(name && phone)
  })

  await page.evaluate(() => {
    const form = document.querySelector('form')
    const submit = [...document.querySelectorAll('[role="dialog"] button[type="submit"]')].find((b) =>
      /request/i.test(b.textContent || ''),
    )
    if (submit) submit.click()
    else form?.requestSubmit?.()
  })
  await page.waitForTimeout(2500)
  await page.screenshot({ path: `${out}/${tag}-toast.png` })

  console.log(`${tag} | filled ${filled} | errors ${errors.length}${errors.length ? ' :: ' + errors.slice(0, 3).join(' | ') : ''}`)
  await ctx.close()
}

// menu overlay on desktop + mobile
for (const [w, h] of [
  [1440, 900],
  [390, 844],
]) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: w < 700,
    hasTouch: w < 700,
    deviceScaleFactor: 1,
  })
  const page = await ctx.newPage()
  await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(2400)
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button')].find((b) =>
      /menu/i.test(b.textContent || '') && b.querySelector('svg'),
    )
    btn?.click()
  })
  await page.waitForTimeout(1400)
  await page.screenshot({ path: `${out}/${w}x${h}-overlay.png` })
  console.log(`${w}x${h} overlay`)
  await ctx.close()
}

await browser.close()
