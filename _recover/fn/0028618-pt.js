function pt(e, t) {
  var n = R.p
  try {
    return ((R.p = e), t())
  } finally {
    R.p = n
  }
}
var mt = Math.random().toString(36).slice(2),
  ht = `__reactFiber$` + mt,
  gt = `__reactProps$` + mt,
  _t = `__reactContainer$` + mt,
  vt = `__reactEvents$` + mt,
  yt = `__reactListeners$` + mt,
  bt = `__reactHandles$` + mt,
  xt = `__reactResources$` + mt,
  St = `__reactMarker$` + mt,
  Ct = `__reactLoad$` + mt
