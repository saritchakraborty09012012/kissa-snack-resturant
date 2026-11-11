function _a(e) {
  for (e = e.firstContext; e !== null;) {
    if (!Pr(e.context._currentValue, e.memoizedValue)) return !0
    e = e.next
  }
  return !1
}
