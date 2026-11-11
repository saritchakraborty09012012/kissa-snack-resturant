function Ef(e, t, n, r) {
  let i = e
  do
    (i.z === 0 && (i.z = Of(i.x, i.y, t, n, r)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next))
  while (i !== e)
  ;((i.prevZ.nextZ = null), (i.prevZ = null), Df(i))
}
