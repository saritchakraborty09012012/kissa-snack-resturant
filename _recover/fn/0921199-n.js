function n() {
  let t = !1,
    n = new ns(),
    r = null,
    i = new ns(0, 0, 0, 0)
  return {
    setMask: function (n) {
      r !== n && !t && (e.colorMask(n, n, n, n), (r = n))
    },
    setLocked: function (e) {
      t = e
    },
    setClear: function (t, r, a, o, s) {
      ;(s === !0 && ((t *= o), (r *= o), (a *= o)),
        n.set(t, r, a, o),
        i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n)))
    },
    reset: function () {
      ;((t = !1), (r = null), i.set(-1, 0, 0, 0))
    },
  }
}
