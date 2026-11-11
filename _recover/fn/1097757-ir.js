function ir(e, t) {
  var n = t.ref
  if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816)
  else {
    if (typeof n != `function` && typeof n != `object`) throw Error(r(284))
    ;(e === null || e.ref !== n) && (t.flags |= 4194816)
  }
}
