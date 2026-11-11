function Hu(e, t) {
  if (e.constructor !== t.constructor) {
    let n = Math.min(e.length, t.length)
    for (let r = 0; r < n; r++) t[r] = e[r]
  } else {
    let n = Math.min(e.length, t.length)
    t.set(new e.constructor(e.buffer, 0, n))
  }
}
var Uu = class extends Gl {
    constructor(e, t, n = t * 2, r) {
      ;(super(new Qc(), r),
        (this.isBatchedMesh = !0),
        (this.perObjectFrustumCulled = !0),
        (this.sortObjects = !0),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.customSort = null),
        (this._instanceInfo = []),
        (this._geometryInfo = []),
        (this._availableInstanceIds = []),
        (this._availableGeometryIds = []),
        (this._nextIndexStart = 0),
        (this._nextVertexStart = 0),
        (this._geometryCount = 0),
        (this._visibilityChanged = !0),
        (this._geometryInitialized = !1),
        (this._maxInstanceCount = e),
        (this._maxVertexCount = t),
        (this._maxIndexCount = n),
        (this._multiDrawCounts = new Int32Array(e)),
        (this._multiDrawStarts = new Int32Array(e)),
        (this._multiDrawCount = 0),
        (this._multiDrawBytesPerElement = 1),
        (this._mergedDrawCounts = new Int32Array(e)),
        (this._mergedDrawStarts = new Int32Array(e)),
        (this._mergedDrawInstanceCounts = new Int32Array(e)),
        (this._mergedDrawCount = 0),
        (this._matricesTexture = null),
        (this._indirectTexture = null),
        (this._colorsTexture = null),
        (this._previousMatricesTexture = null),
        this._initMatricesTexture(),
        this._initIndirectTexture())
    }
    get maxInstanceCount() {
      return this._maxInstanceCount
    }
    get instanceCount() {
      return this._instanceInfo.length - this._availableInstanceIds.length
    }
    get unusedVertexCount() {
      return this._maxVertexCount - this._nextVertexStart
    }
    get unusedIndexCount() {
      return this._maxIndexCount - this._nextIndexStart
    }
    _initMatricesTexture() {
      let e = Math.sqrt(this._maxInstanceCount * 4)
      ;((e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4)))
      let t = new au(new Float32Array(e * e * 4), e, e, li, ei)
      this._matricesTexture = t
    }
    _initIndirectTexture() {
      let e = Math.sqrt(this._maxInstanceCount)
      e = Math.ceil(e)
      let t = new au(new Uint32Array(e * e), e, e, pi, $r)
      this._indirectTexture = t
    }
    _initColorsTexture() {
      let e = Math.sqrt(this._maxInstanceCount)
      e = Math.ceil(e)
      let t = new au(new Float32Array(e * e * 4).fill(1), e, e, li, ei)
      ;((t.colorSpace = Wo.workingColorSpace), (this._colorsTexture = t))
    }
    _initializeGeometry(e) {
      let t = this.geometry,
        n = this._maxVertexCount,
        r = this._maxIndexCount
      if (this._geometryInitialized === !1) {
        for (let r in e.attributes) {
          let { array: i, itemSize: a, normalized: o } = e.getAttribute(r),
            s = new jc(new i.constructor(n * a), a, o)
          t.setAttribute(r, s)
        }
        if (e.getIndex() !== null) {
          let e = n > 65535 ? new Uint32Array(r) : new Uint16Array(r)
          t.setIndex(new jc(e, 1))
        }
        this._geometryInitialized = !0
      }
    }
    _validateGeometry(e) {
      let t = this.geometry
      if (!!e.getIndex() != !!t.getIndex())
        throw Error(`THREE.BatchedMesh: All geometries must consistently have "index".`)
      for (let n in t.attributes) {
        if (!e.hasAttribute(n))
          throw Error(
            `THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`,
          )
        let r = e.getAttribute(n),
          i = t.getAttribute(n)
        if (r.itemSize !== i.itemSize || r.normalized !== i.normalized)
          throw Error(
            `THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`,
          )
      }
    }
    validateInstanceId(e) {
      let t = this._instanceInfo
      if (e < 0 || e >= t.length || t[e].active === !1)
        throw Error(
          `THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`,
        )
    }
    validateGeometryId(e) {
      let t = this._geometryInfo
      if (e < 0 || e >= t.length || t[e].active === !1)
        throw Error(
          `THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`,
        )
    }
    setCustomSort(e) {
      return ((this.customSort = e), this)
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new cc())
      let e = this.boundingBox,
        t = this._instanceInfo
      e.makeEmpty()
      for (let n = 0, r = t.length; n < r; n++) {
        if (t[n].active === !1) continue
        let r = t[n].geometryIndex
        ;(this.getMatrixAt(n, Ou), this.getBoundingBoxAt(r, Mu).applyMatrix4(Ou), e.union(Mu))
      }
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Wc())
      let e = this.boundingSphere,
        t = this._instanceInfo
      e.makeEmpty()
      for (let n = 0, r = t.length; n < r; n++) {
        if (t[n].active === !1) continue
        let r = t[n].geometryIndex
        ;(this.getMatrixAt(n, Ou),
          this.getBoundingSphereAt(r, Nu).applyMatrix4(Ou),
          e.union(Nu))
      }
    }
    addInstance(e) {
      if (
        this._instanceInfo.length >= this.maxInstanceCount &&
        this._availableInstanceIds.length === 0
      )
        throw Error(`THREE.BatchedMesh: Maximum item count reached.`)
      let t = { visible: !0, active: !0, geometryIndex: e },
        n = null
      this._availableInstanceIds.length > 0
        ? (this._availableInstanceIds.sort(wu),
          (n = this._availableInstanceIds.shift()),
          (this._instanceInfo[n] = t))
        : ((n = this._instanceInfo.length), this._instanceInfo.push(t))
      let r = this._matricesTexture
      ;(Ou.identity().toArray(r.image.data, n * 16), (r.needsUpdate = !0))
      let i = this._colorsTexture
      return (
        i && (ku.toArray(i.image.data, n * 4), (i.needsUpdate = !0)),
        (this._visibilityChanged = !0),
        n
      )
    }
    addGeometry(e, t = -1, n = -1) {
      ;(this._initializeGeometry(e), this._validateGeometry(e))
      let r = {
          vertexStart: -1,
          vertexCount: -1,
          reservedVertexCount: -1,
          indexStart: -1,
          indexCount: -1,
          reservedIndexCount: -1,
          start: -1,
          count: -1,
          boundingBox: null,
          boundingSphere: null,
          active: !0,
        },
        i = this._geometryInfo
      ;((r.vertexStart = this._nextVertexStart),
        (r.reservedVertexCount = t === -1 ? e.getAttribute(`position`).count : t))
      let a = e.getIndex()
      if (
        (a !== null &&
          ((r.indexStart = this._nextIndexStart),
          (r.reservedIndexCount = n === -1 ? a.count : n)),
        (r.indexStart !== -1 && r.indexStart + r.reservedIndexCount > this._maxIndexCount) ||
          r.vertexStart + r.reservedVertexCount > this._maxVertexCount)
      )
        throw Error(
          `THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.`,
        )
      let o
      return (
        this._availableGeometryIds.length > 0
          ? (this._availableGeometryIds.sort(wu),
            (o = this._availableGeometryIds.shift()),
            (i[o] = r))
          : ((o = this._geometryCount), this._geometryCount++, i.push(r)),
        this.setGeometryAt(o, e),
        (this._nextIndexStart = r.indexStart + r.reservedIndexCount),
        (this._nextVertexStart = r.vertexStart + r.reservedVertexCount),
        o
      )
    }
    setGeometryAt(e, t) {
      if (e >= this._geometryCount)
        throw Error(`THREE.BatchedMesh: Maximum geometry count reached.`)
      this._validateGeometry(t)
      let n = this.geometry,
        r = n.getIndex() !== null,
        i = n.getIndex(),
        a = t.getIndex(),
        o = this._geometryInfo[e]
      if (
        (r && a.count > o.reservedIndexCount) ||
        t.attributes.position.count > o.reservedVertexCount
      )
        throw Error(`THREE.BatchedMesh: Reserved space not large enough for provided geometry.`)
      let s = o.vertexStart,
        c = o.reservedVertexCount
      o.vertexCount = t.getAttribute(`position`).count
      for (let e in n.attributes) {
        let r = t.getAttribute(e),
          i = n.getAttribute(e)
        Vu(r, i, s)
        let a = r.itemSize
        for (let e = r.count, t = c; e < t; e++) {
          let t = s + e
          for (let e = 0; e < a; e++) i.setComponent(t, e, 0)
        }
        ;((i.needsUpdate = !0), i.addUpdateRange(s * a, c * a))
      }
      if (r) {
        let e = o.indexStart,
          n = o.reservedIndexCount
        o.indexCount = t.getIndex().count
        for (let t = 0; t < a.count; t++) i.setX(e + t, s + a.getX(t))
        for (let t = a.count, r = n; t < r; t++) i.setX(e + t, s)
        ;((i.needsUpdate = !0), i.addUpdateRange(e, o.reservedIndexCount))
      }
      return (
        (o.start = r ? o.indexStart : o.vertexStart),
        (o.count = r ? o.indexCount : o.vertexCount),
        (o.boundingBox = null),
        t.boundingBox !== null && (o.boundingBox = t.boundingBox.clone()),
        (o.boundingSphere = null),
        t.boundingSphere !== null && (o.boundingSphere = t.boundingSphere.clone()),
        (this._visibilityChanged = !0),
        e
      )
    }
    deleteGeometry(e) {
      let t = this._geometryInfo
      if (e >= t.length || t[e].active === !1) return this
      let n = this._instanceInfo
      for (let t = 0, r = n.length; t < r; t++)
        n[t].active && n[t].geometryIndex === e && this.deleteInstance(t)
      return (
        (t[e].active = !1),
        this._availableGeometryIds.push(e),
        (this._visibilityChanged = !0),
        this
      )
    }
    deleteInstance(e) {
      return (
        this.validateInstanceId(e),
        (this._instanceInfo[e].active = !1),
        this._availableInstanceIds.push(e),
        (this._visibilityChanged = !0),
        this
      )
    }
    optimize() {
      let e = 0,
        t = 0,
        n = this._geometryInfo,
        r = n.map((e, t) => t).sort((e, t) => n[e].vertexStart - n[t].vertexStart),
        i = this.geometry
      for (let a = 0, o = n.length; a < o; a++) {
        let o = n[r[a]]
        if (o.active !== !1) {
          if (i.index !== null) {
            if (o.indexStart !== t) {
              let { indexStart: n, vertexStart: r, reservedIndexCount: a } = o,
                s = i.index,
                c = s.array,
                l = e - r
              for (let e = n; e < n + a; e++) c[e] = c[e] + l
              ;(s.array.copyWithin(t, n, n + a),
                s.addUpdateRange(t, a),
                (s.needsUpdate = !0),
                (o.indexStart = t))
            }
            t += o.reservedIndexCount
          }
          if (o.vertexStart !== e) {
            let { vertexStart: t, reservedVertexCount: n } = o,
              r = i.attributes
            for (let i in r) {
              let a = r[i],
                { array: o, itemSize: s } = a
              ;(o.copyWithin(e * s, t * s, (t + n) * s),
                a.addUpdateRange(e * s, n * s),
                (a.needsUpdate = !0))
            }
            o.vertexStart = e
          }
          ;((e += o.reservedVertexCount), (o.start = i.index ? o.indexStart : o.vertexStart))
        }
      }
      return (
        (this._nextIndexStart = t),
        (this._nextVertexStart = e),
        (this._visibilityChanged = !0),
        this
      )
    }
    getBoundingBoxAt(e, t) {
      if (e >= this._geometryCount) return null
      let n = this.geometry,
        r = this._geometryInfo[e]
      if (r.boundingBox === null) {
        let e = new cc(),
          t = n.index,
          i = n.attributes.position
        for (let n = r.start, a = r.start + r.count; n < a; n++) {
          let r = n
          ;(t && (r = t.getX(r)), e.expandByPoint(Pu.fromBufferAttribute(i, r)))
        }
        r.boundingBox = e
      }
      return (t.copy(r.boundingBox), t)
    }
    getBoundingSphereAt(e, t) {
      if (e >= this._geometryCount) return null
      let n = this.geometry,
        r = this._geometryInfo[e]
      if (r.boundingSphere === null) {
        let t = new Wc()
        ;(this.getBoundingBoxAt(e, Mu), Mu.getCenter(t.center))
        let i = n.index,
          a = n.attributes.position,
          o = 0
        for (let e = r.start, n = r.start + r.count; e < n; e++) {
          let n = e
          ;(i && (n = i.getX(n)),
            Pu.fromBufferAttribute(a, n),
            (o = Math.max(o, t.center.distanceToSquared(Pu))))
        }
        ;((t.radius = Math.sqrt(o)), (r.boundingSphere = t))
      }
      return (t.copy(r.boundingSphere), t)
    }
    setMatrixAt(e, t) {
      this.validateInstanceId(e)
      let n = this._matricesTexture,
        r = this._matricesTexture.image.data
      return (t.toArray(r, e * 16), (n.needsUpdate = !0), this)
    }
    getMatrixAt(e, t) {
      return (this.validateInstanceId(e), t.fromArray(this._matricesTexture.image.data, e * 16))
    }
    setColorAt(e, t) {
      return (
        this.validateInstanceId(e),
        this._colorsTexture === null && this._initColorsTexture(),
        t.toArray(this._colorsTexture.image.data, e * 4),
        (this._colorsTexture.needsUpdate = !0),
        this
      )
    }
    getColorAt(e, t) {
      return (
        this.validateInstanceId(e),
        this._colorsTexture === null
          ? t.isVector4
            ? t.set(1, 1, 1, 1)
            : t.setRGB(1, 1, 1)
          : t.fromArray(this._colorsTexture.image.data, e * 4)
      )
    }
    setVisibleAt(e, t) {
      return (
        this.validateInstanceId(e),
        this._instanceInfo[e].visible === t ||
          ((this._instanceInfo[e].visible = t), (this._visibilityChanged = !0)),
        this
      )
    }
    getVisibleAt(e) {
      return (this.validateInstanceId(e), this._instanceInfo[e].visible)
    }
    setGeometryIdAt(e, t) {
      return (
        this.validateInstanceId(e),
        this.validateGeometryId(t),
        (this._instanceInfo[e].geometryIndex = t),
        (this._visibilityChanged = !0),
        this
      )
    }
    getGeometryIdAt(e) {
      return (this.validateInstanceId(e), this._instanceInfo[e].geometryIndex)
    }
    getGeometryRangeAt(e, t = {}) {
      this.validateGeometryId(e)
      let n = this._geometryInfo[e]
      return (
        (t.vertexStart = n.vertexStart),
        (t.vertexCount = n.vertexCount),
        (t.reservedVertexCount = n.reservedVertexCount),
        (t.indexStart = n.indexStart),
        (t.indexCount = n.indexCount),
        (t.reservedIndexCount = n.reservedIndexCount),
        (t.start = n.start),
        (t.count = n.count),
        t
      )
    }
    setInstanceCount(e) {
      let t = this._availableInstanceIds,
        n = this._instanceInfo
      for (t.sort(wu); t[t.length - 1] === n.length - 1;) (n.pop(), t.pop())
      if (e < n.length)
        throw Error(
          `THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`,
        )
      let r = new Int32Array(e),
        i = new Int32Array(e)
      ;(Hu(this._multiDrawCounts, r),
        Hu(this._multiDrawStarts, i),
        (this._multiDrawCounts = r),
        (this._multiDrawStarts = i))
      let a = new Int32Array(e),
        o = new Int32Array(e),
        s = new Int32Array(e)
      ;(Hu(this._mergedDrawCounts, a),
        Hu(this._mergedDrawStarts, o),
        Hu(this._mergedDrawInstanceCounts, s),
        (this._mergedDrawCounts = a),
        (this._mergedDrawStarts = o),
        (this._mergedDrawInstanceCounts = s),
        (this._maxInstanceCount = e))
      let c = this._indirectTexture,
        l = this._matricesTexture,
        u = this._colorsTexture
      ;(c.dispose(),
        this._initIndirectTexture(),
        Hu(c.image.data, this._indirectTexture.image.data),
        l.dispose(),
        this._initMatricesTexture(),
        Hu(l.image.data, this._matricesTexture.image.data),
        u &&
          (u.dispose(),
          this._initColorsTexture(),
          Hu(u.image.data, this._colorsTexture.image.data)),
        this._previousMatricesTexture !== null &&
          (this._previousMatricesTexture.dispose(), (this._previousMatricesTexture = null)))
    }
    setGeometrySize(e, t) {
      let n = [...this._geometryInfo].filter((e) => e.active)
      if (Math.max(...n.map((e) => e.vertexStart + e.reservedVertexCount)) > e)
        throw Error(
          `THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`,
        )
      if (
        this.geometry.index &&
        Math.max(...n.map((e) => e.indexStart + e.reservedIndexCount)) > t
      )
        throw Error(
          `THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`,
        )
      let r = this.geometry
      ;(r.dispose(),
        (this._maxVertexCount = e),
        (this._maxIndexCount = t),
        this._geometryInitialized &&
          ((this._geometryInitialized = !1),
          (this.geometry = new Qc()),
          this._initializeGeometry(r)))
      let i = this.geometry
      r.index && Hu(r.index.array, i.index.array)
      for (let e in r.attributes) Hu(r.attributes[e].array, i.attributes[e].array)
      this._visibilityChanged = !0
    }
    raycast(e, t) {
      let n = this._instanceInfo,
        r = this._geometryInfo,
        i = this.matrixWorld,
        a = this.geometry
      ;((zu.material = this.material),
        (zu.geometry.index = a.index),
        (zu.geometry.attributes = a.attributes),
        zu.geometry.boundingBox === null && (zu.geometry.boundingBox = new cc()),
        zu.geometry.boundingSphere === null && (zu.geometry.boundingSphere = new Wc()))
      for (let a = 0, o = n.length; a < o; a++) {
        if (!n[a].visible || !n[a].active) continue
        let o = n[a].geometryIndex,
          s = r[o]
        ;(zu.geometry.setDrawRange(s.start, s.count),
          this.getMatrixAt(a, zu.matrixWorld).premultiply(i),
          this.getBoundingBoxAt(o, zu.geometry.boundingBox),
          this.getBoundingSphereAt(o, zu.geometry.boundingSphere),
          zu.raycast(e, Bu))
        for (let e = 0, n = Bu.length; e < n; e++) {
          let n = Bu[e]
          ;((n.object = this), (n.batchId = a), t.push(n))
        }
        Bu.length = 0
      }
      ;((zu.material = null),
        (zu.geometry.index = null),
        (zu.geometry.attributes = {}),
        zu.geometry.setDrawRange(0, 1 / 0))
    }
    copy(e) {
      return (
        super.copy(e),
        (this.geometry = e.geometry.clone()),
        (this.perObjectFrustumCulled = e.perObjectFrustumCulled),
        (this.sortObjects = e.sortObjects),
        (this.boundingBox = e.boundingBox === null ? null : e.boundingBox.clone()),
        (this.boundingSphere = e.boundingSphere === null ? null : e.boundingSphere.clone()),
        (this._geometryInfo = e._geometryInfo.map((e) => ({
          ...e,
          boundingBox: e.boundingBox === null ? null : e.boundingBox.clone(),
          boundingSphere: e.boundingSphere === null ? null : e.boundingSphere.clone(),
        }))),
        (this._instanceInfo = e._instanceInfo.map((e) => ({ ...e }))),
        (this._availableInstanceIds = e._availableInstanceIds.slice()),
        (this._availableGeometryIds = e._availableGeometryIds.slice()),
        (this._nextIndexStart = e._nextIndexStart),
        (this._nextVertexStart = e._nextVertexStart),
        (this._geometryCount = e._geometryCount),
        (this._maxInstanceCount = e._maxInstanceCount),
        (this._maxVertexCount = e._maxVertexCount),
        (this._maxIndexCount = e._maxIndexCount),
        (this._geometryInitialized = e._geometryInitialized),
        (this._multiDrawCounts = e._multiDrawCounts.slice()),
        (this._multiDrawStarts = e._multiDrawStarts.slice()),
        (this._multiDrawBytesPerElement = e._multiDrawBytesPerElement),
        (this._mergedDrawCounts = e._mergedDrawCounts.slice()),
        (this._mergedDrawStarts = e._mergedDrawStarts.slice()),
        (this._mergedDrawInstanceCounts = e._mergedDrawInstanceCounts.slice()),
        (this._indirectTexture = e._indirectTexture.clone()),
        (this._indirectTexture.image.data = this._indirectTexture.image.data.slice()),
        (this._matricesTexture = e._matricesTexture.clone()),
        (this._matricesTexture.image.data = this._matricesTexture.image.data.slice()),
        e._colorsTexture === null
          ? (this._colorsTexture = null)
          : ((this._colorsTexture = e._colorsTexture.clone()),
            (this._colorsTexture.image.data = this._colorsTexture.image.data.slice())),
        this
      )
    }
    dispose() {
      ;(super.dispose(),
        this.geometry.dispose(),
        this._matricesTexture.dispose(),
        (this._matricesTexture = null),
        this._indirectTexture.dispose(),
        (this._indirectTexture = null),
        this._colorsTexture !== null &&
          (this._colorsTexture.dispose(), (this._colorsTexture = null)),
        this._previousMatricesTexture !== null &&
          (this._previousMatricesTexture.dispose(), (this._previousMatricesTexture = null)))
    }
    _updateDrawParameters(e, t, n, r = `multiDraw`) {
      if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects) return
      let i = t.getIndex(),
        a = i === null ? 1 : i.array.BYTES_PER_ELEMENT,
        o = 1
      n.wireframe && ((o = 2), (a = t.attributes.position.count > 65535 ? 4 : 2))
      let s = this._instanceInfo,
        c = this._multiDrawStarts,
        l = this._multiDrawCounts,
        u = this._mergedDrawStarts,
        d = this._mergedDrawCounts,
        f = this._mergedDrawInstanceCounts,
        p = this._geometryInfo,
        m = this.perObjectFrustumCulled,
        h = this._indirectTexture,
        g = h.image.data,
        _ = e.isArrayCamera ? ju : Au
      m &&
        (e.isArrayCamera
          ? _.setFromArrayCamera(e)
          : (Ou.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse).multiply(
              this.matrixWorld,
            ),
            _.setFromProjectionMatrix(Ou, e.coordinateSystem, e.reversedDepth)))
      let v = 0,
        y = 0
      if (this.sortObjects) {
        ;(Ou.copy(this.matrixWorld).invert(),
          Fu.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ou),
          Iu.set(0, 0, -1).transformDirection(e.matrixWorld).transformDirection(Ou))
        for (let e = 0, t = s.length; e < t; e++)
          if (s[e].visible && s[e].active) {
            let t = s[e].geometryIndex
            ;(this.getMatrixAt(e, Ou), this.getBoundingSphereAt(t, Nu).applyMatrix4(Ou))
            let n = !1
            if ((m && (n = !_.intersectsSphere(Nu)), !n)) {
              let n = p[t],
                r = Lu.subVectors(Nu.center, Fu).dot(Iu)
              Ru.push(n.start, n.count, r, e)
            }
          }
        let t = Ru.list,
          i = this.customSort
        i === null ? t.sort(n.transparent ? Eu : Tu) : i.call(this, t, e)
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e],
            i = n.start * a * o,
            s = n.count * o
          ;(r === `merged`
            ? y > 0 && u[y - 1] === i && d[y - 1] === s
              ? f[y - 1]++
              : ((u[y] = i), (d[y] = s), (f[y] = 1), y++)
            : ((c[v] = i), (l[v] = s)),
            (g[v] = n.index),
            v++)
        }
        Ru.reset()
      } else
        for (let e = 0, t = s.length; e < t; e++)
          if (s[e].visible && s[e].active) {
            let t = s[e].geometryIndex,
              n = !1
            if (
              (m &&
                (this.getMatrixAt(e, Ou),
                this.getBoundingSphereAt(t, Nu).applyMatrix4(Ou),
                (n = !_.intersectsSphere(Nu))),
              !n)
            ) {
              let n = p[t],
                i = n.start * a * o,
                s = n.count * o
              ;(r === `merged`
                ? y > 0 && u[y - 1] === i && d[y - 1] === s
                  ? f[y - 1]++
                  : ((u[y] = i), (d[y] = s), (f[y] = 1), y++)
                : ((c[v] = i), (l[v] = s)),
                (g[v] = e),
                v++)
            }
          }
      ;((h.needsUpdate = !0),
        (this._multiDrawCount = v),
        (this._mergedDrawCount = y),
        (this._multiDrawBytesPerElement = a),
        (this._visibilityChanged = !1))
    }
    onBeforeRender(e, t, n, r, i) {
      e.isWebGPURenderer === !0
        ? (this._visibilityChanged || this.perObjectFrustumCulled || this.sortObjects) &&
          (this._indirectTexture.needsUpdate = !0)
        : this._updateDrawParameters(n, r, i)
    }
    onBeforeShadow(e, t, n, r, i, a) {
      e.isWebGPURenderer !== !0 && this._updateDrawParameters(r, i, a)
    }
  },
  Wu = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isLineBasicMaterial = !0),
        (this.type = `LineBasicMaterial`),
        (this.color = new X(16777215)),
        (this.map = null),
        (this.linewidth = 1),
        (this.linecap = `round`),
        (this.linejoin = `round`),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.linewidth = e.linewidth),
        (this.linecap = e.linecap),
        (this.linejoin = e.linejoin),
        (this.fog = e.fog),
        this
      )
    }
  },
  Gu = new Y(),
  Ku = new Y(),
  qu = new ls(),
  Ju = new Ml(),
  Yu = new Wc(),
  Xu = new Y(),
  Zu = new Y(),
  Qu = class extends Is {
    constructor(e = new Qc(), t = new Wu()) {
      ;(super(),
        (this.isLine = !0),
        (this.type = `Line`),
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
    computeLineDistances() {
      let e = this.geometry
      if (e.index === null) {
        let t = e.attributes.position,
          n = [0]
        for (let e = 1, r = t.count; e < r; e++)
          (Gu.fromBufferAttribute(t, e - 1),
            Ku.fromBufferAttribute(t, e),
            (n[e] = n[e - 1]),
            (n[e] += Gu.distanceTo(Ku)))
        e.setAttribute(`lineDistance`, new Bc(n, 1))
      } else
        q(
          `Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
        )
      return this
    }
    intersectsFrustum(e) {
      return e.intersectsObject(this)
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Line.threshold,
        a = n.drawRange
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Yu.copy(n.boundingSphere),
        Yu.applyMatrix4(r),
        (Yu.radius += i),
        e.ray.intersectsSphere(Yu) === !1)
      )
        return
      ;(qu.copy(r).invert(), Ju.copy(e.ray).applyMatrix4(qu))
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o,
        c = this.isLineSegments ? 2 : 1,
        l = n.index,
        u = n.attributes.position
      if (l !== null) {
        let n = Math.max(0, a.start),
          r = Math.min(l.count, a.start + a.count)
        for (let i = n, a = r - 1; i < a; i += c) {
          let n = l.getX(i),
            r = l.getX(i + 1),
            a = $u(this, e, Ju, s, n, r, i)
          a && t.push(a)
        }
        if (this.isLineLoop) {
          let i = l.getX(r - 1),
            a = l.getX(n),
            o = $u(this, e, Ju, s, i, a, r - 1)
          o && t.push(o)
        }
      } else {
        let n = Math.max(0, a.start),
          r = Math.min(u.count, a.start + a.count)
        for (let i = n, a = r - 1; i < a; i += c) {
          let n = $u(this, e, Ju, s, i, i + 1, i)
          n && t.push(n)
        }
        if (this.isLineLoop) {
          let i = $u(this, e, Ju, s, r - 1, n, r - 1)
          i && t.push(i)
        }
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
