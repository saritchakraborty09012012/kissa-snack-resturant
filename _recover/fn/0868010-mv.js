function mv(e, t) {
  let n = this.cache
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2i(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y))
  else {
    if (rv(n, t)) return
    ;(e.uniform2iv(this.addr, t), iv(n, t))
  }
}
