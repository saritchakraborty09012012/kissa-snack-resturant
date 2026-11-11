function $p(e, t) {
  for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t
}
;((Zp.prototype.ValueTypeName = ``),
  (Zp.prototype.TimeBufferType = Float32Array),
  (Zp.prototype.ValueBufferType = Float32Array),
  (Zp.prototype.DefaultInterpolation = ia))
var em = class extends Zp {
  constructor(e, t, n) {
    super(e, t, n)
  }
}
;((em.prototype.ValueTypeName = `bool`),
  (em.prototype.ValueBufferType = Array),
  (em.prototype.DefaultInterpolation = ra),
  (em.prototype.InterpolantFactoryMethodLinear = void 0),
  (em.prototype.InterpolantFactoryMethodSmooth = void 0))
var tm = class extends Zp {
  constructor(e, t, n, r) {
    super(e, t, n, r)
  }
}
tm.prototype.ValueTypeName = `color`
var nm = class extends Zp {
  constructor(e, t, n, r) {
    super(e, t, n, r)
  }
}
nm.prototype.ValueTypeName = `number`
var rm = class extends Up {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o
      for (let e = c + o; c !== e; c += 4) Io.slerpFlat(i, 0, a, c - o, a, c, s)
      return i
    }
  },
  im = class extends Zp {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    InterpolantFactoryMethodLinear(e) {
      return new rm(this.times, this.values, this.getValueSize(), e)
    }
  }
;((im.prototype.ValueTypeName = `quaternion`),
  (im.prototype.InterpolantFactoryMethodSmooth = void 0))
var am = class extends Zp {
  constructor(e, t, n) {
    super(e, t, n)
  }
}
;((am.prototype.ValueTypeName = `string`),
  (am.prototype.ValueBufferType = Array),
  (am.prototype.DefaultInterpolation = ra),
  (am.prototype.InterpolantFactoryMethodLinear = void 0),
  (am.prototype.InterpolantFactoryMethodSmooth = void 0))
var om = class extends Zp {
  constructor(e, t, n, r) {
    super(e, t, n, r)
  }
}
om.prototype.ValueTypeName = `vector`
var sm = class {
  constructor(e = ``, t = -1, n = [], r = ua) {
    ;((this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = r),
      (this.uuid = fo()),
      (this.userData = {}),
      this.duration < 0 && this.resetDuration())
  }
  static parse(e) {
    let t = [],
      n = e.tracks,
      r = 1 / (e.fps || 1)
    for (let e = 0, i = n.length; e !== i; ++e) t.push(lm(n[e]).scale(r))
    let i = new this(e.name, e.duration, t, e.blendMode)
    return ((i.uuid = e.uuid), (i.userData = JSON.parse(e.userData || `{}`)), i)
  }
  static toJSON(e) {
    let t = [],
      n = e.tracks,
      r = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
        userData: JSON.stringify(e.userData),
      }
    for (let e = 0, r = n.length; e !== r; ++e) t.push(Zp.toJSON(n[e]))
    return r
  }
  static CreateFromMorphTargetSequence(e, t, n, r) {
    let i = t.length,
      a = []
    for (let e = 0; e < i; e++) {
      let o = [],
        s = []
      ;(o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0))
      let c = Lp(o)
      ;((o = Rp(o, 1, c)),
        (s = Rp(s, 1, c)),
        !r && o[0] === 0 && (o.push(i), s.push(s[0])),
        a.push(new nm(`.morphTargetInfluences[` + t[e].name + `]`, o, s).scale(1 / n)))
    }
    return new this(e, -1, a)
  }
  static findByName(e, t) {
    let n = e
    if (!Array.isArray(e)) {
      let t = e
      n = (t.geometry && t.geometry.animations) || t.animations
    }
    for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e]
    return null
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    let r = {},
      i = /^([\w-]*?)([\d]+)$/
    for (let t = 0, n = e.length; t < n; t++) {
      let n = e[t],
        a = n.name.match(i)
      if (a && a.length > 1) {
        let e = a[1],
          t = r[e]
        ;(t || (r[e] = t = []), t.push(n))
      }
    }
    let a = []
    for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n))
    return a
  }
  resetDuration() {
    let e = this.tracks,
      t = 0
    for (let n = 0, r = e.length; n !== r; ++n) {
      let e = this.tracks[n]
      t = Math.max(t, e.times[e.times.length - 1])
    }
    return ((this.duration = t), this)
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration)
    return this
  }
  validate() {
    let e = !0
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate()
    return e
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize()
    return this
  }
  clone() {
    let e = []
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone())
    let t = new this.constructor(this.name, this.duration, e, this.blendMode)
    return ((t.userData = JSON.parse(JSON.stringify(this.userData))), t)
  }
  toJSON() {
    return this.constructor.toJSON(this)
  }
}
