function Ff(e, t, n, r) {
  let i = Lf(Nf(e, t, n)),
    a = Lf(Nf(e, t, r)),
    o = Lf(Nf(n, r, e)),
    s = Lf(Nf(n, r, t))
  return !!(
    (i !== a && o !== s) ||
    (i === 0 && If(e, n, t)) ||
    (a === 0 && If(e, r, t)) ||
    (o === 0 && If(n, e, r)) ||
    (s === 0 && If(n, t, r))
  )
}
