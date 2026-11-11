function Xe() {
  Ze.start()
}
let Ze = new s_()
;(Ze.setAnimationLoop(Je),
  typeof self < `u` && Ze.setContext(self),
  (this.setAnimationLoop = function (e) {
    ;((qe = e), ze.setAnimationLoop(e), e === null ? Ze.stop() : Ze.start())
  }),
  ze.addEventListener(`sessionstart`, Ye),
  ze.addEventListener(`sessionend`, Xe),
  (this.render = function (e, t) {
    if (t !== void 0 && t.isCamera !== !0) {
      no(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`)
      return
    }
    if (E === !0) return
    D !== null && D.renderStart(e, t)
    let n = ze.enabled === !0 && ze.isPresenting === !0,
      r = w !== null && (N === null || n) && w.begin(T, N)
    if (
      (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(),
      t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(),
      ze.enabled === !0 &&
        ze.isPresenting === !0 &&
        (w === null || w.isCompositing() === !1) &&
        (ze.cameraAutoUpdate === !0 && ze.updateCamera(t), (t = ze.getCamera())),
      e.isScene === !0 && e.onBeforeRender(T, e, t, N),
      (x = ke.get(e, C.length)),
      x.init(t),
      (x.state.textureUnits = xe.getTextureUnits()),
      C.push(x),
      me.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      t.isArrayCamera
        ? pe.setFromArrayCamera(t)
        : fe.setFromProjectionMatrix(me, La, t.reversedDepth),
      (R = this.localClippingEnabled),
      (L = Ae.init(this.clippingPlanes, R)),
      (b = Oe.get(e, S.length)),
      b.init(),
      S.push(b),
      this.info.render.frame++,
      ze.enabled === !0 && ze.isPresenting === !0)
    ) {
      let e = T.xr.getDepthSensingMesh()
      e !== null && Qe(e, t, -1 / 0, T.sortObjects)
    }
    ;(Qe(e, t, 0, T.sortObjects),
      b.finish(),
      D !== null && D.updateLights(x.state.lightsArray),
      T.sortObjects === !0 && b.sort(se, ce),
      (ve = ze.enabled === !1 || ze.isPresenting === !1 || ze.hasDepthSensing() === !1),
      ve && Me.addToRenderList(b, e),
      this.info.autoReset === !0 && this.info.reset(),
      L === !0 && Ae.beginShadows())
    let i = x.state.shadowsArray
    if ((je.render(i, e, t), L === !0 && Ae.endShadows(), (r && w.hasRenderPass()) === !1)) {
      let n = b.opaque,
        r = b.transmissive
      if ((x.setupLights(), t.isArrayCamera)) {
        let i = t.cameras
        if (r.length > 0)
          for (let t = 0, a = i.length; t < a; t++) {
            let a = i[t]
            et(n, r, e, a)
          }
        ve && Me.render(e)
        for (let t = 0, n = i.length; t < n; t++) {
          let n = i[t]
          $e(b, e, n, n.viewport)
        }
      } else (r.length > 0 && et(n, r, e, t), ve && Me.render(e), $e(b, e, t))
    }
    ;(N !== null &&
      M === 0 &&
      (xe.updateMultisampleRenderTarget(N), xe.updateRenderTargetMipmap(N)),
      r && w.end(T),
      e.isScene === !0 && e.onAfterRender(T, e, t),
      Ie.resetDefaultState(),
      (P = -1),
      (F = null),
      C.pop(),
      C.length > 0
        ? ((x = C[C.length - 1]),
          xe.setTextureUnits(x.state.textureUnits),
          L === !0 && Ae.setGlobalState(T.clippingPlanes, x.state.camera))
        : (x = null),
      S.pop(),
      (b = S.length > 0 ? S[S.length - 1] : null),
      D !== null && D.renderEnd())
  }))
