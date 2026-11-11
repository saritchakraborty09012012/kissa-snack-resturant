function M() {
  ;(r.removeEventListener(`select`, j),
    r.removeEventListener(`selectstart`, j),
    r.removeEventListener(`selectend`, j),
    r.removeEventListener(`squeeze`, j),
    r.removeEventListener(`squeezestart`, j),
    r.removeEventListener(`squeezeend`, j),
    r.removeEventListener(`end`, M),
    r.removeEventListener(`inputsourceschange`, N))
  for (let e = 0; e < b.length; e++) {
    let t = x[e]
    t !== null && ((x[e] = null), b[e].disconnect(t))
  }
  ;((k = null), (A = null), h.reset())
  for (let e in g) delete g[e]
  if (
    (e.setRenderTarget(v),
    (f = null),
    (d = null),
    (u = null),
    (r = null),
    (y = null),
    I.stop(),
    (n.isPresenting = !1),
    e.setPixelRatio(C),
    e.setSize(S.width, S.height, !1),
    w !== null)
  ) {
    let e = w.camera
    ;((e.fov = w.fov), (e.zoom = w.zoom), e.updateProjectionMatrix(), (w = null))
  }
  n.dispatchEvent({ type: `sessionend` })
}
;((this.setFramebufferScaleFactor = function (e) {
  ;((i = e),
    n.isPresenting === !0 &&
      q(`WebXRManager: Cannot change framebuffer scale while presenting.`))
}),
  (this.setReferenceSpaceType = function (e) {
    ;((o = e),
      n.isPresenting === !0 &&
        q(`WebXRManager: Cannot change reference space type while presenting.`))
  }),
  (this.getReferenceSpace = function () {
    return c || a
  }),
  (this.setReferenceSpace = function (e) {
    c = e
  }),
  (this.getBaseLayer = function () {
    return d === null ? f : d
  }),
  (this.getBinding = function () {
    return (u === null && m && (u = new XRWebGLBinding(r, t)), u)
  }),
  (this.getFrame = function () {
    return p
  }),
  (this.getSession = function () {
    return r
  }),
  (this.setSession = async function (l) {
    if (((r = l), r !== null)) {
      if (
        ((v = e.getRenderTarget()),
        r.addEventListener(`select`, j),
        r.addEventListener(`selectstart`, j),
        r.addEventListener(`selectend`, j),
        r.addEventListener(`squeeze`, j),
        r.addEventListener(`squeezestart`, j),
        r.addEventListener(`squeezeend`, j),
        r.addEventListener(`end`, M),
        r.addEventListener(`inputsourceschange`, N),
        _.xrCompatible !== !0 && (await t.makeXRCompatible()),
        (C = e.getPixelRatio()),
        e.getSize(S),
        m && `createProjectionLayer` in XRWebGLBinding.prototype)
      ) {
        let n = null,
          a = null,
          o = null
        _.depth &&
          ((o = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
          (n = _.stencil ? di : ui),
          (a = _.stencil ? ii : $r))
        let s = { colorFormat: t.RGBA8, depthFormat: o, scaleFactor: i }
        ;((u = this.getBinding()),
          (d = u.createProjectionLayer(s)),
          r.updateRenderState({ layers: [d] }),
          e.setPixelRatio(1),
          e.setSize(d.textureWidth, d.textureHeight, !1),
          (y = new is(d.textureWidth, d.textureHeight, {
            format: li,
            type: Jr,
            depthTexture: new bd(
              d.textureWidth,
              d.textureHeight,
              a,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              n,
            ),
            stencilBuffer: _.stencil,
            colorSpace: e.outputColorSpace,
            samples: _.antialias ? 4 : 0,
            resolveDepthBuffer: d.ignoreDepthValues === !1,
            resolveStencilBuffer: d.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: d.ignoreDepthValues === !1,
          })))
      } else {
        let n = {
          antialias: _.antialias,
          alpha: !0,
          depth: _.depth,
          stencil: _.stencil,
          framebufferScaleFactor: i,
        }
        ;((f = new XRWebGLLayer(r, t, n)),
          r.updateRenderState({ baseLayer: f }),
          e.setPixelRatio(1),
          e.setSize(f.framebufferWidth, f.framebufferHeight, !1),
          (y = new is(f.framebufferWidth, f.framebufferHeight, {
            format: li,
            type: Jr,
            colorSpace: e.outputColorSpace,
            stencilBuffer: _.stencil,
            resolveDepthBuffer: f.ignoreDepthValues === !1,
            resolveStencilBuffer: f.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: f.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: f.ignoreDepthValues === !1,
          })))
      }
      ;((y.isXRRenderTarget = !0),
        this.setFoveation(s),
        (c = null),
        (a = await r.requestReferenceSpace(o)),
        I.setContext(r),
        I.start(),
        (n.isPresenting = !0),
        n.dispatchEvent({ type: `sessionstart` }))
    }
  }),
  (this.getEnvironmentBlendMode = function () {
    if (r !== null) return r.environmentBlendMode
  }),
  (this.getDepthTexture = function () {
    return h.getDepthTexture()
  }))
