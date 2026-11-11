function bu(e, t) {
  if (
    t.memoizedState === null &&
    ((e = t.alternate),
    e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
  )
    try {
      Gh(e)
    } catch (e) {
      mf(t, t.return, e)
    }
}
