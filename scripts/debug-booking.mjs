import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
await page.goto('http://localhost:5180/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(2400)
await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button')].find((b) => /book a table/i.test(b.textContent || ''))
  btn?.click()
})
await page.waitForTimeout(1200)
const info = await page.evaluate(() => {
  const submit = document.querySelector('button[type="submit"]')
  submit.scrollIntoView({ block: 'center' })
  const r = submit.getBoundingClientRect()
  const cx = r.left + r.width / 2
  const cy = r.top + r.height / 2
  const top = document.elementFromPoint(cx, cy)
  const dialog = document.querySelector('[role="dialog"]')
  const panel = dialog.getBoundingClientRect()
  return {
    submit: { x: Math.round(cx), y: Math.round(cy), w: Math.round(r.width), h: Math.round(r.height) },
    panel: { top: Math.round(panel.top), bottom: Math.round(panel.bottom), h: Math.round(panel.height) },
    hit: top ? `${top.tagName}.${String(top.className).slice(0, 60)}` : null,
    hitInside: submit.contains(top) || top === submit,
    dialogZ: getComputedStyle(dialog).zIndex,
    dialogTransform: getComputedStyle(dialog).transform,
    bgZ: getComputedStyle(dialog.parentElement.firstElementChild).zIndex,
  }
})
console.log(JSON.stringify(info, null, 2))
await page.screenshot({ path: 'screens/qa/debug-booking.png' })
await browser.close()
