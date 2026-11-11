function Um(e, t, n) {
  if ((t.count++, t.instance === null))
    switch (t.type) {
      case `style`:
        var r = e.querySelector(`style[data-href~="` + Xt(n.href) + `"]`)
        if (r) return ((t.instance = r), kt(r), r)
        var a = D({}, n, {
          'data-href': n.href,
          'data-precedence': n.precedence,
          href: null,
          precedence: null,
        })
        return (
          (r = (e.ownerDocument || e).createElement(`style`)),
          kt(r),
          ap(r, `style`, a),
          Wm(r, n.precedence, e),
          (t.instance = r)
        )
      case `stylesheet`:
        a = Lm(n.href)
        var o = e.querySelector(Rm(a))
        if (o) return ((t.state.loading |= 4), (t.instance = o), kt(o), o)
        ;((r = zm(n)),
          (a = xm.get(a)) && Gm(r, a),
          (o = (e.ownerDocument || e).createElement(`link`)),
          kt(o))
        var s = o
        return (
          (s._p = new Promise(function (e, t) {
            ;((s.onload = e), (s.onerror = t))
          })),
          ap(o, `link`, r),
          (t.state.loading |= 4),
          Wm(o, n.precedence, e),
          (t.instance = o)
        )
      case `script`:
        return (
          (o = Vm(n.src)),
          (a = e.querySelector(Hm(o)))
            ? ((t.instance = a), kt(a), a)
            : ((r = n),
              (a = xm.get(o)) && ((r = D({}, n)), Km(r, a)),
              (e = e.ownerDocument || e),
              (a = e.createElement(`script`)),
              kt(a),
              ap(a, `link`, r),
              e.head.appendChild(a),
              (t.instance = a))
        )
      case `void`:
        return null
      default:
        throw Error(i(443, t.type))
    }
  else
    t.type === `stylesheet` &&
      !(t.state.loading & 4) &&
      ((r = t.instance), (t.state.loading |= 4), Wm(r, n.precedence, e))
  return t.instance
}
