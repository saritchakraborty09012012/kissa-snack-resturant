function b(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r))
  }
}
