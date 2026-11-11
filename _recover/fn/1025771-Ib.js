function Ib(e, t, n) {
  if (!e) return
  if (n(e) === !0) return e
  let r = t ? e.return : e.child
  for (; r;) {
    let e = Ib(r, t, n)
    if (e) return e
    r = t ? null : r.sibling
  }
}
