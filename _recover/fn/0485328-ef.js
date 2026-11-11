function ef(e, t, n, r, i) {
  return Xd(e, t) + Zd(e, n) + Qd(e, r) + $d(e, i)
}
var tf = class extends Fd {
    constructor(e = new J(), t = new J(), n = new J(), r = new J()) {
      ;(super(),
        (this.isCubicBezierCurve = !0),
        (this.type = `CubicBezierCurve`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n),
        (this.v3 = r))
    }
    getPoint(e, t = new J()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2,
        o = this.v3
      return (n.set(ef(e, r.x, i.x, a.x, o.x), ef(e, r.y, i.y, a.y, o.y)), n)
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      )
    }
    toJSON() {
      let e = super.toJSON()
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      )
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      )
    }
  },
  nf = class extends Fd {
    constructor(e = new Y(), t = new Y(), n = new Y(), r = new Y()) {
      ;(super(),
        (this.isCubicBezierCurve3 = !0),
        (this.type = `CubicBezierCurve3`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n),
        (this.v3 = r))
    }
    getPoint(e, t = new Y()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2,
        o = this.v3
      return (
        n.set(ef(e, r.x, i.x, a.x, o.x), ef(e, r.y, i.y, a.y, o.y), ef(e, r.z, i.z, a.z, o.z)),
        n
      )
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      )
    }
    toJSON() {
      let e = super.toJSON()
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      )
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      )
    }
  },
  rf = class extends Fd {
    constructor(e = new J(), t = new J()) {
      ;(super(),
        (this.isLineCurve = !0),
        (this.type = `LineCurve`),
        (this.v1 = e),
        (this.v2 = t))
    }
    getPoint(e, t = new J()) {
      let n = t
      return (
        e === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
        n
      )
    }
    getPointAt(e, t) {
      return this.getPoint(e, t)
    }
    getTangent(e, t = new J()) {
      return t.subVectors(this.v2, this.v1).normalize()
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t)
    }
    copy(e) {
      return (super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this)
    }
    toJSON() {
      let e = super.toJSON()
      return ((e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e)
    }
    fromJSON(e) {
      return (super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this)
    }
  },
  af = class extends Fd {
    constructor(e = new Y(), t = new Y()) {
      ;(super(),
        (this.isLineCurve3 = !0),
        (this.type = `LineCurve3`),
        (this.v1 = e),
        (this.v2 = t))
    }
    getPoint(e, t = new Y()) {
      let n = t
      return (
        e === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
        n
      )
    }
    getPointAt(e, t) {
      return this.getPoint(e, t)
    }
    getTangent(e, t = new Y()) {
      return t.subVectors(this.v2, this.v1).normalize()
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t)
    }
    copy(e) {
      return (super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this)
    }
    toJSON() {
      let e = super.toJSON()
      return ((e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e)
    }
    fromJSON(e) {
      return (super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this)
    }
  },
  of = class extends Fd {
    constructor(e = new J(), t = new J(), n = new J()) {
      ;(super(),
        (this.isQuadraticBezierCurve = !0),
        (this.type = `QuadraticBezierCurve`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n))
    }
    getPoint(e, t = new J()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2
      return (n.set(Yd(e, r.x, i.x, a.x), Yd(e, r.y, i.y, a.y)), n)
    }
    copy(e) {
      return (super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this)
    }
    toJSON() {
      let e = super.toJSON()
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      )
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      )
    }
  },
  sf = class extends Fd {
    constructor(e = new Y(), t = new Y(), n = new Y()) {
      ;(super(),
        (this.isQuadraticBezierCurve3 = !0),
        (this.type = `QuadraticBezierCurve3`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n))
    }
    getPoint(e, t = new Y()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2
      return (n.set(Yd(e, r.x, i.x, a.x), Yd(e, r.y, i.y, a.y), Yd(e, r.z, i.z, a.z)), n)
    }
    copy(e) {
      return (super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this)
    }
    toJSON() {
      let e = super.toJSON()
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      )
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      )
    }
  },
  cf = class extends Fd {
    constructor(e = []) {
      ;(super(), (this.isSplineCurve = !0), (this.type = `SplineCurve`), (this.points = e))
    }
    getPoint(e, t = new J()) {
      let n = t,
        r = this.points,
        i = (r.length - 1) * e,
        a = Math.floor(i),
        o = i - a,
        s = r[a === 0 ? a : a - 1],
        c = r[a],
        l = r[a > r.length - 2 ? r.length - 1 : a + 1],
        u = r[a > r.length - 3 ? r.length - 1 : a + 2]
      return (n.set(Gd(o, s.x, c.x, l.x, u.x), Gd(o, s.y, c.y, l.y, u.y)), n)
    }
    copy(e) {
      ;(super.copy(e), (this.points = []))
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t]
        this.points.push(n.clone())
      }
      return this
    }
    toJSON() {
      let e = super.toJSON()
      e.points = []
      for (let t = 0, n = this.points.length; t < n; t++) {
        let n = this.points[t]
        e.points.push(n.toArray())
      }
      return e
    }
    fromJSON(e) {
      ;(super.fromJSON(e), (this.points = []))
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t]
        this.points.push(new J().fromArray(n))
      }
      return this
    }
  },
  lf = Object.freeze({
    __proto__: null,
    ArcCurve: Ld,
    CatmullRomCurve3: Wd,
    CubicBezierCurve: tf,
    CubicBezierCurve3: nf,
    EllipseCurve: Id,
    LineCurve: rf,
    LineCurve3: af,
    QuadraticBezierCurve: of,
    QuadraticBezierCurve3: sf,
    SplineCurve: cf,
  }),
  uf = class extends Fd {
    constructor() {
      ;(super(),
        (this.type = `CurvePath`),
        (this.curves = []),
        (this.autoClose = !1),
        (this.cacheLengths = null))
    }
    add(e) {
      this.curves.push(e)
    }
    closePath() {
      let e = this.curves[0].getPoint(0),
        t = this.curves[this.curves.length - 1].getPoint(1)
      if (!e.equals(t)) {
        let n = e.isVector2 === !0 ? `LineCurve` : `LineCurve3`
        this.curves.push(new lf[n](t, e))
      }
      return this
    }
    getPoint(e, t) {
      let n = e * this.getLength(),
        r = this.getCurveLengths(),
        i = 0
      for (; i < r.length;) {
        if (r[i] >= n) {
          let e = r[i] - n,
            a = this.curves[i],
            o = a.getLength(),
            s = o === 0 ? 0 : 1 - e / o
          return a.getPointAt(s, t)
        }
        i++
      }
      return null
    }
    getLength() {
      let e = this.getCurveLengths()
      return e[e.length - 1]
    }
    updateArcLengths() {
      ;((this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths())
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths
      let e = [],
        t = 0
      for (let n = 0, r = this.curves.length; n < r; n++)
        ((t += this.curves[n].getLength()), e.push(t))
      return ((this.cacheLengths = e), e)
    }
    getSpacedPoints(e = 40) {
      let t = []
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e))
      return (this.autoClose && t.push(t[0]), t)
    }
    getPoints(e = 12) {
      let t = [],
        n
      for (let r = 0, i = this.curves; r < i.length; r++) {
        let a = i[r],
          o = a.isEllipseCurve
            ? e * 2
            : a.isLineCurve || a.isLineCurve3
              ? 1
              : a.isSplineCurve
                ? e * a.points.length
                : e,
          s = a.getPoints(o)
        for (let e = 0; e < s.length; e++) {
          let r = s[e]
          ;(n && n.equals(r)) || (t.push(r), (n = r))
        }
      }
      return (
        this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]),
        t
      )
    }
    copy(e) {
      ;(super.copy(e), (this.curves = []))
      for (let t = 0, n = e.curves.length; t < n; t++) {
        let n = e.curves[t]
        this.curves.push(n.clone())
      }
      return ((this.autoClose = e.autoClose), (this.cacheLengths = null), this)
    }
    toJSON() {
      let e = super.toJSON()
      ;((e.autoClose = this.autoClose), (e.curves = []))
      for (let t = 0, n = this.curves.length; t < n; t++) {
        let n = this.curves[t]
        e.curves.push(n.toJSON())
      }
      return e
    }
    fromJSON(e) {
      ;(super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []))
      for (let t = 0, n = e.curves.length; t < n; t++) {
        let n = e.curves[t]
        this.curves.push(new lf[n.type]().fromJSON(n))
      }
      return ((this.cacheLengths = null), this)
    }
  },
  df = class extends uf {
    constructor(e) {
      ;(super(),
        (this.type = `Path`),
        (this.currentPoint = new J()),
        e && this.setFromPoints(e))
    }
    setFromPoints(e) {
      this.moveTo(e[0].x, e[0].y)
      for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y)
      return this
    }
    moveTo(e, t) {
      return (this.currentPoint.set(e, t), this)
    }
    lineTo(e, t) {
      let n = new rf(this.currentPoint.clone(), new J(e, t))
      return (this.curves.push(n), this.currentPoint.set(e, t), this)
    }
    quadraticCurveTo(e, t, n, r) {
      let i = new of(this.currentPoint.clone(), new J(e, t), new J(n, r))
      return (this.curves.push(i), this.currentPoint.set(n, r), this)
    }
    bezierCurveTo(e, t, n, r, i, a) {
      let o = new tf(this.currentPoint.clone(), new J(e, t), new J(n, r), new J(i, a))
      return (this.curves.push(o), this.currentPoint.set(i, a), this)
    }
    splineThru(e) {
      let t = new cf([this.currentPoint.clone()].concat(e))
      return (this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this)
    }
    arc(e, t, n, r, i, a) {
      let o = this.currentPoint.x,
        s = this.currentPoint.y
      return (this.absarc(e + o, t + s, n, r, i, a), this)
    }
    absarc(e, t, n, r, i, a) {
      return (this.absellipse(e, t, n, n, r, i, a), this)
    }
    ellipse(e, t, n, r, i, a, o, s) {
      let c = this.currentPoint.x,
        l = this.currentPoint.y
      return (this.absellipse(e + c, t + l, n, r, i, a, o, s), this)
    }
    absellipse(e, t, n, r, i, a, o, s) {
      let c = new Id(e, t, n, r, i, a, o, s)
      if (this.curves.length > 0) {
        let e = c.getPoint(0)
        e.equals(this.currentPoint) || this.lineTo(e.x, e.y)
      }
      this.curves.push(c)
      let l = c.getPoint(1)
      return (this.currentPoint.copy(l), this)
    }
    copy(e) {
      return (super.copy(e), this.currentPoint.copy(e.currentPoint), this)
    }
    toJSON() {
      let e = super.toJSON()
      return ((e.currentPoint = this.currentPoint.toArray()), e)
    }
    fromJSON(e) {
      return (super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this)
    }
  },
  ff = class extends df {
    constructor(e) {
      ;(super(e), (this.uuid = fo()), (this.type = `Shape`), (this.holes = []))
    }
    getPointsHoles(e) {
      let t = []
      for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e)
      return t
    }
    extractPoints(e) {
      return { shape: this.getPoints(e), holes: this.getPointsHoles(e) }
    }
    copy(e) {
      ;(super.copy(e), (this.holes = []))
      for (let t = 0, n = e.holes.length; t < n; t++) {
        let n = e.holes[t]
        this.holes.push(n.clone())
      }
      return this
    }
    toJSON() {
      let e = super.toJSON()
      ;((e.uuid = this.uuid), (e.holes = []))
      for (let t = 0, n = this.holes.length; t < n; t++) {
        let n = this.holes[t]
        e.holes.push(n.toJSON())
      }
      return e
    }
    fromJSON(e) {
      ;(super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []))
      for (let t = 0, n = e.holes.length; t < n; t++) {
        let n = e.holes[t]
        this.holes.push(new df().fromJSON(n))
      }
      return this
    }
  }
