function Ni(e, t, n) {
  return (
    (t = Ti(4, e.children === null ? [] : e.children, e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
var Pi = new WeakMap()
