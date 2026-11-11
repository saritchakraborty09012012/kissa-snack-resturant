function uv(e, t) {
  let n = this.cache,
    r = t.elements
  if (r === void 0) {
    if (rv(n, t)) return
    ;(e.uniformMatrix2fv(this.addr, !1, t), iv(n, t))
  } else {
    if (rv(n, r)) return
    ;(tv.set(r), e.uniformMatrix2fv(this.addr, !1, tv), iv(n, r))
  }
}
