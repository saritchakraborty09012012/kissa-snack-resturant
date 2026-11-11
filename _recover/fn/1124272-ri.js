function ri(e, t, n, r) {
  var i = e.tag
  if (i === 5 || i === 6) ((i = e.stateNode), t ? zs(n, i, t) : Ps(n, i), Jr(e, r), (yd = !0))
  else if (
    i !== 4 &&
    (ml && i === 27 && (Jr(e, r), (r = null), yl(e.type) && ((n = e.stateNode), (t = null))),
    (e = e.child),
    e !== null)
  )
    for (ri(e, t, n, r), e = e.sibling; e !== null;) (ri(e, t, n, r), (e = e.sibling))
}
