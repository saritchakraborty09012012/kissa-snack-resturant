function Im(e, t, n, r) {
  var a = (a = be.current) ? Cm(a) : null
  if (!a) throw Error(i(446))
  switch (e) {
    case `meta`:
    case `title`:
      return null
    case `style`:
      return typeof n.precedence == `string` && typeof n.href == `string`
        ? ((n = Lm(n.href)),
          (t = Ot(a).hoistableStyles),
          (r = t.get(n)),
          r || ((r = { type: `style`, instance: null, count: 0, state: null }), t.set(n, r)),
          r)
        : { type: `void`, instance: null, count: 0, state: null }
    case `link`:
      if (
        n.rel === `stylesheet` &&
        typeof n.href == `string` &&
        typeof n.precedence == `string`
      ) {
        e = Lm(n.href)
        var o = Ot(a).hoistableStyles,
          s = o.get(e)
        if (
          (s ||
            ((a = a.ownerDocument || a),
            (s = {
              type: `stylesheet`,
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            o.set(e, s),
            (o = a.querySelector(Rm(e)))
              ? o._p || ((s.instance = o), (s.state.loading = 5))
              : ((o = xm.get(e)),
                o ||
                  ((o = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  xm.set(e, o)),
                Bm(a, e, o, s.state))),
          t && r === null)
        )
          throw Error(i(528, ``))
        return s
      }
      if (t && r !== null) throw Error(i(529, ``))
      return null
    case `script`:
      return (
        (t = n.async),
        (n = n.src),
        typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
          ? ((n = Vm(n)),
            (t = Ot(a).hoistableScripts),
            (r = t.get(n)),
            r || ((r = { type: `script`, instance: null, count: 0, state: null }), t.set(n, r)),
            r)
          : { type: `void`, instance: null, count: 0, state: null }
      )
    default:
      throw Error(i(444, e))
  }
}
