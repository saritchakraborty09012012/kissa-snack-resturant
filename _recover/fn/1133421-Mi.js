function Mi(e, t) {
  if (
    is &&
    t.memoizedState === null &&
    ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
  ) {
    e = e.dehydrated
    try {
      Uc(e)
    } catch (e) {
      Ga(t, t.return, e)
    }
  }
}
