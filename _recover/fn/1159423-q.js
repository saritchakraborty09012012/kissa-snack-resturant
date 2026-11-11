function q(e, n, i, a, o, s) {
  var c = 0
  if (((a = e), typeof a == `function`)) $a(a) && (c = 1)
  else if (typeof a == `string`)
    c =
      el && ml
        ? tl(e, i, au.current)
          ? 26
          : vl(e)
            ? 27
            : 5
        : el
          ? tl(e, i, au.current)
            ? 26
            : 5
          : ml && vl(e)
            ? 27
            : 5
  else
    e: switch (a) {
      case jo:
        return ((e = t(31, i, n, o)), (e.elementType = jo), (e.lanes = s), e)
      case xo:
        return no(i.children, o, s, n)
      case So:
        ;((c = 8), (o |= 24))
        break
      case Co:
        return ((e = t(12, i, n, o | 2)), (e.elementType = Co), (e.lanes = s), e)
      case Do:
        return ((e = t(13, i, n, o)), (e.elementType = Do), (e.lanes = s), e)
      case Oo:
        return ((e = t(19, i, n, o)), (e.elementType = Oo), (e.lanes = s), e)
      case Mo:
      case Po:
        return (
          (e = o | 32),
          (e = t(30, i, n, e)),
          (e.elementType = Po),
          (e.lanes = s),
          (e.stateNode = { autoName: null, paired: null, clones: null, ref: null }),
          e
        )
      default:
        if (typeof a == `object` && a)
          switch (a.$$typeof) {
            case To:
              c = 10
              break e
            case wo:
              c = 9
              break e
            case Eo:
              c = 11
              break e
            case ko:
              c = 14
              break e
            case Ao:
              ;((c = 16), (a = null))
              break e
          }
        ;((c = 29), (i = Error(r(130, e === null ? `null` : typeof e, ``))), (a = null))
    }
  return ((n = t(c, i, n, o)), (n.elementType = e), (n.type = a), (n.lanes = s), n)
}
