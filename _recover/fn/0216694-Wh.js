function Wh(e) {
  Uh !== e &&
    ((Uh = e),
    t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
      Uh === e && (Uh = null)
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t],
          r = e[t + 1],
          i = e[t + 2]
        if (typeof r != `function`) {
          if (Th(r || n) === null) continue
          break
        }
        var a = Et(n)
        a !== null &&
          (e.splice(t, 3),
          (t -= 3),
          qs(a, { pending: !0, data: i, method: n.method, action: r }, r, i))
      }
    }))
}
