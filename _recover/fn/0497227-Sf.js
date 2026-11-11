function Sf(e, t) {
  let n = e.x - t.x
  return (
    n === 0 &&
      ((n = e.y - t.y),
      n === 0 &&
        (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))),
    n
  )
}
