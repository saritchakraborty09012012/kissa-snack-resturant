function Di(e, t) {
  if (ns)
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode
          t ? Us(n) : Ws(e.stateNode, e.memoizedProps)
        } catch (t) {
          Ga(e, e.return, t)
        }
        Oi(e, t)
        break
      case 6:
        try {
          var r = e.stateNode
          ;(t ? X(r) : Gs(r, e.memoizedProps), (yd = !0))
        } catch (t) {
          Ga(e, e.return, t)
        }
        break
      case 18:
        try {
          var i = e.stateNode
          t ? Yc(i) : Xc(e.stateNode)
        } catch (t) {
          Ga(e, e.return, t)
        }
        break
      case 22:
      case 23:
        e.memoizedState === null && Ei(e, t)
        break
      default:
        Ei(e, t)
    }
}
