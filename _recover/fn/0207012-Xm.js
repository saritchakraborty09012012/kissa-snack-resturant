function Xm(e, t, n) {
  if (n === 1 || t.itemProp != null) return !1
  switch (e) {
    case `meta`:
    case `title`:
      return !0
    case `style`:
      if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break
      return !0
    case `link`:
      if (
        typeof t.rel != `string` ||
        typeof t.href != `string` ||
        t.href === `` ||
        t.onLoad ||
        t.onError
      )
        break
      switch (t.rel) {
        case `stylesheet`:
          return ((e = t.disabled), typeof t.precedence == `string` && e == null)
        default:
          return !0
      }
    case `script`:
      if (
        t.async &&
        typeof t.async != `function` &&
        typeof t.async != `symbol` &&
        !t.onLoad &&
        !t.onError &&
        t.src &&
        typeof t.src == `string`
      )
        return !0
  }
  return !1
}
