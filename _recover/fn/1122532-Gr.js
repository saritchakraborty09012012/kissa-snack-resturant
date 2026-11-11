function Gr(e, t) {
  try {
    var n = e.ref
    if (n !== null) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          var r = Ho(e.stateNode)
          break
        case 30:
          var i = e.stateNode,
            a = j(e.memoizedProps, i)
          ;((i.ref === null || i.ref.name !== a) && (i.ref = ac(a)), (r = i.ref))
          break
        case 7:
          ;(e.stateNode === null && (e.stateNode = sc(e)), (r = e.stateNode))
          break
        default:
          r = e.stateNode
      }
      typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r)
    }
  } catch (n) {
    Ga(e, t, n)
  }
}
