function Tw() {
  let e = {}
  return {
    get: function (t) {
      return e[t]
    },
    add: function (t, n) {
      e[t] = n
    },
    remove: function (t) {
      delete e[t]
    },
    removeAll: function () {
      e = {}
    },
  }
}
var Ew = {
    KHR_BINARY_GLTF: `KHR_binary_glTF`,
    KHR_DRACO_MESH_COMPRESSION: `KHR_draco_mesh_compression`,
    KHR_LIGHTS_PUNCTUAL: `KHR_lights_punctual`,
    KHR_MATERIALS_CLEARCOAT: `KHR_materials_clearcoat`,
    KHR_MATERIALS_DISPERSION: `KHR_materials_dispersion`,
    KHR_MATERIALS_IOR: `KHR_materials_ior`,
    KHR_MATERIALS_SHEEN: `KHR_materials_sheen`,
    KHR_MATERIALS_SPECULAR: `KHR_materials_specular`,
    KHR_MATERIALS_TRANSMISSION: `KHR_materials_transmission`,
    KHR_MATERIALS_IRIDESCENCE: `KHR_materials_iridescence`,
    KHR_MATERIALS_ANISOTROPY: `KHR_materials_anisotropy`,
    KHR_MATERIALS_UNLIT: `KHR_materials_unlit`,
    KHR_MATERIALS_VOLUME: `KHR_materials_volume`,
    KHR_TEXTURE_BASISU: `KHR_texture_basisu`,
    KHR_TEXTURE_TRANSFORM: `KHR_texture_transform`,
    KHR_MESH_QUANTIZATION: `KHR_mesh_quantization`,
    KHR_MATERIALS_EMISSIVE_STRENGTH: `KHR_materials_emissive_strength`,
    EXT_MATERIALS_BUMP: `EXT_materials_bump`,
    EXT_TEXTURE_WEBP: `EXT_texture_webp`,
    EXT_TEXTURE_AVIF: `EXT_texture_avif`,
    EXT_MESHOPT_COMPRESSION: `EXT_meshopt_compression`,
    EXT_MESH_GPU_INSTANCING: `EXT_mesh_gpu_instancing`,
  },
  Dw = class {
    constructor(e) {
      ;((this.parser = e),
        (this.name = Ew.KHR_LIGHTS_PUNCTUAL),
        (this.cache = { refs: {}, uses: {} }))
    }
    _markDefs() {
      let e = this.parser,
        t = this.parser.json.nodes || []
      for (let n = 0, r = t.length; n < r; n++) {
        let r = t[n]
        r.extensions &&
          r.extensions[this.name] &&
          r.extensions[this.name].light !== void 0 &&
          e._addNodeRef(this.cache, r.extensions[this.name].light)
      }
    }
    _loadLight(e) {
      let t = this.parser,
        n = `light:` + e,
        r = t.cache.get(n)
      if (r) return r
      let i = t.json,
        a = (((i.extensions && i.extensions[this.name]) || {}).lights || [])[e],
        o,
        s = new X(16777215)
      a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], xw)
      let c = a.range === void 0 ? 0 : a.range
      switch (a.type) {
        case `directional`:
          ;((o = new Gm(s)), o.target.position.set(0, 0, -1), o.add(o.target))
          break
        case `point`:
          ;((o = new Hm(s)), (o.distance = c))
          break
        case `spot`:
          ;((o = new Bm(s)),
            (o.distance = c),
            (a.spot = a.spot || {}),
            (a.spot.innerConeAngle =
              a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle),
            (a.spot.outerConeAngle =
              a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle),
            (o.angle = a.spot.outerConeAngle),
            (o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
            o.target.position.set(0, 0, -1),
            o.add(o.target))
          break
        default:
          throw Error(`THREE.GLTFLoader: Unexpected light type: ` + a.type)
      }
      return (
        o.position.set(0, 0, 0),
        (o.decay = 2),
        fT(o, a),
        a.intensity !== void 0 && (o.intensity = a.intensity),
        (o.name = t.createUniqueName(a.name || `light_` + e)),
        (r = Promise.resolve(o)),
        t.cache.add(n, r),
        r
      )
    }
    getDependency(e, t) {
      if (e === `light`) return this._loadLight(t)
    }
    createNodeAttachment(e) {
      let t = this,
        n = this.parser,
        r = n.json.nodes[e],
        i = ((r.extensions && r.extensions[this.name]) || {}).light
      return i === void 0
        ? null
        : this._loadLight(i).then(function (e) {
            return n._getNodeRef(t.cache, i, e)
          })
    }
  },
  Ow = class {
    constructor() {
      this.name = Ew.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
      return Nl
    }
    extendParams(e, t, n) {
      let r = []
      ;((e.color = new X(1, 1, 1)), (e.opacity = 1))
      let i = t.pbrMetallicRoughness
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          let t = i.baseColorFactor
          ;(e.color.setRGB(t[0], t[1], t[2], xw), (e.opacity = t[3]))
        }
        i.baseColorTexture !== void 0 &&
          r.push(n.assignTexture(e, `map`, i.baseColorTexture, bw))
      }
      return Promise.all(r)
    }
  },
  kw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_EMISSIVE_STRENGTH))
    }
    extendMaterialParams(e, t) {
      let n = this.parser.json.materials[e]
      if (!n.extensions || !n.extensions[this.name]) return Promise.resolve()
      let r = n.extensions[this.name].emissiveStrength
      return (r !== void 0 && (t.emissiveIntensity = r), Promise.resolve())
    }
  },
  Aw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_CLEARCOAT))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = [],
        a = r.extensions[this.name]
      if (
        (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
        a.clearcoatTexture !== void 0 &&
          i.push(n.assignTexture(t, `clearcoatMap`, a.clearcoatTexture)),
        a.clearcoatRoughnessFactor !== void 0 &&
          (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
        a.clearcoatRoughnessTexture !== void 0 &&
          i.push(n.assignTexture(t, `clearcoatRoughnessMap`, a.clearcoatRoughnessTexture)),
        a.clearcoatNormalTexture !== void 0 &&
          (i.push(n.assignTexture(t, `clearcoatNormalMap`, a.clearcoatNormalTexture)),
          a.clearcoatNormalTexture.scale !== void 0))
      ) {
        let e = a.clearcoatNormalTexture.scale
        t.clearcoatNormalScale = new J(e, e)
      }
      return Promise.all(i)
    }
  },
  jw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_DISPERSION))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser.json.materials[e]
      if (!n.extensions || !n.extensions[this.name]) return Promise.resolve()
      let r = n.extensions[this.name]
      return ((t.dispersion = r.dispersion === void 0 ? 0 : r.dispersion), Promise.resolve())
    }
  },
  Mw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_IRIDESCENCE))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = [],
        a = r.extensions[this.name]
      return (
        a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
        a.iridescenceTexture !== void 0 &&
          i.push(n.assignTexture(t, `iridescenceMap`, a.iridescenceTexture)),
        a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
        t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]),
        a.iridescenceThicknessMinimum !== void 0 &&
          (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
        a.iridescenceThicknessMaximum !== void 0 &&
          (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
        a.iridescenceThicknessTexture !== void 0 &&
          i.push(n.assignTexture(t, `iridescenceThicknessMap`, a.iridescenceThicknessTexture)),
        Promise.all(i)
      )
    }
  },
  Nw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_SHEEN))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = []
      ;((t.sheenColor = new X(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1))
      let a = r.extensions[this.name]
      if (a.sheenColorFactor !== void 0) {
        let e = a.sheenColorFactor
        t.sheenColor.setRGB(e[0], e[1], e[2], xw)
      }
      return (
        a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor),
        a.sheenColorTexture !== void 0 &&
          i.push(n.assignTexture(t, `sheenColorMap`, a.sheenColorTexture, bw)),
        a.sheenRoughnessTexture !== void 0 &&
          i.push(n.assignTexture(t, `sheenRoughnessMap`, a.sheenRoughnessTexture)),
        Promise.all(i)
      )
    }
  },
  Pw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_TRANSMISSION))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = [],
        a = r.extensions[this.name]
      return (
        a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor),
        a.transmissionTexture !== void 0 &&
          i.push(n.assignTexture(t, `transmissionMap`, a.transmissionTexture)),
        Promise.all(i)
      )
    }
  },
  Fw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_VOLUME))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = [],
        a = r.extensions[this.name]
      ;((t.thickness = a.thicknessFactor === void 0 ? 0 : a.thicknessFactor),
        a.thicknessTexture !== void 0 &&
          i.push(n.assignTexture(t, `thicknessMap`, a.thicknessTexture)),
        (t.attenuationDistance = a.attenuationDistance || 1 / 0))
      let o = a.attenuationColor || [1, 1, 1]
      return ((t.attenuationColor = new X().setRGB(o[0], o[1], o[2], xw)), Promise.all(i))
    }
  },
  Iw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_IOR))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser.json.materials[e]
      if (!n.extensions || !n.extensions[this.name]) return Promise.resolve()
      let r = n.extensions[this.name]
      return ((t.ior = r.ior === void 0 ? 1.5 : r.ior), Promise.resolve())
    }
  },
  Lw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_SPECULAR))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = [],
        a = r.extensions[this.name]
      ;((t.specularIntensity = a.specularFactor === void 0 ? 1 : a.specularFactor),
        a.specularTexture !== void 0 &&
          i.push(n.assignTexture(t, `specularIntensityMap`, a.specularTexture)))
      let o = a.specularColorFactor || [1, 1, 1]
      return (
        (t.specularColor = new X().setRGB(o[0], o[1], o[2], xw)),
        a.specularColorTexture !== void 0 &&
          i.push(n.assignTexture(t, `specularColorMap`, a.specularColorTexture, bw)),
        Promise.all(i)
      )
    }
  },
  Rw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.EXT_MATERIALS_BUMP))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = [],
        a = r.extensions[this.name]
      return (
        (t.bumpScale = a.bumpFactor === void 0 ? 1 : a.bumpFactor),
        a.bumpTexture !== void 0 && i.push(n.assignTexture(t, `bumpMap`, a.bumpTexture)),
        Promise.all(i)
      )
    }
  },
  zw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_MATERIALS_ANISOTROPY))
    }
    getMaterialType(e) {
      let t = this.parser.json.materials[e]
      return !t.extensions || !t.extensions[this.name] ? null : Ep
    }
    extendMaterialParams(e, t) {
      let n = this.parser,
        r = n.json.materials[e]
      if (!r.extensions || !r.extensions[this.name]) return Promise.resolve()
      let i = [],
        a = r.extensions[this.name]
      return (
        a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
        a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation),
        a.anisotropyTexture !== void 0 &&
          i.push(n.assignTexture(t, `anisotropyMap`, a.anisotropyTexture)),
        Promise.all(i)
      )
    }
  },
  Bw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.KHR_TEXTURE_BASISU))
    }
    loadTexture(e) {
      let t = this.parser,
        n = t.json,
        r = n.textures[e]
      if (!r.extensions || !r.extensions[this.name]) return null
      let i = r.extensions[this.name],
        a = t.options.ktx2Loader
      if (!a) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
          throw Error(
            `THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`,
          )
        return null
      }
      return t.loadTextureImage(e, i.source, a)
    }
  },
  Vw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.EXT_TEXTURE_WEBP), (this.isSupported = null))
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e]
      if (!i.extensions || !i.extensions[t]) return null
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri)
        e !== null && (s = e)
      }
      return this.detectSupport().then(function (i) {
        if (i) return n.loadTextureImage(e, a.source, s)
        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0)
          throw Error(`THREE.GLTFLoader: WebP required by asset but unsupported.`)
        return n.loadTexture(e)
      })
    }
    detectSupport() {
      return (
        this.isSupported ||
          (this.isSupported = new Promise(function (e) {
            let t = new Image()
            ;((t.src = `data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`),
              (t.onload = t.onerror =
                function () {
                  e(t.height === 1)
                }))
          })),
        this.isSupported
      )
    }
  },
  Hw = class {
    constructor(e) {
      ;((this.parser = e), (this.name = Ew.EXT_TEXTURE_AVIF), (this.isSupported = null))
    }
    loadTexture(e) {
      let t = this.name,
        n = this.parser,
        r = n.json,
        i = r.textures[e]
      if (!i.extensions || !i.extensions[t]) return null
      let a = i.extensions[t],
        o = r.images[a.source],
        s = n.textureLoader
      if (o.uri) {
        let e = n.options.manager.getHandler(o.uri)
        e !== null && (s = e)
      }
      return this.detectSupport().then(function (i) {
        if (i) return n.loadTextureImage(e, a.source, s)
        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0)
          throw Error(`THREE.GLTFLoader: AVIF required by asset but unsupported.`)
        return n.loadTexture(e)
      })
    }
    detectSupport() {
      return (
        this.isSupported ||
          (this.isSupported = new Promise(function (e) {
            let t = new Image()
            ;((t.src = `data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=`),
              (t.onload = t.onerror =
                function () {
                  e(t.height === 1)
                }))
          })),
        this.isSupported
      )
    }
  },
  Uw = class {
    constructor(e) {
      ;((this.name = Ew.EXT_MESHOPT_COMPRESSION), (this.parser = e))
    }
    loadBufferView(e) {
      let t = this.parser.json,
        n = t.bufferViews[e]
      if (n.extensions && n.extensions[this.name]) {
        let e = n.extensions[this.name],
          r = this.parser.getDependency(`buffer`, e.buffer),
          i = this.parser.options.meshoptDecoder
        if (!i || !i.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
            throw Error(
              `THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`,
            )
          return null
        }
        return r.then(function (t) {
          let n = e.byteOffset || 0,
            r = e.byteLength || 0,
            a = e.count,
            o = e.byteStride,
            s = new Uint8Array(t, n, r)
          return i.decodeGltfBufferAsync
            ? i.decodeGltfBufferAsync(a, o, s, e.mode, e.filter).then(function (e) {
                return e.buffer
              })
            : i.ready.then(function () {
                let t = new ArrayBuffer(a * o)
                return (i.decodeGltfBuffer(new Uint8Array(t), a, o, s, e.mode, e.filter), t)
              })
        })
      }
      return null
    }
  },
  Ww = class {
    constructor(e) {
      ;((this.name = Ew.EXT_MESH_GPU_INSTANCING), (this.parser = e))
    }
    createNodeMesh(e) {
      let t = this.parser.json,
        n = t.nodes[e]
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null
      let r = t.meshes[n.mesh]
      for (let e of r.primitives)
        if (
          e.mode !== tT.TRIANGLES &&
          e.mode !== tT.TRIANGLE_STRIP &&
          e.mode !== tT.TRIANGLE_FAN &&
          e.mode !== void 0
        )
          return null
      let i = n.extensions[this.name].attributes,
        a = [],
        o = {}
      for (let e in i)
        a.push(this.parser.getDependency(`accessor`, i[e]).then((t) => ((o[e] = t), o[e])))
      return a.length < 1
        ? null
        : (a.push(this.parser.createNodeMesh(e)),
          Promise.all(a).then((e) => {
            let t = e.pop(),
              n = t.isGroup ? t.children : [t],
              r = e[0].count,
              i = []
            for (let e of n) {
              let t = new ls(),
                n = new Y(),
                a = new Io(),
                s = new Y(1, 1, 1),
                c = new _u(e.geometry, e.material, r)
              for (let e = 0; e < r; e++)
                (o.TRANSLATION && n.fromBufferAttribute(o.TRANSLATION, e),
                  o.ROTATION && a.fromBufferAttribute(o.ROTATION, e),
                  o.SCALE && s.fromBufferAttribute(o.SCALE, e),
                  c.setMatrixAt(e, t.compose(n, a, s)))
              for (let t in o)
                if (t === `_COLOR_0`) {
                  let e = o[t]
                  c.instanceColor = new lu(e.array, e.itemSize, e.normalized)
                } else
                  t !== `TRANSLATION` &&
                    t !== `ROTATION` &&
                    t !== `SCALE` &&
                    e.geometry.setAttribute(t, o[t])
              ;(Is.prototype.copy.call(c, e), this.parser.assignFinalMaterial(c), i.push(c))
            }
            return t.isGroup ? (t.clear(), t.add(...i), t) : i[0]
          }))
    }
  },
  Gw = `glTF`,
  Kw = 12,
  qw = { JSON: 1313821514, BIN: 5130562 },
  Jw = class {
    constructor(e) {
      ;((this.name = Ew.KHR_BINARY_GLTF), (this.content = null), (this.body = null))
      let t = new DataView(e, 0, Kw)
      if (
        ((this.header = {
          magic: yw(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0),
        }),
        this.header.magic !== Gw)
      )
        throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`)
      if (this.header.version < 2) throw Error(`THREE.GLTFLoader: Legacy binary file detected.`)
      let n = this.header.length - Kw,
        r = new DataView(e, Kw),
        i = 0
      for (; i < n;) {
        let t = r.getUint32(i, !0)
        i += 4
        let n = r.getUint32(i, !0)
        if (((i += 4), n === qw.JSON)) {
          let n = new Uint8Array(e, Kw + i, t)
          this.content = yw(n)
        } else if (n === qw.BIN) {
          let n = Kw + i
          this.body = e.slice(n, n + t)
        }
        i += t
      }
      if (this.content === null) throw Error(`THREE.GLTFLoader: JSON content not found.`)
    }
  },
  Yw = class {
    constructor(e, t) {
      if (!t) throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`)
      ;((this.name = Ew.KHR_DRACO_MESH_COMPRESSION),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload())
    }
    decodePrimitive(e, t) {
      let n = this.json,
        r = this.dracoLoader,
        i = e.extensions[this.name].bufferView,
        a = e.extensions[this.name].attributes,
        o = {},
        s = {},
        c = {}
      for (let e in a) {
        let t = oT[e] || e.toLowerCase()
        o[t] = a[e]
      }
      for (let t in e.attributes) {
        let r = oT[t] || t.toLowerCase()
        if (a[t] !== void 0) {
          let i = n.accessors[e.attributes[t]]
          ;((c[r] = nT[i.componentType].name), (s[r] = i.normalized === !0))
        }
      }
      return t.getDependency(`bufferView`, i).then(function (e) {
        return new Promise(function (t, n) {
          r.decodeDracoFile(
            e,
            function (e) {
              for (let t in e.attributes) {
                let n = e.attributes[t],
                  r = s[t]
                r !== void 0 && (n.normalized = r)
              }
              t(e)
            },
            o,
            c,
            xw,
            n,
          )
        })
      })
    }
  },
  Xw = class {
    constructor() {
      this.name = Ew.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
      return (
        ((t.texCoord === void 0 || t.texCoord === e.channel) &&
          t.offset === void 0 &&
          t.rotation === void 0 &&
          t.scale === void 0) ||
          ((e = e.clone()),
          t.texCoord !== void 0 && (e.channel = t.texCoord),
          t.offset !== void 0 && e.offset.fromArray(t.offset),
          t.rotation !== void 0 && (e.rotation = t.rotation),
          t.scale !== void 0 && e.repeat.fromArray(t.scale),
          (e.needsUpdate = !0)),
        e
      )
    }
  },
  Zw = class {
    constructor() {
      this.name = Ew.KHR_MESH_QUANTIZATION
    }
  },
  Qw = class extends Up {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r * 3 + r
      for (let e = 0; e !== r; e++) t[e] = n[i + e]
      return t
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = o * 2,
        c = o * 3,
        l = r - t,
        u = (n - t) / l,
        d = u * u,
        f = d * u,
        p = e * c,
        m = p - c,
        h = -2 * f + 3 * d,
        g = f - d,
        _ = 1 - h,
        v = g - d + u
      for (let e = 0; e !== o; e++) {
        let t = a[m + e + o],
          n = a[m + e + s] * l,
          r = a[p + e + o],
          c = a[p + e] * l
        i[e] = _ * t + v * n + h * r + g * c
      }
      return i
    }
  },
  $w = new Io(),
  eT = class extends Qw {
    interpolate_(e, t, n, r) {
      let i = super.interpolate_(e, t, n, r)
      return ($w.fromArray(i).normalize().toArray(i), i)
    }
  },
  tT = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  nT = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  rT = { 9728: Rr, 9729: Ur, 9984: zr, 9985: Wr, 9986: Vr, 9987: Kr },
  iT = { 33071: Ir, 33648: Lr, 10497: Fr },
  aT = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  oT = {
    POSITION: `position`,
    NORMAL: `normal`,
    TANGENT: `tangent`,
    ...(RC >= 152
      ? { TEXCOORD_0: `uv`, TEXCOORD_1: `uv1`, TEXCOORD_2: `uv2`, TEXCOORD_3: `uv3` }
      : { TEXCOORD_0: `uv`, TEXCOORD_1: `uv2` }),
    COLOR_0: `color`,
    WEIGHTS_0: `skinWeight`,
    JOINTS_0: `skinIndex`,
  },
  sT = {
    scale: `scale`,
    translation: `position`,
    rotation: `quaternion`,
    weights: `morphTargetInfluences`,
  },
  cT = { CUBICSPLINE: void 0, LINEAR: ia, STEP: ra },
  lT = { OPAQUE: `OPAQUE`, MASK: `MASK`, BLEND: `BLEND` }
