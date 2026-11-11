function ki(e, t, n, r, a, o) {
  var s = 0
  if (((r = e), typeof r == `function`)) Ei(r) && (s = 1)
  else if (typeof r == `string`)
    s = Xm(e, n, B.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5
  else
    a: switch (r) {
      case ie:
        return ((e = Ti(31, n, t, a)), (e.elementType = ie), (e.lanes = o), e)
      case j:
        return Ai(n.children, a, o, t)
      case M:
        ;((s = 8), (a |= 24))
        break
      case N:
        return ((e = Ti(12, n, t, a | 2)), (e.elementType = N), (e.lanes = o), e)
      case te:
        return ((e = Ti(13, n, t, a)), (e.elementType = te), (e.lanes = o), e)
      case I:
        return ((e = Ti(19, n, t, a)), (e.elementType = I), (e.lanes = o), e)
      case ae:
      case se:
        return (
          (e = a | 32),
          (e = Ti(30, n, t, e)),
          (e.elementType = se),
          (e.lanes = o),
          (e.stateNode = { autoName: null, paired: null, clones: null, ref: null }),
          e
        )
      default:
        if (typeof r == `object` && r)
          switch (r.$$typeof) {
            case F:
              s = 10
              break a
            case P:
              s = 9
              break a
            case ee:
              s = 11
              break a
            case ne:
              s = 14
              break a
            case re:
              ;((s = 16), (r = null))
              break a
          }
        ;((s = 29), (n = Error(i(130, e === null ? `null` : typeof e, ``))), (r = null))
    }
  return ((t = Ti(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t)
}
