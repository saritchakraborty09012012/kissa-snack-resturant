function wf(e, t) {
  let n = t,
    r = e.x,
    i = e.y,
    a = -1 / 0,
    o
  if (Pf(e, n)) return n
  do {
    if (Pf(e, n.next)) return n.next
    if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
      let e = n.x + ((i - n.y) * (n.next.x - n.x)) / (n.next.y - n.y)
      if (e <= r && e > a && ((a = e), (o = n.x < n.next.x ? n : n.next), e === r)) return o
    }
    n = n.next
  } while (n !== t)
  if (!o) return null
  let s = o,
    c = o.x,
    l = o.y,
    u = 1 / 0
  n = o
  do {
    if (
      r >= n.x &&
      n.x >= c &&
      r !== n.x &&
      Af(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y)
    ) {
      let t = Math.abs(i - n.y) / (r - n.x)
      zf(n, e) &&
        (t < u || (t === u && (n.x > o.x || (n.x === o.x && Tf(o, n))))) &&
        ((o = n), (u = t))
    }
    n = n.next
  } while (n !== s)
  return o
}
