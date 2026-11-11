function Cu(e, t, n) {
  var r = t.deletions
  if (r !== null)
    for (var a = 0; a < r.length; a++) {
      var o = r[a],
        s = e,
        c = t,
        l = c
      a: for (; l !== null;) {
        switch (l.tag) {
          case 27:
            if (Tp(l.type)) {
              ;((hu = l.stateNode), (gu = !1))
              break a
            }
            break
          case 5:
            ;((hu = l.stateNode), (gu = !1))
            break a
          case 3:
          case 4:
            ;((hu = l.stateNode.containerInfo), (gu = !0))
            break a
        }
        l = l.return
      }
      if (hu === null) throw Error(i(160))
      ;(vu(s, c, o),
        (hu = null),
        (gu = !1),
        (s = o.alternate),
        s !== null && (s.return = null),
        (o.return = null))
    }
  if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (Tu(t, e, n), (t = t.sibling))
}
var wu = null
