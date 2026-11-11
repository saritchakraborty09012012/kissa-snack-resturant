function Ir(e, t) {
  if (!du)
    switch (e.tailMode) {
      case `visible`:
        break
      case `collapsed`:
        for (var n = e.tail, r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling))
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
        break
      default:
        for (t = e.tail, n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling))
        n === null ? (e.tail = null) : (n.sibling = null)
    }
}
