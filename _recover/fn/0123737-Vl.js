function Vl(e, t) {
  for (; e !== null;)
    (e.tag === 5
      ? kp(e.stateNode, e.memoizedProps)
      : (e.tag === 22 && e.memoizedState !== null) || (e.tag === 30 && t) || Vl(e.child, t),
      (e = e.sibling))
}
