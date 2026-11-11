function da(e, t) {
  if (t != null) {
    var n = e.stateNode,
      r = n.ref
    ;(r === null && (r = n.ref = ac(j(e.memoizedProps, n))),
      Tf === null && (Tf = []),
      Tf.push(t.bind(null, r)))
  }
}
