function hp(e) {
  let t = {}
  for (let n in e) {
    t[n] = {}
    for (let r in e[n]) {
      let i = e[n][r]
      if (_p(i))
        i.isRenderTargetTexture
          ? (q(
              `UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`,
            ),
            (t[n][r] = null))
          : (t[n][r] = i.clone())
      else if (Array.isArray(i)) {
        if (_p(i[0])) {
          let e = []
          for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone()
          t[n][r] = e
        } else t[n][r] = i.slice()
      } else t[n][r] = i
    }
  }
  return t
}
