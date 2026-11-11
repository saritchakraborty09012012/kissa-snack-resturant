function Qv(e, t, n) {
  let r = e.name,
    i = r.length
  for (Xv.lastIndex = 0; ;) {
    let a = Xv.exec(r),
      o = Xv.lastIndex,
      s = a[1],
      c = a[2] === `]`,
      l = a[3]
    if ((c && (s |= 0), l === void 0 || (l === `[` && o + 2 === i))) {
      Zv(n, l === void 0 ? new qv(s, e, t) : new Jv(s, e, t))
      break
    }
    {
      let e = n.map[s]
      ;(e === void 0 && ((e = new Yv(s)), Zv(n, e)), (n = e))
    }
  }
}
var $v = class {
  constructor(e, t) {
    ;((this.seq = []), (this.map = {}))
    let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS)
    for (let r = 0; r < n; ++r) {
      let n = e.getActiveUniform(t, r)
      Qv(n, e.getUniformLocation(t, n.name), this)
    }
    let r = [],
      i = []
    for (let t of this.seq)
      t.type === e.SAMPLER_2D_SHADOW ||
      t.type === e.SAMPLER_CUBE_SHADOW ||
      t.type === e.SAMPLER_2D_ARRAY_SHADOW
        ? r.push(t)
        : i.push(t)
    r.length > 0 && (this.seq = r.concat(i))
  }
  setValue(e, t, n, r) {
    let i = this.map[t]
    i !== void 0 && i.setValue(e, n, r)
  }
  setOptional(e, t, n) {
    let r = t[n]
    r !== void 0 && this.setValue(e, n, r)
  }
  static upload(e, t, n, r) {
    for (let i = 0, a = t.length; i !== a; ++i) {
      let a = t[i],
        o = n[a.id]
      o.needsUpdate !== !1 && a.setValue(e, o.value, r)
    }
  }
  static seqWithValue(e, t) {
    let n = []
    for (let r = 0, i = e.length; r !== i; ++r) {
      let i = e[r]
      i.id in t && n.push(i)
    }
    return n
  }
}
