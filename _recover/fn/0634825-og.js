function og(e, t, n, r) {
  let i = !0
  if ((e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0)) {
    let r = e.children
    for (let e = 0, i = r.length; e < i; e++) og(r[e], t, n, !0)
  }
}
var sg = class {
    constructor(e = !0) {
      ;((this.autoStart = e),
        (this.startTime = 0),
        (this.oldTime = 0),
        (this.elapsedTime = 0),
        (this.running = !1),
        q(`Clock: This module has been deprecated. Please use THREE.Timer instead.`))
    }
    start() {
      ;((this.startTime = performance.now()),
        (this.oldTime = this.startTime),
        (this.elapsedTime = 0),
        (this.running = !0))
    }
    stop() {
      ;(this.getElapsedTime(), (this.running = !1), (this.autoStart = !1))
    }
    getElapsedTime() {
      return (this.getDelta(), this.elapsedTime)
    }
    getDelta() {
      let e = 0
      if (this.autoStart && !this.running) return (this.start(), 0)
      if (this.running) {
        let t = performance.now()
        ;((e = (t - this.oldTime) / 1e3), (this.oldTime = t), (this.elapsedTime += e))
      }
      return e
    }
  },
  cg = class {
    constructor(e = 1, t = 0, n = 0) {
      ;((this.radius = e), (this.phi = t), (this.theta = n))
    }
    set(e, t, n) {
      return ((this.radius = e), (this.phi = t), (this.theta = n), this)
    }
    copy(e) {
      return ((this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this)
    }
    makeSafe() {
      let e = 1e-6
      return ((this.phi = po(this.phi, e, Math.PI - e)), this)
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z)
    }
    setFromCartesianCoords(e, t, n) {
      return (
        (this.radius = Math.sqrt(e * e + t * t + n * n)),
        this.radius === 0
          ? ((this.theta = 0), (this.phi = 0))
          : ((this.theta = Math.atan2(e, n)),
            (this.phi = Math.acos(po(t / this.radius, -1, 1)))),
        this
      )
    }
    clone() {
      return new this.constructor().copy(this)
    }
  },
  lg = class {
    constructor(e = 1, t = 0, n = 0) {
      ;((this.radius = e), (this.theta = t), (this.y = n))
    }
    set(e, t, n) {
      return ((this.radius = e), (this.theta = t), (this.y = n), this)
    }
    copy(e) {
      return ((this.radius = e.radius), (this.theta = e.theta), (this.y = e.y), this)
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z)
    }
    setFromCartesianCoords(e, t, n) {
      return (
        (this.radius = Math.sqrt(e * e + n * n)),
        (this.theta = Math.atan2(e, n)),
        (this.y = t),
        this
      )
    }
    clone() {
      return new this.constructor().copy(this)
    }
  },
  ug = class {
    constructor(e, t, n, r) {
      ;((this.elements = [1, 0, 0, 1]), e !== void 0 && this.set(e, t, n, r))
    }
    identity() {
      return (this.set(1, 0, 0, 1), this)
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 4; n++) this.elements[n] = e[n + t]
      return this
    }
    set(e, t, n, r) {
      let i = this.elements
      return ((i[0] = e), (i[2] = t), (i[1] = n), (i[3] = r), this)
    }
  }
;((Dr = ug), (Dr.prototype.isMatrix2 = !0))
var dg = new J(),
  fg = class {
    constructor(e = new J(1 / 0, 1 / 0), t = new J(-1 / 0, -1 / 0)) {
      ;((this.isBox2 = !0), (this.min = e), (this.max = t))
    }
    set(e, t) {
      return (this.min.copy(e), this.max.copy(t), this)
    }
    setFromPoints(e) {
      this.makeEmpty()
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t])
      return this
    }
    setFromCenterAndSize(e, t) {
      let n = dg.copy(t).multiplyScalar(0.5)
      return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this)
    }
    clone() {
      return new this.constructor().copy(this)
    }
    copy(e) {
      return (this.min.copy(e.min), this.max.copy(e.max), this)
    }
    makeEmpty() {
      return ((this.min.x = this.min.y = 1 / 0), (this.max.x = this.max.y = -1 / 0), this)
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y
    }
    getCenter(e) {
      return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5)
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
      return (this.min.min(e), this.max.max(e), this)
    }
    expandByVector(e) {
      return (this.min.sub(e), this.max.add(e), this)
    }
    expandByScalar(e) {
      return (this.min.addScalar(-e), this.max.addScalar(e), this)
    }
    containsPoint(e) {
      return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y
      )
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
      )
    }
    intersectsBox(e) {
      return (
        e.max.x >= this.min.x &&
        e.min.x <= this.max.x &&
        e.max.y >= this.min.y &&
        e.min.y <= this.max.y
      )
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
      return this.clampPoint(e, dg).distanceTo(e)
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      )
    }
    union(e) {
      return (this.min.min(e.min), this.max.max(e.max), this)
    }
    translate(e) {
      return (this.min.add(e), this.max.add(e), this)
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max)
    }
  },
  pg = new Y(),
  mg = new Y(),
  hg = new Y(),
  gg = new Y(),
  _g = new Y(),
  vg = new Y(),
  yg = new Y(),
  bg = class {
    constructor(e = new Y(), t = new Y()) {
      ;((this.start = e), (this.end = t))
    }
    set(e, t) {
      return (this.start.copy(e), this.end.copy(t), this)
    }
    copy(e) {
      return (this.start.copy(e.start), this.end.copy(e.end), this)
    }
    getCenter(e) {
      return e.addVectors(this.start, this.end).multiplyScalar(0.5)
    }
    delta(e) {
      return e.subVectors(this.end, this.start)
    }
    distanceSq() {
      return this.start.distanceToSquared(this.end)
    }
    distance() {
      return this.start.distanceTo(this.end)
    }
    at(e, t) {
      return this.delta(t).multiplyScalar(e).add(this.start)
    }
    closestPointToPointParameter(e, t) {
      ;(pg.subVectors(e, this.start), mg.subVectors(this.end, this.start))
      let n = mg.dot(mg)
      if (n === 0) return 0
      let r = mg.dot(pg) / n
      return (t && (r = po(r, 0, 1)), r)
    }
    closestPointToPoint(e, t, n) {
      let r = this.closestPointToPointParameter(e, t)
      return this.delta(n).multiplyScalar(r).add(this.start)
    }
    distanceSqToLine3(e, t = vg, n = yg) {
      let r = 1e-8 * 1e-8,
        i,
        a,
        o = this.start,
        s = e.start,
        c = this.end,
        l = e.end
      ;(hg.subVectors(c, o), gg.subVectors(l, s), _g.subVectors(o, s))
      let u = hg.dot(hg),
        d = gg.dot(gg),
        f = gg.dot(_g)
      if (u <= r && d <= r) return (t.copy(o), n.copy(s), t.distanceToSquared(n))
      if (u <= r) ((i = 0), (a = f / d), (a = po(a, 0, 1)))
      else {
        let e = hg.dot(_g)
        if (d <= r) ((a = 0), (i = po(-e / u, 0, 1)))
        else {
          let t = hg.dot(gg),
            n = u * d - t * t
          ;((i = n === 0 ? 0 : po((t * f - e * d) / n, 0, 1)),
            (a = (t * i + f) / d),
            a < 0
              ? ((a = 0), (i = po(-e / u, 0, 1)))
              : a > 1 && ((a = 1), (i = po((t - e) / u, 0, 1))))
        }
      }
      return (
        t.copy(o).addScaledVector(hg, i),
        n.copy(s).addScaledVector(gg, a),
        t.distanceToSquared(n)
      )
    }
    applyMatrix4(e) {
      return (this.start.applyMatrix4(e), this.end.applyMatrix4(e), this)
    }
    equals(e) {
      return e.start.equals(this.start) && e.end.equals(this.end)
    }
    clone() {
      return new this.constructor().copy(this)
    }
  },
  xg = new Y(),
  Sg = class extends Is {
    constructor(e, t) {
      ;(super(),
        (this.light = e),
        (this.matrixAutoUpdate = !1),
        (this.color = t),
        (this.type = `SpotLightHelper`))
      let n = new Qc(),
        r = [
          0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
          -1, 1,
        ]
      for (let e = 0, t = 1; e < 32; e++, t++) {
        let n = (e / 32) * Math.PI * 2,
          i = (t / 32) * Math.PI * 2
        r.push(Math.cos(n), Math.sin(n), 1, Math.cos(i), Math.sin(i), 1)
      }
      n.setAttribute(`position`, new Bc(r, 3))
      let i = new Wu({ fog: !1, toneMapped: !1 })
      ;((this.cone = new nd(n, i)), this.add(this.cone), this.update())
    }
    dispose() {
      ;(super.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose())
    }
    update() {
      ;(this.light.updateWorldMatrix(!0, !1),
        this.light.target.updateWorldMatrix(!0, !1),
        this.parent
          ? (this.parent.updateWorldMatrix(!0),
            this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld))
          : this.matrix.copy(this.light.matrixWorld),
        (this.matrixWorldNeedsUpdate = !0))
      let e = this.light.distance ? this.light.distance : 1e3,
        t = e * Math.tan(this.light.angle)
      ;(this.cone.scale.set(t, t, e),
        xg.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(xg),
        this.color === void 0
          ? this.cone.material.color.copy(this.light.color)
          : this.cone.material.color.set(this.color))
    }
  },
  Cg = new Y(),
  wg = new ls(),
  Tg = new ls(),
  Eg = class extends nd {
    constructor(e) {
      let t = Dg(e),
        n = new Qc(),
        r = [],
        i = []
      for (let e = 0; e < t.length; e++) {
        let n = t[e]
        n.parent &&
          n.parent.isBone &&
          (r.push(0, 0, 0), r.push(0, 0, 0), i.push(0, 0, 0), i.push(0, 0, 0))
      }
      ;(n.setAttribute(`position`, new Bc(r, 3)), n.setAttribute(`color`, new Bc(i, 3)))
      let a = new Wu({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0,
      })
      ;(super(n, a),
        (this.isSkeletonHelper = !0),
        (this.type = `SkeletonHelper`),
        (this.root = e),
        (this.bones = t),
        (this.matrix = e.matrixWorld),
        (this.matrixAutoUpdate = !1))
      let o = new X(255),
        s = new X(65280)
      this.setColors(o, s)
    }
    updateMatrixWorld(e) {
      let t = this.bones,
        n = this.geometry,
        r = n.getAttribute(`position`)
      Tg.copy(this.root.matrixWorld).invert()
      for (let e = 0, n = 0; e < t.length; e++) {
        let i = t[e]
        i.parent &&
          i.parent.isBone &&
          (wg.multiplyMatrices(Tg, i.matrixWorld),
          Cg.setFromMatrixPosition(wg),
          r.setXYZ(n, Cg.x, Cg.y, Cg.z),
          wg.multiplyMatrices(Tg, i.parent.matrixWorld),
          Cg.setFromMatrixPosition(wg),
          r.setXYZ(n + 1, Cg.x, Cg.y, Cg.z),
          (n += 2))
      }
      ;((n.getAttribute(`position`).needsUpdate = !0), super.updateMatrixWorld(e))
    }
    setColors(e, t) {
      let n = this.geometry.getAttribute(`color`)
      for (let r = 0; r < n.count; r += 2)
        (n.setXYZ(r, e.r, e.g, e.b), n.setXYZ(r + 1, t.r, t.g, t.b))
      return ((n.needsUpdate = !0), this)
    }
    dispose() {
      ;(super.dispose(), this.geometry.dispose(), this.material.dispose())
    }
  }
