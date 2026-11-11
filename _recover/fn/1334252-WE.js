function WE(e) {
  return ((UE = e), $())
}
var GE = (e, t, n) => Math.max(t, Math.min(n, e)),
  KE = (e, t, n) => {
    let r = GE((n - e) / (t - e), 0, 1)
    return r * r * (3 - 2 * r)
  },
  qE = (e, t, n) => e + (t - e) * n,
  JE = (e, t, n, r) => qE(e, t, 1 - Math.exp(-n * r))
