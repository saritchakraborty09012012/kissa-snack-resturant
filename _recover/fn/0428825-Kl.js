function Kl(e, t, n, r, i, a, o, s) {
  let c
  if (
    ((c =
      t.side === 1
        ? r.intersectTriangle(o, a, i, !0, s)
        : r.intersectTriangle(i, a, o, t.side === 0, s)),
    c === null)
  )
    return null
  ;(Wl.copy(s), Wl.applyMatrix4(e.matrixWorld))
  let l = n.ray.origin.distanceTo(Wl)
  return l < n.near || l > n.far ? null : { distance: l, point: Wl.clone(), object: e }
}
