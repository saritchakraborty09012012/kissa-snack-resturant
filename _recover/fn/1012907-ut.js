function ut(e) {
  return (
    e.isMeshLambertMaterial ||
    e.isMeshToonMaterial ||
    e.isMeshPhongMaterial ||
    e.isMeshStandardMaterial ||
    e.isShadowMaterial ||
    (e.isShaderMaterial && e.lights === !0)
  )
}
;((this.getActiveCubeFace = function () {
  return j
}),
  (this.getActiveMipmapLevel = function () {
    return M
  }),
  (this.getRenderTarget = function () {
    return N
  }),
  (this.setRenderTargetTextures = function (e, t, n) {
    let r = W.get(e)
    ;((r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1),
      r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1),
      (W.get(e.texture).__webglTexture = t),
      (W.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n),
      (r.__hasExternalTextures = !0))
  }),
  (this.setRenderTargetFramebuffer = function (e, t) {
    let n = W.get(e)
    ;((n.__webglFramebuffer = t), (n.__useDefaultFramebuffer = t === void 0))
  }),
  (this.setRenderTarget = function (e, t = 0, n = 0) {
    ;((N = e), (j = t), (M = n))
    let r = null,
      i = !1,
      a = !1
    if (e) {
      let o = W.get(e)
      if (o.__useDefaultFramebuffer !== void 0) {
        ;(H.bindFramebuffer(B.FRAMEBUFFER, o.__webglFramebuffer),
          ee.copy(e.viewport),
          te.copy(e.scissor),
          (I = e.scissorTest),
          H.viewport(ee),
          H.scissor(te),
          H.setScissorTest(I),
          (P = -1))
        return
      }
      if (o.__webglFramebuffer === void 0) xe.setupRenderTarget(e)
      else if (o.__hasExternalTextures)
        xe.rebindTextures(
          e,
          W.get(e.texture).__webglTexture,
          W.get(e.depthTexture).__webglTexture,
        )
      else if (e.depthBuffer) {
        let t = e.depthTexture
        if (o.__boundDepthTexture !== t) {
          if (
            t !== null &&
            W.has(t) &&
            (e.width !== t.image.width || e.height !== t.image.height)
          )
            throw Error(
              `THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`,
            )
          xe.setupDepthRenderbuffer(e)
        }
      }
      let s = e.texture
      ;(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0)
      let c = W.get(e).__webglFramebuffer
      ;(e.isWebGLCubeRenderTarget
        ? ((r = Array.isArray(c[t]) ? c[t][n] : c[t]), (i = !0))
        : (r =
            e.samples > 0 && xe.useMultisampledRTT(e) === !1
              ? W.get(e).__webglMultisampledFramebuffer
              : Array.isArray(c)
                ? c[n]
                : c),
        ee.copy(e.viewport),
        te.copy(e.scissor),
        (I = e.scissorTest))
    } else
      (ee.copy(le).multiplyScalar(oe).floor(), te.copy(ue).multiplyScalar(oe).floor(), (I = de))
    if (
      (n !== 0 && (r = O),
      H.bindFramebuffer(B.FRAMEBUFFER, r) && H.drawBuffers(e, r),
      H.viewport(ee),
      H.scissor(te),
      H.setScissorTest(I),
      i)
    ) {
      let r = W.get(e.texture)
      B.framebufferTexture2D(
        B.FRAMEBUFFER,
        B.COLOR_ATTACHMENT0,
        B.TEXTURE_CUBE_MAP_POSITIVE_X + t,
        r.__webglTexture,
        n,
      )
    } else if (a) {
      let r = t
      for (let t = 0; t < e.textures.length; t++) {
        let i = W.get(e.textures[t])
        B.framebufferTextureLayer(
          B.FRAMEBUFFER,
          B.COLOR_ATTACHMENT0 + t,
          i.__webglTexture,
          n,
          r,
        )
      }
    } else if (e !== null && n !== 0) {
      let t = W.get(e.texture)
      B.framebufferTexture2D(
        B.FRAMEBUFFER,
        B.COLOR_ATTACHMENT0,
        B.TEXTURE_2D,
        t.__webglTexture,
        n,
      )
    }
    P = -1
  }))
