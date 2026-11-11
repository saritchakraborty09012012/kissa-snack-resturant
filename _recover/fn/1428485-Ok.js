function Ok(e, t) {
  let n = e
  for (let e of t.split(`-`)) {
    if (n == null) return
    n = n[e]
  }
  return n
}
