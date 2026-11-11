function lu(e) {
  for (; ru !== null;) {
    var t = ru,
      n = e,
      r = t.alternate,
      a = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        break
      case 1:
        if (a & 1024 && r !== null) {
          ;((n = void 0), (a = r.memoizedProps), (r = r.memoizedState))
          var o = t.stateNode
          try {
            var s = hc(t.type, a)
            ;((n = o.getSnapshotBeforeUpdate(s, r)),
              (o.__reactInternalSnapshotBeforeUpdate = n))
          } catch (e) {
            mf(t, t.return, e)
          }
        }
        break
      case 3:
        if (a & 1024) {
          if (((r = t.stateNode.containerInfo), (n = r.nodeType), n === 9)) am(r)
          else if (n === 1)
            switch (r.nodeName) {
              case `HEAD`:
              case `HTML`:
              case `BODY`:
                am(r)
                break
              default:
                r.textContent = ``
            }
        }
        break
      case 5:
      case 26:
      case 27:
      case 6:
      case 4:
      case 17:
        break
      case 30:
        n &&
          r !== null &&
          ((n = ui(r.memoizedProps, r.stateNode)),
          (a = t.memoizedProps),
          (a = fi(a.default, a.update)),
          a !== `none` && zl(r, n, a, (r.memoizedState = []), !0))
        break
      default:
        if (a & 1024) throw Error(i(163))
    }
    if (((r = t.sibling), r !== null)) {
      ;((r.return = t.return), (ru = r))
      break
    }
    ru = t.return
  }
}
