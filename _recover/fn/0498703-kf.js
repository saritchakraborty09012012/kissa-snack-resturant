function kf(e) {
  let t = e,
    n = e
  do ((t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t), (t = t.next))
  while (t !== e)
  return n
}
