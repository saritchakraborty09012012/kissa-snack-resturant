function a(e) {
  let n = new Uint8Array(e.length)
  for (let t = 0; t < e.length; ++t) {
    let r = e.charCodeAt(t)
    n[t] = r > 96 ? r - 71 : r > 64 ? r - 65 : r > 47 ? r + 4 : r > 46 ? 63 : 62
  }
  let r = 0
  for (let i = 0; i < e.length; ++i) n[r++] = n[i] < 60 ? t[n[i]] : (n[i] - 60) * 64 + n[++i]
  return n.buffer.slice(0, r)
}
