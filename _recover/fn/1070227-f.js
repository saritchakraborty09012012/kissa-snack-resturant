function f(e, t, n, r) {
  return t === null ||
    t.tag !== 4 ||
    t.stateNode.containerInfo !== n.containerInfo ||
    t.stateNode.implementation !== n.implementation
    ? ((t = ao(n, e.mode, r)), (t.return = e), t)
    : ((t = o(t, n.children || [])), (t.return = e), t)
}
