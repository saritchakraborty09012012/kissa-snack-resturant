function ii(e, t, n, r) {
  var i = e.tag
  if (i === 5 || i === 6) ((i = e.stateNode), t ? Rs(n, i, t) : Ns(n, i), Jr(e, r), (yd = !0))
  else if (
    i !== 4 &&
    (ml && i === 27 && (Jr(e, r), (r = null), yl(e.type) && (n = e.stateNode)),
    (e = e.child),
    e !== null)
  )
    for (ii(e, t, n, r), e = e.sibling; e !== null;) (ii(e, t, n, r), (e = e.sibling))
}
