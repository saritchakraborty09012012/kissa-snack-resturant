function Rp(e, t, n) {
  let r = e.length,
    i = new e.constructor(r)
  for (let a = 0, o = 0; o !== r; ++a) {
    let r = n[a] * t
    for (let n = 0; n !== t; ++n) i[o++] = e[r + n]
  }
  return i
}
