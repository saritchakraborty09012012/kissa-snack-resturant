function lm(e) {
  if (e.type === void 0) throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`)
  let t = cm(e.type)
  if (e.times === void 0) {
    let t = [],
      n = []
    ;(zp(e.keys, t, n, `value`), (e.times = t), (e.values = n))
  }
  let n
  return (
    (n = t.parse === void 0 ? new t(e.name, e.times, e.values, e.interpolation) : t.parse(e)),
    Ip(e.settings) &&
      (n.settings = {
        inTangents: Fp(e.settings.inTangents, Float32Array),
        outTangents: Fp(e.settings.outTangents, Float32Array),
      }),
    n
  )
}
var um = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    this.enabled !== !1 && (dm(e) || (this.files[e] = t))
  },
  get: function (e) {
    if (this.enabled !== !1 && !dm(e)) return this.files[e]
  },
  remove: function (e) {
    delete this.files[e]
  },
  clear: function () {
    this.files = {}
  },
}
