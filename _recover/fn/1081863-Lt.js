function Lt(e) {
  var t = null,
    n = td.updateQueue
  if ((n !== null && (t = n.memoCache), t == null)) {
    var r = td.alternate
    r !== null &&
      ((r = r.updateQueue),
      r !== null &&
        ((r = r.memoCache),
        r != null &&
          (t = {
            data: r.data.map(function (e) {
              return e.slice()
            }),
            index: 0,
          })))
  }
  if (
    (t ?? (t = { data: [], index: 0 }),
    n === null && ((n = Pt()), (td.updateQueue = n)),
    (n.memoCache = t),
    (n = t.data[t.index]),
    n === void 0)
  )
    for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = No
  return (t.index++, n)
}
