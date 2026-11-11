function ye(e) {
  let t = e.textures
  for (let i = 0, a = t.length; i < a; i++) {
    let a = t[i]
    if (y(a) && a.mipmapsAutoUpdate === !0) {
      let t = x(e),
        i = r.get(a).__webglTexture
      ;(n.bindTexture(t, i), b(t), n.unbindTexture())
    }
  }
}
let be = []
