function KD(e, t) {
  let n = e.getContext()
  if (t <= 0 || typeof n.renderbufferStorageMultisample != `function`) return 0
  let r = n.getParameter(n.MAX_SAMPLES),
    i = Math.min(t, r)
  if (i <= 0) return 0
  let a = n.getParameter(n.RENDERBUFFER_BINDING),
    o = n.createRenderbuffer()
  try {
    return (
      n.bindRenderbuffer(n.RENDERBUFFER, o),
      n.renderbufferStorageMultisample(n.RENDERBUFFER, i, n.RGBA8, 1, 1),
      i
    )
  } catch {
    return 0
  } finally {
    ;(n.bindRenderbuffer(n.RENDERBUFFER, a), n.deleteRenderbuffer(o))
  }
}
var qD = 1 / 1e3,
  JD = 1e3,
  YD = class {
    constructor() {
      ;((this.startTime = performance.now()),
        (this.previousTime = 0),
        (this.currentTime = 0),
        (this._delta = 0),
        (this._elapsed = 0),
        (this._fixedDelta = 1e3 / 60),
        (this.timescale = 1),
        (this.useFixedDelta = !1),
        (this._autoReset = !1))
    }
    get autoReset() {
      return this._autoReset
    }
    set autoReset(e) {
      typeof document < `u` &&
        document.hidden !== void 0 &&
        (e
          ? document.addEventListener(`visibilitychange`, this)
          : document.removeEventListener(`visibilitychange`, this),
        (this._autoReset = e))
    }
    get delta() {
      return this._delta * qD
    }
    get fixedDelta() {
      return this._fixedDelta * qD
    }
    set fixedDelta(e) {
      this._fixedDelta = e * JD
    }
    get elapsed() {
      return this._elapsed * qD
    }
    update(e) {
      ;(this.useFixedDelta
        ? (this._delta = this.fixedDelta)
        : ((this.previousTime = this.currentTime),
          (this.currentTime = (e === void 0 ? performance.now() : e) - this.startTime),
          (this._delta = this.currentTime - this.previousTime)),
        (this._delta *= this.timescale),
        (this._elapsed += this._delta))
    }
    reset() {
      ;((this._delta = 0),
        (this._elapsed = 0),
        (this.currentTime = performance.now() - this.startTime))
    }
    getDelta() {
      return this.delta
    }
    getElapsed() {
      return this.elapsed
    }
    handleEvent(e) {
      document.hidden || (this.currentTime = performance.now() - this.startTime)
    }
    dispose() {
      this.autoReset = !1
    }
  },
  XD = class {
    constructor(
      e = null,
      {
        depthBuffer: t = !0,
        stencilBuffer: n = !1,
        multisampling: r = 0,
        frameBufferType: i = Jr,
      } = {},
    ) {
      ;((this.renderer = null),
        (this.inputBuffer = this.createBuffer(t, n, i, r)),
        (this.outputBuffer = this.inputBuffer.clone()),
        (this.copyPass = new HD()),
        (this.depthRenderTarget = null),
        (this.passes = []),
        (this.timer = new YD()),
        (this.autoRenderToScreen = !0),
        this.setRenderer(e))
    }
    get stableDepthTexture() {
      return this.depthRenderTarget === null ? null : this.depthRenderTarget.depthTexture
    }
    get multisampling() {
      return this.inputBuffer.samples
    }
    set multisampling(e) {
      let t = this.renderer === null ? e : KD(this.renderer, e)
      this.multisampling !== t &&
        ((this.inputBuffer.samples = t),
        (this.outputBuffer.samples = t),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose())
    }
    getTimer() {
      return this.timer
    }
    getRenderer() {
      return this.renderer
    }
    setRenderer(e) {
      if (((this.renderer = e), e !== null)) {
        let t = e.getSize(new J()),
          n = e.getContext().getContextAttributes().alpha,
          r = this.inputBuffer.texture.type
        r === 1009 &&
          e.outputColorSpace === `srgb` &&
          ((this.inputBuffer.texture.colorSpace = ga),
          (this.outputBuffer.texture.colorSpace = ga),
          this.inputBuffer.dispose(),
          this.outputBuffer.dispose())
        let i = this.multisampling
        ;((this.multisampling = i), (e.autoClear = !1), this.setSize(t.width, t.height))
        for (let t of this.passes) t.initialize(e, n, r)
      }
    }
    replaceRenderer(e, t = !0) {
      let n = this.renderer,
        r = n.domElement.parentNode
      return (
        this.setRenderer(e),
        t && r !== null && (r.removeChild(n.domElement), r.appendChild(e.domElement)),
        n
      )
    }
    createDepthTexture() {
      let e = new bd()
      ;((e.name = `EffectComposer.InputDepth`),
        this.inputBuffer.stencilBuffer ? ((e.format = di), (e.type = ii)) : (e.type = ei))
      let t = new bd()
      ;((t.format = e.format), (t.type = e.type), (t.name = `EffectComposer.OutputDepth`))
      let n = new bd()
      ;((n.format = e.format),
        (n.type = e.type),
        (n.name = `EffectComposer.StableDepth`),
        (this.inputBuffer.depthTexture = e),
        (this.outputBuffer.depthTexture = t),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose())
      let { width: r, height: i } = this.inputBuffer
      this.depthRenderTarget = new is(r, i, {
        depthBuffer: !0,
        stencilBuffer: this.inputBuffer.stencilBuffer,
        depthTexture: n,
      })
    }
    blitDepthBuffer(e) {
      let t = this.renderer,
        n = this.depthRenderTarget,
        r = t.properties,
        i = t.getContext()
      t.setRenderTarget(n)
      let a = r.get(e).__webglFramebuffer,
        o = r.get(n).__webglFramebuffer,
        s = e.stencilBuffer ? i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT : i.DEPTH_BUFFER_BIT
      ;(i.bindFramebuffer(i.READ_FRAMEBUFFER, a),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, o),
        i.blitFramebuffer(0, 0, e.width, e.height, 0, 0, n.width, n.height, s, i.NEAREST),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        t.setRenderTarget(null))
    }
    deleteDepthTexture() {
      let e = this.stableDepthTexture
      for (let t of this.passes) t.getDepthTexture() === e && t.setDepthTexture(null)
      ;(this.depthRenderTarget !== null &&
        (this.depthRenderTarget.dispose(), (this.depthRenderTarget = null)),
        this.inputBuffer.depthTexture !== null &&
          (this.inputBuffer.depthTexture.dispose(), (this.inputBuffer.depthTexture = null)),
        this.outputBuffer.depthTexture !== null &&
          (this.outputBuffer.depthTexture.dispose(), (this.outputBuffer.depthTexture = null)))
    }
    createBuffer(e, t, n, r) {
      let i = this.renderer,
        a = i === null ? new J() : i.getDrawingBufferSize(new J()),
        o = new is(a.width, a.height, {
          minFilter: Ur,
          magFilter: Ur,
          samples: r,
          stencilBuffer: t,
          depthBuffer: e,
          type: n,
        })
      return (
        n === 1009 &&
          i !== null &&
          i.outputColorSpace === `srgb` &&
          (o.texture.colorSpace = ga),
        (o.texture.name = `EffectComposer.Buffer`),
        (o.texture.generateMipmaps = !1),
        o
      )
    }
    setMainScene(e) {
      for (let t of this.passes) t.mainScene = e
    }
    setMainCamera(e) {
      for (let t of this.passes) t.mainCamera = e
    }
    addPass(e, t) {
      let n = this.passes,
        r = this.renderer,
        i = r.getDrawingBufferSize(new J()),
        a = r.getContext().getContextAttributes().alpha,
        o = this.inputBuffer.texture.type
      if (
        ((e.renderer = r),
        e.setSize(i.width, i.height),
        e.initialize(r, a, o),
        this.autoRenderToScreen &&
          (n.length > 0 && (n[n.length - 1].renderToScreen = !1),
          e.renderToScreen && (this.autoRenderToScreen = !1)),
        t === void 0 ? n.push(e) : n.splice(t, 0, e),
        this.autoRenderToScreen && (n[n.length - 1].renderToScreen = !0),
        e.needsDepthTexture || this.depthRenderTarget !== null)
      ) {
        if (this.depthRenderTarget === null) {
          this.createDepthTexture()
          for (let e of n) e.setDepthTexture(this.stableDepthTexture)
        } else e.setDepthTexture(this.stableDepthTexture)
      }
    }
    removePass(e) {
      let t = this.passes,
        n = t.indexOf(e)
      if (n !== -1 && t.splice(n, 1).length > 0) {
        let r = this.stableDepthTexture
        ;(r !== null &&
          (t.reduce((e, t) => e || t.needsDepthTexture, !1) ||
            (e.getDepthTexture() === r && e.setDepthTexture(null), this.deleteDepthTexture())),
          this.autoRenderToScreen &&
            n === t.length &&
            ((e.renderToScreen = !1), t.length > 0 && (t[t.length - 1].renderToScreen = !0)))
      }
    }
    removeAllPasses() {
      let e = this.passes
      ;(this.deleteDepthTexture(),
        e.length > 0 &&
          (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1),
          (this.passes = [])))
    }
    render(e) {
      let t = this.renderer,
        n = this.copyPass,
        r = this.inputBuffer,
        i = this.outputBuffer,
        a,
        o = !1
      e === void 0 && (this.timer.update(), (e = this.timer.getDelta()))
      for (let s of this.passes)
        if (s.enabled) {
          if (
            (s.render(t, r, i, e, o),
            s.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(r),
            s.needsSwap)
          ) {
            if (o) {
              n.renderToScreen = s.renderToScreen
              let a = t.getContext(),
                c = t.state.buffers.stencil
              ;(c.setFunc(a.NOTEQUAL, 1, 4294967295),
                n.render(t, r, i, e, o),
                c.setFunc(a.EQUAL, 1, 4294967295))
            }
            ;((a = r), (r = i), (i = a))
          }
          s instanceof GD ? (o = !0) : s instanceof RD && (o = !1)
        }
    }
    setSize(e, t, n) {
      let r = this.renderer,
        i = r.getSize(new J())
      ;((e === void 0 || t === void 0) && ((e = i.width), (t = i.height)),
        (i.width !== e || i.height !== t) && r.setSize(e, t, n))
      let a = r.getDrawingBufferSize(new J())
      ;(this.inputBuffer.setSize(a.width, a.height),
        this.outputBuffer.setSize(a.width, a.height),
        this.depthRenderTarget !== null && this.depthRenderTarget.setSize(a.width, a.height))
      for (let e of this.passes) e.setSize(a.width, a.height)
    }
    reset() {
      ;(this.dispose(), (this.autoRenderToScreen = !0))
    }
    dispose() {
      for (let e of this.passes) e.dispose()
      ;(this.deleteDepthTexture(),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose(),
        this.copyPass.dispose(),
        this.timer.dispose(),
        (this.passes = []),
        LD.fullscreenGeometry.dispose())
    }
  },
  ZD = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 },
  QD = {
    FRAGMENT_HEAD: `FRAGMENT_HEAD`,
    FRAGMENT_MAIN_UV: `FRAGMENT_MAIN_UV`,
    FRAGMENT_MAIN_IMAGE: `FRAGMENT_MAIN_IMAGE`,
    VERTEX_HEAD: `VERTEX_HEAD`,
    VERTEX_MAIN_SUPPORT: `VERTEX_MAIN_SUPPORT`,
  },
  $D = class {
    constructor() {
      ;((this.shaderParts = new Map([
        [QD.FRAGMENT_HEAD, null],
        [QD.FRAGMENT_MAIN_UV, null],
        [QD.FRAGMENT_MAIN_IMAGE, null],
        [QD.VERTEX_HEAD, null],
        [QD.VERTEX_MAIN_SUPPORT, null],
      ])),
        (this.defines = new Map()),
        (this.uniforms = new Map()),
        (this.blendModes = new Map()),
        (this.extensions = new Set()),
        (this.attributes = ZD.NONE),
        (this.varyings = new Set()),
        (this.uvTransformation = !1),
        (this.readDepth = !1),
        (this.colorSpace = _a))
    }
  },
  eO = !1,
  tO = class {
    constructor(e = null) {
      ;((this.originalMaterials = new Map()),
        (this.material = null),
        (this.materials = null),
        (this.materialsBackSide = null),
        (this.materialsDoubleSide = null),
        (this.materialsFlatShaded = null),
        (this.materialsFlatShadedBackSide = null),
        (this.materialsFlatShadedDoubleSide = null),
        this.setMaterial(e),
        (this.meshCount = 0),
        (this.replaceMaterial = (e) => {
          if (e.isMesh) {
            let t
            if (e.material.flatShading)
              switch (e.material.side) {
                case 2:
                  t = this.materialsFlatShadedDoubleSide
                  break
                case 1:
                  t = this.materialsFlatShadedBackSide
                  break
                default:
                  t = this.materialsFlatShaded
              }
            else
              switch (e.material.side) {
                case 2:
                  t = this.materialsDoubleSide
                  break
                case 1:
                  t = this.materialsBackSide
                  break
                default:
                  t = this.materials
              }
            ;(this.originalMaterials.set(e, e.material),
              (e.material = e.isSkinnedMesh ? t[2] : e.isInstancedMesh ? t[1] : t[0]),
              ++this.meshCount)
          }
        }))
    }
    cloneMaterial(e) {
      if (!(e instanceof Cp)) return e.clone()
      let t = e.uniforms,
        n = new Map()
      for (let e in t) {
        let r = t[e].value
        r.isRenderTargetTexture && ((t[e].value = null), n.set(e, r))
      }
      let r = e.clone()
      for (let e of n) ((t[e[0]].value = e[1]), (r.uniforms[e[0]].value = e[1]))
      return r
    }
    setMaterial(e) {
      if ((this.disposeMaterials(), (this.material = e), e !== null)) {
        let t = (this.materials = [
          this.cloneMaterial(e),
          this.cloneMaterial(e),
          this.cloneMaterial(e),
        ])
        for (let n of t) ((n.uniforms = Object.assign({}, e.uniforms)), (n.side = 0))
        ;((t[2].skinning = !0),
          (this.materialsBackSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return ((n.uniforms = Object.assign({}, e.uniforms)), (n.side = 1), n)
          })),
          (this.materialsDoubleSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return ((n.uniforms = Object.assign({}, e.uniforms)), (n.side = 2), n)
          })),
          (this.materialsFlatShaded = t.map((t) => {
            let n = this.cloneMaterial(t)
            return ((n.uniforms = Object.assign({}, e.uniforms)), (n.flatShading = !0), n)
          })),
          (this.materialsFlatShadedBackSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.flatShading = !0),
              (n.side = 1),
              n
            )
          })),
          (this.materialsFlatShadedDoubleSide = t.map((t) => {
            let n = this.cloneMaterial(t)
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.flatShading = !0),
              (n.side = 2),
              n
            )
          })))
      }
    }
    render(e, t, n) {
      let r = e.shadowMap.enabled
      if (((e.shadowMap.enabled = !1), eO)) {
        let r = this.originalMaterials
        ;((this.meshCount = 0), t.traverse(this.replaceMaterial), e.render(t, n))
        for (let e of r) e[0].material = e[1]
        this.meshCount !== r.size && r.clear()
      } else {
        let r = t.overrideMaterial
        ;((t.overrideMaterial = this.material), e.render(t, n), (t.overrideMaterial = r))
      }
      e.shadowMap.enabled = r
    }
    disposeMaterials() {
      if (this.material !== null) {
        let e = this.materials
          .concat(this.materialsBackSide)
          .concat(this.materialsDoubleSide)
          .concat(this.materialsFlatShaded)
          .concat(this.materialsFlatShadedBackSide)
          .concat(this.materialsFlatShadedDoubleSide)
        for (let t of e) t.dispose()
      }
    }
    dispose() {
      ;(this.originalMaterials.clear(), this.disposeMaterials())
    }
    static get workaroundEnabled() {
      return eO
    }
    static set workaroundEnabled(e) {
      eO = e
    }
  },
  nO = -1,
  rO = class extends oo {
    constructor(e = null, t = nO, n = nO, r = 1) {
      ;(super(),
        e !== null &&
          this.addEventListener(`change`, () =>
            e.setSize(this.baseSize.width, this.baseSize.height),
          ),
        (this.baseSize = new J(1, 1)),
        (this.preferredSize = new J(t, n)),
        (this.target = this.preferredSize),
        (this.s = r),
        (this.effectiveSize = new J()),
        this.addEventListener(`change`, () => this.updateEffectiveSize()),
        this.updateEffectiveSize())
    }
    updateEffectiveSize() {
      let e = this.baseSize,
        t = this.preferredSize,
        n = this.effectiveSize,
        r = this.scale
      ;((n.width =
        t.width === nO
          ? t.height === nO
            ? Math.round(e.width * r)
            : Math.round(t.height * (e.width / Math.max(e.height, 1)))
          : t.width),
        (n.height =
          t.height === nO
            ? t.width === nO
              ? Math.round(e.height * r)
              : Math.round(t.width / Math.max(e.width / Math.max(e.height, 1), 1))
            : t.height))
    }
    get width() {
      return this.effectiveSize.width
    }
    set width(e) {
      this.preferredWidth = e
    }
    get height() {
      return this.effectiveSize.height
    }
    set height(e) {
      this.preferredHeight = e
    }
    getWidth() {
      return this.width
    }
    getHeight() {
      return this.height
    }
    get scale() {
      return this.s
    }
    set scale(e) {
      this.s !== e &&
        ((this.s = e), this.preferredSize.setScalar(nO), this.dispatchEvent({ type: `change` }))
    }
    getScale() {
      return this.scale
    }
    setScale(e) {
      this.scale = e
    }
    get baseWidth() {
      return this.baseSize.width
    }
    set baseWidth(e) {
      this.baseSize.width !== e &&
        ((this.baseSize.width = e), this.dispatchEvent({ type: `change` }))
    }
    getBaseWidth() {
      return this.baseWidth
    }
    setBaseWidth(e) {
      this.baseWidth = e
    }
    get baseHeight() {
      return this.baseSize.height
    }
    set baseHeight(e) {
      this.baseSize.height !== e &&
        ((this.baseSize.height = e), this.dispatchEvent({ type: `change` }))
    }
    getBaseHeight() {
      return this.baseHeight
    }
    setBaseHeight(e) {
      this.baseHeight = e
    }
    setBaseSize(e, t) {
      ;(this.baseSize.width !== e || this.baseSize.height !== t) &&
        (this.baseSize.set(e, t), this.dispatchEvent({ type: `change` }))
    }
    get preferredWidth() {
      return this.preferredSize.width
    }
    set preferredWidth(e) {
      this.preferredSize.width !== e &&
        ((this.preferredSize.width = e), this.dispatchEvent({ type: `change` }))
    }
    getPreferredWidth() {
      return this.preferredWidth
    }
    setPreferredWidth(e) {
      this.preferredWidth = e
    }
    get preferredHeight() {
      return this.preferredSize.height
    }
    set preferredHeight(e) {
      this.preferredSize.height !== e &&
        ((this.preferredSize.height = e), this.dispatchEvent({ type: `change` }))
    }
    getPreferredHeight() {
      return this.preferredHeight
    }
    setPreferredHeight(e) {
      this.preferredHeight = e
    }
    setPreferredSize(e, t) {
      ;(this.preferredSize.width !== e || this.preferredSize.height !== t) &&
        (this.preferredSize.set(e, t), this.dispatchEvent({ type: `change` }))
    }
    copy(e) {
      ;((this.s = e.scale),
        this.baseSize.set(e.baseWidth, e.baseHeight),
        this.preferredSize.set(e.preferredWidth, e.preferredHeight),
        this.dispatchEvent({ type: `change` }))
    }
    static get AUTO_SIZE() {
      return nO
    }
  },
  iO = {
    SKIP: 9,
    SET: 30,
    ADD: 0,
    ALPHA: 1,
    AVERAGE: 2,
    COLOR: 3,
    COLOR_BURN: 4,
    COLOR_DODGE: 5,
    DARKEN: 6,
    DIFFERENCE: 7,
    DIVIDE: 8,
    DST: 9,
    EXCLUSION: 10,
    HARD_LIGHT: 11,
    HARD_MIX: 12,
    HUE: 13,
    INVERT: 14,
    INVERT_RGB: 15,
    LIGHTEN: 16,
    LINEAR_BURN: 17,
    LINEAR_DODGE: 18,
    LINEAR_LIGHT: 19,
    LUMINOSITY: 20,
    MULTIPLY: 21,
    NEGATION: 22,
    NORMAL: 23,
    OVERLAY: 24,
    PIN_LIGHT: 25,
    REFLECT: 26,
    SATURATION: 27,
    SCREEN: 28,
    SOFT_LIGHT: 29,
    SRC: 30,
    SUBTRACT: 31,
    VIVID_LIGHT: 32,
  },
  aO = new Map([
    [
      iO.ADD,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.ALPHA,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}`,
    ],
    [
      iO.AVERAGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.COLOR,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.COLOR_BURN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.COLOR_DODGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.DARKEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.DIFFERENCE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.DIVIDE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [iO.DST, null],
    [
      iO.EXCLUSION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.HARD_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.HARD_MIX,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.HUE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.INVERT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.INVERT_RGB,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.LIGHTEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.LINEAR_BURN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.LINEAR_DODGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.LINEAR_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.LUMINOSITY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.MULTIPLY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.NEGATION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.NORMAL,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}`,
    ],
    [
      iO.OVERLAY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.PIN_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.REFLECT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.SATURATION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.SCREEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.SOFT_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.SRC,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}`,
    ],
    [
      iO.SUBTRACT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      iO.VIVID_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
  ]),
  oO = class extends oo {
    constructor(e, t = 1) {
      ;(super(), (this._blendFunction = e), (this.opacity = new Qh(t)))
    }
    getOpacity() {
      return this.opacity.value
    }
    setOpacity(e) {
      this.opacity.value = e
    }
    get blendFunction() {
      return this._blendFunction
    }
    set blendFunction(e) {
      ;((this._blendFunction = e), this.dispatchEvent({ type: `change` }))
    }
    getBlendFunction() {
      return this.blendFunction
    }
    setBlendFunction(e) {
      this.blendFunction = e
    }
    getShaderCode() {
      return aO.get(this.blendFunction)
    }
  },
  sO = class extends oo {
    constructor(
      e,
      t,
      {
        attributes: n = ZD.NONE,
        blendFunction: r = iO.NORMAL,
        defines: i = new Map(),
        uniforms: a = new Map(),
        extensions: o = null,
        vertexShader: s = null,
      } = {},
    ) {
      ;(super(),
        (this.name = e),
        (this.renderer = null),
        (this.attributes = n),
        (this.fragmentShader = t),
        (this.vertexShader = s),
        (this.defines = i),
        (this.uniforms = a),
        (this.extensions = o),
        (this.blendMode = new oO(r)),
        this.blendMode.addEventListener(`change`, (e) => this.setChanged()),
        (this._inputColorSpace = _a),
        (this._outputColorSpace = ``))
    }
    get inputColorSpace() {
      return this._inputColorSpace
    }
    set inputColorSpace(e) {
      ;((this._inputColorSpace = e), this.setChanged())
    }
    get outputColorSpace() {
      return this._outputColorSpace
    }
    set outputColorSpace(e) {
      ;((this._outputColorSpace = e), this.setChanged())
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    getName() {
      return this.name
    }
    setRenderer(e) {
      this.renderer = e
    }
    getDefines() {
      return this.defines
    }
    getUniforms() {
      return this.uniforms
    }
    getExtensions() {
      return this.extensions
    }
    getBlendMode() {
      return this.blendMode
    }
    getAttributes() {
      return this.attributes
    }
    setAttributes(e) {
      ;((this.attributes = e), this.setChanged())
    }
    getFragmentShader() {
      return this.fragmentShader
    }
    setFragmentShader(e) {
      ;((this.fragmentShader = e), this.setChanged())
    }
    getVertexShader() {
      return this.vertexShader
    }
    setVertexShader(e) {
      ;((this.vertexShader = e), this.setChanged())
    }
    setChanged() {
      this.dispatchEvent({ type: `change` })
    }
    setDepthTexture(e, t = fa) {}
    update(e, t, n) {}
    setSize(e, t) {}
    initialize(e, t, n) {}
    dispose() {
      for (let e of Object.keys(this)) {
        let t = this[e]
        ;(t instanceof is || t instanceof cl || t instanceof ts || t instanceof LD) &&
          this[e].dispose()
      }
    }
  },
  cO = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 },
  lO = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,
  uO = `uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}`,
  dO = [
    new Float32Array([0, 0]),
    new Float32Array([0, 1, 1]),
    new Float32Array([0, 1, 1, 2]),
    new Float32Array([0, 1, 2, 2, 3]),
    new Float32Array([0, 1, 2, 3, 4, 4, 5]),
    new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]),
  ],
  fO = class extends Cp {
    constructor(e = new ns()) {
      ;(super({
        name: `KawaseBlurMaterial`,
        uniforms: {
          inputBuffer: new Qh(null),
          texelSize: new Qh(new ns()),
          scale: new Qh(1),
          kernel: new Qh(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: lO,
        vertexShader: uO,
      }),
        this.setTexelSize(e.x, e.y),
        (this.kernelSize = cO.MEDIUM))
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
      this.inputBuffer = e
    }
    get kernelSequence() {
      return dO[this.kernelSize]
    }
    get scale() {
      return this.uniforms.scale.value
    }
    set scale(e) {
      this.uniforms.scale.value = e
    }
    getScale() {
      return this.uniforms.scale.value
    }
    setScale(e) {
      this.uniforms.scale.value = e
    }
    getKernel() {
      return null
    }
    get kernel() {
      return this.uniforms.kernel.value
    }
    set kernel(e) {
      this.uniforms.kernel.value = e
    }
    setKernel(e) {
      this.kernel = e
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t, e * 0.5, t * 0.5)
    }
    setSize(e, t) {
      let n = 1 / e,
        r = 1 / t
      this.uniforms.texelSize.value.set(n, r, n * 0.5, r * 0.5)
    }
  },
  pO = class extends LD {
    constructor({
      kernelSize: e = cO.MEDIUM,
      resolutionScale: t = 0.5,
      width: n = rO.AUTO_SIZE,
      height: r = rO.AUTO_SIZE,
      resolutionX: i = n,
      resolutionY: a = r,
    } = {}) {
      ;(super(`KawaseBlurPass`),
        (this.renderTargetA = new is(1, 1, { depthBuffer: !1 })),
        (this.renderTargetA.texture.name = `Blur.Target.A`),
        (this.renderTargetB = this.renderTargetA.clone()),
        (this.renderTargetB.texture.name = `Blur.Target.B`))
      let o = (this.resolution = new rO(this, i, a, t))
      ;(o.addEventListener(`change`, (e) => this.setSize(o.baseWidth, o.baseHeight)),
        (this._blurMaterial = new fO()),
        (this._blurMaterial.kernelSize = e),
        (this.copyMaterial = new VD()))
    }
    getResolution() {
      return this.resolution
    }
    get blurMaterial() {
      return this._blurMaterial
    }
    set blurMaterial(e) {
      this._blurMaterial = e
    }
    get dithering() {
      return this.copyMaterial.dithering
    }
    set dithering(e) {
      this.copyMaterial.dithering = e
    }
    get kernelSize() {
      return this.blurMaterial.kernelSize
    }
    set kernelSize(e) {
      this.blurMaterial.kernelSize = e
    }
    get width() {
      return this.resolution.width
    }
    set width(e) {
      this.resolution.preferredWidth = e
    }
    get height() {
      return this.resolution.height
    }
    set height(e) {
      this.resolution.preferredHeight = e
    }
    get scale() {
      return this.blurMaterial.scale
    }
    set scale(e) {
      this.blurMaterial.scale = e
    }
    getScale() {
      return this.blurMaterial.scale
    }
    setScale(e) {
      this.blurMaterial.scale = e
    }
    getKernelSize() {
      return this.kernelSize
    }
    setKernelSize(e) {
      this.kernelSize = e
    }
    getResolutionScale() {
      return this.resolution.scale
    }
    setResolutionScale(e) {
      this.resolution.scale = e
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.renderTargetA,
        c = this.renderTargetB,
        l = this.blurMaterial,
        u = l.kernelSequence,
        d = t
      this.fullscreenMaterial = l
      for (let t = 0, n = u.length; t < n; ++t) {
        let n = t & 1 ? c : s
        ;((l.kernel = u[t]),
          (l.inputBuffer = d.texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n))
      }
      ;((this.fullscreenMaterial = this.copyMaterial),
        (this.copyMaterial.inputBuffer = d.texture),
        e.setRenderTarget(this.renderToScreen ? null : n),
        e.render(a, o))
    }
    setSize(e, t) {
      let n = this.resolution
      n.setBaseSize(e, t)
      let r = n.width,
        i = n.height
      ;(this.renderTargetA.setSize(r, i),
        this.renderTargetB.setSize(r, i),
        this.blurMaterial.setSize(e, t))
    }
    initialize(e, t, n) {
      n !== void 0 &&
        ((this.renderTargetA.texture.type = n),
        (this.renderTargetB.texture.type = n),
        n === 1009
          ? e !== null &&
            e.outputColorSpace === `srgb` &&
            ((this.renderTargetA.texture.colorSpace = ga),
            (this.renderTargetB.texture.colorSpace = ga))
          : ((this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`),
            (this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`)))
    }
    static get AUTO_SIZE() {
      return rO.AUTO_SIZE
    }
  },
  mO = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,
  hO = class extends Cp {
    constructor(e = !1, t = null) {
      ;(super({
        name: `LuminanceMaterial`,
        defines: { THREE_REVISION: `187`.replace(/\D+/g, ``) },
        uniforms: {
          inputBuffer: new Qh(null),
          threshold: new Qh(0),
          smoothing: new Qh(1),
          range: new Qh(null),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: mO,
        vertexShader: BD,
      }),
        (this.colorOutput = e),
        (this.luminanceRange = t))
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    get threshold() {
      return this.uniforms.threshold.value
    }
    set threshold(e) {
      ;(this.smoothing > 0 || e > 0
        ? (this.defines.THRESHOLD = `1`)
        : delete this.defines.THRESHOLD,
        (this.uniforms.threshold.value = e))
    }
    getThreshold() {
      return this.threshold
    }
    setThreshold(e) {
      this.threshold = e
    }
    get smoothing() {
      return this.uniforms.smoothing.value
    }
    set smoothing(e) {
      ;(this.threshold > 0 || e > 0
        ? (this.defines.THRESHOLD = `1`)
        : delete this.defines.THRESHOLD,
        (this.uniforms.smoothing.value = e))
    }
    getSmoothingFactor() {
      return this.smoothing
    }
    setSmoothingFactor(e) {
      this.smoothing = e
    }
    get useThreshold() {
      return this.threshold > 0 || this.smoothing > 0
    }
    set useThreshold(e) {}
    get colorOutput() {
      return this.defines.COLOR !== void 0
    }
    set colorOutput(e) {
      ;(e ? (this.defines.COLOR = `1`) : delete this.defines.COLOR, (this.needsUpdate = !0))
    }
    isColorOutputEnabled(e) {
      return this.colorOutput
    }
    setColorOutputEnabled(e) {
      this.colorOutput = e
    }
    get useRange() {
      return this.luminanceRange !== null
    }
    set useRange(e) {
      this.luminanceRange = null
    }
    get luminanceRange() {
      return this.uniforms.range.value
    }
    set luminanceRange(e) {
      ;(e === null ? delete this.defines.RANGE : (this.defines.RANGE = `1`),
        (this.uniforms.range.value = e),
        (this.needsUpdate = !0))
    }
    getLuminanceRange() {
      return this.luminanceRange
    }
    setLuminanceRange(e) {
      this.luminanceRange = e
    }
  },
  gO = class extends LD {
    constructor({
      renderTarget: e,
      luminanceRange: t,
      colorOutput: n,
      resolutionScale: r = 1,
      width: i = rO.AUTO_SIZE,
      height: a = rO.AUTO_SIZE,
      resolutionX: o = i,
      resolutionY: s = a,
    } = {}) {
      ;(super(`LuminancePass`),
        (this.fullscreenMaterial = new hO(n, t)),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        this.renderTarget === void 0 &&
          ((this.renderTarget = new is(1, 1, { depthBuffer: !1 })),
          (this.renderTarget.texture.name = `LuminancePass.Target`)))
      let c = (this.resolution = new rO(this, o, s, r))
      c.addEventListener(`change`, (e) => this.setSize(c.baseWidth, c.baseHeight))
    }
    get texture() {
      return this.renderTarget.texture
    }
    getTexture() {
      return this.renderTarget.texture
    }
    getResolution() {
      return this.resolution
    }
    render(e, t, n, r, i) {
      let a = this.fullscreenMaterial
      ;((a.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera))
    }
    setSize(e, t) {
      let n = this.resolution
      ;(n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height))
    }
    initialize(e, t, n) {
      n !== void 0 &&
        n !== 1009 &&
        ((this.renderTarget.texture.type = n),
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
    }
  },
  _O = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,
  vO = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}`,
  yO = class extends Cp {
    constructor() {
      super({
        name: `DownsamplingMaterial`,
        uniforms: { inputBuffer: new Qh(null), texelSize: new Qh(new J()) },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: _O,
        vertexShader: vO,
      })
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
  },
  bO = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,
  xO = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}`,
  SO = class extends Cp {
    constructor() {
      super({
        name: `UpsamplingMaterial`,
        uniforms: {
          inputBuffer: new Qh(null),
          supportBuffer: new Qh(null),
          texelSize: new Qh(new J()),
          radius: new Qh(0.85),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: bO,
        vertexShader: xO,
      })
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    set supportBuffer(e) {
      this.uniforms.supportBuffer.value = e
    }
    get radius() {
      return this.uniforms.radius.value
    }
    set radius(e) {
      this.uniforms.radius.value = e
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
  },
  CO = class extends LD {
    constructor() {
      ;(super(`MipmapBlurPass`),
        (this.needsSwap = !1),
        (this.renderTarget = new is(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `Upsampling.Mipmap0`),
        (this.downsamplingMipmaps = []),
        (this.upsamplingMipmaps = []),
        (this.downsamplingMaterial = new yO()),
        (this.upsamplingMaterial = new SO()),
        (this.resolution = new J()))
    }
    get texture() {
      return this.renderTarget.texture
    }
    get levels() {
      return this.downsamplingMipmaps.length
    }
    set levels(e) {
      if (this.levels !== e) {
        let t = this.renderTarget
        ;(this.dispose(), (this.downsamplingMipmaps = []), (this.upsamplingMipmaps = []))
        for (let n = 0; n < e; ++n) {
          let e = t.clone()
          ;((e.texture.name = `Downsampling.Mipmap` + n), this.downsamplingMipmaps.push(e))
        }
        this.upsamplingMipmaps.push(t)
        for (let n = 1, r = e - 1; n < r; ++n) {
          let e = t.clone()
          ;((e.texture.name = `Upsampling.Mipmap` + n), this.upsamplingMipmaps.push(e))
        }
        this.setSize(this.resolution.x, this.resolution.y)
      }
    }
    get radius() {
      return this.upsamplingMaterial.radius
    }
    set radius(e) {
      this.upsamplingMaterial.radius = e
    }
    render(e, t, n, r, i) {
      let { scene: a, camera: o } = this,
        { downsamplingMaterial: s, upsamplingMaterial: c } = this,
        { downsamplingMipmaps: l, upsamplingMipmaps: u } = this,
        d = t
      this.fullscreenMaterial = s
      for (let t = 0, n = l.length; t < n; ++t) {
        let n = l[t]
        ;(s.setSize(d.width, d.height),
          (s.inputBuffer = d.texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n))
      }
      this.fullscreenMaterial = c
      for (let t = u.length - 1; t >= 0; --t) {
        let n = u[t]
        ;(c.setSize(d.width, d.height),
          (c.inputBuffer = d.texture),
          (c.supportBuffer = l[t].texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n))
      }
    }
    setSize(e, t) {
      let n = this.resolution
      n.set(e, t)
      let r = n.width,
        i = n.height
      for (let e = 0, t = this.downsamplingMipmaps.length; e < t; ++e)
        ((r = Math.round(r * 0.5)),
          (i = Math.round(i * 0.5)),
          this.downsamplingMipmaps[e].setSize(r, i),
          e < this.upsamplingMipmaps.length && this.upsamplingMipmaps[e].setSize(r, i))
    }
    initialize(e, t, n) {
      if (n !== void 0) {
        let t = this.downsamplingMipmaps.concat(this.upsamplingMipmaps)
        for (let e of t) e.texture.type = n
        if (n !== 1009)
          ((this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`),
            (this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
        else if (e !== null && e.outputColorSpace === `srgb`)
          for (let e of t) e.texture.colorSpace = ga
      }
    }
    dispose() {
      super.dispose()
      for (let e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e.dispose()
    }
  },
  wO = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,
  TO = class extends sO {
    constructor({
      blendFunction: e = iO.SCREEN,
      luminanceThreshold: t = 1,
      luminanceSmoothing: n = 0.03,
      mipmapBlur: r = !0,
      intensity: i = 1,
      radius: a = 0.85,
      levels: o = 8,
      kernelSize: s = cO.LARGE,
      resolutionScale: c = 0.5,
      width: l = rO.AUTO_SIZE,
      height: u = rO.AUTO_SIZE,
      resolutionX: d = l,
      resolutionY: f = u,
    } = {}) {
      ;(super(`BloomEffect`, wO, {
        blendFunction: e,
        uniforms: new Map([
          [`map`, new Qh(null)],
          [`intensity`, new Qh(i)],
        ]),
      }),
        (this.renderTarget = new is(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `Bloom.Target`),
        (this.blurPass = new pO({ kernelSize: s })),
        (this.luminancePass = new gO({ colorOutput: !0 })),
        (this.luminanceMaterial.threshold = t),
        (this.luminanceMaterial.smoothing = n),
        (this.mipmapBlurPass = new CO()),
        (this.mipmapBlurPass.enabled = r),
        (this.mipmapBlurPass.radius = a),
        (this.mipmapBlurPass.levels = o),
        (this.uniforms.get(`map`).value = r
          ? this.mipmapBlurPass.texture
          : this.renderTarget.texture))
      let p = (this.resolution = new rO(this, d, f, c))
      p.addEventListener(`change`, (e) => this.setSize(p.baseWidth, p.baseHeight))
    }
    get texture() {
      return this.mipmapBlurPass.enabled
        ? this.mipmapBlurPass.texture
        : this.renderTarget.texture
    }
    getTexture() {
      return this.texture
    }
    getResolution() {
      return this.resolution
    }
    getBlurPass() {
      return this.blurPass
    }
    getLuminancePass() {
      return this.luminancePass
    }
    get luminanceMaterial() {
      return this.luminancePass.fullscreenMaterial
    }
    getLuminanceMaterial() {
      return this.luminancePass.fullscreenMaterial
    }
    get width() {
      return this.resolution.width
    }
    set width(e) {
      this.resolution.preferredWidth = e
    }
    get height() {
      return this.resolution.height
    }
    set height(e) {
      this.resolution.preferredHeight = e
    }
    get dithering() {
      return this.blurPass.dithering
    }
    set dithering(e) {
      this.blurPass.dithering = e
    }
    get kernelSize() {
      return this.blurPass.kernelSize
    }
    set kernelSize(e) {
      this.blurPass.kernelSize = e
    }
    get distinction() {
      return (console.warn(this.name, `distinction was removed`), 1)
    }
    set distinction(e) {
      console.warn(this.name, `distinction was removed`)
    }
    get intensity() {
      return this.uniforms.get(`intensity`).value
    }
    set intensity(e) {
      this.uniforms.get(`intensity`).value = e
    }
    getIntensity() {
      return this.intensity
    }
    setIntensity(e) {
      this.intensity = e
    }
    getResolutionScale() {
      return this.resolution.scale
    }
    setResolutionScale(e) {
      this.resolution.scale = e
    }
    update(e, t, n) {
      let r = this.renderTarget,
        i = this.luminancePass
      i.enabled
        ? (i.render(e, t),
          this.mipmapBlurPass.enabled
            ? this.mipmapBlurPass.render(e, i.renderTarget)
            : this.blurPass.render(e, i.renderTarget, r))
        : this.mipmapBlurPass.enabled
          ? this.mipmapBlurPass.render(e, t)
          : this.blurPass.render(e, t, r)
    }
    setSize(e, t) {
      let n = this.resolution
      ;(n.setBaseSize(e, t),
        this.renderTarget.setSize(n.width, n.height),
        this.blurPass.resolution.copy(n),
        this.luminancePass.setSize(e, t),
        this.mipmapBlurPass.setSize(e, t))
    }
    initialize(e, t, n) {
      ;(this.blurPass.initialize(e, t, n),
        this.luminancePass.initialize(e, t, n),
        this.mipmapBlurPass.initialize(e, t, n),
        n !== void 0 &&
          ((this.renderTarget.texture.type = n),
          e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = ga)))
    }
  },
  EO = class extends LD {
    constructor(e, t, n = null) {
      ;(super(`RenderPass`, e, t),
        (this.needsSwap = !1),
        (this.needsDepthBlit = !0),
        (this.clearPass = new WD()),
        (this.overrideMaterialManager = n === null ? null : new tO(n)),
        (this.ignoreBackground = !1),
        (this.skipShadowMapUpdate = !1),
        (this.selection = null))
    }
    set mainScene(e) {
      this.scene = e
    }
    set mainCamera(e) {
      this.camera = e
    }
    get renderToScreen() {
      return super.renderToScreen
    }
    set renderToScreen(e) {
      ;((super.renderToScreen = e), (this.clearPass.renderToScreen = e))
    }
    get overrideMaterial() {
      let e = this.overrideMaterialManager
      return e === null ? null : e.material
    }
    set overrideMaterial(e) {
      let t = this.overrideMaterialManager
      e === null
        ? t !== null && (t.dispose(), (this.overrideMaterialManager = null))
        : t === null
          ? (this.overrideMaterialManager = new tO(e))
          : t.setMaterial(e)
    }
    getOverrideMaterial() {
      return this.overrideMaterial
    }
    setOverrideMaterial(e) {
      this.overrideMaterial = e
    }
    get clear() {
      return this.clearPass.enabled
    }
    set clear(e) {
      this.clearPass.enabled = e
    }
    getSelection() {
      return this.selection
    }
    setSelection(e) {
      this.selection = e
    }
    isBackgroundDisabled() {
      return this.ignoreBackground
    }
    setBackgroundDisabled(e) {
      this.ignoreBackground = e
    }
    isShadowMapDisabled() {
      return this.skipShadowMapUpdate
    }
    setShadowMapDisabled(e) {
      this.skipShadowMapUpdate = e
    }
    getClearPass() {
      return this.clearPass
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.selection,
        c = o.layers.mask,
        l = a.background,
        u = e.shadowMap.autoUpdate,
        d = this.renderToScreen ? null : t
      ;(s !== null && o.layers.set(s.getLayer()),
        this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1),
        (this.ignoreBackground || this.clearPass.overrideClearColor !== null) &&
          (a.background = null),
        this.clearPass.enabled && this.clearPass.render(e, t),
        e.setRenderTarget(d),
        this.overrideMaterialManager === null
          ? e.render(a, o)
          : this.overrideMaterialManager.render(e, a, o),
        (o.layers.mask = c),
        (a.background = l),
        (e.shadowMap.autoUpdate = u))
    }
  },
  DO = { DEFAULT: 0, ESKIL: 1 },
  OO = `void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,
  kO = class extends sO {
    constructor({ blendFunction: e = iO.SCREEN, premultiply: t = !1 } = {}) {
      ;(super(`NoiseEffect`, OO, { blendFunction: e }), (this.premultiply = t))
    }
    get premultiply() {
      return this.defines.has(`PREMULTIPLY`)
    }
    set premultiply(e) {
      this.premultiply !== e &&
        (e ? this.defines.set(`PREMULTIPLY`, `1`) : this.defines.delete(`PREMULTIPLY`),
        this.setChanged())
    }
    isPremultiplied() {
      return this.premultiply
    }
    setPremultiplied(e) {
      this.premultiply = e
    }
  },
  AO = `#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`,
  jO = `uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}`,
  MO = class extends Cp {
    constructor() {
      super({
        name: `DepthDownsamplingMaterial`,
        defines: { DEPTH_PACKING: `0` },
        uniforms: {
          depthBuffer: new Qh(null),
          normalBuffer: new Qh(null),
          texelSize: new Qh(new J()),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: AO,
        vertexShader: jO,
      })
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e
    }
    set depthPacking(e) {
      ;((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0))
    }
    setDepthBuffer(e, t = fa) {
      ;((this.depthBuffer = e), (this.depthPacking = t))
    }
    set normalBuffer(e) {
      ;((this.uniforms.normalBuffer.value = e),
        e === null
          ? delete this.defines.DOWNSAMPLE_NORMALS
          : (this.defines.DOWNSAMPLE_NORMALS = `1`),
        (this.needsUpdate = !0))
    }
    setNormalBuffer(e) {
      this.normalBuffer = e
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t)
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
  },
  NO = class extends LD {
    constructor({
      normalBuffer: e = null,
      resolutionScale: t = 0.5,
      width: n = rO.AUTO_SIZE,
      height: r = rO.AUTO_SIZE,
      resolutionX: i = n,
      resolutionY: a = r,
    } = {}) {
      super(`DepthDownsamplingPass`)
      let o = new MO()
      ;((o.normalBuffer = e),
        (this.fullscreenMaterial = o),
        (this.needsDepthTexture = !0),
        (this.needsSwap = !1),
        (this.renderTarget = new is(1, 1, {
          minFilter: Rr,
          magFilter: Rr,
          depthBuffer: !1,
          type: ei,
        })),
        (this.renderTarget.texture.name = `DepthDownsamplingPass.Target`),
        (this.renderTarget.texture.generateMipmaps = !1))
      let s = (this.resolution = new rO(this, i, a, t))
      s.addEventListener(`change`, (e) => this.setSize(s.baseWidth, s.baseHeight))
    }
    get texture() {
      return this.renderTarget.texture
    }
    getTexture() {
      return this.renderTarget.texture
    }
    getResolution() {
      return this.resolution
    }
    setDepthTexture(e, t = fa) {
      ;((this.fullscreenMaterial.depthBuffer = e), (this.fullscreenMaterial.depthPacking = t))
    }
    render(e, t, n, r, i) {
      ;(e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera))
    }
    setSize(e, t) {
      let n = this.resolution
      ;(n.setBaseSize(e, t),
        this.renderTarget.setSize(n.width, n.height),
        this.fullscreenMaterial.setSize(e, t))
    }
    initialize(e, t, n) {
      let r = e.getContext()
      if (!(
        r.getExtension(`EXT_color_buffer_float`) ||
        r.getExtension(`EXT_color_buffer_half_float`)
      ))
        throw Error(`Rendering to float texture is not supported.`)
    }
  },
  PO = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,
  FO = class extends sO {
    constructor({
      blendFunction: e,
      eskil: t = !1,
      technique: n = t ? DO.ESKIL : DO.DEFAULT,
      offset: r = 0.5,
      darkness: i = 0.5,
    } = {}) {
      super(`VignetteEffect`, PO, {
        blendFunction: e,
        defines: new Map([[`VIGNETTE_TECHNIQUE`, n.toFixed(0)]]),
        uniforms: new Map([
          [`offset`, new Qh(r)],
          [`darkness`, new Qh(i)],
        ]),
      })
    }
    get technique() {
      return Number(this.defines.get(`VIGNETTE_TECHNIQUE`))
    }
    set technique(e) {
      this.technique !== e &&
        (this.defines.set(`VIGNETTE_TECHNIQUE`, e.toFixed(0)), this.setChanged())
    }
    get eskil() {
      return this.technique === DO.ESKIL
    }
    set eskil(e) {
      this.technique = e ? DO.ESKIL : DO.DEFAULT
    }
    getTechnique() {
      return this.technique
    }
    setTechnique(e) {
      this.technique = e
    }
    get offset() {
      return this.uniforms.get(`offset`).value
    }
    set offset(e) {
      this.uniforms.get(`offset`).value = e
    }
    getOffset() {
      return this.offset
    }
    setOffset(e) {
      this.offset = e
    }
    get darkness() {
      return this.uniforms.get(`darkness`).value
    }
    set darkness(e) {
      this.uniforms.get(`darkness`).value = e
    }
    getDarkness() {
      return this.darkness
    }
    setDarkness(e) {
      this.darkness = e
    }
  },
  IO = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,
  LO = `uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}`,
  RO = class extends Cp {
    constructor(e, t, n, r, i = !1) {
      ;(super({
        name: `EffectMaterial`,
        defines: {
          THREE_REVISION: `187`.replace(/\D+/g, ``),
          DEPTH_PACKING: `0`,
          ENCODE_OUTPUT: `1`,
        },
        uniforms: {
          inputBuffer: new Qh(null),
          depthBuffer: new Qh(null),
          resolution: new Qh(new J()),
          texelSize: new Qh(new J()),
          cameraNear: new Qh(0.3),
          cameraFar: new Qh(1e3),
          aspect: new Qh(1),
          time: new Qh(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        dithering: i,
      }),
        e && this.setShaderParts(e),
        t && this.setDefines(t),
        n && this.setUniforms(n),
        this.copyCameraSettings(r))
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e
    }
    get depthPacking() {
      return Number(this.defines.DEPTH_PACKING)
    }
    set depthPacking(e) {
      ;((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0))
    }
    setDepthBuffer(e, t = fa) {
      ;((this.depthBuffer = e), (this.depthPacking = t))
    }
    setShaderData(e) {
      ;(this.setShaderParts(e.shaderParts),
        this.setDefines(e.defines),
        this.setUniforms(e.uniforms),
        this.setExtensions(e.extensions))
    }
    setShaderParts(e) {
      return (
        (this.fragmentShader = IO.replace(QD.FRAGMENT_HEAD, e.get(QD.FRAGMENT_HEAD) || ``)
          .replace(QD.FRAGMENT_MAIN_UV, e.get(QD.FRAGMENT_MAIN_UV) || ``)
          .replace(QD.FRAGMENT_MAIN_IMAGE, e.get(QD.FRAGMENT_MAIN_IMAGE) || ``)),
        (this.vertexShader = LO.replace(QD.VERTEX_HEAD, e.get(QD.VERTEX_HEAD) || ``).replace(
          QD.VERTEX_MAIN_SUPPORT,
          e.get(QD.VERTEX_MAIN_SUPPORT) || ``,
        )),
        (this.needsUpdate = !0),
        this
      )
    }
    setDefines(e) {
      for (let t of e.entries()) this.defines[t[0]] = t[1]
      return ((this.needsUpdate = !0), this)
    }
    setUniforms(e) {
      for (let t of e.entries()) this.uniforms[t[0]] = t[1]
      return this
    }
    setExtensions(e) {
      this.extensions = {}
      for (let t of e) this.extensions[t] = !0
      return this
    }
    get encodeOutput() {
      return this.defines.ENCODE_OUTPUT !== void 0
    }
    set encodeOutput(e) {
      this.encodeOutput !== e &&
        (e ? (this.defines.ENCODE_OUTPUT = `1`) : delete this.defines.ENCODE_OUTPUT,
        (this.needsUpdate = !0))
    }
    isOutputEncodingEnabled(e) {
      return this.encodeOutput
    }
    setOutputEncodingEnabled(e) {
      this.encodeOutput = e
    }
    get time() {
      return this.uniforms.time.value
    }
    set time(e) {
      this.uniforms.time.value = e
    }
    setDeltaTime(e) {
      this.uniforms.time.value += e
    }
    adoptCameraSettings(e) {
      this.copyCameraSettings(e)
    }
    copyCameraSettings(e) {
      e &&
        ((this.uniforms.cameraNear.value = e.near),
        (this.uniforms.cameraFar.value = e.far),
        e instanceof Rm
          ? (this.defines.PERSPECTIVE_CAMERA = `1`)
          : delete this.defines.PERSPECTIVE_CAMERA,
        (this.needsUpdate = !0))
    }
    setSize(e, t) {
      let n = this.uniforms
      ;(n.resolution.value.set(e, t),
        n.texelSize.value.set(1 / e, 1 / t),
        (n.aspect.value = e / t))
    }
    static get Section() {
      return QD
    }
  }
Number(`187`.replace(/\D+/g, ``))
var zO = 255 / 256
;(new Float32Array([zO / 256 ** 3, zO / 256 ** 2, zO / 256, zO]),
  new Float32Array([zO, zO / 256, zO / 256 ** 2, 1 / 256 ** 3]))
