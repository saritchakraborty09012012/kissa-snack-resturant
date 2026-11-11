function T(e) {
  let t = e[0]
  for (let n = 1; n <= e.length; n++) {
    let r = n % e.length,
      i = e[r],
      a = i.x - t.x,
      o = i.y - t.y,
      s = a * a + o * o,
      c = Math.max(Math.abs(i.x), Math.abs(i.y), Math.abs(t.x), Math.abs(t.y))
    s <= 10000000000000001e-36 * c * c ? (e.splice(r, 1), n--) : (t = i)
  }
}
;(T(C), w.forEach(T))
let E = w.length,
  D = C
for (let e = 0; e < E; e++) {
  let t = w[e]
  C = C.concat(t)
}
