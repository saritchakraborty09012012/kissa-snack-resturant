function mp(e, t) {
  if (e === 0)
    switch (t) {
      case `svg`:
        return 1
      case `math`:
        return 2
      default:
        return 0
    }
  return e === 1 && t === `foreignObject` ? 0 : e
}
