function p() {
  let e = new Y(),
    t = new Y(),
    n = new Y(),
    r = new Y(),
    o = new J(),
    s = new J(),
    c = new J()
  for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
    ;(e.set(i[l + 0], i[l + 1], i[l + 2]),
      t.set(i[l + 3], i[l + 4], i[l + 5]),
      n.set(i[l + 6], i[l + 7], i[l + 8]),
      o.set(a[u + 0], a[u + 1]),
      s.set(a[u + 2], a[u + 3]),
      c.set(a[u + 4], a[u + 5]),
      r.copy(e).add(t).add(n).divideScalar(3))
    let d = h(r)
    ;(m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d))
  }
}
