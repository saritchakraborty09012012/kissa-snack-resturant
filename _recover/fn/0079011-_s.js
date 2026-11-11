function _s(e, t, n, r, a) {
  if (ic(e)) throw Error(i(485))
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
    ;(L.T === null ? (o.isTransition = !1) : n(!0),
      r(o),
      (n = t.pending),
      n === null
        ? ((o.next = t.pending = o), vs(t, o))
        : ((o.next = n.next), (t.pending = n.next = o)))
  }
}
