function s(t, n, r) {
  return (
    (t.index = r),
    e
      ? ((r = t.alternate),
        r === null
          ? ((t.flags |= 134217730), n)
          : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
      : ((t.flags |= 1048576), n)
  )
}
