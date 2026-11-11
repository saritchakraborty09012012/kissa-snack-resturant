function V(t) {
  if (t.samples > 0) {
    if (U(t) === !1) {
      let i = t.textures,
        a = t.width,
        o = t.height,
        s = e.COLOR_BUFFER_BIT,
        l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
        u = r.get(t),
        d = i.length > 1
      if (d)
        for (let t = 0; t < i.length; t++)
          (n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer),
            e.framebufferRenderbuffer(
              e.FRAMEBUFFER,
              e.COLOR_ATTACHMENT0 + t,
              e.RENDERBUFFER,
              null,
            ),
            n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer),
            e.framebufferTexture2D(
              e.DRAW_FRAMEBUFFER,
              e.COLOR_ATTACHMENT0 + t,
              e.TEXTURE_2D,
              null,
              0,
            ))
      ;(n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer),
        t.texture.mipmaps.length > 0
          ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer[0])
          : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer))
      for (let n = 0; n < i.length; n++) {
        if (
          (t.resolveDepthBuffer &&
            (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT),
            t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)),
          d)
        ) {
          e.framebufferRenderbuffer(
            e.READ_FRAMEBUFFER,
            e.COLOR_ATTACHMENT0,
            e.RENDERBUFFER,
            u.__webglColorRenderbuffer[n],
          )
          let t = r.get(i[n]).__webglTexture
          e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0)
        }
        ;(e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST),
          c === !0 &&
            ((be.length = 0),
            be.push(e.COLOR_ATTACHMENT0 + n),
            t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && be.push(l),
            e.invalidateFramebuffer(e.READ_FRAMEBUFFER, be)))
      }
      if (
        (n.bindFramebuffer(e.READ_FRAMEBUFFER, null),
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
        d)
      )
        for (let t = 0; t < i.length; t++) {
          ;(n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer),
            e.framebufferRenderbuffer(
              e.FRAMEBUFFER,
              e.COLOR_ATTACHMENT0 + t,
              e.RENDERBUFFER,
              u.__webglColorRenderbuffer[t],
            ))
          let a = r.get(i[t]).__webglTexture
          ;(n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer),
            e.framebufferTexture2D(
              e.DRAW_FRAMEBUFFER,
              e.COLOR_ATTACHMENT0 + t,
              e.TEXTURE_2D,
              a,
              0,
            ))
        }
      n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer)
    } else if (t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && c) {
      let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT
      e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n])
    }
  }
}
