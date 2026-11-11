function xc(e, t, n) {
  return (
    (n = lo(n)),
    (n.tag = 3),
    (n.payload = { element: null }),
    (n.callback = function () {
      yc(e, t)
    }),
    n
  )
}
