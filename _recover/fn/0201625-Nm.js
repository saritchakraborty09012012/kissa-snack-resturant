function Nm(e, t, n) {
  wm.S(e, t, n)
  var r = Dm
  if (r && e) {
    var i = Ot(r).hoistableStyles,
      a = Lm(e)
    t = t || `default`
    var o = i.get(a)
    if (!o) {
      var s = { loading: 0, preload: null }
      if ((o = r.querySelector(Rm(a)))) s.loading = 5
      else {
        ;((e = D({ rel: `stylesheet`, href: e, 'data-precedence': t }, n)),
          (n = xm.get(a)) && Gm(e, n))
        var c = (o = r.createElement(`link`))
        ;(kt(c),
          ap(c, `link`, e),
          (c._p = new Promise(function (e, t) {
            ;((c.onload = e), (c.onerror = t))
          })),
          c.addEventListener(`load`, function () {
            s.loading |= 1
          }),
          c.addEventListener(`error`, function () {
            s.loading |= 2
          }),
          (s.loading |= 4),
          Wm(o, t, r))
      }
      ;((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o))
    }
  }
}
