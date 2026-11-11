function sl(e, t, n, r, i) {
  var a
  if (
    ((a = !!(e.mode & 32)) &&
      (a = n === null ? Zm(t, r) : Zm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)),
    a)
  ) {
    if (((e.flags |= 16777216), (i & 335544128) === i)) {
      if (e.stateNode.complete) e.flags |= 8192
      else if (Ud()) e.flags |= 8192
      else throw ((Xa = Ka), Wa)
    }
  } else e.flags &= -16777217
}
