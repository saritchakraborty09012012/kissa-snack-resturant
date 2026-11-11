function Vp(e, t = 0, n = e, r = 30) {
  r <= 0 && (r = 30)
  let i = n.tracks.length,
    a = t / r
  for (let t = 0; t < i; ++t) {
    let r = n.tracks[t],
      i = r.ValueTypeName
    if (i === `bool` || i === `string`) continue
    let o = e.tracks.find(function (e) {
      return e.name === r.name && e.ValueTypeName === i
    })
    if (o === void 0) continue
    let s = 0,
      c = r.getValueSize()
    r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (s = c / 3)
    let l = 0,
      u = o.getValueSize()
    o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (l = u / 3)
    let d = r.times.length - 1,
      f
    if (a <= r.times[0]) {
      let e = s,
        t = c - s
      f = r.values.slice(e, t)
    } else if (a >= r.times[d]) {
      let e = d * c + s,
        t = e + c - s
      f = r.values.slice(e, t)
    } else {
      let e = r.createInterpolant()
      ;(e.evaluate(a), (f = e.resultBuffer.slice()))
    }
    i === `quaternion` && new Io().fromArray(f).normalize().conjugate().toArray(f)
    let p = o.times.length
    for (let e = 0; e < p; ++e) {
      let t = e * u + l
      if (i === `quaternion`) Io.multiplyQuaternionsFlat(o.values, t, f, 0, o.values, t)
      else {
        let e = u - l * 2
        for (let n = 0; n < e; ++n) o.values[t + n] -= f[n]
      }
    }
  }
  return ((e.blendMode = da), e)
}
var Hp = class {
    static convertArray(e, t) {
      return Fp(e, t)
    }
    static isTypedArray(e) {
      return qa(e)
    }
    static hasTangents(e) {
      return Ip(e)
    }
    static getKeyframeOrder(e) {
      return Lp(e)
    }
    static sortedArray(e, t, n) {
      return Rp(e, t, n)
    }
    static flattenJSON(e, t, n, r) {
      zp(e, t, n, r)
    }
    static subclip(e, t, n, r, i = 30) {
      return Bp(e, t, n, r, i)
    }
    static makeClipAdditive(e, t = 0, n = e, r = 30) {
      return Vp(e, t, n, r)
    }
  },
  Up = class {
    constructor(e, t, n, r) {
      ;((this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = r === void 0 ? new t.constructor(n) : r),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}))
    }
    evaluate(e) {
      let t = this.parameterPositions,
        n = this._cachedIndex,
        r = t[n],
        i = t[n - 1]
      validate_interval: {
        seek: {
          let a
          linear_scan: {
            forward_scan: if (!(e < r)) {
              for (let a = n + 2; ;) {
                if (r === void 0) {
                  if (e < i) break forward_scan
                  return ((n = t.length), (this._cachedIndex = n), this.copySampleValue_(n - 1))
                }
                if (n === a) break
                if (((i = r), (r = t[++n]), e < r)) break seek
              }
              a = t.length
              break linear_scan
            }
            if (!(e >= i)) {
              let o = t[1]
              e < o && ((n = 2), (i = o))
              for (let a = n - 2; ;) {
                if (i === void 0) return ((this._cachedIndex = 0), this.copySampleValue_(0))
                if (n === a) break
                if (((r = i), (i = t[--n - 1]), e >= i)) break seek
              }
              ;((a = n), (n = 0))
              break linear_scan
            }
            break validate_interval
          }
          for (; n < a;) {
            let r = (n + a) >>> 1
            e < t[r] ? (a = r) : (n = r + 1)
          }
          if (((r = t[n]), (i = t[n - 1]), i === void 0))
            return ((this._cachedIndex = 0), this.copySampleValue_(0))
          if (r === void 0)
            return ((n = t.length), (this._cachedIndex = n), this.copySampleValue_(n - 1))
        }
        ;((this._cachedIndex = n), this.intervalChanged_(n, i, r))
      }
      return this.interpolate_(n, i, e, r)
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r
      for (let e = 0; e !== r; ++e) t[e] = n[i + e]
      return t
    }
    interpolate_() {
      throw Error(`THREE.Interpolant: Call to abstract method.`)
    }
    intervalChanged_() {}
  },
  Wp = class extends Up {
    constructor(e, t, n, r) {
      ;(super(e, t, n, r),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: sa, endingEnd: sa }))
    }
    intervalChanged_(e, t, n) {
      let r = this.parameterPositions,
        i = e - 2,
        a = e + 1,
        o = r[i],
        s = r[a]
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case ca:
            ;((i = e), (o = 2 * t - n))
            break
          case la:
            ;((i = r.length - 2), (o = t + r[i] - r[i + 1]))
            break
          default:
            ;((i = e), (o = n))
        }
      if (s === void 0)
        switch (this.getSettings_().endingEnd) {
          case ca:
            ;((a = e), (s = 2 * n - t))
            break
          case la:
            ;((a = 1), (s = n + r[1] - r[0]))
            break
          default:
            ;((a = e - 1), (s = t))
        }
      let c = (n - t) * 0.5,
        l = this.valueSize
      ;((this._weightPrev = c / (t - o)),
        (this._weightNext = c / (s - n)),
        (this._offsetPrev = i * l),
        (this._offsetNext = a * l))
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        p = (n - t) / (r - t),
        m = p * p,
        h = m * p,
        g = -d * h + 2 * d * m - d * p,
        _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-0.5 + d) * p + 1,
        v = (-1 - f) * h + (1.5 + f) * m + 0.5 * p,
        y = f * h - f * m
      for (let e = 0; e !== o; ++e)
        i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e]
      return i
    }
  },
  Gp = class extends Up {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = (n - t) / (r - t),
        u = 1 - l
      for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l
      return i
    }
  },
  Kp = class extends Up {
    constructor(e, t, n, r) {
      super(e, t, n, r)
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1)
    }
  },
  qp = class extends Up {
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this.inTangents,
        u = this.outTangents
      if (!l || !u) {
        let e = (n - t) / (r - t),
          l = 1 - e
        for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e
        return i
      }
      let d = o * 2,
        f = e - 1
      for (let p = 0; p !== o; ++p) {
        let o = a[c + p],
          m = a[s + p],
          h = f * d + p * 2,
          g = u[h],
          _ = u[h + 1],
          v = e * d + p * 2,
          y = l[v],
          b = l[v + 1],
          x = Xp(n, t, g, y, r)
        i[p] = Jp(x, o, _, b, m)
      }
      return i
    }
  }
