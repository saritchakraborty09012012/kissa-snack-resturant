function wi(e) {
  for (; kd !== null;) {
    var t = kd,
      n = e,
      i = t.alternate,
      a = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        break
      case 1:
        if (a & 1024 && i !== null) {
          ;((n = void 0), (a = i.memoizedProps), (i = i.memoizedState))
          var o = t.stateNode
          try {
            var s = Hn(t.type, a)
            ;((n = o.getSnapshotBeforeUpdate(s, i)),
              (o.__reactInternalSnapshotBeforeUpdate = n))
          } catch (e) {
            Ga(t, t.return, e)
          }
        }
        break
      case 3:
        a & 1024 && ns && oc(t.stateNode.containerInfo)
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
          i !== null &&
          ((n = j(i.memoizedProps, i.stateNode)),
          (a = t.memoizedProps),
          (a = N(a.default, a.update)),
          a !== `none` && ui(i, n, a, (i.memoizedState = []), !0))
        break
      default:
        if (a & 1024) throw Error(r(163))
    }
    if (((i = t.sibling), i !== null)) {
      ;((i.return = t.return), (kd = i))
      break
    }
    kd = t.return
  }
}
