function jl(e, t, n, r) {
  var i = e.tag
  if (i === 5 || i === 6)
    ((i = e.stateNode), t ? n.insertBefore(i, t) : n.appendChild(i), xl(e, r), (zt = !0))
  else if (
    i !== 4 &&
    (i === 27 && (xl(e, r), (r = null), Tp(e.type) && (n = e.stateNode)),
    (e = e.child),
    e !== null)
  )
    for (jl(e, t, n, r), e = e.sibling; e !== null;) (jl(e, t, n, r), (e = e.sibling))
}
