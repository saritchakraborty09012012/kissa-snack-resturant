function Xp(e, t, n, r, i) {
  let a = (e - t) / (i - t)
  for (let o = 0; o < 8; o++) {
    let o = Jp(a, t, n, r, i) - e
    if (Math.abs(o) < 1e-10) break
    let s = Yp(a, t, n, r, i)
    if (Math.abs(s) < 1e-10) break
    a = Math.max(0, Math.min(1, a - o / s))
  }
  return a
}
var Zp = class {
  constructor(e, t, n, r) {
    if (e === void 0) throw Error(`THREE.KeyframeTrack: track name is undefined`)
    if (t === void 0 || t.length === 0)
      throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e)
    ;((this.name = e),
      (this.times = Fp(t, this.TimeBufferType)),
      (this.values = Fp(n, this.ValueBufferType)),
      this.setInterpolation(r || this.DefaultInterpolation))
  }
  static toJSON(e) {
    let t = e.constructor,
      n
    if (t.toJSON !== this.toJSON) n = t.toJSON(e)
    else {
      n = { name: e.name, times: Fp(e.times, Array), values: Fp(e.values, Array) }
      let t = e.getInterpolation()
      ;(t !== e.DefaultInterpolation && (n.interpolation = t),
        Ip(e.settings) &&
          (n.settings = {
            inTangents: Fp(e.settings.inTangents, Array),
            outTangents: Fp(e.settings.outTangents, Array),
          }))
    }
    return ((n.type = e.ValueTypeName), n)
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Kp(this.times, this.values, this.getValueSize(), e)
  }
  InterpolantFactoryMethodLinear(e) {
    return new Gp(this.times, this.values, this.getValueSize(), e)
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Wp(this.times, this.values, this.getValueSize(), e)
  }
  InterpolantFactoryMethodBezier(e) {
    let t = new qp(this.times, this.values, this.getValueSize(), e)
    return (
      this.settings &&
        ((t.inTangents = this.settings.inTangents),
        (t.outTangents = this.settings.outTangents)),
      t
    )
  }
  setInterpolation(e) {
    let t
    switch (e) {
      case ra:
        t = this.InterpolantFactoryMethodDiscrete
        break
      case ia:
        t = this.InterpolantFactoryMethodLinear
        break
      case aa:
        t = this.InterpolantFactoryMethodSmooth
        break
      case oa:
        t = this.InterpolantFactoryMethodBezier
    }
    if (t === void 0) {
      let t =
        `unsupported interpolation for ` +
        this.ValueTypeName +
        ` keyframe track named ` +
        this.name
      if (this.createInterpolant === void 0) {
        if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation)
        else throw Error(t)
      }
      return (q(`KeyframeTrack:`, t), this)
    }
    return ((this.createInterpolant = t), this)
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ra
      case this.InterpolantFactoryMethodLinear:
        return ia
      case this.InterpolantFactoryMethodSmooth:
        return aa
      case this.InterpolantFactoryMethodBezier:
        return oa
    }
  }
  getValueSize() {
    return this.values.length / this.times.length
  }
  shift(e) {
    if (e !== 0) {
      let t = this.times
      for (let n = 0, r = t.length; n !== r; ++n) t[n] += e
      Ip(this.settings) && (Qp(this.settings.inTangents, e), Qp(this.settings.outTangents, e))
    }
    return this
  }
  scale(e) {
    if (e !== 1) {
      let t = this.times
      for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e
      Ip(this.settings) && ($p(this.settings.inTangents, e), $p(this.settings.outTangents, e))
    }
    return this
  }
  trim(e, t) {
    let n = this.times,
      r = n.length,
      i = 0,
      a = r - 1
    for (; i !== r && n[i] < e;) ++i
    for (; a !== -1 && n[a] > t;) --a
    if ((++a, i !== 0 || a !== r)) {
      i >= a && ((a = Math.max(a, 1)), (i = a - 1))
      let e = this.getValueSize()
      ;((this.times = n.slice(i, a)), (this.values = this.values.slice(i * e, a * e)))
    }
    return this
  }
  validate() {
    let e = !0,
      t = this.getValueSize()
    t - Math.floor(t) !== 0 &&
      (no(`KeyframeTrack: Invalid value size in track.`, this), (e = !1))
    let n = this.times,
      r = this.values,
      i = n.length
    i === 0 && (no(`KeyframeTrack: Track is empty.`, this), (e = !1))
    let a = null
    for (let t = 0; t !== i; t++) {
      let r = n[t]
      if (typeof r == `number` && isNaN(r)) {
        ;(no(`KeyframeTrack: Time is not a valid number.`, this, t, r), (e = !1))
        break
      }
      if (a !== null && a > r) {
        ;(no(`KeyframeTrack: Out of order keys.`, this, t, r, a), (e = !1))
        break
      }
      a = r
    }
    if (r !== void 0 && qa(r))
      for (let t = 0, n = r.length; t !== n; ++t) {
        let n = r[t]
        if (isNaN(n)) {
          ;(no(`KeyframeTrack: Value is not a valid number.`, this, t, n), (e = !1))
          break
        }
      }
    return e
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      r = this.getInterpolation() === aa,
      i = e.length - 1,
      a = 1
    for (let o = 1; o < i; ++o) {
      let i = !1,
        s = e[o]
      if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
        if (r) i = !0
        else {
          let e = o * n,
            r = e - n,
            a = e + n
          for (let o = 0; o !== n; ++o) {
            let n = t[e + o]
            if (n !== t[r + o] || n !== t[a + o]) {
              i = !0
              break
            }
          }
        }
      }
      if (i) {
        if (o !== a) {
          e[a] = e[o]
          let r = o * n,
            i = a * n
          for (let e = 0; e !== n; ++e) t[i + e] = t[r + e]
        }
        ++a
      }
    }
    if (i > 0) {
      e[a] = e[i]
      for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o]
      ++a
    }
    return (
      a === e.length
        ? ((this.times = e), (this.values = t))
        : ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n))),
      this
    )
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      r = new n(this.name, e, t)
    return (
      (r.createInterpolant = this.createInterpolant),
      Ip(this.settings) &&
        (r.settings = {
          inTangents: this.settings.inTangents.slice(),
          outTangents: this.settings.outTangents.slice(),
        }),
      r
    )
  }
}
