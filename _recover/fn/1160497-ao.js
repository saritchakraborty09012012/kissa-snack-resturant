function ao(e, n, r) {
  return (
    (n = t(4, e.children === null ? [] : e.children, e.key, n)),
    (n.lanes = r),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  )
}
