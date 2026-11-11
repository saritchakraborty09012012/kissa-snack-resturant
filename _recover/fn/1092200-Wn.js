function Wn(e, t, n) {
  try {
    var r = e.onCaughtError
    r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null })
  } catch (e) {
    setTimeout(function () {
      throw e
    })
  }
}
