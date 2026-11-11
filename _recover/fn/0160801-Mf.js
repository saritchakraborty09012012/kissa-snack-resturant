function Mf(e, t) {
  if (yd !== 0 && yd !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null)
  var n = e.callbackNode
  if (df() && e.callbackNode !== n) return null
  var r = Qu
  return (
    (r = $e(e, e === Xu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
    r === 0
      ? null
      : (Fd(e, r, t),
        jf(e, Ne()),
        e.callbackNode != null && e.callbackNode === n ? Mf.bind(null, e) : null)
  )
}
