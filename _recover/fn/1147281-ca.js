function ca(e, t) {
  if (!Ts) throw Error(r(363))
  ;((e = ia(e)), (e = sa(e, t)), (t = []), (e = Array.from(e)))
  for (var n = 0; n < e.length;) {
    var i = e[n++],
      a = i.tag
    if (a === 5 || a === 26 || a === 27) ks(i) || t.push(i.stateNode)
    else for (i = i.child; i !== null;) (e.push(i), (i = i.sibling))
  }
  return t
}
