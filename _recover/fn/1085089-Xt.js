function Xt(e, t, n, i, a) {
  if (In(e)) throw Error(r(485))
  if (((e = t.action), e !== null)) {
    var o = {
      payload: a,
      action: e,
      next: null,
      isTransition: !0,
      status: `pending`,
      value: null,
      reason: null,
      listeners: [],
      then: function (e) {
        o.listeners.push(e)
      },
    }
    ;(Ro.T === null ? (o.isTransition = !1) : n(!0),
      i(o),
      (n = t.pending),
      n === null
        ? ((o.next = t.pending = o), Zt(t, o))
        : ((o.next = n.next), (t.pending = n.next = o)))
  }
}
