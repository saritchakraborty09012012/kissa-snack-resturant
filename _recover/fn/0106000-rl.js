function rl(e, t) {
  return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && _a(e)))
}
