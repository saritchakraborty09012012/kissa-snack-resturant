function Ub() {
  let e = Bb(),
    [t] = v.useState(() => new Map())
  t.clear()
  let n = e
  for (; n;) {
    let e = n.type
    ;(Hb(e) && e !== Rb && !t.has(e) && t.set(e, v.use(Lb(e))), (n = n.return))
  }
  return t
}
