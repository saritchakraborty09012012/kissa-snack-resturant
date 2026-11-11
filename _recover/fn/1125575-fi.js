function fi(e, t) {
  if (ns)
    for (; e !== null;)
      (e.tag === 5
        ? qs(e.stateNode, e.memoizedProps)
        : (e.tag === 22 && e.memoizedState !== null) || (e.tag === 30 && t) || fi(e.child, t),
        (e = e.sibling))
}
