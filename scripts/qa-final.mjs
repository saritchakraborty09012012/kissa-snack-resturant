import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'],
})

const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'reduce',
  deviceScaleFactor: 1,
})
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text().slice(0, 200))
})

await page.goto('http://localhost:5174/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)
await page.mouse.move(6, 6)

await page.evaluate(() => {
  const style = document.createElement('style')
  style.textContent =
    '.fade-up,.reveal-line{opacity:1!important;transform:none!important;transition:none!important}'
  document.head.appendChild(style)
  document.querySelectorAll('.fade-up,.reveal-line').forEach((n) => n.classList.add('in'))
})

const shot = async (name) => {
  await page.screenshot({ path: `screens/final-${name}.png`, animations: 'disabled', timeout: 45000 })
  console.log(name)
}

await shot('01-hero')

// dish stage — 01, 03, 05, 08
for (const i of [0, 2, 4, 7]) {
  await page.evaluate((idx) => {
    const el = document.querySelector('#dishes')
    const start = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - innerHeight
    window.scrollTo({ top: start + ((idx + 0.56) / 8) * travel, behavior: 'instant' })
  }, i)
  await page.waitForTimeout(3000)
  await shot(`dish-0${i + 1}`)
}

// sections
const sections = [
  ['story', 0],
  ['spices', 380],
  ['hours', 0],
  ['invitation', 440],
  ['menu', 0],
  ['menu', 760],
  ['quote', 0],
  ['visit', 0],
]
let n = 2
for (const [id, offset] of sections) {
  await page.evaluate(
    ([sel, off]) => {
      const el = document.querySelector(`#${sel}`)
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + off, behavior: 'instant' })
    },
    [id, offset]
  )
  await page.waitForTimeout(id === 'spices' ? 9000 : 3200)
  await shot(`0${n++}-${id}${offset ? '-b' : ''}`)
}

// mobile — fresh session so the composer sizes correctly from the start
const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
  reducedMotion: 'reduce',
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
})
mobile.on('pageerror', (e) => errors.push(e.message))
mobile.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text().slice(0, 200))
})
await mobile.goto('http://localhost:5174/?skipIntro=1', { waitUntil: 'domcontentloaded' })
await mobile.waitForTimeout(6500)
await mobile.screenshot({ path: 'screens/final-mobile-hero.png', timeout: 60000, animations: 'disabled' })
console.log('mobile-hero')

await mobile.evaluate(() => {
  const el = document.querySelector('#dishes')
  const start = el.getBoundingClientRect().top + window.scrollY
  const travel = el.offsetHeight - innerHeight
  window.scrollTo({ top: start + (0.56 / 8) * travel, behavior: 'instant' })
})
await mobile.waitForTimeout(4500)
await mobile.screenshot({ path: 'screens/final-mobile-dish.png', timeout: 60000, animations: 'disabled' })
console.log('mobile-dish')

console.log('errors:', errors.length ? JSON.stringify(errors.slice(0, 6)) : 'none')
await browser.close()
