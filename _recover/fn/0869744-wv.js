function wv(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit()
  r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i))
  let a
  ;((a = this.type === e.SAMPLER_CUBE_SHADOW ? xv(q_) : X_), n.setTextureCube(t || a, i))
}
