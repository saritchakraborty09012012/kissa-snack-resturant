import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' })
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message))
page.on('console', (m) => {
  if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 200))
})
await page.goto('http://localhost:5174/?lite=1&skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)
await page.evaluate(() => {
  const style = document.createElement('style')
  style.textContent =
    '#story .fade-up,#story .reveal-line,#spices .fade-up,#spices .reveal-line{opacity:1!important;transform:none!important}'
  document.head.appendChild(style)
  document.querySelectorAll('.fade-up,.reveal-line').forEach((n) => n.classList.add('in'))
})

const ids = ['story', 'spices', 'hours', 'invitation', 'menu', 'quote', 'visit']
for (const id of ids) {
  await page.evaluate((sel) => {
    const el = document.querySelector(`#${sel}`)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 4, behavior: 'instant' })
  }, id)
  await page.waitForTimeout(2200)
  const info = await page.evaluate((sel) => {
    const el = document.querySelector(`#${sel}`)
    const rect = el?.getBoundingClientRect()
    return {
      scrollY: Math.round(window.scrollY),
      top: rect ? Math.round(rect.top) : null,
      height: rect ? Math.round(rect.height) : null,
      reveals: el ? el.querySelectorAll('.fade-up.in').length : 0,
      lines: el ? el.querySelectorAll('.reveal-line.in').length : 0,
    }
  }, id)
  console.log(id, JSON.stringify(info))
  await page.screenshot({ path: `screens/sec-${id}.png`, animations: 'disabled', timeout: 40000 })
}
await browser.close()
