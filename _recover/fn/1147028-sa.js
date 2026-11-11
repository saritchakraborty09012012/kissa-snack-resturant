function sa(e, t) {
  var n = []
  e = [e, 0]
  for (var r = 0; r < e.length;) {
    var i = e[r++],
      a = i.tag,
      o = e[r++],
      s = t[o]
    if ((a !== 5 && a !== 26 && a !== 27) || !ks(i)) {
      for (; s != null && aa(i, s);) (o++, (s = t[o]))
      if (o === t.length) n.push(i)
      else for (i = i.child; i !== null;) (e.push(i, o), (i = i.sibling))
    }
  }
  return n
}
