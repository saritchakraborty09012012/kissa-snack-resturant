import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5180/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(3500)
await page.evaluate(() => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  window.__lenis?.scrollTo(start + (6.62 / 8) * travel, { immediate: true, force: true })
})
await page.waitForTimeout(4000)
await page.screenshot({ path: 'screens/qa3/debug-a.png' })

await page.addStyleTag({ content: '.plate-img{mix-blend-mode:normal !important}' })
await page.waitForTimeout(600)
await page.screenshot({ path: 'screens/qa3/debug-b.png' })

await page.addStyleTag({ content: '.plate-media{filter:none !important}' })
await page.waitForTimeout(600)
await page.screenshot({ path: 'screens/qa3/debug-c.png' })
console.log('ok')
await browser.close()
