function Ti(e, t, n) {
  var r = n.flags
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      ;(Hi(e, n), r & 4 && Vr(5, n))
      break
    case 1:
      if ((Hi(e, n), r & 4)) {
        if (((e = n.stateNode), t === null))
          try {
            e.componentDidMount()
          } catch (e) {
            Ga(n, n.return, e)
          }
        else {
          var i = Hn(n.type, t.memoizedProps)
          t = t.memoizedState
          try {
            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
          } catch (e) {
            Ga(n, n.return, e)
          }
        }
      }
      ;(r & 64 && Ur(n), r & 512 && Gr(n, n.return))
      break
    case 3:
      if ((Hi(e, n), r & 64 && ((r = n.updateQueue), r !== null))) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 27:
            case 5:
              e = Ho(n.child.stateNode)
              break
            case 1:
              e = n.child.stateNode
          }
        try {
          dt(r, e)
        } catch (e) {
          Ga(n, n.return, e)
        }
      }
      break
    case 27:
      ml && t === null && r & 4 && si(n)
    case 26:
    case 5:
      if ((Hi(e, n), t === null)) {
        if (r & 4) $r(n)
        else if (r & 64) {
          ;((e = n.type), (t = n.memoizedProps), (i = n.stateNode))
          try {
            Vc(i, e, t, n)
          } catch (e) {
            Ga(n, n.return, e)
          }
        }
      }
      r & 512 && Gr(n, n.return)
      break
    case 12:
      Hi(e, n)
      break
    case 31:
      ;(Hi(e, n), r & 4 && Mi(e, n))
      break
    case 13:
      ;(Hi(e, n),
        r & 4 && Ni(e, n),
        r & 64 &&
          ((r = n.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null && ((n = Ya.bind(null, n)), xc(r, n)))))
      break
    case 22:
      if (((r = n.memoizedState !== null || wd), !r)) {
        var a = (t !== null && t.memoizedState !== null) || Td
        ;((t = wd),
          (i = Td),
          (wd = r),
          (Td = a) && !i
            ? ((r = ml ? 2 : 0), n.subtreeFlags & 8772 && (r |= 1), Wi(e, n, r))
            : Hi(e, n),
          (wd = t),
          (Td = i))
      }
      break
    case 30:
      ;(Hi(e, n), r & 512 && Gr(n, n.return))
      break
    case 7:
      r & 512 && Gr(n, n.return)
    default:
      Hi(e, n)
  }
}
