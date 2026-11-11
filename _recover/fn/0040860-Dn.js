function Dn() {
  if (En) return En
  var e,
    t = Tn,
    n = t.length,
    r,
    i = `value` in wn ? wn.value : wn.textContent,
    a = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (En = i.slice(e, 1 < r ? 1 - r : void 0))
}
