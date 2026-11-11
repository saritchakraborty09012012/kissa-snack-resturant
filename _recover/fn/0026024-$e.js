function $e(e, t, n) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var i = 0,
    a = e.suspendedLanes,
    o = e.pingedLanes
  e = e.warmLanes
  var s = r & 134217727
  return (
    s === 0
      ? ((s = r & ~a),
        s === 0
          ? o === 0
            ? n || ((n = r & ~e), n !== 0 && (i = Qe(n)))
            : (i = Qe(o))
          : (i = Qe(s)))
      : ((r = s & ~a),
        r === 0
          ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = Qe(n))) : (i = Qe(o)))
          : (i = Qe(r))),
    i === 0
      ? 0
      : t !== 0 &&
          t !== i &&
          (t & a) === 0 &&
          ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
        ? t
        : i
  )
}
