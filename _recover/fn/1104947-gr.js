function gr(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  ;(r !== null && (r.lanes |= t), z(e.return, t, n))
}
