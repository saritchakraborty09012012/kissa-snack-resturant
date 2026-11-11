function B(t) {
  let i = t.texture,
    s = r.get(t),
    c = r.get(i)
  ;(t.addEventListener(`dispose`, O), T(t))
  let l = t.textures,
    u = t.isWebGLCubeRenderTarget === !0,
    d = l.length > 1
  if (
    (d ||
      (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()),
      (c.__version = i.version),
      o.memory.textures++),
    u)
  ) {
    s.__webglFramebuffer = []
    for (let t = 0; t < 6; t++)
      if (i.mipmaps.length > 0) {
        s.__webglFramebuffer[t] = []
        for (let n = 0; n < i.mipmaps.length; n++)
          s.__webglFramebuffer[t][n] = e.createFramebuffer()
      } else s.__webglFramebuffer[t] = e.createFramebuffer()
  } else {
    if (i.mipmaps.length > 0) {
      s.__webglFramebuffer = []
      for (let t = 0; t < i.mipmaps.length; t++) s.__webglFramebuffer[t] = e.createFramebuffer()
    } else s.__webglFramebuffer = e.createFramebuffer()
    if (d)
      for (let t = 0, n = l.length; t < n; t++) {
        let n = r.get(l[t])
        n.__webglTexture === void 0 &&
          ((n.__webglTexture = e.createTexture()), o.memory.textures++)
      }
    if (t.samples > 0 && U(t) === !1) {
      ;((s.__webglMultisampledFramebuffer = e.createFramebuffer()),
        (s.__webglColorRenderbuffer = []),
        n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer))
      for (let n = 0; n < l.length; n++) {
        let r = l[n]
        ;((s.__webglColorRenderbuffer[n] = e.createRenderbuffer()),
          e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]))
        let i = a.convert(r.format, r.colorSpace),
          o = a.convert(r.type),
          c = S(r.internalFormat, i, o, r.normalized, r.colorSpace, t.isXRRenderTarget === !0),
          u = H(t)
        ;(e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height),
          e.framebufferRenderbuffer(
            e.FRAMEBUFFER,
            e.COLOR_ATTACHMENT0 + n,
            e.RENDERBUFFER,
            s.__webglColorRenderbuffer[n],
          ))
      }
      ;(e.bindRenderbuffer(e.RENDERBUFFER, null),
        t.depthBuffer &&
          ((s.__webglDepthRenderbuffer = e.createRenderbuffer()),
          ge(s.__webglDepthRenderbuffer, t, !0)),
        n.bindFramebuffer(e.FRAMEBUFFER, null))
    }
  }
  if (u) {
    ;(n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), de(e.TEXTURE_CUBE_MAP, i))
    for (let n = 0; n < 6; n++)
      if (i.mipmaps.length > 0)
        for (let r = 0; r < i.mipmaps.length; r++)
          he(
            s.__webglFramebuffer[n][r],
            t,
            i,
            e.COLOR_ATTACHMENT0,
            e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
            r,
          )
      else
        he(
          s.__webglFramebuffer[n],
          t,
          i,
          e.COLOR_ATTACHMENT0,
          e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
          0,
        )
    ;(y(i)
      ? b(e.TEXTURE_CUBE_MAP)
      : i.mipmaps.length > 0 &&
        e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAX_LEVEL, i.mipmaps.length - 1),
      n.unbindTexture())
  } else if (d) {
    for (let i = 0, a = l.length; i < a; i++) {
      let a = l[i],
        o = r.get(a),
        c = e.TEXTURE_2D
      ;((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
        (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
        n.bindTexture(c, o.__webglTexture),
        de(c, a),
        he(s.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, c, 0),
        y(a) && b(c))
    }
    n.unbindTexture()
  } else {
    let r = e.TEXTURE_2D
    if (
      ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
        (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
      n.bindTexture(r, c.__webglTexture),
      de(r, i),
      i.mipmaps.length > 0)
    )
      for (let n = 0; n < i.mipmaps.length; n++)
        he(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n)
    else he(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0)
    ;(y(i)
      ? b(r)
      : i.mipmaps.length > 0 && e.texParameteri(r, e.TEXTURE_MAX_LEVEL, i.mipmaps.length - 1),
      n.unbindTexture())
  }
  t.depthBuffer && ve(t)
}
