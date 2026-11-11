function yc(e, t) {
  try {
    var n = e.onUncaughtError
    n(t.value, { componentStack: t.stack })
  } catch (e) {
    setTimeout(function () {
      throw e
    })
  }
}
