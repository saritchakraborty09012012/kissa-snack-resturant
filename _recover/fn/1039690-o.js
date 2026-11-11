function o(e, t) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n].__r3f
    r == null || r.handlers.onPointerMissed == null || r.handlers.onPointerMissed(e)
  }
}
