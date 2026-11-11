function aa(e, t) {
  var n = e.tag
  switch (t.$$typeof) {
    case zd:
      if (e.type === t.value) return !0
      break
    case Bd:
      e: {
        for (t = t.value, e = [e, 0], n = 0; n < e.length;) {
          var i = e[n++],
            a = i.tag,
            o = e[n++],
            s = t[o]
          if ((a !== 5 && a !== 26 && a !== 27) || !ks(i)) {
            for (; s != null && aa(i, s);) (o++, (s = t[o]))
            if (o === t.length) {
              t = !0
              break e
            }
            for (i = i.child; i !== null;) (e.push(i, o), (i = i.sibling))
          }
        }
        t = !1
      }
      return t
    case Vd:
      if ((n === 5 || n === 26 || n === 27) && As(e.stateNode, t.value)) return !0
      break
    case Ud:
      if (
        (n === 5 || n === 6 || n === 26 || n === 27) &&
        ((e = Os(e)), e !== null && 0 <= e.indexOf(t.value))
      )
        return !0
      break
    case Hd:
      if (
        (n === 5 || n === 26 || n === 27) &&
        ((e = e.memoizedProps[`data-testname`]),
        typeof e == `string` && e.toLowerCase() === t.value.toLowerCase())
      )
        return !0
      break
    default:
      throw Error(r(365))
  }
  return !1
}
