function Oe(e) {
  try {
    var t = ``,
      n = null
    do ((t += De(e, n)), (n = e), (e = e.return))
    while (e)
    return t
  } catch (e) {
    return (
      `
Error generating stack: ` +
      e.message +
      `
` +
      e.stack
    )
  }
}
var ke = Object.prototype.hasOwnProperty,
  Ae = t.unstable_scheduleCallback,
  je = t.unstable_cancelCallback,
  Me = t.unstable_shouldYield,
  G = t.unstable_requestPaint,
  Ne = t.unstable_now,
  Pe = t.unstable_getCurrentPriorityLevel,
  Fe = t.unstable_ImmediatePriority,
  Ie = t.unstable_UserBlockingPriority,
  Le = t.unstable_NormalPriority,
  Re = t.unstable_LowPriority,
  ze = t.unstable_IdlePriority,
  Be = t.log,
  Ve = t.unstable_setDisableYieldValue,
  He = null,
  Ue = null
