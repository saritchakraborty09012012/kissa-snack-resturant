function Qi(e, t, n) {
  switch (e.tag) {
    case 26:
      if ((Zi(e, t, n), e.flags & Ld)) {
        if (e.memoizedState !== null) pl(n, Id, e.memoizedState, e.memoizedProps)
        else {
          var r = e.stateNode,
            i = e.type
          ;((e = e.memoizedProps), ((t & 335544128) === t || ms(i, e)) && _s(n, r, i, e))
        }
      }
      break
    case 5:
      ;(Zi(e, t, n),
        e.flags & Ld &&
          ((r = e.stateNode),
          (i = e.type),
          (e = e.memoizedProps),
          ((t & 335544128) === t || ms(i, e)) && _s(n, r, i, e)))
      break
    case 3:
    case 4:
      el ? ((r = Id), (Id = nl(e.stateNode.containerInfo)), Zi(e, t, n), (Id = r)) : Zi(e, t, n)
      break
    case 22:
      e.memoizedState === null &&
        ((r = e.alternate),
        r !== null && r.memoizedState !== null
          ? ((r = Ld), (Ld = 16777216), Zi(e, t, n), (Ld = r))
          : Zi(e, t, n))
      break
    case 30:
      ;((e.flags & Ld) !== 0 &&
        ((r = e.memoizedProps.name),
        r != null &&
          r !== `auto` &&
          ((i = e.stateNode),
          (i.paired = null),
          xd === null && (xd = new Map()),
          xd.set(r, i))),
        Zi(e, t, n))
      break
    default:
      Zi(e, t, n)
  }
}
