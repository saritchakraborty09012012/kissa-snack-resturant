import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
page.on('pageerror', (e) => console.log('PAGEERROR', String(e)))
await page.goto('http://localhost:5180/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(2400)
await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button')].find((b) => /book a table/i.test(b.textContent || ''))
  btn?.click()
})
await page.waitForTimeout(1200)
await page.fill('input[placeholder="Full name"]', 'Sample Guest')
await page.fill('input[placeholder="+91"]', '9820000003')
await page.click('[role="dialog"] button[type="submit"]')
for (const t of [500, 1200, 2500, 4000]) {
  await page.waitForTimeout(t === 500 ? 500 : t - (t === 1200 ? 500 : t === 2500 ? 1200 : 2500))
  const s = await page.evaluate(() => {
    const overlay = document.querySelector('[role="dialog"]')?.parentElement
    const input = document.querySelector('input[placeholder="Full name"]')
    return {
      overlayClass: overlay ? overlay.className.slice(0, 90) : null,
      overlayVis: overlay ? getComputedStyle(overlay).visibility : null,
      overlayOpacity: overlay ? getComputedStyle(overlay).opacity : null,
      inputVis: input ? getComputedStyle(input).visibility : null,
      toastOn: document.querySelector('.sample-toast')?.classList.contains('is-on'),
    }
  })
  console.log(t, JSON.stringify(s))
}
await browser.close()
