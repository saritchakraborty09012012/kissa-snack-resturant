function Cr(e, t) {
  return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && be(e)))
}
