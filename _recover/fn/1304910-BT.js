function BT(e, t, n) {
  let r = new ff(),
    i = n - zT
  return (
    r.absarc(zT, zT, zT, -Math.PI / 2, -Math.PI, !0),
    r.absarc(zT, t - i * 2, zT, Math.PI, Math.PI / 2, !0),
    r.absarc(e - i * 2, t - i * 2, zT, Math.PI / 2, 0, !0),
    r.absarc(e - i * 2, zT, zT, 0, -Math.PI / 2, !0),
    r
  )
}
var VT = v.forwardRef(function (
    {
      args: [e = 1, t = 1, n = 1] = [],
      radius: r = 0.05,
      steps: i = 1,
      smoothness: a = 4,
      bevelSegments: o = 4,
      creaseAngle: s = 0.4,
      children: c,
      ...l
    },
    u,
  ) {
    return v.createElement(
      `mesh`,
      OC({ ref: u }, l),
      v.createElement(HT, {
        args: [e, t, n],
        radius: r,
        steps: i,
        smoothness: a,
        bevelSegments: o,
        creaseAngle: s,
      }),
      c,
    )
  }),
  HT = v.forwardRef(function (
    {
      args: [e = 1, t = 1, n = 1] = [],
      radius: r = 0.05,
      steps: i = 1,
      smoothness: a = 4,
      bevelSegments: o = 4,
      creaseAngle: s = 0.4,
      ...c
    },
    l,
  ) {
    let u = v.useMemo(() => BT(e, t, r), [e, t, r]),
      d = v.useMemo(
        () => ({
          depth: n - r * 2,
          bevelEnabled: !0,
          bevelSegments: o * 2,
          steps: i,
          bevelSize: r - zT,
          bevelThickness: r,
          curveSegments: a,
        }),
        [n, r, a, o, i],
      ),
      f = v.useRef(null)
    return (
      v.useLayoutEffect(() => {
        f.current && (f.current.center(), BC(f.current, s))
      }, [u, d, s]),
      v.useImperativeHandle(l, () => f.current),
      v.createElement(`extrudeGeometry`, OC({ ref: f, args: [u, d] }, c))
    )
  }),
  UT = (e, t, n) => {
    let r
    switch (e) {
      case Jr:
        r = new Uint8ClampedArray(t * n * 4)
        break
      case ti:
        r = new Uint16Array(t * n * 4)
        break
      case $r:
        r = new Uint32Array(t * n * 4)
        break
      case Yr:
        r = new Int8Array(t * n * 4)
        break
      case Xr:
        r = new Int16Array(t * n * 4)
        break
      case Qr:
        r = new Int32Array(t * n * 4)
        break
      case ei:
        r = new Float32Array(t * n * 4)
        break
      default:
        throw Error(`Unsupported data type`)
    }
    return r
  },
  WT,
  GT = (e, t, n, r) => {
    if (WT !== void 0) return WT
    let i = new is(1, 1, r)
    t.setRenderTarget(i)
    let a = new Gl(new np(), new Nl({ color: 16777215 }))
    ;(t.render(a, n), t.setRenderTarget(null))
    let o = UT(e, i.width, i.height)
    return (
      t.readRenderTargetPixels(i, 0, 0, i.width, i.height, o),
      i.dispose(),
      a.geometry.dispose(),
      a.material.dispose(),
      (WT = o[0] !== 0),
      WT
    )
  },
  KT = class e {
    constructor(t) {
      ;(Q(this, `_renderer`, void 0),
        Q(this, `_rendererIsDisposable`, !1),
        Q(this, `_material`, void 0),
        Q(this, `_scene`, void 0),
        Q(this, `_camera`, void 0),
        Q(this, `_quad`, void 0),
        Q(this, `_renderTarget`, void 0),
        Q(this, `_width`, void 0),
        Q(this, `_height`, void 0),
        Q(this, `_type`, void 0),
        Q(this, `_colorSpace`, void 0),
        Q(this, `_supportsReadPixels`, !0),
        Q(this, `render`, () => {
          this._renderer.setRenderTarget(this._renderTarget)
          try {
            this._renderer.render(this._scene, this._camera)
          } catch (e) {
            throw (this._renderer.setRenderTarget(null), e)
          }
          this._renderer.setRenderTarget(null)
        }),
        (this._width = t.width),
        (this._height = t.height),
        (this._type = t.type),
        (this._colorSpace = t.colorSpace))
      let n = {
        format: li,
        depthBuffer: !1,
        stencilBuffer: !1,
        type: this._type,
        colorSpace: this._colorSpace,
        anisotropy:
          t.renderTargetOptions?.anisotropy === void 0 ? 1 : t.renderTargetOptions?.anisotropy,
        generateMipmaps:
          t.renderTargetOptions?.generateMipmaps !== void 0 &&
          t.renderTargetOptions?.generateMipmaps,
        magFilter:
          t.renderTargetOptions?.magFilter === void 0 ? Ur : t.renderTargetOptions?.magFilter,
        minFilter:
          t.renderTargetOptions?.minFilter === void 0 ? Ur : t.renderTargetOptions?.minFilter,
        samples:
          t.renderTargetOptions?.samples === void 0 ? void 0 : t.renderTargetOptions?.samples,
        wrapS: t.renderTargetOptions?.wrapS === void 0 ? Ir : t.renderTargetOptions?.wrapS,
        wrapT: t.renderTargetOptions?.wrapT === void 0 ? Ir : t.renderTargetOptions?.wrapT,
      }
      if (
        ((this._material = t.material),
        t.renderer
          ? (this._renderer = t.renderer)
          : ((this._renderer = e.instantiateRenderer()), (this._rendererIsDisposable = !0)),
        (this._scene = new qs()),
        (this._camera = new Um()),
        this._camera.position.set(0, 0, 10),
        (this._camera.left = -0.5),
        (this._camera.right = 0.5),
        (this._camera.top = 0.5),
        (this._camera.bottom = -0.5),
        this._camera.updateProjectionMatrix(),
        !GT(this._type, this._renderer, this._camera, n))
      ) {
        let e
        switch (this._type) {
          case ti:
            e = this._renderer.extensions.has(`EXT_color_buffer_float`) ? ei : void 0
        }
        e === void 0
          ? ((this._supportsReadPixels = !1),
            console.warn(
              `This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown`,
            ))
          : (console.warn(
              `This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${ei}`,
            ),
            (this._type = e))
      }
      ;((this._quad = new Gl(new np(), this._material)),
        this._quad.geometry.computeBoundingBox(),
        this._scene.add(this._quad),
        (this._renderTarget = new is(this.width, this.height, n)),
        (this._renderTarget.texture.mapping =
          t.renderTargetOptions?.mapping === void 0 ? 300 : t.renderTargetOptions?.mapping))
    }
    static instantiateRenderer() {
      let e = new _b()
      return (e.setSize(128, 128), e)
    }
    toArray() {
      if (!this._supportsReadPixels) throw Error(`Can't read pixels in this browser`)
      let e = UT(this._type, this._width, this._height)
      return (
        this._renderer.readRenderTargetPixels(
          this._renderTarget,
          0,
          0,
          this._width,
          this._height,
          e,
        ),
        e
      )
    }
    toDataTexture(e) {
      let t = new au(
        this.toArray(),
        this.width,
        this.height,
        li,
        this._type,
        e?.mapping || 300,
        e?.wrapS || 1001,
        e?.wrapT || 1001,
        e?.magFilter || 1006,
        e?.minFilter || 1006,
        e?.anisotropy || 1,
        _a,
      )
      return ((t.generateMipmaps = e?.generateMipmaps !== void 0 && e?.generateMipmaps), t)
    }
    disposeOnDemandRenderer() {
      ;(this._renderer.setRenderTarget(null),
        this._rendererIsDisposable &&
          (this._renderer.dispose(), this._renderer.forceContextLoss()))
    }
    dispose(e) {
      ;(this.disposeOnDemandRenderer(),
        e && this.renderTarget.dispose(),
        this.material instanceof Cp &&
          Object.values(this.material.uniforms).forEach((e) => {
            e.value instanceof ts && e.value.dispose()
          }),
        Object.values(this.material).forEach((e) => {
          e instanceof ts && e.dispose()
        }),
        this.material.dispose(),
        this._quad.geometry.dispose())
    }
    get width() {
      return this._width
    }
    set width(e) {
      ;((this._width = e), this._renderTarget.setSize(this._width, this._height))
    }
    get height() {
      return this._height
    }
    set height(e) {
      ;((this._height = e), this._renderTarget.setSize(this._width, this._height))
    }
    get renderer() {
      return this._renderer
    }
    get renderTarget() {
      return this._renderTarget
    }
    set renderTarget(e) {
      ;((this._renderTarget = e), (this._width = e.width), (this._height = e.height))
    }
    get material() {
      return this._material
    }
    get type() {
      return this._type
    }
    get colorSpace() {
      return this._colorSpace
    }
  },
  qT = `urn:iso:std:iso:ts:21496:-1\0`,
  JT = 128,
  YT = 8,
  XT = 4,
  ZT = (e) => {
    let t = new DataView(e.buffer, e.byteOffset, e.byteLength),
      n = 0,
      r = () => {
        let e = t.getUint16(n)
        return ((n += 2), e)
      },
      i = () => {
        let e = t.getUint32(n)
        return ((n += 4), e)
      },
      a = () => {
        let e = t.getInt32(n)
        return ((n += 4), e)
      },
      o = r()
    if (o !== 0) throw Error(`Unsupported ISO 21496-1 minimum_version ${o}`)
    r()
    let s = t.getUint8(n++)
    if (s & XT) throw Error(`ISO 21496-1 metadata with HDR base image is not supported`)
    let c = s & JT ? 3 : 1,
      l = s & YT ? i() : void 0,
      u = (e) => {
        let t = e ? a() : i(),
          n = l ?? i()
        if (n === 0) throw Error(`Invalid ISO 21496-1 fraction with zero denominator`)
        return t / n
      },
      d = u(!1),
      f = u(!1)
    if (d > f) throw Error(`ISO 21496-1 metadata with HDR base image is not supported`)
    let p = [],
      m = [],
      h = [],
      g = [],
      _ = []
    for (let e = 0; e < c; e++)
      (p.push(u(!0)), m.push(u(!0)), h.push(u(!1)), g.push(u(!0)), _.push(u(!0)))
    let v = (e) => (c === 3 ? e : [e[0], e[0], e[0]])
    return {
      gainMapMin: v(p),
      gainMapMax: v(m),
      gamma: v(h),
      offsetSdr: v(g),
      offsetHdr: v(_),
      hdrCapacityMin: d,
      hdrCapacityMax: f,
    }
  },
  QT = class extends Error {},
  $T = class extends Error {},
  eE = Array.from(qT, (e) => e.charCodeAt(0)),
  tE = (e) => {
    let t = new DataView(e.buffer, e.byteOffset, e.byteLength),
      n = 4 + eE.length
    for (let r = 0; r + n < e.length; r++) {
      if (e[r] !== 255 || e[r + 1] !== 226 || !eE.every((t, n) => e[r + 4 + n] === t)) continue
      let i = Math.min(e.length, r + 2 + t.getUint16(r + 2))
      if (!(i - (r + n) <= 4))
        try {
          return ZT(e.subarray(r + n, i))
        } catch {
          return
        }
    }
  },
  nE = (e, t, n) => {
    let r = RegExp(`${t}="([^"]*)"`, `i`).exec(e)
    if (r) return r[1]
    let i = RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, `i`).exec(e)
    if (i) {
      let e = i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g)
      return e && e.length === 3 ? e.map((e) => e.replace(/<\/?rdf:li>/g, ``)) : i[1].trim()
    }
    if (n !== void 0) return n
    throw Error(`Can't find ${t} in gainmap metadata`)
  },
  rE = (e) => {
    let t
    t = typeof TextDecoder < `u` ? new TextDecoder().decode(e) : e.toString()
    let n = t.indexOf(`<x:xmpmeta`)
    for (; n !== -1;) {
      let e = t.indexOf(`x:xmpmeta>`, n),
        r = t.slice(n, e + 10)
      try {
        let e = nE(r, `hdrgm:GainMapMin`, `0`),
          t = nE(r, `hdrgm:GainMapMax`),
          n = nE(r, `hdrgm:Gamma`, `1`),
          i = nE(r, `hdrgm:OffsetSDR`, `0.015625`),
          a = nE(r, `hdrgm:OffsetHDR`, `0.015625`),
          o = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(r),
          s = o ? o[1] : `0`,
          c = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(r)
        if (!c) throw Error(`Incomplete gainmap metadata`)
        let l = c[1]
        return {
          gainMapMin: Array.isArray(e)
            ? e.map((e) => parseFloat(e))
            : [parseFloat(e), parseFloat(e), parseFloat(e)],
          gainMapMax: Array.isArray(t)
            ? t.map((e) => parseFloat(e))
            : [parseFloat(t), parseFloat(t), parseFloat(t)],
          gamma: Array.isArray(n)
            ? n.map((e) => parseFloat(e))
            : [parseFloat(n), parseFloat(n), parseFloat(n)],
          offsetSdr: Array.isArray(i)
            ? i.map((e) => parseFloat(e))
            : [parseFloat(i), parseFloat(i), parseFloat(i)],
          offsetHdr: Array.isArray(a)
            ? a.map((e) => parseFloat(e))
            : [parseFloat(a), parseFloat(a), parseFloat(a)],
          hdrCapacityMin: parseFloat(s),
          hdrCapacityMax: parseFloat(l),
        }
      } catch {}
      n = t.indexOf(`<x:xmpmeta`, e)
    }
  },
  iE = class {
    constructor(e) {
      ;(Q(this, `options`, void 0),
        (this.options = {
          debug: e && e.debug !== void 0 ? e.debug : !1,
          extractFII: e && e.extractFII !== void 0 ? e.extractFII : !0,
          extractNonFII: e && e.extractNonFII !== void 0 ? e.extractNonFII : !0,
        }))
    }
    extract(e) {
      return new Promise((t, n) => {
        let r = this.options.debug,
          i = new DataView(e.buffer)
        if (i.getUint16(0) !== 65496) {
          n(Error(`Not a valid jpeg`))
          return
        }
        let a = i.byteLength,
          o = 2,
          s = 0,
          c
        for (; o < a;) {
          if (++s > 250) {
            n(Error(`Found no marker after ${s} loops 😵`))
            return
          }
          if (i.getUint8(o) !== 255) {
            n(
              Error(
                `Not a valid marker at offset 0x${o.toString(16)}, found: 0x${i.getUint8(o).toString(16)}`,
              ),
            )
            return
          }
          if (
            ((c = i.getUint8(o + 1)), r && console.log(`Marker: ${c.toString(16)}`), c === 226)
          ) {
            r && console.log(`Found APP2 marker (0xffe2)`)
            let e = o + 4
            if (i.getUint32(e) === 1297106432) {
              let r = e + 4,
                a
              if (i.getUint16(r) === 18761) a = !1
              else if (i.getUint16(r) === 19789) a = !0
              else {
                n(Error(`No valid endianness marker found in TIFF header`))
                return
              }
              if (i.getUint16(r + 2, !a) !== 42) {
                n(Error(`Not valid TIFF data! (no 0x002A marker)`))
                return
              }
              let o = i.getUint32(r + 4, !a)
              if (o < 8) {
                n(Error(`Not valid TIFF data! (First offset less than 8)`))
                return
              }
              let s = r + o,
                c = i.getUint16(s, !a),
                l = s + 2,
                u = 0
              for (let e = l; e < l + 12 * c; e += 12)
                i.getUint16(e, !a) === 45057 && (u = i.getUint32(e + 8, !a))
              let d = s + 2 + c * 12 + 4,
                f = []
              for (let e = d; e < d + u * 16; e += 16) {
                let t = {
                  MPType: i.getUint32(e, !a),
                  size: i.getUint32(e + 4, !a),
                  dataOffset: i.getUint32(e + 8, !a),
                  dependantImages: i.getUint32(e + 12, !a),
                  start: -1,
                  end: -1,
                  isFII: !1,
                }
                ;(t.dataOffset
                  ? ((t.start = r + t.dataOffset), (t.isFII = !1))
                  : ((t.start = 0), (t.isFII = !0)),
                  (t.end = t.start + t.size),
                  f.push(t))
              }
              if (this.options.extractNonFII && f.length) {
                let e = new Blob([i]),
                  n = []
                for (let t of f) {
                  if (t.isFII && !this.options.extractFII) continue
                  let r = e.slice(t.start, t.end + 1, `image/jpeg`)
                  n.push(r)
                }
                t(n)
              }
            }
          }
          o += 2 + i.getUint16(o + 2)
        }
      })
    }
  },
  aE = async (e) => {
    let t = tE(e) ?? rE(e)
    if (!t) throw new $T(`Gain map XMP metadata not found`)
    let n = await new iE({ extractFII: !0, extractNonFII: !0 }).extract(e)
    if (n.length !== 2) throw new QT(`Gain map recovery image not found`)
    return {
      sdr: new Uint8Array(await n[0].arrayBuffer()),
      gainMap: new Uint8Array(await n[1].arrayBuffer()),
      metadata: t,
    }
  },
  oE = (e) =>
    new Promise((t, n) => {
      let r = document.createElement(`img`)
      ;((r.onload = () => {
        t(r)
      }),
        (r.onerror = (e) => {
          n(e)
        }),
        (r.src = URL.createObjectURL(e)))
    }),
  sE = async (e, t, n) => {
    let r = t ? new Blob([t], { type: `image/jpeg` }) : void 0,
      i = new Blob([e], { type: `image/jpeg` }),
      a,
      o,
      s = !1
    if (typeof createImageBitmap > `u`) {
      let e = await Promise.all([r ? oE(r) : Promise.resolve(void 0), oE(i)])
      ;((o = e[0]), (a = e[1]), (s = n === `flipY`))
    } else {
      let e = await Promise.all([
        r ? createImageBitmap(r, { imageOrientation: n || `flipY` }) : Promise.resolve(void 0),
        createImageBitmap(i, { imageOrientation: n || `flipY` }),
      ])
      ;((o = e[0]), (a = e[1]))
    }
    return { sdrImage: a, gainMapImage: o, needsFlip: s }
  },
  cE = (e, t, n) => {
    let r = new ts(t || new ImageData(2, 2), 300, Ir, Ir, Ur, qr, li, Jr, 1, _a)
    ;((r.flipY = n), (r.needsUpdate = !0))
    let i = new ts(e, 300, Ir, Ir, Ur, qr, li, Jr, 1, ga)
    return ((i.flipY = n), (i.needsUpdate = !0), { gainMap: r, sdr: i })
  },
  lE = class extends mm {
    constructor(e, t) {
      ;(super(t),
        Q(this, `_renderer`, void 0),
        Q(this, `_renderTargetOptions`, void 0),
        Q(this, `_internalLoadingManager`, void 0),
        Q(this, `_config`, void 0),
        (this._config = e),
        e.renderer && (this._renderer = e.renderer),
        (this._internalLoadingManager = new fm()))
    }
    setRenderer(e) {
      return ((this._renderer = e), this)
    }
    setRenderTargetOptions(e) {
      return ((this._renderTargetOptions = e), this)
    }
    prepareQuadRenderer() {
      this._renderer ||
        console.warn(
          `WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.`,
        )
      let e = this._config.createMaterial({
        gainMapMax: [1, 1, 1],
        gainMapMin: [0, 0, 0],
        gamma: [1, 1, 1],
        offsetHdr: [1, 1, 1],
        offsetSdr: [1, 1, 1],
        hdrCapacityMax: 1,
        hdrCapacityMin: 0,
        maxDisplayBoost: 1,
        gainMap: new ts(),
        sdr: new ts(),
      })
      return this._config.createQuadRenderer({
        width: 16,
        height: 16,
        type: ti,
        colorSpace: _a,
        material: e,
        renderer: this._renderer,
        renderTargetOptions: this._renderTargetOptions,
      })
    }
    processImages(e, t, n) {
      return sE(e, t, n)
    }
    createTextures(e, t, n) {
      return cE(e, t, n)
    }
    updateQuadRenderer(e, t, n, r, i) {
      ;((e.width = t.width),
        (e.height = t.height),
        (e.material.gainMap = n),
        (e.material.sdr = r),
        (e.material.gainMapMin = i.gainMapMin),
        (e.material.gainMapMax = i.gainMapMax),
        (e.material.offsetHdr = i.offsetHdr),
        (e.material.offsetSdr = i.offsetSdr),
        (e.material.gamma = i.gamma),
        (e.material.hdrCapacityMin = i.hdrCapacityMin),
        (e.material.hdrCapacityMax = i.hdrCapacityMax),
        (e.material.maxDisplayBoost = 2 ** i.hdrCapacityMax),
        (e.material.needsUpdate = !0))
    }
  },
  uE = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  dE = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`,
  fE = class extends Cp {
    constructor({
      gamma: e,
      offsetHdr: t,
      offsetSdr: n,
      gainMapMin: r,
      gainMapMax: i,
      maxDisplayBoost: a,
      hdrCapacityMin: o,
      hdrCapacityMax: s,
      sdr: c,
      gainMap: l,
    }) {
      ;(super({
        name: `GainMapDecoderMaterial`,
        vertexShader: uE,
        fragmentShader: dE,
        uniforms: {
          sdr: { value: c },
          gainMap: { value: l },
          gamma: { value: new Y(1 / e[0], 1 / e[1], 1 / e[2]) },
          offsetHdr: { value: new Y().fromArray(t) },
          offsetSdr: { value: new Y().fromArray(n) },
          gainMapMin: { value: new Y().fromArray(r) },
          gainMapMax: { value: new Y().fromArray(i) },
          weightFactor: { value: (Math.log2(a) - o) / (s - o) },
        },
        blending: 0,
        depthTest: !1,
        depthWrite: !1,
      }),
        Q(this, `_maxDisplayBoost`, void 0),
        Q(this, `_hdrCapacityMin`, void 0),
        Q(this, `_hdrCapacityMax`, void 0),
        (this._maxDisplayBoost = a),
        (this._hdrCapacityMin = o),
        (this._hdrCapacityMax = s),
        (this.needsUpdate = !0),
        (this.uniformsNeedUpdate = !0))
    }
    get sdr() {
      return this.uniforms.sdr.value
    }
    set sdr(e) {
      this.uniforms.sdr.value = e
    }
    get gainMap() {
      return this.uniforms.gainMap.value
    }
    set gainMap(e) {
      this.uniforms.gainMap.value = e
    }
    get offsetHdr() {
      return this.uniforms.offsetHdr.value.toArray()
    }
    set offsetHdr(e) {
      this.uniforms.offsetHdr.value.fromArray(e)
    }
    get offsetSdr() {
      return this.uniforms.offsetSdr.value.toArray()
    }
    set offsetSdr(e) {
      this.uniforms.offsetSdr.value.fromArray(e)
    }
    get gainMapMin() {
      return this.uniforms.gainMapMin.value.toArray()
    }
    set gainMapMin(e) {
      this.uniforms.gainMapMin.value.fromArray(e)
    }
    get gainMapMax() {
      return this.uniforms.gainMapMax.value.toArray()
    }
    set gainMapMax(e) {
      this.uniforms.gainMapMax.value.fromArray(e)
    }
    get gamma() {
      let e = this.uniforms.gamma.value
      return [1 / e.x, 1 / e.y, 1 / e.z]
    }
    set gamma(e) {
      let t = this.uniforms.gamma.value
      ;((t.x = 1 / e[0]), (t.y = 1 / e[1]), (t.z = 1 / e[2]))
    }
    get hdrCapacityMin() {
      return this._hdrCapacityMin
    }
    set hdrCapacityMin(e) {
      ;((this._hdrCapacityMin = e), this.calculateWeight())
    }
    get hdrCapacityMax() {
      return this._hdrCapacityMax
    }
    set hdrCapacityMax(e) {
      ;((this._hdrCapacityMax = e), this.calculateWeight())
    }
    get maxDisplayBoost() {
      return this._maxDisplayBoost
    }
    set maxDisplayBoost(e) {
      ;((this._maxDisplayBoost = Math.max(1, Math.min(65504, e))), this.calculateWeight())
    }
    calculateWeight() {
      let e =
        (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) /
        (this._hdrCapacityMax - this._hdrCapacityMin)
      this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e))
    }
  },
  pE = class extends lE {
    constructor(e, t) {
      super(
        { renderer: e, createMaterial: (e) => new fE(e), createQuadRenderer: (e) => new KT(e) },
        t,
      )
    }
    async render(e, t, n, r) {
      let {
          sdrImage: i,
          gainMapImage: a,
          needsFlip: o,
        } = await this.processImages(n, r, `flipY`),
        { gainMap: s, sdr: c } = this.createTextures(i, a, o)
      ;(this.updateQuadRenderer(e, i, s, c, t), e.render())
    }
  },
  mE = class extends pE {
    load([e, t, n], r, i, a) {
      let o = this.prepareQuadRenderer(),
        s,
        c,
        l,
        u = async () => {
          if (s && c && l) {
            try {
              await this.render(o, l, s, c)
            } catch (r) {
              ;(this.manager.itemError(e),
                this.manager.itemError(t),
                this.manager.itemError(n),
                typeof a == `function` && a(r),
                o.disposeOnDemandRenderer())
              return
            }
            ;(typeof r == `function` && r(o),
              this.manager.itemEnd(e),
              this.manager.itemEnd(t),
              this.manager.itemEnd(n),
              o.disposeOnDemandRenderer())
          }
        },
        d = !0,
        f = 0,
        p = 0,
        m = !0,
        h = 0,
        g = 0,
        _ = !0,
        v = 0,
        y = 0,
        b = () => {
          if (typeof i == `function`) {
            let e = f + h + v,
              t = p + g + y
            i(
              new ProgressEvent(`progress`, {
                lengthComputable: d && m && _,
                loaded: t,
                total: e,
              }),
            )
          }
        }
      ;(this.manager.itemStart(e), this.manager.itemStart(t), this.manager.itemStart(n))
      let x = new _m(this._internalLoadingManager)
      ;(x.setResponseType(`arraybuffer`),
        x.setRequestHeader(this.requestHeader),
        x.setPath(this.path),
        x.setWithCredentials(this.withCredentials),
        x.load(
          e,
          async (e) => {
            if (typeof e == `string`) throw Error(`Invalid sdr buffer`)
            ;((s = e), await u())
          },
          (e) => {
            ;((d = e.lengthComputable), (p = e.loaded), (f = e.total), b())
          },
          (t) => {
            ;(this.manager.itemError(e), typeof a == `function` && a(t))
          },
        ))
      let S = new _m(this._internalLoadingManager)
      ;(S.setResponseType(`arraybuffer`),
        S.setRequestHeader(this.requestHeader),
        S.setPath(this.path),
        S.setWithCredentials(this.withCredentials),
        S.load(
          t,
          async (e) => {
            if (typeof e == `string`) throw Error(`Invalid gainmap buffer`)
            ;((c = e), await u())
          },
          (e) => {
            ;((m = e.lengthComputable), (g = e.loaded), (h = e.total), b())
          },
          (e) => {
            ;(this.manager.itemError(t), typeof a == `function` && a(e))
          },
        ))
      let C = new _m(this._internalLoadingManager)
      return (
        C.setRequestHeader(this.requestHeader),
        C.setPath(this.path),
        C.setWithCredentials(this.withCredentials),
        C.load(
          n,
          async (e) => {
            if (typeof e != `string`) throw Error(`Invalid metadata string`)
            ;((l = JSON.parse(e)), await u())
          },
          (e) => {
            ;((_ = e.lengthComputable), (y = e.loaded), (v = e.total), b())
          },
          (e) => {
            ;(this.manager.itemError(n), typeof a == `function` && a(e))
          },
        ),
        o
      )
    }
  },
  hE = class extends pE {
    load(e, t, n, r) {
      let i = this.prepareQuadRenderer(),
        a = new _m(this._internalLoadingManager)
      return (
        a.setResponseType(`arraybuffer`),
        a.setRequestHeader(this.requestHeader),
        a.setPath(this.path),
        a.setWithCredentials(this.withCredentials),
        this.manager.itemStart(e),
        a.load(
          e,
          async (n) => {
            if (typeof n == `string`)
              throw Error(`Invalid buffer, received [string], was expecting [ArrayBuffer]`)
            let a = new Uint8Array(n),
              o,
              s,
              c
            try {
              let e = await aE(a)
              ;((o = e.sdr), (s = e.gainMap), (c = e.metadata))
            } catch (t) {
              if (t instanceof $T || t instanceof QT)
                (console.warn(
                  `Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`,
                ),
                  (c = {
                    gainMapMin: [0, 0, 0],
                    gainMapMax: [1, 1, 1],
                    gamma: [1, 1, 1],
                    hdrCapacityMin: 0,
                    hdrCapacityMax: 1,
                    offsetHdr: [0, 0, 0],
                    offsetSdr: [0, 0, 0],
                  }),
                  (o = a))
              else throw t
            }
            try {
              await this.render(i, c, o.buffer, s?.buffer)
            } catch (t) {
              ;(this.manager.itemError(e),
                typeof r == `function` && r(t),
                i.disposeOnDemandRenderer())
              return
            }
            ;(typeof t == `function` && t(i),
              this.manager.itemEnd(e),
              i.disposeOnDemandRenderer())
          },
          n,
          (t) => {
            ;(this.manager.itemError(e), typeof r == `function` && r(t))
          },
        ),
        i
      )
    }
  },
  gE = {
    apartment: `lebombo_1k.hdr`,
    city: `potsdamer_platz_1k.hdr`,
    dawn: `kiara_1_dawn_1k.hdr`,
    forest: `forest_slope_1k.hdr`,
    lobby: `st_fagans_interior_1k.hdr`,
    night: `dikhololo_night_1k.hdr`,
    park: `rooitou_park_1k.hdr`,
    studio: `studio_small_03_1k.hdr`,
    sunset: `venice_sunset_1k.hdr`,
    warehouse: `empty_warehouse_01_1k.hdr`,
  },
  _E = `https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/`,
  vE = (e) => Array.isArray(e),
  yE = [`/px.png`, `/nx.png`, `/py.png`, `/ny.png`, `/pz.png`, `/nz.png`]
