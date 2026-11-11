function Is(e) {
  var t = es().memoizedState
  return (
    Fs({ ref: t, nextImpl: e }),
    function () {
      if (Yu & 2) throw Error(i(440))
      return t.impl.apply(void 0, arguments)
    }
  )
}
