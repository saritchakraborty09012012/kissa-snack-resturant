function $u(e, t, n, r, i, a, o) {
  let s = e.geometry.attributes.position
  if (
    (Gu.fromBufferAttribute(s, i),
    Ku.fromBufferAttribute(s, a),
    n.distanceSqToSegment(Gu, Ku, Xu, Zu) > r)
  )
    return
  Xu.applyMatrix4(e.matrixWorld)
  let c = t.ray.origin.distanceTo(Xu)
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      point: Zu.clone().applyMatrix4(e.matrixWorld),
      index: o,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e,
    }
}
var ed = new Y(),
  td = new Y(),
  nd = class extends Qu {
    constructor(e, t) {
      ;(super(e, t), (this.isLineSegments = !0), (this.type = `LineSegments`))
    }
    computeLineDistances() {
      let e = this.geometry
      if (e.index === null) {
        let t = e.attributes.position,
          n = []
        for (let e = 0, r = t.count; e < r; e += 2)
          (ed.fromBufferAttribute(t, e),
            td.fromBufferAttribute(t, e + 1),
            (n[e] = e === 0 ? 0 : n[e - 1]),
            (n[e + 1] = n[e] + ed.distanceTo(td)))
        e.setAttribute(`lineDistance`, new Bc(n, 1))
      } else
        q(
          `LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
        )
      return this
    }
  },
  rd = class extends Qu {
    constructor(e, t) {
      ;(super(e, t), (this.isLineLoop = !0), (this.type = `LineLoop`))
    }
  },
  id = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isPointsMaterial = !0),
        (this.type = `PointsMaterial`),
        (this.color = new X(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.size = e.size),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      )
    }
  },
  ad = new ls(),
  od = new Ml(),
  sd = new Wc(),
  cd = new Y(),
  ld = class extends Is {
    constructor(e = new Qc(), t = new id()) {
      ;(super(),
        (this.isPoints = !0),
        (this.type = `Points`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        this.updateMorphTargets())
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.morphTargetInfluences =
          e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice()),
        (this.morphTargetDictionary =
          e.morphTargetDictionary === void 0
            ? void 0
            : Object.assign({}, e.morphTargetDictionary)),
        (this.material = Array.isArray(e.material) ? e.material.slice() : e.material),
        (this.geometry = e.geometry),
        this
      )
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this)
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Points.threshold,
        a = n.drawRange
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        sd.copy(n.boundingSphere),
        sd.applyMatrix4(r),
        (sd.radius += i),
        e.ray.intersectsSphere(sd) === !1)
      )
        return
      ;(ad.copy(r).invert(), od.copy(e.ray).applyMatrix4(ad))
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o,
        c = n.index,
        l = n.attributes.position
      if (c !== null) {
        let n = Math.max(0, a.start),
          i = Math.min(c.count, a.start + a.count)
        for (let a = n, o = i; a < o; a++) {
          let n = c.getX(a)
          ;(cd.fromBufferAttribute(l, n), ud(cd, n, s, r, e, t, this))
        }
      } else {
        let n = Math.max(0, a.start),
          i = Math.min(l.count, a.start + a.count)
        for (let a = n, o = i; a < o; a++)
          (cd.fromBufferAttribute(l, a), ud(cd, a, s, r, e, t, this))
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        t = Object.keys(e)
      if (t.length > 0) {
        let n = e[t[0]]
        if (n !== void 0) {
          ;((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}))
          for (let e = 0, t = n.length; e < t; e++) {
            let t = n[e].name || String(e)
            ;(this.morphTargetInfluences.push(0), (this.morphTargetDictionary[t] = e))
          }
        }
      }
    }
  }
