function ql(e, t, n, r, i, a, o, s, c, l) {
  ;(e.getVertexPosition(s, Rl), e.getVertexPosition(c, zl), e.getVertexPosition(l, Bl))
  let u = Kl(e, t, n, r, Rl, zl, Bl, Ul)
  if (u) {
    let e = new Y()
    ;(sc.getBarycoord(Ul, Rl, zl, Bl, e),
      i && (u.uv = sc.getInterpolatedAttribute(i, s, c, l, e, new J())),
      a && (u.uv1 = sc.getInterpolatedAttribute(a, s, c, l, e, new J())),
      o &&
        ((u.normal = sc.getInterpolatedAttribute(o, s, c, l, e, new Y())),
        u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1)))
    let t = { a: s, b: c, c: l, normal: new Y(), materialIndex: 0 }
    ;(sc.getNormal(Rl, zl, Bl, t.normal), (u.face = t), (u.barycoord = e))
  }
  return u
}
var Jl = new ns(),
  Yl = new ns(),
  Xl = new ns(),
  Zl = new ns(),
  Ql = new ls(),
  $l = new Y(),
  eu = new Wc(),
  tu = new ls(),
  nu = new Ml(),
  ru = class extends Gl {
    constructor(e, t) {
      ;(super(e, t),
        (this.isSkinnedMesh = !0),
        (this.type = `SkinnedMesh`),
        (this.bindMode = Nr),
        (this.bindMatrix = new ls()),
        (this.bindMatrixInverse = new ls()),
        (this.boundingBox = null),
        (this.boundingSphere = null))
    }
    computeBoundingBox() {
      let e = this.geometry
      ;(this.boundingBox === null && (this.boundingBox = new cc()),
        this.boundingBox.makeEmpty())
      let t = e.getAttribute(`position`)
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, $l), this.boundingBox.expandByPoint($l))
    }
    computeBoundingSphere() {
      let e = this.geometry
      ;(this.boundingSphere === null && (this.boundingSphere = new Wc()),
        this.boundingSphere.makeEmpty())
      let t = e.getAttribute(`position`)
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, $l), this.boundingSphere.expandByPoint($l))
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        (this.boundingBox = e.boundingBox === null ? null : e.boundingBox.clone()),
        (this.boundingSphere = e.boundingSphere === null ? null : e.boundingSphere.clone()),
        this
      )
    }
    raycast(e, t) {
      let n = this.material,
        r = this.matrixWorld
      n !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        eu.copy(this.boundingSphere),
        eu.applyMatrix4(r),
        e.ray.intersectsSphere(eu) !== !1 &&
          (tu.copy(r).invert(),
          nu.copy(e.ray).applyMatrix4(tu),
          (this.boundingBox === null || nu.intersectsBox(this.boundingBox) !== !1) &&
            this._computeIntersections(e, t, nu)))
    }
    getVertexPosition(e, t) {
      return (super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t)
    }
    bind(e, t) {
      ;((this.skeleton = e),
        t === void 0 &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert())
    }
    pose() {
      this.skeleton.pose()
    }
    normalizeSkinWeights() {
      let e = new ns(),
        t = this.geometry.attributes.skinWeight
      for (let n = 0, r = t.count; n < r; n++) {
        e.fromBufferAttribute(t, n)
        let r = 1 / e.manhattanLength()
        ;(r === 1 / 0 ? e.set(1, 0, 0, 0) : e.multiplyScalar(r),
          t.setXYZW(n, e.x, e.y, e.z, e.w))
      }
    }
    updateMatrixWorld(e) {
      ;(super.updateMatrixWorld(e),
        this.bindMode === `attached`
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : this.bindMode === `detached`
            ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
            : q(`SkinnedMesh: Unrecognized bindMode: ` + this.bindMode))
    }
    applyBoneTransform(e, t) {
      let n = this.skeleton,
        r = this.geometry
      ;(Yl.fromBufferAttribute(r.attributes.skinIndex, e),
        Xl.fromBufferAttribute(r.attributes.skinWeight, e),
        t.isVector4
          ? (Jl.copy(t), t.set(0, 0, 0, 0))
          : (Jl.set(t.x, t.y, t.z, 1), t.set(0, 0, 0)),
        Jl.applyMatrix4(this.bindMatrix))
      for (let e = 0; e < 4; e++) {
        let r = Xl.getComponent(e)
        if (r !== 0) {
          let i = Yl.getComponent(e)
          ;(Ql.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]),
            t.addScaledVector(Zl.copy(Jl).applyMatrix4(Ql), r))
        }
      }
      return (t.isVector4 && (t.w = Jl.w), t.applyMatrix4(this.bindMatrixInverse))
    }
  },
  iu = class extends Is {
    constructor() {
      ;(super(), (this.isBone = !0), (this.type = `Bone`))
    }
  },
  au = class extends ts {
    constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = Rr, l = Rr, u, d) {
      ;(super(null, a, o, s, c, l, r, i, u, d),
        (this.isDataTexture = !0),
        (this.image = { data: e, width: t, height: n }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1))
    }
  },
  ou = new ls(),
  su = new ls(),
  cu = class e {
    constructor(e = [], t = []) {
      ;((this.uuid = fo()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.previousBoneMatrices = null),
        (this.boneTexture = null),
        (this.previousBoneTexture = null),
        this.init())
    }
    init() {
      let e = this.bones,
        t = this.boneInverses
      if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
        this.calculateInverses()
      else if (e.length !== t.length) {
        ;(q(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),
          (this.boneInverses = []))
        for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new ls())
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = new ls()
        ;(this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(t))
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e]
        t && t.matrixWorld.copy(this.boneInverses[e]).invert()
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e]
        t &&
          (t.parent && t.parent.isBone
            ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld))
            : t.matrix.copy(t.matrixWorld),
          t.matrix.decompose(t.position, t.quaternion, t.scale))
      }
    }
    update() {
      let e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        r = this.boneTexture
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r] ? e[r].matrixWorld : su
        ;(ou.multiplyMatrices(i, t[r]), ou.toArray(n, r * 16))
      }
      r !== null && (r.needsUpdate = !0)
    }
    clone() {
      return new e(this.bones, this.boneInverses)
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4)
      ;((e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4)))
      let t = new Float32Array(e * e * 4)
      t.set(this.boneMatrices)
      let n = new au(t, e, e, li, ei)
      return ((n.needsUpdate = !0), (this.boneMatrices = t), (this.boneTexture = n), this)
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        let n = this.bones[t]
        if (n.name === e) return n
      }
    }
    dispose() {
      ;(this.boneTexture !== null && (this.boneTexture.dispose(), (this.boneTexture = null)),
        this.previousBoneTexture !== null &&
          (this.previousBoneTexture.dispose(), (this.previousBoneTexture = null)))
    }
    fromJSON(e, t) {
      this.uuid = e.uuid
      for (let n = 0, r = e.bones.length; n < r; n++) {
        let r = e.bones[n],
          i = t[r]
        ;(i === void 0 && (q(`Skeleton: No bone found with UUID:`, r), (i = new iu())),
          this.bones.push(i),
          this.boneInverses.push(new ls().fromArray(e.boneInverses[n])))
      }
      return (this.init(), this)
    }
    toJSON() {
      let e = {
        metadata: { version: 4.7, type: `Skeleton`, generator: `Skeleton.toJSON` },
        bones: [],
        boneInverses: [],
      }
      e.uuid = this.uuid
      let t = this.bones,
        n = this.boneInverses
      for (let r = 0, i = t.length; r < i; r++) {
        let i = t[r]
        e.bones.push(i.uuid)
        let a = n[r]
        e.boneInverses.push(a.toArray())
      }
      return e
    }
  },
  lu = class extends jc {
    constructor(e, t, n, r = 1) {
      ;(super(e, t, n), (this.isInstancedBufferAttribute = !0), (this.meshPerAttribute = r))
    }
    copy(e) {
      return (super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this)
    }
    toJSON() {
      let e = super.toJSON()
      return (
        (e.meshPerAttribute = this.meshPerAttribute),
        (e.isInstancedBufferAttribute = !0),
        e
      )
    }
  },
  uu = new ls(),
  du = new ls(),
  fu = [],
  pu = new cc(),
  mu = new ls(),
  hu = new Gl(),
  gu = new Wc(),
  _u = class extends Gl {
    constructor(e, t, n) {
      ;(super(e, t),
        (this.isInstancedMesh = !0),
        (this.instanceMatrix = new lu(new Float32Array(n * 16), 16)),
        (this.instanceColor = null),
        (this.morphTexture = null),
        (this.count = n),
        (this.boundingBox = null),
        (this.boundingSphere = null))
      for (let e = 0; e < n; e++) this.setMatrixAt(e, mu)
    }
    computeBoundingBox() {
      let e = this.geometry,
        t = this.count
      ;(this.boundingBox === null && (this.boundingBox = new cc()),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty())
      for (let n = 0; n < t; n++)
        (this.getMatrixAt(n, uu),
          pu.copy(e.boundingBox).applyMatrix4(uu),
          this.boundingBox.union(pu))
    }
    computeBoundingSphere() {
      let e = this.geometry,
        t = this.count
      ;(this.boundingSphere === null && (this.boundingSphere = new Wc()),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty())
      for (let n = 0; n < t; n++)
        (this.getMatrixAt(n, uu),
          gu.copy(e.boundingSphere).applyMatrix4(uu),
          this.boundingSphere.union(gu))
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        (this.morphTexture = e.morphTexture === null ? null : e.morphTexture.clone()),
        (this.instanceColor = e.instanceColor === null ? null : e.instanceColor.clone()),
        (this.count = e.count),
        (this.boundingBox = e.boundingBox === null ? null : e.boundingBox.clone()),
        (this.boundingSphere = e.boundingSphere === null ? null : e.boundingSphere.clone()),
        this
      )
    }
    getColorAt(e, t) {
      return this.instanceColor === null
        ? t.setRGB(1, 1, 1)
        : t.fromArray(this.instanceColor.array, e * 3)
    }
    getMatrixAt(e, t) {
      return t.fromArray(this.instanceMatrix.array, e * 16)
    }
    getMorphAt(e, t) {
      let n = t.morphTargetInfluences,
        r = this.morphTexture.source.data.data,
        i = e * (n.length + 1) + 1
      for (let e = 0; e < n.length; e++) n[e] = r[i + e]
    }
    raycast(e, t) {
      let n = this.matrixWorld,
        r = this.count
      if (
        ((hu.geometry = this.geometry),
        (hu.material = this.material),
        hu.material !== void 0 &&
          (this.boundingSphere === null && this.computeBoundingSphere(),
          gu.copy(this.boundingSphere),
          gu.applyMatrix4(n),
          e.ray.intersectsSphere(gu) !== !1))
      )
        for (let i = 0; i < r; i++) {
          ;(this.getMatrixAt(i, uu),
            du.multiplyMatrices(n, uu),
            (hu.matrixWorld = du),
            hu.raycast(e, fu))
          for (let e = 0, n = fu.length; e < n; e++) {
            let n = fu[e]
            ;((n.instanceId = i), (n.object = this), t.push(n))
          }
          fu.length = 0
        }
    }
    setColorAt(e, t) {
      return (
        this.instanceColor === null &&
          (this.instanceColor = new lu(
            new Float32Array(this.instanceMatrix.count * 3).fill(1),
            3,
          )),
        t.toArray(this.instanceColor.array, e * 3),
        this
      )
    }
    setMatrixAt(e, t) {
      return (t.toArray(this.instanceMatrix.array, e * 16), this)
    }
    setMorphAt(e, t) {
      let n = t.morphTargetInfluences,
        r = n.length + 1
      this.morphTexture === null &&
        (this.morphTexture = new au(new Float32Array(r * this.count), r, this.count, fi, ei))
      let i = this.morphTexture.source.data.data,
        a = 0
      for (let e = 0; e < n.length; e++) a += n[e]
      let o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
        s = r * e
      return ((i[s] = o), i.set(n, s + 1), this)
    }
    updateMorphTargets() {}
    dispose() {
      ;(super.dispose(),
        this.instanceMatrix.dispose(),
        this.instanceColor !== null && this.instanceColor.dispose(),
        this.morphTexture !== null && (this.morphTexture.dispose(), (this.morphTexture = null)))
    }
  },
  vu = new Wc(),
  yu = new J(0.5, 0.5),
  bu = new Y(),
  xu = class {
    constructor(
      e = new ol(),
      t = new ol(),
      n = new ol(),
      r = new ol(),
      i = new ol(),
      a = new ol(),
    ) {
      this.planes = [e, t, n, r, i, a]
    }
    set(e, t, n, r, i, a) {
      let o = this.planes
      return (
        o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(i),
        o[5].copy(a),
        this
      )
    }
    copy(e) {
      let t = this.planes
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n])
      return this
    }
    setFromProjectionMatrix(e, t = La, n = !1) {
      let r = this.planes,
        i = e.elements,
        a = i[0],
        o = i[1],
        s = i[2],
        c = i[3],
        l = i[4],
        u = i[5],
        d = i[6],
        f = i[7],
        p = i[8],
        m = i[9],
        h = i[10],
        g = i[11],
        _ = i[12],
        v = i[13],
        y = i[14],
        b = i[15]
      if (
        (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(),
        r[1].setComponents(c + a, f + l, g + p, b + _).normalize(),
        r[2].setComponents(c + o, f + u, g + m, b + v).normalize(),
        r[3].setComponents(c - o, f - u, g - m, b - v).normalize(),
        n)
      )
        (r[4].setComponents(s, d, h, y).normalize(),
          r[5].setComponents(c - s, f - d, g - h, b - y).normalize())
      else if ((r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3))
        r[5].setComponents(c + s, f + d, g + h, b + y).normalize()
      else if (t === 2001) r[5].setComponents(s, d, h, y).normalize()
      else
        throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ` + t)
      return this
    }
    intersectsObject(e) {
      if (e.boundingSphere !== void 0)
        (e.boundingSphere === null && e.computeBoundingSphere(),
          vu.copy(e.boundingSphere).applyMatrix4(e.matrixWorld))
      else {
        let t = e.geometry
        ;(t.boundingSphere === null && t.computeBoundingSphere(),
          vu.copy(t.boundingSphere).applyMatrix4(e.matrixWorld))
      }
      return this.intersectsSphere(vu)
    }
    intersectsSprite(e) {
      return (
        vu.center.set(0, 0, 0),
        (vu.radius = 0.7071067811865476 + yu.distanceTo(e.center)),
        vu.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(vu)
      )
    }
    intersectsSphere(e) {
      let t = this.planes,
        n = e.center,
        r = -e.radius
      for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1
      return !0
    }
    intersectsBox(e) {
      let t = this.planes
      for (let n = 0; n < 6; n++) {
        let r = t[n]
        if (
          ((bu.x = r.normal.x > 0 ? e.max.x : e.min.x),
          (bu.y = r.normal.y > 0 ? e.max.y : e.min.y),
          (bu.z = r.normal.z > 0 ? e.max.z : e.min.z),
          r.distanceToPoint(bu) < 0)
        )
          return !1
      }
      return !0
    }
    containsPoint(e) {
      let t = this.planes
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1
      return !0
    }
    clone() {
      return new this.constructor().copy(this)
    }
  },
  Su = new ls(),
  Cu = class e {
    constructor() {
      ;((this.coordinateSystem = La), (this._frustums = []), (this._count = 0))
    }
    setFromArrayCamera(e) {
      let t = e.cameras,
        n = this._frustums
      for (let e = 0; e < t.length; e++) {
        let r = t[e]
        ;(Su.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse),
          n[e] === void 0 && (n[e] = new xu()),
          n[e].setFromProjectionMatrix(Su, r.coordinateSystem, r.reversedDepth))
      }
      return ((this._count = t.length), this)
    }
    getFrustum(e) {
      return this._frustums[e]
    }
    intersectsObject(e) {
      let t = this._frustums
      for (let n = 0; n < this._count; n++) if (t[n].intersectsObject(e)) return !0
      return !1
    }
    intersectsSprite(e) {
      let t = this._frustums
      for (let n = 0; n < this._count; n++) if (t[n].intersectsSprite(e)) return !0
      return !1
    }
    intersectsSphere(e) {
      let t = this._frustums
      for (let n = 0; n < this._count; n++) if (t[n].intersectsSphere(e)) return !0
      return !1
    }
    intersectsBox(e) {
      let t = this._frustums
      for (let n = 0; n < this._count; n++) if (t[n].intersectsBox(e)) return !0
      return !1
    }
    containsPoint(e) {
      let t = this._frustums
      for (let n = 0; n < this._count; n++) if (t[n].containsPoint(e)) return !0
      return !1
    }
    copy(e) {
      this.coordinateSystem = e.coordinateSystem
      let t = this._frustums,
        n = e._frustums
      for (let r = 0; r < e._count; r++) (t[r] === void 0 && (t[r] = new xu()), t[r].copy(n[r]))
      return ((this._count = e._count), this)
    }
    clone() {
      return new e().copy(this)
    }
  }
