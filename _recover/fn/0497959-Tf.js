function Tf(e, t) {
  return Nf(e.prev, e, t.prev) < 0 && Nf(t.next, e, e.next) < 0
}
