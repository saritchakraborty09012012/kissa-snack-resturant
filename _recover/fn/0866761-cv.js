function cv(e, t) {
  let n = this.cache
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3f(this.addr, t.x, t.y, t.z), (n[0] = t.x), (n[1] = t.y), (n[2] = t.z))
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) &&
      (e.uniform3f(this.addr, t.r, t.g, t.b), (n[0] = t.r), (n[1] = t.g), (n[2] = t.b))
  else {
    if (rv(n, t)) return
    ;(e.uniform3fv(this.addr, t), iv(n, t))
  }
}
