function Tv(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit()
  ;(r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)), n.setTexture2DArray(t || J_, i))
}
