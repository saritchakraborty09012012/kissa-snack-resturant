function Hf(e, t, n, r) {
  let i = Wf(e, t, n)
  return (
    r
      ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  )
}
