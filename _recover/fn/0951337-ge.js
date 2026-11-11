function ge(t, n, r) {
  if ((e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer)) {
    let i = n.depthTexture,
      a = i && i.isDepthTexture ? i.type : null,
      o = C(n.stencilBuffer, a),
      c = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT
    ;(U(n)
      ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, H(n), o, n.width, n.height)
      : r
        ? e.renderbufferStorageMultisample(e.RENDERBUFFER, H(n), o, n.width, n.height)
        : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height),
      e.framebufferRenderbuffer(e.FRAMEBUFFER, c, e.RENDERBUFFER, t))
  } else {
    let t = n.textures
    for (let i = 0; i < t.length; i++) {
      let o = t[i],
        c = a.convert(o.format, o.colorSpace),
        l = a.convert(o.type),
        u = S(o.internalFormat, c, l, o.normalized, o.colorSpace)
      U(n)
        ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, H(n), u, n.width, n.height)
        : r
          ? e.renderbufferStorageMultisample(e.RENDERBUFFER, H(n), u, n.width, n.height)
          : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height)
    }
  }
  e.bindRenderbuffer(e.RENDERBUFFER, null)
}
