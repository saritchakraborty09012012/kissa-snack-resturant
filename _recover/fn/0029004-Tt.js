function Tt(e) {
  var t
  if ((t = e[ht])) return t
  for (var n = e.parentNode; n;) {
    if ((t = n[_t] || n[ht])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = hm(e); e !== null;) {
          if ((n = e[ht])) return n
          e = hm(e)
        }
      return t
    }
    ;((e = n), (n = e.parentNode))
  }
  return null
}
