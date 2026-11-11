function yl(e, t) {
  try {
    var n = e.ref
    if (n !== null) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          var r = e.stateNode
          break
        case 30:
          var i = e.stateNode,
            a = ui(e.memoizedProps, i)
          ;((i.ref === null || i.ref.name !== a) && (i.ref = Lp(a)), (r = i.ref))
          break
        case 7:
          if (e.stateNode === null) {
            var o = new Rp(e)
            ;(m(e.child, !1, tm, o, void 0, void 0), (e.stateNode = o))
          }
          r = e.stateNode
          break
        default:
          r = e.stateNode
      }
      typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r)
    }
  } catch (n) {
    mf(e, t, n)
  }
}
