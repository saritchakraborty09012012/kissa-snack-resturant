function Sc(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    xc.fromArray(e, a)
    let o = i.x * Math.abs(xc.x) + i.y * Math.abs(xc.y) + i.z * Math.abs(xc.z),
      s = t.dot(xc),
      c = n.dot(xc),
      l = r.dot(xc)
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1
  }
  return !0
}
var Cc = wc()
