function et(e, t, n, r) {
  if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return
  if (x.state.transmissionRenderTarget[r.id] === void 0) {
    let e = be.has(`EXT_color_buffer_half_float`) || be.has(`EXT_color_buffer_float`)
    x.state.transmissionRenderTarget[r.id] = new is(1, 1, {
      generateMipmaps: !0,
      type: e ? ti : Jr,
      minFilter: Kr,
      samples: Math.max(4, V.samples),
      stencilBuffer: i,
      resolveDepthBuffer: !1,
      resolveStencilBuffer: !1,
      storeMultisampledDepthBuffer: !1,
      storeMultisampledStencilBuffer: !1,
      colorSpace: Wo.workingColorSpace,
    })
  }
  let a = x.state.transmissionRenderTarget[r.id],
    o = r.viewport || ee
  a.setSize(o.z * T.transmissionResolutionScale, o.w * T.transmissionResolutionScale)
  let s = T.getRenderTarget(),
    c = T.getActiveCubeFace(),
    l = T.getActiveMipmapLevel()
  ;(T.setRenderTarget(a),
    T.getClearColor(ne),
    (re = T.getClearAlpha()),
    re < 1 && T.setClearColor(16777215, 0.5),
    T.clear(),
    ve && Me.render(n))
  let u = T.toneMapping
  T.toneMapping = 0
  let d = r.viewport
  if (
    (r.viewport !== void 0 && (r.viewport = void 0),
    x.setupLightsView(r),
    L === !0 && Ae.setGlobalState(T.clippingPlanes, r),
    tt(e, n, r),
    xe.updateMultisampleRenderTarget(a),
    xe.updateRenderTargetMipmap(a),
    be.has(`WEBGL_multisampled_render_to_texture`) === !1)
  ) {
    let e = !1
    for (let i = 0, a = t.length; i < a; i++) {
      let { object: a, geometry: o, material: s, group: c } = t[i]
      if (s.side === 2 && a.layers.test(r.layers)) {
        let t = s.side
        ;((s.side = 1),
          (s.needsUpdate = !0),
          nt(a, n, r, o, s, c),
          (s.side = t),
          (s.needsUpdate = !0),
          (e = !0))
      }
    }
    e === !0 && (xe.updateMultisampleRenderTarget(a), xe.updateRenderTargetMipmap(a))
  }
  ;(T.setRenderTarget(s, c, l),
    T.setClearColor(ne, re),
    d !== void 0 && (r.viewport = d),
    (T.toneMapping = u))
}
