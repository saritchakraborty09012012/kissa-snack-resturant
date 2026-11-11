function lt(e, t, n, r) {
  Ju = !1
  var i = e.updateQueue
  qu = !1
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending
  if (s !== null) {
    i.shared.pending = null
    var c = s,
      l = c.next
    ;((c.next = null), o === null ? (a = l) : (o.next = l), (o = c))
    var u = e.alternate
    u !== null &&
      ((u = u.updateQueue),
      (s = u.lastBaseUpdate),
      s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)))
  }
  if (a !== null) {
    var d = i.baseState
    ;((o = 0), (u = l = c = null), (s = a))
    do {
      var f = s.lane & -536870913,
        p = f !== s.lane
      if (p ? (Yd & f) === f : (r & f) === f) {
        ;(f !== 0 && f === ju && (Ju = !0),
          u !== null &&
            (u = u.next =
              { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }))
        e: {
          var m = e,
            h = s
          f = t
          var g = n
          switch (h.tag) {
            case 1:
              if (((m = h.payload), typeof m == `function`)) {
                d = m.call(g, d, f)
                break e
              }
              d = m
              break e
            case 3:
              m.flags = (m.flags & -65537) | 128
            case 0:
              if (
                ((m = h.payload), (f = typeof m == `function` ? m.call(g, d, f) : m), f == null)
              )
                break e
              d = _o({}, d, f)
              break e
            case 2:
              qu = !0
          }
        }
        ;((f = s.callback),
          f !== null &&
            ((e.flags |= 64),
            p && (e.flags |= 8192),
            (p = i.callbacks),
            p === null ? (i.callbacks = [f]) : p.push(f)))
      } else
        ((p = { lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
          u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
          (o |= f))
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break
        ;((p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null))
      }
    } while (1)
    ;(u === null && (c = d),
      (i.baseState = c),
      (i.firstBaseUpdate = l),
      (i.lastBaseUpdate = u),
      a === null && (i.shared.lanes = 0),
      (rf |= o),
      (e.lanes = o),
      (e.memoizedState = d))
  }
}
