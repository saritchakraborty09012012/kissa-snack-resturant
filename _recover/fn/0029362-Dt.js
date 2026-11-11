function Dt(e) {
  var t = e.tag
  if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
  throw Error(i(33))
}
