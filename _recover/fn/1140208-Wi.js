function Wi(e, t, n) {
  for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
    var r = t.alternate,
      i = e,
      a = t,
      o = a.flags,
      s = !!(n & 1)
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ;(Wi(i, a, n), Vr(4, a))
        break
      case 1:
        if ((Wi(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
          try {
            i.componentDidMount()
          } catch (e) {
            Ga(r, r.return, e)
          }
        if (((r = a), (i = r.updateQueue), i !== null)) {
          var c = r.stateNode
          try {
            var l = i.shared.hiddenCallbacks
            if (l !== null)
              for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) ut(l[i], c)
          } catch (e) {
            Ga(r, r.return, e)
          }
        }
        ;(s && o & 64 && Ur(a), Gr(a, a.return))
        break
      case 27:
        ml && n & 2 && si(a)
      case 5:
        ;((a.tag !== 5 && a.tag !== 27) || Yr(a),
          Wi(i, a, n),
          s && r === null && o & 4 && $r(a),
          Gr(a, a.return))
        break
      case 6:
        Yr(a)
        break
      case 26:
        ;(el &&
          ((c = a.stateNode),
          a.memoizedState !== null || c === null || wd || sl(nl(c.ownerDocument), a.type, c)),
          Wi(i, a, n),
          s && r === null && o & 4 && $r(a),
          Gr(a, a.return))
        break
      case 12:
        Wi(i, a, n)
        break
      case 31:
        ;(Wi(i, a, n), s && o & 4 && Mi(i, a))
        break
      case 13:
        ;(Wi(i, a, n), s && o & 4 && Ni(i, a))
        break
      case 22:
        ;(a.memoizedState === null && Wi(i, a, n), Gr(a, a.return))
        break
      case 30:
        ;(Wi(i, a, n), Gr(a, a.return))
        break
      case 7:
        Gr(a, a.return)
      default:
        Wi(i, a, n)
    }
    t = t.sibling
  }
}
