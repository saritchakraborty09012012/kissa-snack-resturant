function Hf(e, t) {
  t = !!(t & 4)
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    a: {
      var a = void 0
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            c = s.instance,
            l = s.currentTarget
          if (((s = s.listener), c !== a && i.isPropagationStopped())) break a
          ;((a = s), (i.currentTarget = l))
          try {
            a(i)
          } catch (e) {
            pi(e)
          }
          ;((i.currentTarget = null), (a = c))
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (c = s.instance),
            (l = s.currentTarget),
            (s = s.listener),
            c !== a && i.isPropagationStopped())
          )
            break a
          ;((a = s), (i.currentTarget = l))
          try {
            a(i)
          } catch (e) {
            pi(e)
          }
          ;((i.currentTarget = null), (a = c))
        }
    }
  }
}
