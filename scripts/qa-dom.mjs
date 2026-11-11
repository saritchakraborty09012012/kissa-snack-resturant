import { chromium } from 'playwright'

const base = process.env.QA_BASE || 'http://localhost:5180'
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

const results = []
const check = (name, pass, extra = '') => {
  results.push(`${pass ? 'PASS' : 'FAIL'} ${name}${extra ? ' :: ' + extra : ''}`)
}

for (const [w, h] of [
  [390, 844],
  [1024, 768],
  [1440, 900],
]) {
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

  await page.goto(`${base}/?skipIntro=1`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(2600)
  const tag = `${w}x${h}`

  const marks = await page.evaluate(() => ({
    badge: document.querySelectorAll('.sample-badge').length,
    watermark: document.querySelectorAll('.sample-watermark').length,
    tag: document.querySelectorAll('.sample-tag').length,
  }))
  check(`${tag} sample marks`, marks.badge >= 5 && marks.watermark >= 3, JSON.stringify(marks))

  const map = await page.evaluate(() => {
    const f = document.querySelector('iframe[src*="openstreetmap"]')
    if (!f) return null
    const r = f.getBoundingClientRect()
    return { src: f.getAttribute('src').slice(0, 48), w: Math.round(r.width), h: Math.round(r.height) }
  })
  check(`${tag} real OSM map`, Boolean(map && map.w >= 240 && map.h >= 240), JSON.stringify(map))

  const nav = await page.evaluate(() => {
    const desktop = document.querySelector('header nav')
    const burger = document.querySelector('header button[aria-label*="menu" i]')
    const vis = (el) => (el ? getComputedStyle(el).display !== 'none' : false)
    return { nav: vis(desktop), burger: vis(burger) }
  })
  check(
    `${tag} header breakpoint`,
    w >= 1280 ? nav.nav && !nav.burger : !nav.nav && nav.burger,
    JSON.stringify(nav),
  )

  // booking modal + sample toast
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button')].find((b) =>
      /book a table/i.test(b.textContent || ''),
    )
    btn?.click()
  })
  await page.waitForTimeout(1200)
  const modal = await page.evaluate(() => {
    const name = document.querySelector('input[placeholder="Full name"]')
    const phone = document.querySelector('input[placeholder="+91"]')
    const r = name?.getBoundingClientRect()
    return {
      fields: Boolean(name && phone),
      visible: Boolean(r && r.width > 60 && r.height > 10),
      modalBadges: document.querySelectorAll('.sample-badge').length,
      modalWatermarks: document.querySelectorAll('.sample-watermark').length,
    }
  })
  check(`${tag} booking modal fields`, modal.fields && modal.visible, JSON.stringify(modal))

  await page.fill('input[placeholder="Full name"]', 'Sample Guest')
  await page.fill('input[placeholder="+91"]', '9820000003')
  await page.click('[role="dialog"] button[type="submit"]')
  await page.waitForTimeout(6000)
  const toast = await page.evaluate(() => {
    const t = document.querySelector('.sample-toast')
    if (!t) return null
    const cs = getComputedStyle(t)
    const r = t.getBoundingClientRect()
    return {
      on: t.classList.contains('is-on'),
      opacity: cs.opacity,
      visible: r.width > 100 && r.height > 20,
      text: t.textContent.replace(/\s+/g, ' ').trim().slice(0, 60),
    }
  })
  check(
    `${tag} sample toast after request`,
    Boolean(toast && toast.on && Number(toast.opacity) > 0.5 && /Sample only/i.test(toast.text)),
    JSON.stringify(toast),
  )

  const modalClosed = await page.evaluate(() => {
    const name = document.querySelector('input[placeholder="Full name"]')
    if (!name) return true
    const r = name.getBoundingClientRect()
    return r.width === 0 || r.height === 0 || getComputedStyle(name).visibility === 'hidden'
  })
  check(`${tag} modal closes after request`, modalClosed)

  check(`${tag} console clean`, errors.length === 0, errors.slice(0, 2).join(' | '))
  await ctx.close()
}

console.log(results.join('\n'))
await browser.close()
