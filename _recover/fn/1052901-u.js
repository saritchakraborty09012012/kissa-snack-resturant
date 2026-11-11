function u(e) {
  if (e == null) return null
  if (typeof e == `function`) return e.$$typeof === Y ? null : e.displayName || e.name || null
  if (typeof e == `string`) return e
  switch (e) {
    case xo:
      return `Fragment`
    case Co:
      return `Profiler`
    case So:
      return `StrictMode`
    case Do:
      return `Suspense`
    case Oo:
      return `SuspenseList`
    case jo:
      return `Activity`
    case Po:
      return `ViewTransition`
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case bo:
        return `Portal`
      case To:
        return e.displayName || `Context`
      case wo:
        return (e._context.displayName || `Context`) + `.Consumer`
      case Eo:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ``),
            (e = e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        )
      case ko:
        return ((t = e.displayName || null), t === null ? u(e.type) || `Memo` : t)
      case Ao:
        ;((t = e._payload), (e = e._init))
        try {
          return u(e(t))
        } catch {}
    }
  return null
}
