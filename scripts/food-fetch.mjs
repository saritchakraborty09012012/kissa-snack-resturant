// Bing image search scraper for reference-quality food photography.
// Usage: node scripts/food-fetch.mjs
import fs from 'node:fs/promises'
import path from 'node:path'

const OUT = path.resolve('_analysis/food')
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'

const queries = {
  chai: 'masala chai glass dark black background food photography',
  shake: 'chocolate milkshake whipped cream dark background photography',
  vadapav: 'vada pav dark background food photography',
  sandwich: 'grilled cheese sandwich dark background food photography',
  maggi: 'masala noodles bowl dark background food photography',
  pasta: 'creamy white sauce pasta dark background food photography',
  paratha: 'stuffed paratha dark background food photography',
  chaat: 'papdi chaat dark background food photography',
  smoke: 'smoke black background png',
  spices: 'indian spices dark background photography',
  hero: 'chai tea glass dark background photography',
}

const GOOD = /(images\.pexels\.com|images\.unsplash\.com|cdn\.pixabay\.com|upload\.wikimedia\.org)/

function decode(s) {
  return s.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'")
}

async function search(q) {
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(q)}&form=HDRSC2&first=1&count=40`
  const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' } })
  const html = await res.text()
  const items = []
  for (const m of html.matchAll(/m="([^"]+)"/g)) {
    try {
      const json = JSON.parse(decode(m[1]).replace(/&quot;/g, '"'))
      if (!json.murl) continue
      items.push({ murl: json.murl, turl: json.turl, title: (json.t || '').slice(0, 100) })
    } catch {
      /* ignore */
    }
  }
  return items
}

await fs.mkdir(OUT, { recursive: true })
const index = {}

for (const [key, q] of Object.entries(queries)) {
  try {
    const all = await search(q)
    const ranked = [...all.filter((i) => GOOD.test(i.murl)), ...all.filter((i) => !GOOD.test(i.murl))]
    const picked = ranked.slice(0, 14)
    index[key] = []
    let n = 0
    for (const it of picked) {
      const id = `${n}`.padStart(2, '0')
      const file = path.join(OUT, `${key}-${id}.jpg`)
      try {
        const r = await fetch(it.murl, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) })
        if (!r.ok) continue
        const buf = Buffer.from(await r.arrayBuffer())
        if (buf.length < 12000) continue
        await fs.writeFile(file, buf)
        index[key].push({ file: `_analysis/food/${key}-${id}.jpg`, src: it.murl, title: it.title })
        n++
      } catch {
        /* skip */
      }
    }
    console.log(key, '->', n, '/', all.length)
  } catch (e) {
    console.log(key, 'FAILED', e.message)
  }
}

await fs.writeFile(path.join(OUT, 'index.json'), JSON.stringify(index, null, 2))
console.log('done')
