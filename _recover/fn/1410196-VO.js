function VO(e, t, n) {
  let r = t.getFragmentShader(),
    i = t.getVertexShader(),
    a = r !== void 0 && /mainImage/.test(r),
    o = r !== void 0 && /mainUv/.test(r)
  if (((n.attributes |= t.getAttributes()), r === void 0))
    throw Error(`Missing fragment shader (${t.name})`)
  if (o && (n.attributes & ZD.CONVOLUTION) !== 0)
    throw Error(
      `Effects that transform UVs are incompatible with convolution effects (${t.name})`,
    )
  if (!a && !o) throw Error(`Could not find mainImage or mainUv function (${t.name})`)
  {
    let s = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g,
      c = n.shaderParts,
      l = c.get(QD.FRAGMENT_HEAD) || ``,
      u = c.get(QD.FRAGMENT_MAIN_UV) || ``,
      d = c.get(QD.FRAGMENT_MAIN_IMAGE) || ``,
      f = c.get(QD.VERTEX_HEAD) || ``,
      p = c.get(QD.VERTEX_MAIN_SUPPORT) || ``,
      m = new Set(),
      h = new Set()
    if (
      (o &&
        ((u += `	${e}MainUv(UV);
`),
        (n.uvTransformation = !0)),
      i !== null && /mainSupport/.test(i))
    ) {
      let t = /mainSupport *\([\w\s]*?uv\s*?\)/.test(i)
      ;((p += `	${e}MainSupport(`),
        (p += t
          ? `vUv);
`
          : `);
`))
      for (let e of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))
        for (let t of e[1].split(/\s*,\s*/)) (n.varyings.add(t), m.add(t), h.add(t))
      for (let e of i.matchAll(s)) h.add(e[1])
    }
    for (let e of r.matchAll(s)) h.add(e[1])
    for (let e of t.defines.keys()) h.add(e.replace(/\([\w\s,]*\)/g, ``))
    for (let e of t.uniforms.keys()) h.add(e)
    ;(h.delete(`while`),
      h.delete(`for`),
      h.delete(`if`),
      t.uniforms.forEach((t, r) =>
        n.uniforms.set(e + r.charAt(0).toUpperCase() + r.slice(1), t),
      ),
      t.defines.forEach((t, r) => n.defines.set(e + r.charAt(0).toUpperCase() + r.slice(1), t)))
    let g = new Map([
      [`fragment`, r],
      [`vertex`, i],
    ])
    ;(BO(e, h, n.defines), BO(e, h, g), (r = g.get(`fragment`)), (i = g.get(`vertex`)))
    let _ = t.blendMode
    if ((n.blendModes.set(_.blendFunction, _), a)) {
      ;(t.inputColorSpace !== null &&
        t.inputColorSpace !== n.colorSpace &&
        (d +=
          t.inputColorSpace === `srgb`
            ? `color0 = sRGBTransferOETF(color0);
	`
            : `color0 = sRGBToLinear(color0);
	`),
        t.outputColorSpace === ``
          ? t.inputColorSpace !== null && (n.colorSpace = t.inputColorSpace)
          : (n.colorSpace = t.outputColorSpace),
        (d += `${e}MainImage(color0, UV, `),
        (n.attributes & ZD.DEPTH) !== 0 &&
          /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(r) &&
          ((d += `depth, `), (n.readDepth = !0)),
        (d += `color1);
	`))
      let i = e + `BlendOpacity`
      ;(n.uniforms.set(i, _.opacity),
        (d += `color0 = blend${_.blendFunction}(color0, color1, ${i});

	`),
        (l += `uniform float ${i};

`))
    }
    if (
      ((l +=
        r +
        `
`),
      i !== null &&
        (f +=
          i +
          `
`),
      c.set(QD.FRAGMENT_HEAD, l),
      c.set(QD.FRAGMENT_MAIN_UV, u),
      c.set(QD.FRAGMENT_MAIN_IMAGE, d),
      c.set(QD.VERTEX_HEAD, f),
      c.set(QD.VERTEX_MAIN_SUPPORT, p),
      t.extensions !== null)
    )
      for (let e of t.extensions) n.extensions.add(e)
  }
}
var HO = class extends LD {
    constructor(e, ...t) {
      ;(super(`EffectPass`),
        (this.fullscreenMaterial = new RO(null, null, null, e)),
        (this.listener = (e) => this.handleEvent(e)),
        (this.effects = []),
        this.setEffects(t),
        (this.skipRendering = !1),
        (this.minTime = 1),
        (this.maxTime = 1 / 0),
        (this.timeScale = 1))
    }
    set mainScene(e) {
      for (let t of this.effects) t.mainScene = e
    }
    set mainCamera(e) {
      this.fullscreenMaterial.copyCameraSettings(e)
      for (let t of this.effects) t.mainCamera = e
    }
    get encodeOutput() {
      return this.fullscreenMaterial.encodeOutput
    }
    set encodeOutput(e) {
      this.fullscreenMaterial.encodeOutput = e
    }
    get dithering() {
      return this.fullscreenMaterial.dithering
    }
    set dithering(e) {
      let t = this.fullscreenMaterial
      ;((t.dithering = e), (t.needsUpdate = !0))
    }
    setEffects(e) {
      for (let e of this.effects) e.removeEventListener(`change`, this.listener)
      this.effects = e.sort((e, t) => t.attributes - e.attributes)
      for (let e of this.effects) e.addEventListener(`change`, this.listener)
    }
    updateMaterial() {
      let e = new $D(),
        t = 0
      for (let n of this.effects)
        if (n.blendMode.blendFunction === iO.DST) e.attributes |= n.getAttributes() & ZD.DEPTH
        else if ((e.attributes & n.getAttributes() & ZD.CONVOLUTION) !== 0)
          throw Error(`Convolution effects cannot be merged (${n.name})`)
        else VO(`e` + t++, n, e)
      let n = e.shaderParts.get(QD.FRAGMENT_HEAD),
        r = e.shaderParts.get(QD.FRAGMENT_MAIN_IMAGE),
        i = e.shaderParts.get(QD.FRAGMENT_MAIN_UV),
        a = /\bblend\b/g
      for (let t of e.blendModes.values())
        n +=
          t.getShaderCode().replace(a, `blend${t.blendFunction}`) +
          `
`
      ;((e.attributes & ZD.DEPTH) === 0
        ? (this.needsDepthTexture = !1)
        : (e.readDepth &&
            (r =
              `float depth = readDepth(UV);

	` + r),
          (this.needsDepthTexture = this.getDepthTexture() === null)),
        e.colorSpace === `srgb` &&
          (r += `color0 = sRGBToLinear(color0);
	`),
        e.uvTransformation
          ? ((i =
              `vec2 transformedUv = vUv;
` + i),
            e.defines.set(`UV`, `transformedUv`))
          : e.defines.set(`UV`, `vUv`),
        e.shaderParts.set(QD.FRAGMENT_HEAD, n),
        e.shaderParts.set(QD.FRAGMENT_MAIN_IMAGE, r),
        e.shaderParts.set(QD.FRAGMENT_MAIN_UV, i))
      for (let [t, n] of e.shaderParts)
        n !== null &&
          e.shaderParts.set(
            t,
            n.trim().replace(
              /^#/,
              `
#`,
            ),
          )
      ;((this.skipRendering = t === 0),
        (this.needsSwap = !this.skipRendering),
        this.fullscreenMaterial.setShaderData(e))
    }
    recompile() {
      this.updateMaterial()
    }
    getDepthTexture() {
      return this.fullscreenMaterial.depthBuffer
    }
    setDepthTexture(e, t = fa) {
      ;((this.fullscreenMaterial.depthBuffer = e), (this.fullscreenMaterial.depthPacking = t))
      for (let n of this.effects) n.setDepthTexture(e, t)
    }
    render(e, t, n, r, i) {
      for (let n of this.effects) n.update(e, t, r)
      if (!this.skipRendering || this.renderToScreen) {
        let i = this.fullscreenMaterial
        ;((i.inputBuffer = t.texture),
          (i.time += r * this.timeScale),
          e.setRenderTarget(this.renderToScreen ? null : n),
          e.render(this.scene, this.camera))
      }
    }
    setSize(e, t) {
      this.fullscreenMaterial.setSize(e, t)
      for (let n of this.effects) n.setSize(e, t)
    }
    initialize(e, t, n) {
      this.renderer = e
      for (let r of this.effects) r.initialize(e, t, n)
      ;(this.updateMaterial(),
        n !== void 0 &&
          n !== 1009 &&
          (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`))
    }
    dispose() {
      super.dispose()
      for (let e of this.effects) (e.removeEventListener(`change`, this.listener), e.dispose())
    }
    handleEvent(e) {
      e.type === `change` && this.recompile()
    }
  },
  UO = class extends LD {
    constructor(
      e,
      t,
      {
        renderTarget: n,
        resolutionScale: r = 1,
        width: i = rO.AUTO_SIZE,
        height: a = rO.AUTO_SIZE,
        resolutionX: o = i,
        resolutionY: s = a,
      } = {},
    ) {
      ;(super(`NormalPass`), (this.needsSwap = !1), (this.renderPass = new EO(e, t, new kp())))
      let c = this.renderPass
      ;((c.ignoreBackground = !0), (c.skipShadowMapUpdate = !0))
      let l = c.getClearPass()
      ;((l.overrideClearColor = new X(7829503)),
        (l.overrideClearAlpha = 1),
        (this.renderTarget = n),
        this.renderTarget === void 0 &&
          ((this.renderTarget = new is(1, 1, { minFilter: Rr, magFilter: Rr })),
          (this.renderTarget.texture.name = `NormalPass.Target`)))
      let u = (this.resolution = new rO(this, o, s, r))
      u.addEventListener(`change`, (e) => this.setSize(u.baseWidth, u.baseHeight))
    }
    set mainScene(e) {
      this.renderPass.mainScene = e
    }
    set mainCamera(e) {
      this.renderPass.mainCamera = e
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
    getResolutionScale() {
      return this.resolution.scale
    }
    setResolutionScale(e) {
      this.resolution.scale = e
    }
    render(e, t, n, r, i) {
      let a = this.renderToScreen ? null : this.renderTarget
      this.renderPass.render(e, a, a)
    }
    setSize(e, t) {
      let n = this.resolution
      ;(n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height))
    }
  }
;(new Float32Array([0, 0, 0]),
  new Float32Array([1, 0, 0]),
  new Float32Array([1, 1, 0]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([1, 0, 0]),
  new Float32Array([1, 0, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 0, 1]),
  new Float32Array([1, 0, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 1, 0]),
  new Float32Array([1, 1, 0]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 1, 0]),
  new Float32Array([0, 1, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, 0, 0]),
  new Float32Array([0, 0, 1]),
  new Float32Array([0, 1, 1]),
  new Float32Array([1, 1, 1]),
  new Float32Array([0, -0.25, 0.25, -0.125, 0.125, -0.375, 0.375]),
  new Float32Array([0, 0]),
  new Float32Array([0.25, -0.25]),
  new Float32Array([-0.25, 0.25]),
  new Float32Array([0.125, -0.125]),
  new Float32Array([-0.125, 0.125]),
  new Uint8Array([0, 0]),
  new Uint8Array([3, 0]),
  new Uint8Array([0, 3]),
  new Uint8Array([3, 3]),
  new Uint8Array([1, 0]),
  new Uint8Array([4, 0]),
  new Uint8Array([1, 3]),
  new Uint8Array([4, 3]),
  new Uint8Array([0, 1]),
  new Uint8Array([3, 1]),
  new Uint8Array([0, 4]),
  new Uint8Array([3, 4]),
  new Uint8Array([1, 1]),
  new Uint8Array([4, 1]),
  new Uint8Array([1, 4]),
  new Uint8Array([4, 4]),
  new Uint8Array([0, 0]),
  new Uint8Array([1, 0]),
  new Uint8Array([0, 2]),
  new Uint8Array([1, 2]),
  new Uint8Array([2, 0]),
  new Uint8Array([3, 0]),
  new Uint8Array([2, 2]),
  new Uint8Array([3, 2]),
  new Uint8Array([0, 1]),
  new Uint8Array([1, 1]),
  new Uint8Array([0, 3]),
  new Uint8Array([1, 3]),
  new Uint8Array([2, 1]),
  new Uint8Array([3, 1]),
  new Uint8Array([2, 3]),
  new Uint8Array([3, 3]),
  GO(0, 0, 0, 0),
  new Float32Array([0, 0, 0, 0]),
  GO(0, 0, 0, 1),
  new Float32Array([0, 0, 0, 1]),
  GO(0, 0, 1, 0),
  new Float32Array([0, 0, 1, 0]),
  GO(0, 0, 1, 1),
  new Float32Array([0, 0, 1, 1]),
  GO(0, 1, 0, 0),
  new Float32Array([0, 1, 0, 0]),
  GO(0, 1, 0, 1),
  new Float32Array([0, 1, 0, 1]),
  GO(0, 1, 1, 0),
  new Float32Array([0, 1, 1, 0]),
  GO(0, 1, 1, 1),
  new Float32Array([0, 1, 1, 1]),
  GO(1, 0, 0, 0),
  new Float32Array([1, 0, 0, 0]),
  GO(1, 0, 0, 1),
  new Float32Array([1, 0, 0, 1]),
  GO(1, 0, 1, 0),
  new Float32Array([1, 0, 1, 0]),
  GO(1, 0, 1, 1),
  new Float32Array([1, 0, 1, 1]),
  GO(1, 1, 0, 0),
  new Float32Array([1, 1, 0, 0]),
  GO(1, 1, 0, 1),
  new Float32Array([1, 1, 0, 1]),
  GO(1, 1, 1, 0),
  new Float32Array([1, 1, 1, 0]),
  GO(1, 1, 1, 1),
  new Float32Array([1, 1, 1, 1]))
