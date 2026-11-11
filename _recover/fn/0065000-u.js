function u(e, t, n, r) {
  return t === null ||
    t.tag !== 4 ||
    t.stateNode.containerInfo !== n.containerInfo ||
    t.stateNode.implementation !== n.implementation
    ? ((t = Ni(n, e.mode, r)), (t.return = e), t)
    : ((t = a(t, n.children || [])), (t.return = e), t)
}
