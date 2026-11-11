function Ui(e, t) {
  for (e = e.child; e !== null;) {
    var n = e,
      r = t
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(Hr(4, n, n.return), Ui(n, r))
        break
      case 1:
        Kr(n, n.return)
        var i = n.stateNode
        ;(typeof i.componentWillUnmount == `function` && Wr(n, n.return, i), Ui(n, r))
        break
      case 27:
        ml && r & 2 && _l(n.stateNode, n.type, n.memoizedProps)
      case 5:
        ;(Kr(n, n.return), (n.tag !== 5 && n.tag !== 27) || Xr(n), Ui(n, r))
        break
      case 6:
        Xr(n)
        break
      case 26:
        ;(Kr(n, n.return),
          el && ((i = n.stateNode), n.memoizedState !== null || i === null || Td || cl(i)),
          Ui(n, r))
        break
      case 22:
        n.memoizedState === null && Ui(n, r)
        break
      case 30:
        ;(Kr(n, n.return), Ui(n, r))
        break
      case 7:
        Kr(n, n.return)
      default:
        Ui(n, r)
    }
    e = e.sibling
  }
}
