function Rf(e, t) {
  let n = e
  do {
    if (
      n.i !== e.i &&
      n.next.i !== e.i &&
      n.i !== t.i &&
      n.next.i !== t.i &&
      Ff(n, n.next, e, t)
    )
      return !0
    n = n.next
  } while (n !== e)
  return !1
}
