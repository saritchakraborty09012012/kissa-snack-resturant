function f(e) {
  let t = a.get(e)
  if (t) {
    let n = e.index
    n !== null && t.version < n.version && d(e)
  } else d(e)
  return a.get(e)
}
