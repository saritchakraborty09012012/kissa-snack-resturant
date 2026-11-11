function th(e, t, n, r) {
  if (
    n.type === `stylesheet` &&
    (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
    !(n.state.loading & 4)
  ) {
    if (n.instance === null) {
      var i = Lm(r.href),
        a = t.querySelector(Rm(i))
      if (a) {
        ;((t = a._p),
          typeof t == `object` &&
            t &&
            typeof t.then == `function` &&
            (e.count++, (e = ah.bind(e)), t.then(e, e)),
          (n.state.loading |= 4),
          (n.instance = a),
          kt(a))
        return
      }
      ;((a = t.ownerDocument || t),
        (r = zm(r)),
        (i = xm.get(i)) && Gm(r, i),
        (a = a.createElement(`link`)),
        kt(a))
      var o = a
      ;((o._p = new Promise(function (e, t) {
        ;((o.onload = e), (o.onerror = t))
      })),
        ap(a, `link`, r),
        (n.instance = a))
    }
    ;(e.stylesheets === null && (e.stylesheets = new Map()),
      e.stylesheets.set(n, t),
      (t = n.state.preload) &&
        !(n.state.loading & 3) &&
        (e.count++,
        (n = ah.bind(e)),
        t.addEventListener(`load`, n),
        t.addEventListener(`error`, n)))
  }
}
var nh = 0
