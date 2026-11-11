function zc(e, t, n, r, i, a) {
  return (
    va(t),
    (t.updateQueue = null),
    (n = Jo(t, r, n, i)),
    qo(e),
    (r = Xo()),
    e !== null && !Ec
      ? (Zo(e, t, a), nl(e, t, a))
      : (Qi && r && qi(t), (t.flags |= 1), Dc(e, t, n, a), t.child)
  )
}
