function Du(e) {
  if (e.subtreeFlags & 1024)
    for (e = e.child; e !== null;) {
      var t = e
      ;(Du(t),
        t.tag === 5 && t.flags & 1024 && ((t = t.stateNode), (yh = !0), t.reset(), (yh = !1)),
        (e = e.sibling))
    }
}
