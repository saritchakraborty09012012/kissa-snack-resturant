function fv(e, t) {
  let n = this.cache,
    r = t.elements
  if (r === void 0) {
    if (rv(n, t)) return
    ;(e.uniformMatrix4fv(this.addr, !1, t), iv(n, t))
  } else {
    if (rv(n, r)) return
    ;($_.set(r), e.uniformMatrix4fv(this.addr, !1, $_), iv(n, r))
  }
}
