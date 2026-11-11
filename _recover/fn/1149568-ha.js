function ha(e) {
  for (var t = e; ;) {
    var n = t.tag
    if (
      (n === 0 || n === 11 || n === 15) &&
      t.flags & 16384 &&
      ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
    )
      for (var r = 0; r < n.length; r++) {
        var i = n[r],
          a = i.getSnapshot
        i = i.value
        try {
          if (!Ul(a(), i)) return !1
        } catch {
          return !1
        }
      }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n))
    else {
      if (t === e) break
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;((t.sibling.return = t.return), (t = t.sibling))
    }
  }
  return !0
}
