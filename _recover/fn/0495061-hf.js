function hf(e, t) {
  if (!e) return e
  t || (t = e)
  let n = e,
    r
  do
    if (((r = !1), !n.steiner && (Pf(n, n.next) || Nf(n.prev, n, n.next) === 0))) {
      if ((Uf(n), (n = t = n.prev), n === n.next)) break
      r = !0
    } else n = n.next
  while (r || n !== t)
  return t
}
