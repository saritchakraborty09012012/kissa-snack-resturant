function Ii(e, t, n) {
  var i = t.deletions
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var o = i[a],
        s = e,
        c = t
      if (ns) {
        var l = c
        e: for (; l !== null;) {
          switch (l.tag) {
            case 27:
              if (ml) {
                if (yl(l.type)) {
                  ;((Pd = l.stateNode), (Fd = !1))
                  break e
                }
                break
              }
            case 5:
              ;((Pd = l.stateNode), (Fd = !1))
              break e
            case 3:
            case 4:
              ;((Pd = l.stateNode.containerInfo), (Fd = !0))
              break e
          }
          l = l.return
        }
        if (Pd === null) throw Error(r(160))
        ;(ji(s, c, o), (Pd = null), (Fd = !1))
      } else ji(s, c, o)
      ;((s = o.alternate), s !== null && (s.return = null), (o.return = null))
    }
  if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (Li(t, e, n), (t = t.sibling))
}
