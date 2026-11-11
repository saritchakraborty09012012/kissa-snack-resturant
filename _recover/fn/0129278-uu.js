function uu(e, t, n) {
  var r = n.flags
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      ;(Au(e, n), r & 4 && hl(5, n))
      break
    case 1:
      if ((Au(e, n), r & 4)) {
        if (((e = n.stateNode), t === null))
          try {
            e.componentDidMount()
          } catch (e) {
            mf(n, n.return, e)
          }
        else {
          var i = hc(n.type, t.memoizedProps)
          t = t.memoizedState
          try {
            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
          } catch (e) {
            mf(n, n.return, e)
          }
        }
      }
      ;(r & 64 && _l(n), r & 512 && yl(n, n.return))
      break
    case 3:
      if ((Au(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
        if (((t = null), n.child !== null))
          switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode
              break
            case 1:
              t = n.child.stateNode
          }
        try {
          vo(e, t)
        } catch (e) {
          mf(n, n.return, e)
        }
      }
      break
    case 27:
      t === null && r & 4 && Ml(n)
    case 26:
    case 5:
      ;(Au(e, n), t === null && r & 4 && El(n), r & 512 && yl(n, n.return))
      break
    case 12:
      Au(e, n)
      break
    case 31:
      ;(Au(e, n), r & 4 && yu(e, n))
      break
    case 13:
      ;(Au(e, n),
        r & 4 && bu(e, n),
        r & 64 &&
          ((e = n.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null && ((n = vf.bind(null, n)), dm(e, n)))))
      break
    case 22:
      if (((r = n.memoizedState !== null || Ql), !r)) {
        var a = (t !== null && t.memoizedState !== null) || $l
        ;((t = Ql),
          (i = $l),
          (Ql = r),
          ($l = a) && !i ? ((r = 2), n.subtreeFlags & 8772 && (r |= 1), Mu(e, n, r)) : Au(e, n),
          (Ql = t),
          ($l = i))
      }
      break
    case 30:
      ;(Au(e, n), r & 512 && yl(n, n.return))
      break
    case 7:
      r & 512 && yl(n, n.return)
    default:
      Au(e, n)
  }
}
