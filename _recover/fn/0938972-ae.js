function ae(t, i) {
  let a = r.get(t)
  t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version
    ? R(a, t, i)
    : (t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null),
      n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i))
}
