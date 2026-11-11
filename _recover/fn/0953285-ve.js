function ve(t) {
  let i = r.get(t),
    a = t.isWebGLCubeRenderTarget === !0
  if (i.__boundDepthTexture !== t.depthTexture) {
    let e = t.depthTexture
    if ((i.__depthDisposeCallback && i.__depthDisposeCallback(), e)) {
      let t = () => {
        ;(delete i.__boundDepthTexture,
          delete i.__depthDisposeCallback,
          e.removeEventListener(`dispose`, t))
      }
      ;(e.addEventListener(`dispose`, t), (i.__depthDisposeCallback = t))
    }
    i.__boundDepthTexture = e
  }
  if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
    if (a) for (let e = 0; e < 6; e++) _e(i.__webglFramebuffer[e], t, e)
    else
      t.texture.mipmaps.length > 0
        ? _e(i.__webglFramebuffer[0], t, 0)
        : _e(i.__webglFramebuffer, t, 0)
  } else if (a) {
    i.__webglDepthbuffer = []
    for (let r = 0; r < 6; r++)
      if (
        (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]),
        i.__webglDepthbuffer[r] === void 0)
      )
        ((i.__webglDepthbuffer[r] = e.createRenderbuffer()), ge(i.__webglDepthbuffer[r], t, !1))
      else {
        let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
          a = i.__webglDepthbuffer[r]
        ;(e.bindRenderbuffer(e.RENDERBUFFER, a),
          e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a))
      }
  } else if (
    (t.texture.mipmaps.length > 0
      ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0])
      : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer),
    i.__webglDepthbuffer === void 0)
  )
    ((i.__webglDepthbuffer = e.createRenderbuffer()), ge(i.__webglDepthbuffer, t, !1))
  else {
    let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
      r = i.__webglDepthbuffer
    ;(e.bindRenderbuffer(e.RENDERBUFFER, r),
      e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r))
  }
  n.bindFramebuffer(e.FRAMEBUFFER, null)
}
