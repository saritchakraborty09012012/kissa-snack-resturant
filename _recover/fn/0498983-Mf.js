function Mf(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !Rf(e, t) &&
    ((zf(e, t) && zf(t, e) && Bf(e, t) && (Nf(e.prev, e, t.prev) || Nf(e, t.prev, t))) ||
      (Pf(e, t) && Nf(e.prev, e, e.next) > 0 && Nf(t.prev, t, t.next) > 0))
  )
}
