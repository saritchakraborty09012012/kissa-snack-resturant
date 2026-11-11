function bf(e, t, n, r, i, a) {
  let o = e
  do {
    let e = o.next.next
    for (; e !== o.prev;) {
      if (o.i !== e.i && Mf(o, e)) {
        let s = Vf(o, e)
        ;((o = hf(o, o.next)),
          (s = hf(s, s.next)),
          gf(o, t, n, r, i, a, 0),
          gf(s, t, n, r, i, a, 0))
        return
      }
      e = e.next
    }
    o = o.next
  } while (o !== e)
}
