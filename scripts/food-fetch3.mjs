// Bing image search -> free-license CDNs (Pexels / Unsplash / Pixabay), keyword-prefixed queries.
import fs from 'node:fs/promises'
import path from 'node:path'

const OUT = path.resolve('_analysis/food3')
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'

const P = (s) => `pexels ${s} photo`
const U = (s) => `unsplash ${s} photo`

const queries = {
  chai: [P('masala chai glass dark smoke'), P('indian tea glass black background'), U('chai tea glass dark'), P('cutting chai street')],
  shake: [P('chocolate milkshake whipped cream'), P('chocolate shake glass dark'), U('chocolate milkshake'), P('oreo milkshake glass')],
  vadapav: [P('vada pav'), P('indian burger pav chutney'), U('vada pav'), P('pav bhaji dark')],
  sandwich: [P('grilled sandwich dark'), P('toasted sandwich plate dark'), U('grilled cheese sandwich'), P('club sandwich dark background')],
  maggi: [P('noodles bowl dark'), U('ramen noodles dark'), P('instant noodles bowl'), P('hakka noodles dark')],
  pasta: [P('creamy pasta dark'), U('pasta dark background'), P('penne pasta bowl'), P('alfredo pasta')],
  paratha: [P('paratha'), U('flatbread paratha'), P('indian flatbread butter'), P('naan bread dark')],
  chaat: [P('chaat'), P('indian street food dark'), U('indian street food'), P('dahi puri')],
  smoke: [P('smoke black background'), U('smoke black background'), P('white smoke dark'), P('incense smoke black')],
  spices: [P('indian spices dark background'), U('spices dark'), P('cinnamon star anise dark'), P('cardamom dark background')],
  hero: [P('tea glass dark'), U('tea glass black background'), P('chai glass smoke')],
}

const GOOD = /(images\.pexels\.com|images\.unsplash\.com|cdn\.pixabay\.com)/

function decode(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
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
  for (let attempt = 0; attempt < 3; attempt++) {
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
    await wait(5000 + attempt * 4000)
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
      const good = items.filter((it) => GOOD.test(it.murl))
      console.log(' ', q, '->', good.length, '/', items.length)
      found.push(...good)
      await wait(1200)
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
  for (const it of uniq.slice(0, 20)) {
    const name = `${key}-${String(n).padStart(2, '0')}.jpg`
    const file = path.join(OUT, name)
    try {
      const r = await fetch(normalize(it.murl), {
        headers: { 'User-Agent': UA },
        signal: AbortSignal.timeout(25000),
      })
      if (!r.ok) continue
      const buf = Buffer.from(await r.arrayBuffer())
      if (buf.length < 15000) continue
      await fs.writeFile(file, buf)
      index[key].push({ file: `_analysis/food3/${name}`, src: it.murl, title: it.t })
      n++
    } catch {
      /* skip */
    }
  }
  console.log(key, 'downloaded', n, '/', uniq.length)
}

await fs.writeFile(path.join(OUT, 'index.json'), JSON.stringify(index, null, 2))
console.log('done')
