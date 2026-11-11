function dr(e) {
  return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null)
}
var fr = !1
