function Xn(e, t, n, r, i) {
  n = n.render
  var a = t.ref
  if (`ref` in r) {
    var o = {}
    for (var s in r) s !== `ref` && (o[s] = r[s])
  } else o = r
  return (
    V(t),
    (r = Tt(e, t, n, o, a, i)),
    (s = kt()),
    e !== null && !_d
      ? (At(e, t, i), Sr(e, t, i))
      : (du && s && ae(t), (t.flags |= 1), Yn(e, t, r, i), t.child)
  )
}
