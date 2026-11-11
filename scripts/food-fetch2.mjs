// Bing image search scraper, restricted to free-license CDNs (Pexels / Unsplash / Pixabay).
import fs from 'node:fs/promises'
import path from 'node:path'

const OUT = path.resolve('_analysis/food2')
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'

const queries = {
  chai: [
    'site:pexels.com masala chai glass dark',
    'site:pexels.com chai tea glass black background',
    'site:unsplash.com chai tea glass dark',
  ],
  shake: [
    'site:pexels.com chocolate milkshake whipped cream',
    'site:pexels.com chocolate shake glass dark',
    'site:unsplash.com chocolate milkshake dark',
  ],
  vadapav: ['site:pexels.com vada pav', 'site:unsplash.com vada pav', 'site:pexels.com indian burger pav'],
  sandwich: [
    'site:pexels.com grilled sandwich dark background',
    'site:unsplash.com grilled cheese sandwich dark',
    'site:pexels.com paneer sandwich',
  ],
  maggi: ['site:pexels.com noodles bowl dark', 'site:unsplash.com ramen noodles dark', 'site:pexels.com maggi noodles'],
  pasta: ['site:pexels.com creamy pasta dark', 'site:unsplash.com pasta dark background', 'site:pexels.com penne pasta'],
  paratha: ['site:pexels.com paratha', 'site:unsplash.com flatbread paratha', 'site:pexels.com indian flatbread'],
  chaat: ['site:pexels.com chaat', 'site:pexels.com indian street food dark', 'site:unsplash.com indian street food'],
  smoke: ['site:pexels.com smoke black background', 'site:unsplash.com smoke black background'],
  spices: ['site:pexels.com indian spices dark background', 'site:unsplash.com spices dark', 'site:pexels.com cinnamon star anise dark'],
  hero: ['site:pexels.com tea glass dark', 'site:unsplash.com tea glass black background'],
}

const GOOD = /(images\.pexels\.com|images\.unsplash\.com|cdn\.pixabay\.com)/

function decode(s) {
  return s.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

function normalize(url) {
  if (url.includes('images.pexels.com')) {
    const base = url.split('?')[0]
    return `${base}?auto=compress&cs=tinysrgb&w=1600`
  }
  if (url.includes('images.unsplash.com')) {
    const base = url.split('?')[0]
    return `${base}?auto=format&fit=crop&w=1600&q=85`
  }
  return url
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

async function search(q) {
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(q)}&form=HDRSC2&first=1&count=40`
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' } })
    const html = await res.text()
    const items = []
    for (const m of html.matchAll(/m="([^"]+)"/g)) {
      try {
        const json = JSON.parse(decode(m[1]))
        if (!json.murl) continue
        items.push({ murl: json.murl, t: (json.t || '').slice(0, 90) })
      } catch {
        /* ignore */
      }
    }
    if (items.length) return items
    console.log('  retry', q, res.status, html.length)
    await wait(6000 + attempt * 4000)
  }
  return []
}

await fs.mkdir(OUT, { recursive: true })
const index = {}

for (const [key, qs] of Object.entries(queries)) {
  const found = []
  for (const q of qs) {
    try {
      const items = await search(q)
      for (const it of items) if (GOOD.test(it.murl)) found.push(it)
      await wait(1500)
    } catch (e) {
      console.log(key, 'search failed', q, e.message)
    }
  }
  const seen = new Set()
  const uniq = []
  for (const it of found) {
    const id = (it.murl.match(/photos\/(\d+)/) || it.murl.match(/(photo-[a-z0-9-]+)/) || [it.murl])[0]
    if (seen.has(id)) continue
    seen.add(id)
    uniq.push(it)
  }
  index[key] = []
  let n = 0
  for (const it of uniq.slice(0, 18)) {
    const file = path.join(OUT, `${key}-${String(n).padStart(2, '0')}.jpg`)
    try {
      const r = await fetch(normalize(it.murl), {
        headers: { 'User-Agent': UA },
        signal: AbortSignal.timeout(25000),
      })
      if (!r.ok) continue
      const buf = Buffer.from(await r.arrayBuffer())
      if (buf.length < 15000) continue
      await fs.writeFile(file, buf)
      index[key].push({ file: `_analysis/food2/${key}-${String(n).padStart(2, '0')}.jpg`, src: it.murl, title: it.t })
      n++
    } catch {
      /* skip */
    }
  }
  console.log(key, '->', n, '/', uniq.length)
}

await fs.writeFile(path.join(OUT, 'index.json'), JSON.stringify(index, null, 2))
console.log('done')
