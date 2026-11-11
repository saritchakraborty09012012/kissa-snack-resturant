import { chromium } from 'playwright'

const idx = Number(process.env.DISH || 6)
const bracket = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})
const page = await bracket.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5180/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(4000)
await page.evaluate((i) => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  const y = start + ((i + 0.62) / 8) * travel
  if (window.__lenis) window.__lenis.scrollTo(y, { immediate: true, force: true })
  else window.scrollTo({ top: y, behavior: 'instant' })
}, idx)
await page.waitForTimeout(4200)
const state = await page.evaluate((i) => {
  const el = document.querySelectorAll('.plate-layer')[i]
  return {
    opacity: el?.style.opacity,
    visibility: el?.style.visibility,
    transform: el?.querySelector('[data-media]')?.style.transform,
  }
}, idx)
console.log('state', JSON.stringify(state))
await page.screenshot({ path: `screens/qa2/dish-0${idx + 1}.png` })
console.log('shot', idx + 1)
await bracket.close()
