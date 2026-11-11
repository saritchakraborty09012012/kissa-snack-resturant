function o(t) {
  if (t && t.isTexture && t.isPMREMTexture !== !0) {
    let i = t.mapping,
      a = i === 303 || i === 304,
      o = i === 301 || i === 302
    if (a || o) {
      let i = n.get(t),
        s = i === void 0 ? 0 : i.texture.pmremVersion
      if (t.isRenderTargetTexture && t.pmremVersion !== s)
        return (
          r === null && (r = new O_(e)),
          (i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i)),
          (i.texture.pmremVersion = t.pmremVersion),
          n.set(t, i),
          i.texture
        )
      if (i !== void 0) return i.texture
      {
        let s = t.image
        return (a && s && s.height > 0) || (o && s && c(s))
          ? (r === null && (r = new O_(e)),
            (i = a ? r.fromEquirectangular(t) : r.fromCubemap(t)),
            (i.texture.pmremVersion = t.pmremVersion),
            n.set(t, i),
            t.addEventListener(`dispose`, u),
            i.texture)
          : null
      }
    }
  }
  return t
}
