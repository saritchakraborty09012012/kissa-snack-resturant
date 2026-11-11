function z(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate
    if (
      ((e.childLanes & t) === t
        ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
        : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
      e === n)
    )
      break
    e = e.return
  }
}
