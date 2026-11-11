function gn(e) {
  var t = Nt().memoizedState
  return (
    hn({ ref: t, nextImpl: e }),
    function () {
      if (Kd & 2) throw Error(r(440))
      return t.impl.apply(void 0, arguments)
    }
  )
}
