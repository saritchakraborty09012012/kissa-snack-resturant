import fs from 'node:fs/promises'
import path from 'node:path'
const OUT = path.resolve('_analysis/food3')
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
const queries = {
  ginger: 'pexels ginger root dark background photo',
  clove: 'pexels cloves dark background photo',
  fennel: 'pexels fennel seeds dark photo',
  pepper: 'pexels black peppercorns dark photo',
  cinnamon: 'pexels cinnamon sticks dark photo',
  cardamom: 'pexels cardamom pods dark photo',
}
function decode(s){return s.replace(/&quot;/g,'"').replace(/&amp;/g,'&')}
const wait=(ms)=>new Promise(r=>setTimeout(r,ms))
const GOOD=/(images\.pexels\.com|images\.unsplash\.com|cdn\.pixabay\.com)/
function norm(u){
  if(u.includes('images.pexels.com')) return u.split('?')[0]+'?auto=compress&cs=tinysrgb&w=1400'
  if(u.includes('images.unsplash.com')) return u.split('?')[0]+'?auto=format&fit=crop&w=1400&q=85'
  return u
}
for (const [key,q] of Object.entries(queries)) {
  const r=await fetch('https://www.bing.com/images/search?q='+encodeURIComponent(q)+'&form=HDRSC2&first=1&count=40',{headers:{'User-Agent':UA}})
  const t=await r.text()
  const found=[]
  for(const m of t.matchAll(/m="([^"]+)"/g)){
    try{const j=JSON.parse(decode(m[1])); if(GOOD.test(j.murl)) found.push(j)}catch{}
  }
  let n=0
  for(const it of found.slice(0,8)) {
    const name=`sp-${key}-${String(n).padStart(2,'0')}.jpg`
    try{
      const res=await fetch(norm(it.murl),{headers:{'User-Agent':UA},signal:AbortSignal.timeout(20000)})
      if(!res.ok) continue
      const b=Buffer.from(await res.arrayBuffer()); if(b.length<12000) continue
      await fs.writeFile(path.join(OUT,name),b); n++
    }catch{}
  }
  console.log(key,n,'/',found.length)
  await wait(1200)
}
