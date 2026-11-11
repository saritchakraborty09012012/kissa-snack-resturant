function he(t, i, o, c, l, u) {
  let d = a.convert(o.format, o.colorSpace),
    f = a.convert(o.type),
    p = S(o.internalFormat, d, f, o.normalized, o.colorSpace),
    m = r.get(i),
    h = r.get(o)
  if (((h.__renderTarget = i), !m.__hasExternalTextures)) {
    let t = Math.max(1, i.width >> u),
      r = Math.max(1, i.height >> u)
    l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY
      ? n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null)
      : n.texImage2D(l, u, p, t, r, 0, d, f, null)
  }
  ;(n.bindFramebuffer(e.FRAMEBUFFER, t),
    U(i)
      ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, c, l, h.__webglTexture, 0, H(i))
      : (l === e.TEXTURE_2D ||
          (l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
        e.framebufferTexture2D(e.FRAMEBUFFER, c, l, h.__webglTexture, u),
    n.bindFramebuffer(e.FRAMEBUFFER, null))
}
