function ye(e, t, n, i) {
  e = null
  for (var a = t, o = !1; a !== null;) {
    if (!o) {
      if (a.flags & 524288) o = !0
      else if (a.flags & 262144) break
    }
    if (a.tag === 10) {
      var s = a.alternate
      if (s === null) throw Error(r(387))
      if (((s = s.memoizedProps), s !== null)) {
        var c = a.type
        Ul(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c))
      }
    } else if (a === cu.current) {
      if (((s = a.alternate), s === null)) throw Error(r(387))
      s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
        (e === null ? (e = [xs]) : e.push(xs))
    }
    a = a.return
  }
  return (e !== null && B(t, e, n, i), (t.flags |= 262144), e !== null)
}
