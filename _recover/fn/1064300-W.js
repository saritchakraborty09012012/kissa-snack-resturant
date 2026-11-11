function W(e, t) {
  var n = ts ? t._currentValue : t._currentValue2
  if (((t = { context: t, memoizedValue: n, next: null }), _u === null)) {
    if (e === null) throw Error(r(308))
    ;((_u = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288))
  } else _u = _u.next = t
  return n
}
