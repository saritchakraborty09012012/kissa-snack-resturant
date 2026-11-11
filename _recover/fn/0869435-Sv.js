function Sv(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit()
  r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i))
  let a
  ;((a = this.type === e.SAMPLER_2D_SHADOW ? xv(K_) : G_), n.setTexture2D(t || a, i))
}
