function Bf(e, t) {
  let n = e,
    r = !1,
    i = (e.x + t.x) / 2,
    a = (e.y + t.y) / 2
  do
    (n.y > a != n.next.y > a &&
      n.next.y !== n.y &&
      i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
      (r = !r),
      (n = n.next))
  while (n !== e)
  return r
}
