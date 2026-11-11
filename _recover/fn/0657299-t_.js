function t_(e, t) {
  let n = e.image && e.image.width ? e.image.width / e.image.height : 1
  return (
    n > t
      ? ((e.repeat.x = t / n),
        (e.repeat.y = 1),
        (e.offset.x = (1 - e.repeat.x) / 2),
        (e.offset.y = 0))
      : ((e.repeat.x = 1),
        (e.repeat.y = n / t),
        (e.offset.x = 0),
        (e.offset.y = (1 - e.repeat.y) / 2)),
    e
  )
}
