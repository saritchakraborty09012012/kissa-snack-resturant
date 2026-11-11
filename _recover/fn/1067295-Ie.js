function Ie(e, t) {
  var n = [],
    r = {
      status: `pending`,
      value: null,
      reason: null,
      then: function (e) {
        n.push(e)
      },
    }
  return (
    e.then(
      function () {
        ;((r.status = `fulfilled`), (r.value = t))
        for (var e = 0; e < n.length; e++) (0, n[e])(t)
      },
      function (e) {
        for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0)
      },
    ),
    r
  )
}
