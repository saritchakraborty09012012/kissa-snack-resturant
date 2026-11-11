function Vr(e, t) {
  try {
    var n = t.updateQueue,
      r = n === null ? null : n.lastEffect
    if (r !== null) {
      var i = r.next
      n = i
      do {
        if ((n.tag & e) === e) {
          r = void 0
          var a = n.create,
            o = n.inst
          ;((r = a()), (o.destroy = r))
        }
        n = n.next
      } while (n !== i)
    }
  } catch (e) {
    Ga(t, t.return, e)
  }
}
