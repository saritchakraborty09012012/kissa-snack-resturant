import fs from 'node:fs/promises'
import path from 'node:path'

const OUT = path.resolve('_analysis/food3')
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
const queries = [
  'pexels papdi chaat photo',
  'pexels dahi puri photo',
  'pexels pani puri photo',
  'pexels sev puri photo',
  'unsplash indian chaat photo',
  'pexels samosa plate dark photo',
]
function decode(s){return s.replace(/&quot;/g,'"').replace(/&amp;/g,'&')}
const wait=(ms)=>new Promise(r=>setTimeout(r,ms))
const GOOD=/(images\.pexels\.com|images\.unsplash\.com|cdn\.pixabay\.com)/
function norm(u){
  if(u.includes('images.pexels.com')) return u.split('?')[0]+'?auto=compress&cs=tinysrgb&w=1600'
  if(u.includes('images.unsplash.com')) return u.split('?')[0]+'?auto=format&fit=crop&w=1600&q=85'
  return u
}
let found=[]
for(const q of queries){
  const r=await fetch('https://www.bing.com/images/search?q='+encodeURIComponent(q)+'&form=HDRSC2&first=1&count=40',{headers:{'User-Agent':UA}})
  const t=await r.text()
  let n=0
  for(const m of t.matchAll(/m="([^"]+)"/g)){
    try{const j=JSON.parse(decode(m[1])); if(GOOD.test(j.murl)){found.push(j);n++}}catch{}
  }
  console.log(q,'->',n)
  await wait(1200)
}
const seen=new Set(); const uniq=[]
for(const it of found){const id=(it.murl.match(/photos\/(\d+)/)||[it.murl])[0]; if(seen.has(id))continue; seen.add(id); uniq.push(it)}
let n=0
for(const it of uniq.slice(0,20)){
  const name=`chaatx-${String(n).padStart(2,'0')}.jpg`
  try{
    const r=await fetch(norm(it.murl),{headers:{'User-Agent':UA},signal:AbortSignal.timeout(25000)})
    if(!r.ok)continue
    const b=Buffer.from(await r.arrayBuffer()); if(b.length<12000)continue
    await fs.writeFile(path.join(OUT,name),b); n++
  }catch{}
}
console.log('downloaded',n)
