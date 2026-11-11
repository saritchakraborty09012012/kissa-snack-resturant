function yf(e, t) {
  let n = e
  do {
    let r = n.prev,
      i = n.next.next
    ;(!Pf(r, i) &&
      Ff(r, n, n.next, i) &&
      zf(r, i) &&
      zf(i, r) &&
      (t.push(r.i, n.i, i.i), Uf(n), Uf(n.next), (n = e = i)),
      (n = n.next))
  } while (n !== e)
  return hf(n)
}
