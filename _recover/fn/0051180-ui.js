function ui(e, t) {
  if (e.name != null && e.name !== `auto`) return e.name
  if (t.autoName !== null) return t.autoName
  e = bd.identifierPrefix
  var n = li++
  return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e))
}
