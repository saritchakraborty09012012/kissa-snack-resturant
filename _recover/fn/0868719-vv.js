function vv(e, t) {
  let n = this.cache
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2ui(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y))
  else {
    if (rv(n, t)) return
    ;(e.uniform2uiv(this.addr, t), iv(n, t))
  }
}
