function ie(t, i) {
  let a = r.get(t)
  if (
    (t.isVideoTexture && W(t),
    t.isRenderTargetTexture === !1 &&
      t.isExternalTexture !== !0 &&
      t.version > 0 &&
      a.__version !== t.version)
  ) {
    let e = t.image
    if (e === null) q(`WebGLRenderer: Texture marked for update but no image data found.`)
    else if (e.complete === !1)
      q(`WebGLRenderer: Texture marked for update but image is incomplete`)
    else {
      R(a, t, i)
      return
    }
  } else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null)
  n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i)
}
