function j(e, t) {
  if (e.name != null && e.name !== `auto`) return e.name
  if (t.autoName !== null) return t.autoName
  e = vf.identifierPrefix
  var n = Hl++
  return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e))
}
