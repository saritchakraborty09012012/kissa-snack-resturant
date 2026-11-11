import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

for (const [name, url] of [
  ['default-dev', 'http://localhost:5174/'],
  ['prod-server', 'http://localhost:8787/?skipIntro=1'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text().slice(0, 160))
  })
  const t = Date.now()
  await page.goto(url, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(11000)
  await page.mouse.move(6, 6)
  await page.waitForTimeout(500)
  console.log(
    name,
    'preloader:',
    await page.evaluate(() => !!document.querySelector('[class*="preloader"], .preloader')),
    'canvases:',
    await page.evaluate(() => document.querySelectorAll('canvas').length),
    'errors:',
    errors.length ? errors.slice(0, 3) : 'none',
    Date.now() - t,
    'ms'
  )
  await page.screenshot({ path: `screens/${name}.png`, animations: 'disabled', timeout: 60000 })
  await page.close()
}
await browser.close()
