function Hv(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = av(n, i)
  rv(r, a) || (e.uniform1iv(this.addr, a), iv(r, a))
  let o
  o = this.type === e.SAMPLER_2D_SHADOW ? xv(K_) : G_
  for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e])
}
