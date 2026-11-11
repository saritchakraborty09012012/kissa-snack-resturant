function c(e, t) {
  var n = t(),
    r = i({ inst: { value: n, getSnapshot: t } }),
    c = r[0].inst,
    u = r[1]
  return (
    o(
      function () {
        ;((c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c }))
      },
      [e, n, t],
    ),
    a(
      function () {
        return (
          l(c) && u({ inst: c }),
          e(function () {
            l(c) && u({ inst: c })
          })
        )
      },
      [e],
    ),
    s(n),
    n
  )
}
