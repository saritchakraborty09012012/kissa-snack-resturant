function t(t, n) {
  let r = e.get(t),
    i
  return (
    r === void 0
      ? ((i = new By()), e.set(t, [i]))
      : n >= r.length
        ? ((i = new By()), r.push(i))
        : (i = r[n]),
    i
  )
}
