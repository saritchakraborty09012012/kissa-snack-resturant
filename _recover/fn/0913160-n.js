function n(n, r = 0) {
  let i = t.get(n),
    a
  return (
    i === void 0
      ? ((a = new qy(e)), t.set(n, [a]))
      : r >= i.length
        ? ((a = new qy(e)), i.push(a))
        : (a = i[r]),
    a
  )
}
