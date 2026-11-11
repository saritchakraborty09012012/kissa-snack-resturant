function hv(e, t) {
  let n = this.cache
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3i(this.addr, t.x, t.y, t.z), (n[0] = t.x), (n[1] = t.y), (n[2] = t.z))
  else {
    if (rv(n, t)) return
    ;(e.uniform3iv(this.addr, t), iv(n, t))
  }
}
