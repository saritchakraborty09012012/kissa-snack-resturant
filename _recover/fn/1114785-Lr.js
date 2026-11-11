function Lr(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 1206910976),
        (r |= i.flags & 1206910976),
        (i.return = e),
        (i = i.sibling))
  else
    for (i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling))
  return ((e.subtreeFlags |= r), (e.childLanes = n), t)
}
