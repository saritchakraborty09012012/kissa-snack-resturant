function Qx(e, t, n, r) {
  let i = Array.isArray(t) ? t : [t],
    a = Nb(Zx(n, r), [e, ...i], { equal: ux.equ })
  return Array.isArray(t) ? a : a[0]
}
;((Qx.preload = function (e, t, n) {
  let r = Array.isArray(t) ? t : [t]
  return Pb(Zx(n), [e, ...r])
}),
  (Qx.clear = function (e, t) {
    return Fb([e, ...(Array.isArray(t) ? t : [t])])
  }))
var $x = 1,
  eS = 8,
  tS = 32,
  nS = 2,
  rS = 268435456,
  iS = { objects: `shallow` }
