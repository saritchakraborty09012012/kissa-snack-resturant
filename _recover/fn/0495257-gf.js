function gf(e, t, n, r, i, a, o) {
  if (!e) return
  !o && a && Ef(e, r, i, a)
  let s = e
  for (; e.prev !== e.next;) {
    let c = e.prev,
      l = e.next
    if (a ? vf(e, r, i, a) : _f(e)) (t.push(c.i, e.i, l.i), Uf(e), (e = l.next), (s = l.next))
    else if (((e = l), e === s)) {
      o
        ? o === 1
          ? ((e = yf(hf(e), t)), gf(e, t, n, r, i, a, 2))
          : o === 2 && bf(e, t, n, r, i, a)
        : gf(hf(e), t, n, r, i, a, 1)
      break
    }
  }
}
