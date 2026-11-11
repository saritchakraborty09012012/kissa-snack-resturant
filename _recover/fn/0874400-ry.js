function ry(e, t) {
  let n = e.split(`
`),
    r = [],
    i = Math.max(t - 6, 0),
    a = Math.min(t + 6, n.length)
  for (let e = i; e < a; e++) {
    let i = e + 1
    r.push(`${i === t ? `>` : ` `} ${i}: ${n[e]}`)
  }
  return r.join(`
`)
}
var iy = new zo()
