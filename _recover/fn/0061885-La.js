function La(e, t) {
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
var Ra = L.S
L.S = function (e, t) {
  if (
    ((hd = Ne()),
    typeof t == `object` && t && typeof t.then == `function` && Fa(e, t),
    ka !== null)
  )
    for (var n = xf; n !== null;) (Oa(n, ka), (n = n.next))
  if (((n = e.types), n !== null)) {
    for (var r = xf; r !== null;) (Oa(r, n), (r = r.next))
    if (Na !== 0) {
      ;((r = ka), r === null && (r = ka = []))
      for (var i = 0; i < n.length; i++) {
        var a = n[i]
        r.indexOf(a) === -1 && r.push(a)
      }
    }
  }
  Ra !== null && Ra(e, t)
}
var za = _e(null)
