function Xc(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  ;(r !== null && (r.lanes |= t), ma(e.return, t, n))
}
