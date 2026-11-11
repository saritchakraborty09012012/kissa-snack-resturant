function fe(e) {
  if (e == null) return null
  if (typeof e == `function`) return e.$$typeof === de ? null : e.displayName || e.name || null
  if (typeof e == `string`) return e
  switch (e) {
    case j:
      return `Fragment`
    case N:
      return `Profiler`
    case M:
      return `StrictMode`
    case te:
      return `Suspense`
    case I:
      return `SuspenseList`
    case ie:
      return `Activity`
    case se:
      return `ViewTransition`
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case A:
        return `Portal`
      case F:
        return e.displayName || `Context`
      case P:
        return (e._context.displayName || `Context`) + `.Consumer`
      case ee:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ``),
            (e = e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        )
      case ne:
        return ((t = e.displayName || null), t === null ? fe(e.type) || `Memo` : t)
      case re:
        ;((t = e._payload), (e = e._init))
        try {
          return fe(e(t))
        } catch {}
    }
  return null
}
var pe = Array.isArray,
  L = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  R = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  me = { pending: !1, data: null, method: null, action: null },
  he = [],
  ge = -1
