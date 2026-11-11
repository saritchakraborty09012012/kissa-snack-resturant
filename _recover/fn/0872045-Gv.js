function Gv(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = av(n, i)
  rv(r, a) || (e.uniform1iv(this.addr, a), iv(r, a))
  for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || J_, a[e])
}
