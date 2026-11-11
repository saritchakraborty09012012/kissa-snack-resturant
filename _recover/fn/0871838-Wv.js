function Wv(e, t, n) {
  let r = this.cache,
    i = t.length,
    a = av(n, i)
  rv(r, a) || (e.uniform1iv(this.addr, a), iv(r, a))
  let o
  o = this.type === e.SAMPLER_CUBE_SHADOW ? xv(q_) : X_
  for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || o, a[e])
}
