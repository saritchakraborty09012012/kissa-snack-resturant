function Gf(e, t, n, r) {
  let i = 0
  for (let a = t, o = n - r; a < n; a += r)
    ((i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a))
  return i
}
var Kf = class {
    static triangulate(e, t, n = 2) {
      return pf(e, t, n)
    }
  },
  qf = class e {
    static area(e) {
      let t = e.length,
        n = 0
      for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y
      return n * 0.5
    }
    static isClockWise(t) {
      return e.area(t) < 0
    }
    static triangulateShape(e, t) {
      let n = [],
        r = [],
        i = []
      ;(Jf(e), Yf(n, e))
      let a = e.length
      t.forEach(Jf)
      for (let e = 0; e < t.length; e++) (r.push(a), (a += t[e].length), Yf(n, t[e]))
      let o = Kf.triangulate(n, r)
      for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3))
      return i
    }
  }
