function Hn(e, t) {
  var n = t
  if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r])
  if ((e = e.defaultProps))
    for (var i in (n === t && (n = _o({}, n)), e)) n[i] === void 0 && (n[i] = e[i])
  return n
}
