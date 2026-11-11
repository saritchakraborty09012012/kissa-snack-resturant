function je(e, t) {
  if (_f !== 0 && _f !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null)
  var n = e.callbackNode
  if (Ha() && e.callbackNode !== n) return null
  var r = Yd
  return (
    (r = g(e, e === qd ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== es)),
    r === 0
      ? null
      : (pa(e, r, t),
        Ae(e, Nl()),
        e.callbackNode != null && e.callbackNode === n ? je.bind(null, e) : null)
  )
}
