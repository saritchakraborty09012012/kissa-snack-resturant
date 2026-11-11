function FD({
  index: e,
  colorMat: t,
  count: n = 26,
  y: r = 0.1,
  scale: i = 1,
  seed: a = 2,
  radius: o = 0.02,
  spread: s = 1.5,
}) {
  let c = yD(),
    l = t || c.noodle,
    u = (0, v.useMemo)(() => PD(n, o, 1.05, a, s), [n, a, o, s]),
    d = (0, v.useRef)()
  return (
    Jx(({ clock: t }) => {
      if (!d.current) return
      let r = KE(0.2, 0.75, pD(e))
      ;(d.current.children.forEach((r, a) => {
        let o = KE((a / n) * 0.55, (a / n) * 0.55 + 0.2, pD(e))
        ;((r.visible = o > 0.002),
          r.scale.setScalar(qE(0.001, i, o)),
          (r.rotation.y = Math.sin(t.elapsedTime * 0.1 + a) * 0.1))
      }),
        (d.current.visible = r > 0.01))
    }),
    (0, K.jsx)(`group`, {
      ref: d,
      position: [0, r, 0],
      children: u.map((e, t) => (0, K.jsx)(`mesh`, { geometry: e, material: l }, t)),
    })
  )
}
var ID = (() => {
    let e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
      t = new Float32Array([0, 0, 2, 0, 0, 2]),
      n = new Qc()
    return (n.setAttribute(`position`, new jc(e, 3)), n.setAttribute(`uv`, new jc(t, 2)), n)
  })(),
  LD = class e {
    static get fullscreenGeometry() {
      return ID
    }
    constructor(e = `Pass`, t = new qs(), n = new Um()) {
      ;((this.name = e),
        (this.renderer = null),
        (this.scene = t),
        (this.camera = n),
        (this.screen = null),
        (this.rtt = !0),
        (this.needsSwap = !0),
        (this.needsDepthBlit = !1),
        (this.needsDepthTexture = !1),
        (this.enabled = !0))
    }
    get renderToScreen() {
      return !this.rtt
    }
    set renderToScreen(e) {
      if (this.rtt === e) {
        let t = this.fullscreenMaterial
        ;(t !== null && (t.needsUpdate = !0), (this.rtt = !e))
      }
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    setRenderer(e) {
      this.renderer = e
    }
    isEnabled() {
      return this.enabled
    }
    setEnabled(e) {
      this.enabled = e
    }
    get fullscreenMaterial() {
      return this.screen === null ? null : this.screen.material
    }
    set fullscreenMaterial(t) {
      let n = this.screen
      n === null
        ? ((n = new Gl(e.fullscreenGeometry, t)),
          (n.frustumCulled = !1),
          this.scene === null && (this.scene = new qs()),
          this.scene.add(n),
          (this.screen = n))
        : (n.material = t)
    }
    getFullscreenMaterial() {
      return this.fullscreenMaterial
    }
    setFullscreenMaterial(e) {
      this.fullscreenMaterial = e
    }
    getDepthTexture() {
      return null
    }
    setDepthTexture(e, t = fa) {}
    render(e, t, n, r, i) {
      throw Error(`Render method not implemented!`)
    }
    setSize(e, t) {}
    initialize(e, t, n) {}
    dispose() {
      for (let t of Object.keys(this)) {
        let n = this[t]
        ;(n instanceof is || n instanceof cl || n instanceof ts || n instanceof e) &&
          this[t].dispose()
      }
      this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose()
    }
  },
  RD = class extends LD {
    constructor() {
      ;(super(`ClearMaskPass`, null, null), (this.needsSwap = !1))
    }
    render(e, t, n, r, i) {
      let a = e.state.buffers.stencil
      ;(a.setLocked(!1), a.setTest(!1))
    }
  },
  zD = `#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,
  BD = `varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,
  VD = class extends Cp {
    constructor() {
      ;(super({
        name: `CopyMaterial`,
        defines: { COLOR_SPACE_CONVERSION: `1`, DEPTH_PACKING: `0`, COLOR_WRITE: `1` },
        uniforms: {
          inputBuffer: new Qh(null),
          depthBuffer: new Qh(null),
          channelWeights: new Qh(null),
          opacity: new Qh(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: zD,
        vertexShader: BD,
      }),
        (this.depthFunc = 1))
    }
    get inputBuffer() {
      return this.uniforms.inputBuffer.value
    }
    set inputBuffer(e) {
      let t = e !== null
      ;(this.colorWrite !== t &&
        (t ? (this.defines.COLOR_WRITE = !0) : delete this.defines.COLOR_WRITE,
        (this.colorWrite = t),
        (this.needsUpdate = !0)),
        (this.uniforms.inputBuffer.value = e))
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value
    }
    set depthBuffer(e) {
      let t = e !== null
      ;(this.depthWrite !== t &&
        (t ? (this.defines.DEPTH_WRITE = !0) : delete this.defines.DEPTH_WRITE,
        (this.depthTest = t),
        (this.depthWrite = t),
        (this.needsUpdate = !0)),
        (this.uniforms.depthBuffer.value = e))
    }
    set depthPacking(e) {
      ;((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0))
    }
    get colorSpaceConversion() {
      return this.defines.COLOR_SPACE_CONVERSION !== void 0
    }
    set colorSpaceConversion(e) {
      this.colorSpaceConversion !== e &&
        (e
          ? (this.defines.COLOR_SPACE_CONVERSION = !0)
          : delete this.defines.COLOR_SPACE_CONVERSION,
        (this.needsUpdate = !0))
    }
    get channelWeights() {
      return this.uniforms.channelWeights.value
    }
    set channelWeights(e) {
      ;(e === null
        ? delete this.defines.USE_WEIGHTS
        : ((this.defines.USE_WEIGHTS = `1`), (this.uniforms.channelWeights.value = e)),
        (this.needsUpdate = !0))
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    getOpacity(e) {
      return this.uniforms.opacity.value
    }
    setOpacity(e) {
      this.uniforms.opacity.value = e
    }
  },
  HD = class extends LD {
    constructor(e, t = !0) {
      ;(super(`CopyPass`),
        (this.fullscreenMaterial = new VD()),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        e === void 0 &&
          ((this.renderTarget = new is(1, 1, {
            minFilter: Ur,
            magFilter: Ur,
            stencilBuffer: !1,
            depthBuffer: !1,
          })),
          (this.renderTarget.texture.name = `CopyPass.Target`)),
        (this.autoResize = t))
    }
    get resize() {
      return this.autoResize
    }
    set resize(e) {
      this.autoResize = e
    }
    get texture() {
      return this.renderTarget.texture
    }
    getTexture() {
      return this.renderTarget.texture
    }
    setAutoResizeEnabled(e) {
      this.autoResize = e
    }
    render(e, t, n, r, i) {
      ;((this.fullscreenMaterial.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera))
    }
    setSize(e, t) {
      this.autoResize && this.renderTarget.setSize(e, t)
    }
    initialize(e, t, n) {
      n !== void 0 &&
        ((this.renderTarget.texture.type = n),
        n === 1009
          ? e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = ga)
          : (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
    }
  },
  UD = new X(),
  WD = class extends LD {
    constructor(e = !0, t = !0, n = !1) {
      ;(super(`ClearPass`, null, null),
        (this.needsSwap = !1),
        (this.color = e),
        (this.depth = t),
        (this.stencil = n),
        (this.overrideClearColor = null),
        (this.overrideClearAlpha = -1))
    }
    setClearFlags(e, t, n) {
      ;((this.color = e), (this.depth = t), (this.stencil = n))
    }
    getOverrideClearColor() {
      return this.overrideClearColor
    }
    setOverrideClearColor(e) {
      this.overrideClearColor = e
    }
    getOverrideClearAlpha() {
      return this.overrideClearAlpha
    }
    setOverrideClearAlpha(e) {
      this.overrideClearAlpha = e
    }
    render(e, t, n, r, i) {
      let a = this.overrideClearColor,
        o = this.overrideClearAlpha,
        s = e.getClearAlpha(),
        c = a !== null,
        l = o >= 0
      ;(c ? (e.getClearColor(UD), e.setClearColor(a, l ? o : s)) : l && e.setClearAlpha(o),
        e.setRenderTarget(this.renderToScreen ? null : t),
        e.clear(this.color, this.depth, this.stencil),
        c ? e.setClearColor(UD, s) : l && e.setClearAlpha(s))
    }
  },
  GD = class extends LD {
    constructor(e, t) {
      ;(super(`MaskPass`, e, t),
        (this.needsSwap = !1),
        (this.clearPass = new WD(!1, !1, !0)),
        (this.inverse = !1))
    }
    set mainScene(e) {
      this.scene = e
    }
    set mainCamera(e) {
      this.camera = e
    }
    get inverted() {
      return this.inverse
    }
    set inverted(e) {
      this.inverse = e
    }
    get clear() {
      return this.clearPass.enabled
    }
    set clear(e) {
      this.clearPass.enabled = e
    }
    getClearPass() {
      return this.clearPass
    }
    isInverted() {
      return this.inverted
    }
    setInverted(e) {
      this.inverted = e
    }
    render(e, t, n, r, i) {
      let a = e.getContext(),
        o = e.state.buffers,
        s = this.scene,
        c = this.camera,
        l = this.clearPass,
        u = +!this.inverted,
        d = 1 - u
      ;(o.color.setMask(!1),
        o.depth.setMask(!1),
        o.color.setLocked(!0),
        o.depth.setLocked(!0),
        o.stencil.setTest(!0),
        o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE),
        o.stencil.setFunc(a.ALWAYS, u, 4294967295),
        o.stencil.setClear(d),
        o.stencil.setLocked(!0),
        this.clearPass.enabled &&
          (this.renderToScreen ? l.render(e, null) : (l.render(e, t), l.render(e, n))),
        this.renderToScreen
          ? (e.setRenderTarget(null), e.render(s, c))
          : (e.setRenderTarget(t), e.render(s, c), e.setRenderTarget(n), e.render(s, c)),
        o.color.setLocked(!1),
        o.depth.setLocked(!1),
        o.stencil.setLocked(!1),
        o.stencil.setFunc(a.EQUAL, 1, 4294967295),
        o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP),
        o.stencil.setLocked(!0))
    }
  }
