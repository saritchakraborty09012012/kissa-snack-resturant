function Oc(e, t, n, r, i) {
  n = n.render
  var a = t.ref
  if (`ref` in r) {
    var o = {}
    for (var s in r) s !== `ref` && (o[s] = r[s])
  } else o = r
  return (
    va(t),
    (r = Ko(e, t, n, o, a, i)),
    (s = Xo()),
    e !== null && !Ec
      ? (Zo(e, t, i), nl(e, t, i))
      : (Qi && s && qi(t), (t.flags |= 1), Dc(e, t, r, i), t.child)
  )
}
