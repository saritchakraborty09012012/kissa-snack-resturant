function Ut(e, t, n) {
  ;((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = td.updateQueue),
    t === null
      ? ((t = Pt()), (td.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)))
}
