function Cv(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit()
  ;(r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)), n.setTexture3D(t || Y_, i))
}
