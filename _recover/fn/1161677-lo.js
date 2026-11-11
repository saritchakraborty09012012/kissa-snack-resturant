function lo(e) {
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == `function`
      ? Error(r(188))
      : ((e = Object.keys(e).join(`,`)), Error(r(268, e)))
  return ((e = o(t)), (e = e === null ? null : s(e)), e === null ? null : Ho(e.stateNode))
}
