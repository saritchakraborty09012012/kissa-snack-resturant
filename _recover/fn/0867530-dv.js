function dv(e, t) {
  let n = this.cache,
    r = t.elements
  if (r === void 0) {
    if (rv(n, t)) return
    ;(e.uniformMatrix3fv(this.addr, !1, t), iv(n, t))
  } else {
    if (rv(n, r)) return
    ;(ev.set(r), e.uniformMatrix3fv(this.addr, !1, ev), iv(n, r))
  }
}
