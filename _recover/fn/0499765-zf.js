function zf(e, t) {
  return Nf(e.prev, e, e.next) < 0
    ? Nf(e, t, e.next) >= 0 && Nf(e, e.prev, t) >= 0
    : Nf(e, t, e.prev) < 0 || Nf(e, e.next, t) < 0
}
