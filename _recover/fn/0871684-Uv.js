function Uv(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = av(n, i)
  rv(r, a) || (e.uniform1iv(this.addr, a), iv(r, a))
  for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Y_, a[e])
}
