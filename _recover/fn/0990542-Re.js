function Re() {
  ;((be = new L_(B)),
    be.init(),
    (Fe = new ab(B, be)),
    (V = new __(B, be, e, Fe)),
    (H = new rb(B, be)),
    V.reversedDepthBuffer && d && H.buffers.depth.setReversed(!0),
    (O = B.createFramebuffer()),
    (k = B.createFramebuffer()),
    (A = B.createFramebuffer()),
    (U = new B_(B)),
    (W = new Ly()),
    (xe = new ib(B, be, H, W, V, Fe, U)),
    (Se = new I_(T)),
    (Ce = new c_(B)),
    (Ie = new h_(B, Ce)),
    (we = new R_(B, Ce, U, Ie)),
    (Te = new H_(B, we, Ce, Ie, U)),
    (G = new V_(B, V, xe)),
    (Ae = new v_(W)),
    (Ee = new Iy(T, Se, be, V, Ie, Ae)),
    (De = new fb(T, W)),
    (Oe = new Vy()),
    (ke = new Jy(be)),
    (Me = new m_(T, Se, H, Te, p, s)),
    (je = new nb(T, Te, V)),
    (Le = new pb(B, U, V, H)),
    (Ne = new g_(B, be, U)),
    (Pe = new z_(B, be, U)),
    (U.programs = Ee.programs),
    (T.capabilities = V),
    (T.extensions = be),
    (T.properties = W),
    (T.renderLists = Oe),
    (T.shadowMap = je),
    (T.state = H),
    (T.info = U))
}
m !== 1009 && (w = new W_(m, t.width, t.height, o, r, i))
let ze = new lb(T, B)
;((this.xr = ze),
  (this.getContext = function () {
    return B
  }),
  (this.getContextAttributes = function () {
    return B.getContextAttributes()
  }),
  (this.forceContextLoss = function () {
    let e = be.get(`WEBGL_lose_context`)
    e && e.loseContext()
  }),
  (this.forceContextRestore = function () {
    let e = be.get(`WEBGL_lose_context`)
    e && e.restoreContext()
  }),
  (this.getPixelRatio = function () {
    return oe
  }),
  (this.setPixelRatio = function (e) {
    e !== void 0 && ((oe = e), this.setSize(ie, ae, !1))
  }),
  (this.getSize = function (e) {
    return e.set(ie, ae)
  }),
  (this.setSize = function (e, n, r = !0) {
    ze.isPresenting
      ? q(`WebGLRenderer: Can't change size while VR device is presenting.`)
      : ((ie = e),
        (ae = n),
        (t.width = Math.floor(e * oe)),
        (t.height = Math.floor(n * oe)),
        r === !0 && ((t.style.width = e + `px`), (t.style.height = n + `px`)),
        w !== null && w.setSize(t.width, t.height),
        this.setViewport(0, 0, e, n))
  }),
  (this.getDrawingBufferSize = function (e) {
    return e.set(ie * oe, ae * oe).floor()
  }),
  (this.setDrawingBufferSize = function (e, n, r) {
    ;((ie = e),
      (ae = n),
      (oe = r),
      (t.width = Math.floor(e * r)),
      (t.height = Math.floor(n * r)),
      this.setViewport(0, 0, e, n))
  }),
  (this.setEffects = function (e) {
    if (m === 1009)
      no(
        `WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`,
      )
    else {
      if (e) {
        for (let t = 0; t < e.length; t++)
          if (e[t].isOutputPass === !0) {
            q(
              `WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`,
            )
            break
          }
      }
      w.setEffects(e || [])
    }
  }),
  (this.getCurrentViewport = function (e) {
    return e.copy(ee)
  }),
  (this.getViewport = function (e) {
    return e.copy(le)
  }),
  (this.setViewport = function (e, t, n, r) {
    ;(e.isVector4 ? le.set(e.x, e.y, e.z, e.w) : le.set(e, t, n, r),
      H.viewport(ee.copy(le).multiplyScalar(z()).round()))
  }),
  (this.getScissor = function (e) {
    return e.copy(ue)
  }),
  (this.setScissor = function (e, t, n, r) {
    ;(e.isVector4 ? ue.set(e.x, e.y, e.z, e.w) : ue.set(e, t, n, r),
      H.scissor(te.copy(ue).multiplyScalar(z()).round()))
  }),
  (this.getScissorTest = function () {
    return de
  }),
  (this.setScissorTest = function (e) {
    H.setScissorTest((de = e))
  }),
  (this.setOpaqueSort = function (e) {
    se = e
  }),
  (this.setTransparentSort = function (e) {
    ce = e
  }),
  (this.getClearColor = function (e) {
    return e.copy(Me.getClearColor())
  }),
  (this.setClearColor = function () {
    Me.setClearColor(...arguments)
  }),
  (this.getClearAlpha = function () {
    return Me.getClearAlpha()
  }),
  (this.setClearAlpha = function () {
    Me.setClearAlpha(...arguments)
  }),
  (this.clear = function (e = !0, t = !0, n = !0) {
    let r = 0
    if (e) {
      let e = !1
      if (N !== null) {
        let t = N.texture.format
        e = h.has(t)
      }
      if (e) {
        let e = N.texture.type,
          t = g.has(e),
          n = Me.getClearColor(),
          r = Me.getClearAlpha(),
          i = n.r,
          a = n.g,
          o = n.b
        t
          ? ((_[0] = i), (_[1] = a), (_[2] = o), (_[3] = r), B.clearBufferuiv(B.COLOR, 0, _))
          : ((v[0] = i), (v[1] = a), (v[2] = o), (v[3] = r), B.clearBufferiv(B.COLOR, 0, v))
      } else r |= B.COLOR_BUFFER_BIT
    }
    ;(t && ((r |= B.DEPTH_BUFFER_BIT), this.state.buffers.depth.setMask(!0)),
      n && ((r |= B.STENCIL_BUFFER_BIT), this.state.buffers.stencil.setMask(4294967295)),
      r !== 0 && B.clear(r))
  }),
  (this.clearColor = function () {
    this.clear(!0, !1, !1)
  }),
  (this.clearDepth = function () {
    this.clear(!1, !0, !1)
  }),
  (this.clearStencil = function () {
    this.clear(!1, !1, !0)
  }),
  (this.setNodesHandler = function (e) {
    ;(e.setRenderer(this), (D = e))
  }),
  (this.dispose = function () {
    ;(t.removeEventListener(`webglcontextlost`, Be, !1),
      t.removeEventListener(`webglcontextrestored`, Ve, !1),
      t.removeEventListener(`webglcontextcreationerror`, He, !1),
      Me.dispose(),
      Oe.dispose(),
      ke.dispose(),
      xe.dispose(),
      W.dispose(),
      Se.dispose(),
      Te.dispose(),
      we.dispose(),
      Ie.dispose(),
      Le.dispose(),
      Ee.dispose(),
      ze.dispose(),
      ze.removeEventListener(`sessionstart`, Ye),
      ze.removeEventListener(`sessionend`, Xe),
      Ze.stop())
  }))
