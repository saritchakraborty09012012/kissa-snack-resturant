function ju(e, t) {
  for (e = e.child; e !== null;) {
    var n = e,
      r = t
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(gl(4, n, n.return), ju(n, r))
        break
      case 1:
        bl(n, n.return)
        var i = n.stateNode
        ;(typeof i.componentWillUnmount == `function` && vl(n, n.return, i), ju(n, r))
        break
      case 27:
        r & 2 && ym(n.stateNode, n.type, n.memoizedProps)
      case 5:
        ;(bl(n, n.return), (n.tag !== 5 && n.tag !== 27) || Cl(n), ju(n, r))
        break
      case 6:
        Cl(n)
        break
      case 26:
        ;(bl(n, n.return),
          (i = n.stateNode),
          n.memoizedState !== null || i === null || $l || i.parentNode.removeChild(i),
          ju(n, r))
        break
      case 22:
        n.memoizedState === null && ju(n, r)
        break
      case 30:
        ;(bl(n, n.return), ju(n, r))
        break
      case 7:
        bl(n, n.return)
      default:
        ju(n, r)
    }
    e = e.sibling
  }
}
