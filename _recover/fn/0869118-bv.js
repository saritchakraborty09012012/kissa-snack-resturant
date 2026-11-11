function bv(e, t) {
  let n = this.cache
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w))
  else {
    if (rv(n, t)) return
    ;(e.uniform4uiv(this.addr, t), iv(n, t))
  }
}
