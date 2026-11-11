function Vf(e, t) {
  let n = Wf(e.i, e.x, e.y),
    r = Wf(t.i, t.x, t.y),
    i = e.next,
    a = t.prev
  return (
    (e.next = t),
    (t.prev = e),
    (n.next = i),
    (i.prev = n),
    (r.next = n),
    (n.prev = r),
    (a.next = r),
    (r.prev = a),
    r
  )
}
