function wl(e, t, n, r, i, a) {
  ;(ml.subVectors(e, n).addScalar(0.5).multiply(r),
    i === void 0 ? hl.copy(ml) : ((hl.x = a * ml.x - i * ml.y), (hl.y = i * ml.x + a * ml.y)),
    e.copy(t),
    (e.x += hl.x),
    (e.y += hl.y),
    e.applyMatrix4(gl))
}
var Tl = new Y(),
  El = new Y(),
  Dl = class extends Is {
    constructor() {
      ;(super(),
        (this.isLOD = !0),
        (this._currentLevel = 0),
        (this.type = `LOD`),
        Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }),
        (this.autoUpdate = !0))
    }
    copy(e) {
      super.copy(e, !1)
      let t = e.levels
      for (let e = 0, n = t.length; e < n; e++) {
        let n = t[e]
        this.addLevel(n.object.clone(), n.distance, n.hysteresis)
      }
      return ((this.autoUpdate = e.autoUpdate), this)
    }
    addLevel(e, t = 0, n = 0) {
      t = Math.abs(t)
      let r = this.levels,
        i = 0
      for (; i < r.length && !(t < r[i].distance); i++);
      return (r.splice(i, 0, { distance: t, hysteresis: n, object: e }), this.add(e), this)
    }
    removeLevel(e) {
      let t = this.levels
      for (let n = 0; n < t.length; n++)
        if (t[n].distance === e) {
          let e = t.splice(n, 1)
          return (this.remove(e[0].object), !0)
        }
      return !1
    }
    getCurrentLevel() {
      return this._currentLevel
    }
    getObjectForDistance(e) {
      let t = this.levels
      if (t.length > 0) {
        let n, r
        for (n = 1, r = t.length; n < r; n++) {
          let r = t[n].distance
          if ((t[n].object.visible && (r -= r * t[n].hysteresis), e < r)) break
        }
        return t[n - 1].object
      }
      return null
    }
    raycast(e, t) {
      if (this.levels.length > 0) {
        Tl.setFromMatrixPosition(this.matrixWorld)
        let n = e.ray.origin.distanceTo(Tl)
        this.getObjectForDistance(n).raycast(e, t)
      }
    }
    update(e) {
      let t = this.levels
      if (t.length > 1) {
        ;(Tl.setFromMatrixPosition(e.matrixWorld), El.setFromMatrixPosition(this.matrixWorld))
        let n = Tl.distanceTo(El) / e.zoom
        t[0].object.visible = !0
        let r, i
        for (r = 1, i = t.length; r < i; r++) {
          let e = t[r].distance
          if ((t[r].object.visible && (e -= e * t[r].hysteresis), n >= e))
            ((t[r - 1].object.visible = !1), (t[r].object.visible = !0))
          else break
        }
        for (this._currentLevel = r - 1; r < i; r++) t[r].object.visible = !1
      }
    }
    toJSON(e) {
      let t = super.toJSON(e)
      ;((t.object.autoUpdate = this.autoUpdate), (t.object.levels = []))
      let n = this.levels
      for (let e = 0, r = n.length; e < r; e++) {
        let r = n[e]
        t.object.levels.push({
          object: r.object.uuid,
          distance: r.distance,
          hysteresis: r.hysteresis,
        })
      }
      return t
    }
  },
  Ol = new Y(),
  kl = new Y(),
  Al = new Y(),
  jl = new Y(),
  Ml = class {
    constructor(e = new Y(), t = new Y(0, 0, -1)) {
      ;((this.origin = e), (this.direction = t))
    }
    set(e, t) {
      return (this.origin.copy(e), this.direction.copy(t), this)
    }
    copy(e) {
      return (this.origin.copy(e.origin), this.direction.copy(e.direction), this)
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e)
    }
    lookAt(e) {
      return (this.direction.copy(e).sub(this.origin).normalize(), this)
    }
    recast(e) {
      return (this.origin.copy(this.at(e, Ol)), this)
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin)
      let n = t.dot(this.direction)
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
      let t = Ol.subVectors(e, this.origin).dot(this.direction)
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (Ol.copy(this.origin).addScaledVector(this.direction, t), Ol.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, r) {
      ;(kl.copy(e).add(t).multiplyScalar(0.5),
        Al.copy(t).sub(e).normalize(),
        jl.copy(this.origin).sub(kl))
      let i = e.distanceTo(t) * 0.5,
        a = -this.direction.dot(Al),
        o = jl.dot(this.direction),
        s = -jl.dot(Al),
        c = jl.lengthSq(),
        l = Math.abs(1 - a * a),
        u,
        d,
        f,
        p
      if (l > 0) {
        if (((u = a * s - o), (d = a * o - s), (p = i * l), u >= 0)) {
          if (d >= -p) {
            if (d <= p) {
              let e = 1 / l
              ;((u *= e), (d *= e), (f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c))
            } else
              ((d = i), (u = Math.max(0, -(a * d + o))), (f = -u * u + d * (d + 2 * s) + c))
          } else ((d = -i), (u = Math.max(0, -(a * d + o))), (f = -u * u + d * (d + 2 * s) + c))
        } else
          d <= -p
            ? ((u = Math.max(0, -(-a * i + o))),
              (d = u > 0 ? -i : Math.min(Math.max(-i, -s), i)),
              (f = -u * u + d * (d + 2 * s) + c))
            : d <= p
              ? ((u = 0), (d = Math.min(Math.max(-i, -s), i)), (f = d * (d + 2 * s) + c))
              : ((u = Math.max(0, -(a * i + o))),
                (d = u > 0 ? i : Math.min(Math.max(-i, -s), i)),
                (f = -u * u + d * (d + 2 * s) + c))
      } else
        ((d = a > 0 ? -i : i),
          (u = Math.max(0, -(a * d + o))),
          (f = -u * u + d * (d + 2 * s) + c))
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, u),
        r && r.copy(kl).addScaledVector(Al, d),
        f
      )
    }
    intersectSphere(e, t) {
      if (e.radius < 0) return null
      Ol.subVectors(e.center, this.origin)
      let n = Ol.dot(this.direction),
        r = Ol.dot(Ol) - n * n,
        i = e.radius * e.radius
      if (r > i) return null
      let a = Math.sqrt(i - r),
        o = n - a,
        s = n + a
      return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t)
    }
    intersectsSphere(e) {
      return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
      let t = e.normal.dot(this.direction)
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null
      let n = -(this.origin.dot(e.normal) + e.constant) / t
      return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
      let n = this.distanceToPlane(e)
      return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
      let t = e.distanceToPoint(this.origin)
      return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
      let n,
        r,
        i,
        a,
        o,
        s,
        c = 1 / this.direction.x,
        l = 1 / this.direction.y,
        u = 1 / this.direction.z,
        d = this.origin
      return (
        c >= 0
          ? ((n = (e.min.x - d.x) * c), (r = (e.max.x - d.x) * c))
          : ((n = (e.max.x - d.x) * c), (r = (e.min.x - d.x) * c)),
        l >= 0
          ? ((i = (e.min.y - d.y) * l), (a = (e.max.y - d.y) * l))
          : ((i = (e.max.y - d.y) * l), (a = (e.min.y - d.y) * l)),
        n > a ||
        i > r ||
        ((i > n || isNaN(n)) && (n = i),
        (a < r || isNaN(r)) && (r = a),
        u >= 0
          ? ((o = (e.min.z - d.z) * u), (s = (e.max.z - d.z) * u))
          : ((o = (e.max.z - d.z) * u), (s = (e.min.z - d.z) * u)),
        n > s || o > r) ||
        ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0)
          ? null
          : this.at(n >= 0 ? n : r, t)
      )
    }
    intersectsBox(e) {
      return this.intersectBox(e, Ol) !== null
    }
    intersectTriangle(e, t, n, r, i) {
      let a = this.origin,
        o = this.direction,
        s = o.x,
        c = o.y,
        l = o.z,
        u = e.x - a.x,
        d = e.y - a.y,
        f = e.z - a.z,
        p = t.x - a.x,
        m = t.y - a.y,
        h = t.z - a.z,
        g = n.x - a.x,
        _ = n.y - a.y,
        v = n.z - a.z,
        y = Math.abs(s),
        b = Math.abs(c),
        x = Math.abs(l),
        S,
        C,
        w,
        T,
        E,
        D,
        O,
        k,
        A,
        j,
        M,
        N
      if (
        (y >= b && y >= x
          ? ((w = s),
            (D = u),
            (A = p),
            (N = g),
            s >= 0
              ? ((S = c), (C = l), (T = d), (E = f), (O = m), (k = h), (j = _), (M = v))
              : ((S = l), (C = c), (T = f), (E = d), (O = h), (k = m), (j = v), (M = _)))
          : b >= x
            ? ((w = c),
              (D = d),
              (A = m),
              (N = _),
              c >= 0
                ? ((S = l), (C = s), (T = f), (E = u), (O = h), (k = p), (j = v), (M = g))
                : ((S = s), (C = l), (T = u), (E = f), (O = p), (k = h), (j = g), (M = v)))
            : ((w = l),
              (D = f),
              (A = h),
              (N = v),
              l >= 0
                ? ((S = s), (C = c), (T = u), (E = d), (O = p), (k = m), (j = g), (M = _))
                : ((S = c), (C = s), (T = d), (E = u), (O = m), (k = p), (j = _), (M = g))),
        w === 0)
      )
        return null
      let P = S / w,
        F = C / w,
        ee = 1 / w,
        te = T - P * D,
        I = E - F * D,
        ne = O - P * A,
        re = k - F * A,
        ie = j - P * N,
        ae = M - F * N,
        oe = ie * re - ae * ne,
        se = te * ae - I * ie,
        ce = ne * I - re * te
      if (r) {
        if (oe < 0 || se < 0 || ce < 0) return null
      } else if ((oe < 0 || se < 0 || ce < 0) && (oe > 0 || se > 0 || ce > 0)) return null
      let le = oe + se + ce
      if (le === 0) return null
      let ue = ee * (oe * D + se * A + ce * N)
      return (le > 0 ? ue < 0 : ue > 0) ? null : this.at(ue / le, i)
    }
    applyMatrix4(e) {
      return (this.origin.applyMatrix4(e), this.direction.transformDirection(e), this)
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
      return new this.constructor().copy(this)
    }
  },
  Nl = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = `MeshBasicMaterial`),
        (this.color = new X(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new ys()),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
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
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      )
    }
  },
  Pl = new ls(),
  Fl = new Ml(),
  Il = new Wc(),
  Ll = new Y(),
  Rl = new Y(),
  zl = new Y(),
  Bl = new Y(),
  Vl = new Y(),
  Hl = new Y(),
  Ul = new Y(),
  Wl = new Y(),
  Gl = class extends Is {
    constructor(e = new Qc(), t = new Nl()) {
      ;(super(),
        (this.isMesh = !0),
        (this.type = `Mesh`),
        (this.geometry = e),
        (this.material = t),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        (this.count = 1),
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
    getVertexPosition(e, t) {
      let n = this.geometry,
        r = n.attributes.position,
        i = n.morphAttributes.position,
        a = n.morphTargetsRelative
      t.fromBufferAttribute(r, e)
      let o = this.morphTargetInfluences
      if (i && o) {
        Hl.set(0, 0, 0)
        for (let n = 0, r = i.length; n < r; n++) {
          let r = o[n],
            s = i[n]
          r !== 0 &&
            (Vl.fromBufferAttribute(s, e),
            a ? Hl.addScaledVector(Vl, r) : Hl.addScaledVector(Vl.sub(t), r))
        }
        t.add(Hl)
      }
      return t
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this)
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.material,
        i = this.matrixWorld
      r !== void 0 &&
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Il.copy(n.boundingSphere),
        Il.applyMatrix4(i),
        Fl.copy(e.ray).recast(e.near),
        (Il.containsPoint(Fl.origin) === !1 &&
          (Fl.intersectSphere(Il, Ll) === null ||
            Fl.origin.distanceToSquared(Ll) > (e.far - e.near) ** 2)) ||
          (Pl.copy(i).invert(),
          Fl.copy(e.ray).applyMatrix4(Pl),
          (n.boundingBox === null || Fl.intersectsBox(n.boundingBox) !== !1) &&
            this._computeIntersections(e, t, Fl)))
    }
    _computeIntersections(e, t, n) {
      let r,
        i = this.geometry,
        a = this.material,
        o = i.index,
        s = i.attributes.position,
        c = i.attributes.uv,
        l = i.attributes.uv1,
        u = i.attributes.normal,
        d = i.groups,
        f = i.drawRange
      if (o !== null) {
        if (Array.isArray(a))
          for (let i = 0, s = d.length; i < s; i++) {
            let s = d[i],
              p = a[s.materialIndex],
              m = Math.max(s.start, f.start),
              h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count))
            for (let i = m, a = h; i < a; i += 3) {
              let a = o.getX(i),
                d = o.getX(i + 1),
                f = o.getX(i + 2)
              ;((r = ql(this, p, e, n, c, l, u, a, d, f)),
                r &&
                  ((r.faceIndex = Math.floor(i / 3)),
                  (r.face.materialIndex = s.materialIndex),
                  t.push(r)))
            }
          }
        else {
          let i = Math.max(0, f.start),
            s = Math.min(o.count, f.start + f.count)
          for (let d = i, f = s; d < f; d += 3) {
            let i = o.getX(d),
              s = o.getX(d + 1),
              f = o.getX(d + 2)
            ;((r = ql(this, a, e, n, c, l, u, i, s, f)),
              r && ((r.faceIndex = Math.floor(d / 3)), t.push(r)))
          }
        }
      } else if (s !== void 0) {
        if (Array.isArray(a))
          for (let i = 0, o = d.length; i < o; i++) {
            let o = d[i],
              p = a[o.materialIndex],
              m = Math.max(o.start, f.start),
              h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count))
            for (let i = m, a = h; i < a; i += 3) {
              let a = i,
                s = i + 1,
                d = i + 2
              ;((r = ql(this, p, e, n, c, l, u, a, s, d)),
                r &&
                  ((r.faceIndex = Math.floor(i / 3)),
                  (r.face.materialIndex = o.materialIndex),
                  t.push(r)))
            }
          }
        else {
          let i = Math.max(0, f.start),
            o = Math.min(s.count, f.start + f.count)
          for (let s = i, d = o; s < d; s += 3) {
            let i = s,
              o = s + 1,
              d = s + 2
            ;((r = ql(this, a, e, n, c, l, u, i, o, d)),
              r && ((r.faceIndex = Math.floor(s / 3)), t.push(r)))
          }
        }
      }
    }
  }
