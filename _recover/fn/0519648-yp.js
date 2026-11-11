function yp(e) {
  let t = e.getRenderTarget()
  return t === null
    ? e.outputColorSpace
    : t.isXRRenderTarget === !0
      ? t.texture.colorSpace
      : Wo.workingColorSpace
}
var bp = { clone: hp, merge: gp },
  xp = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Sp = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,
  Cp = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isShaderMaterial = !0),
        (this.type = `ShaderMaterial`),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader = xp),
        (this.fragmentShader = Sp),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
        (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        e !== void 0 && this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = hp(e.uniforms)),
        (this.uniformsGroups = vp(e.uniformsGroups)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.fog = e.fog),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        (this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues)),
        (this.index0AttributeName = e.index0AttributeName),
        (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
        this
      )
    }
    toJSON(e) {
      let t = super.toJSON(e)
      ;((t.glslVersion = this.glslVersion), (t.uniforms = {}))
      for (let n in this.uniforms) {
        let r = this.uniforms[n].value
        r && r.isTexture
          ? (t.uniforms[n] = { type: `t`, value: r.toJSON(e).uuid })
          : r && r.isColor
            ? (t.uniforms[n] = { type: `c`, value: r.getHex() })
            : r && r.isVector2
              ? (t.uniforms[n] = { type: `v2`, value: r.toArray() })
              : r && r.isVector3
                ? (t.uniforms[n] = { type: `v3`, value: r.toArray() })
                : r && r.isVector4
                  ? (t.uniforms[n] = { type: `v4`, value: r.toArray() })
                  : r && r.isMatrix3
                    ? (t.uniforms[n] = { type: `m3`, value: r.toArray() })
                    : r && r.isMatrix4
                      ? (t.uniforms[n] = { type: `m4`, value: r.toArray() })
                      : (t.uniforms[n] = { value: r })
      }
      ;(Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader),
        (t.lights = this.lights),
        (t.clipping = this.clipping))
      let n = {}
      for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0)
      return (Object.keys(n).length > 0 && (t.extensions = n), t)
    }
    fromJSON(e, t) {
      if ((super.fromJSON(e, t), e.uniforms !== void 0))
        for (let n in e.uniforms) {
          let r = e.uniforms[n]
          switch (((this.uniforms[n] = {}), r.type)) {
            case `t`:
              this.uniforms[n].value = t[r.value] || null
              break
            case `c`:
              this.uniforms[n].value = new X().setHex(r.value)
              break
            case `v2`:
              this.uniforms[n].value = new J().fromArray(r.value)
              break
            case `v3`:
              this.uniforms[n].value = new Y().fromArray(r.value)
              break
            case `v4`:
              this.uniforms[n].value = new ns().fromArray(r.value)
              break
            case `m3`:
              this.uniforms[n].value = new zo().fromArray(r.value)
              break
            case `m4`:
              this.uniforms[n].value = new ls().fromArray(r.value)
              break
            default:
              this.uniforms[n].value = r.value
          }
        }
      if (
        (e.defines !== void 0 && (this.defines = e.defines),
        e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader),
        e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader),
        e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion),
        e.extensions !== void 0)
      )
        for (let t in e.extensions) this.extensions[t] = e.extensions[t]
      return (
        e.lights !== void 0 && (this.lights = e.lights),
        e.clipping !== void 0 && (this.clipping = e.clipping),
        this
      )
    }
  },
  wp = class extends Cp {
    constructor(e) {
      ;(super(e), (this.isRawShaderMaterial = !0), (this.type = `RawShaderMaterial`))
    }
  },
  Tp = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshStandardMaterial = !0),
        (this.type = `MeshStandardMaterial`),
        (this.defines = { STANDARD: `` }),
        (this.color = new X(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new X(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new J(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new ys()),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: `` }),
        this.color.copy(e.color),
        (this.roughness = e.roughness),
        (this.metalness = e.metalness),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.roughnessMap = e.roughnessMap),
        (this.metalnessMap = e.metalnessMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.envMapIntensity = e.envMapIntensity),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      )
    }
  },
  Ep = class extends Tp {
    constructor(e) {
      ;(super(),
        (this.isMeshPhysicalMaterial = !0),
        (this.defines = { STANDARD: ``, PHYSICAL: `` }),
        (this.type = `MeshPhysicalMaterial`),
        (this.anisotropyRotation = 0),
        (this.anisotropyMap = null),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new J(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.diffuseRoughnessMap = null),
        (this.ior = 1.5),
        Object.defineProperty(this, 'reflectivity', {
          get: function () {
            return po((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1)
          },
          set: function (e) {
            this.ior = (1 + 0.4 * e) / (1 - 0.4 * e)
          },
        }),
        (this.iridescenceMap = null),
        (this.iridescenceIOR = 1.3),
        (this.iridescenceThicknessMinimum = 100),
        (this.iridescenceThicknessMaximum = 400),
        (this.iridescenceThicknessMap = null),
        (this.sheenColor = new X(0)),
        (this.sheenColorMap = null),
        (this.sheenRoughness = 1),
        (this.sheenRoughnessMap = null),
        (this.transmissionMap = null),
        (this.thickness = 0),
        (this.thicknessMap = null),
        (this.attenuationDistance = 1 / 0),
        (this.attenuationColor = new X(1, 1, 1)),
        (this.specularIntensity = 1),
        (this.specularIntensityMap = null),
        (this.specularColor = new X(1, 1, 1)),
        (this.specularColorMap = null),
        (this._anisotropy = 0),
        (this._clearcoat = 0),
        (this._diffuseRoughness = 0),
        (this._dispersion = 0),
        (this._iridescence = 0),
        (this._retroreflectivity = 0),
        (this._sheen = 0),
        (this._transmission = 0),
        this.setValues(e))
    }
    get anisotropy() {
      return this._anisotropy
    }
    set anisotropy(e) {
      ;(this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e))
    }
    get clearcoat() {
      return this._clearcoat
    }
    set clearcoat(e) {
      ;(this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e))
    }
    get diffuseRoughness() {
      return this._diffuseRoughness
    }
    set diffuseRoughness(e) {
      ;(this._diffuseRoughness > 0 != e > 0 && this.version++, (this._diffuseRoughness = e))
    }
    get iridescence() {
      return this._iridescence
    }
    set iridescence(e) {
      ;(this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e))
    }
    get dispersion() {
      return this._dispersion
    }
    set dispersion(e) {
      ;(this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e))
    }
    get retroreflectivity() {
      return this._retroreflectivity
    }
    set retroreflectivity(e) {
      ;(this._retroreflectivity > 0 != e > 0 && this.version++, (this._retroreflectivity = e))
    }
    get sheen() {
      return this._sheen
    }
    set sheen(e) {
      ;(this._sheen > 0 != e > 0 && this.version++, (this._sheen = e))
    }
    get transmission() {
      return this._transmission
    }
    set transmission(e) {
      ;(this._transmission > 0 != e > 0 && this.version++, (this._transmission = e))
    }
    get iridescenceThicknessRange() {
      return (
        ro(
          `MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`,
        ),
        [this.iridescenceThicknessMinimum, this.iridescenceThicknessMaximum]
      )
    }
    set iridescenceThicknessRange(e) {
      ;(ro(
        `MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`,
      ),
        (this.iridescenceThicknessMinimum = e[0]),
        (this.iridescenceThicknessMaximum = e[1]))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: ``, PHYSICAL: `` }),
        (this.anisotropy = e.anisotropy),
        (this.anisotropyRotation = e.anisotropyRotation),
        (this.anisotropyMap = e.anisotropyMap),
        (this.clearcoat = e.clearcoat),
        (this.clearcoatMap = e.clearcoatMap),
        (this.clearcoatRoughness = e.clearcoatRoughness),
        (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = e.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        (this.diffuseRoughness = e.diffuseRoughness),
        (this.diffuseRoughnessMap = e.diffuseRoughnessMap),
        (this.dispersion = e.dispersion),
        (this.ior = e.ior),
        (this.iridescence = e.iridescence),
        (this.iridescenceMap = e.iridescenceMap),
        (this.iridescenceIOR = e.iridescenceIOR),
        (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum),
        (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum),
        (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
        (this.retroreflectivity = e.retroreflectivity),
        (this.sheen = e.sheen),
        this.sheenColor.copy(e.sheenColor),
        (this.sheenColorMap = e.sheenColorMap),
        (this.sheenRoughness = e.sheenRoughness),
        (this.sheenRoughnessMap = e.sheenRoughnessMap),
        (this.transmission = e.transmission),
        (this.transmissionMap = e.transmissionMap),
        (this.thickness = e.thickness),
        (this.thicknessMap = e.thicknessMap),
        (this.attenuationDistance = e.attenuationDistance),
        this.attenuationColor.copy(e.attenuationColor),
        (this.specularIntensity = e.specularIntensity),
        (this.specularIntensityMap = e.specularIntensityMap),
        this.specularColor.copy(e.specularColor),
        (this.specularColorMap = e.specularColorMap),
        this
      )
    }
  },
  Dp = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshPhongMaterial = !0),
        (this.type = `MeshPhongMaterial`),
        (this.color = new X(16777215)),
        (this.specular = new X(1118481)),
        (this.shininess = 30),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new X(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new J(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new ys()),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.envMapIntensity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        this.specular.copy(e.specular),
        (this.shininess = e.shininess),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.envMapIntensity = e.envMapIntensity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      )
    }
  },
  Op = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshToonMaterial = !0),
        (this.defines = { TOON: `` }),
        (this.type = `MeshToonMaterial`),
        (this.color = new X(16777215)),
        (this.map = null),
        (this.gradientMap = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new X(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new J(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.alphaMap = null),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.gradientMap = e.gradientMap),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.alphaMap = e.alphaMap),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      )
    }
  },
  kp = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshNormalMaterial = !0),
        (this.type = `MeshNormalMaterial`),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new J(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.flatShading = !1),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.flatShading = e.flatShading),
        this
      )
    }
  },
  Ap = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshLambertMaterial = !0),
        (this.type = `MeshLambertMaterial`),
        (this.color = new X(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new X(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new J(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new ys()),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.envMapIntensity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.envMapIntensity = e.envMapIntensity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      )
    }
  },
  jp = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = `MeshDepthMaterial`),
        (this.depthPacking = fa),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.depthPacking = e.depthPacking),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      )
    }
  },
  Mp = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = `MeshDistanceMaterial`),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      )
    }
  },
  Np = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshMatcapMaterial = !0),
        (this.defines = { MATCAP: `` }),
        (this.type = `MeshMatcapMaterial`),
        (this.color = new X(16777215)),
        (this.matcap = null),
        (this.map = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new J(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.alphaMap = null),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { MATCAP: `` }),
        this.color.copy(e.color),
        (this.matcap = e.matcap),
        (this.map = e.map),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.alphaMap = e.alphaMap),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      )
    }
  },
  Pp = class extends Wu {
    constructor(e) {
      ;(super(),
        (this.isLineDashedMaterial = !0),
        (this.type = `LineDashedMaterial`),
        (this.scale = 1),
        (this.dashSize = 3),
        (this.gapSize = 1),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.scale = e.scale),
        (this.dashSize = e.dashSize),
        (this.gapSize = e.gapSize),
        this
      )
    }
  }
