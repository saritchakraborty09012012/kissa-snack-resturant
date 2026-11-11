function be(e) {
  for (e = e.firstContext; e !== null;) {
    var t = e.context
    if (!Ul(ts ? t._currentValue : t._currentValue2, e.memoizedValue)) return !0
    e = e.next
  }
  return !1
}
