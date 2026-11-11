function oe(t, i) {
  let a = r.get(t)
  t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version
    ? R(a, t, i)
    : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i)
}
