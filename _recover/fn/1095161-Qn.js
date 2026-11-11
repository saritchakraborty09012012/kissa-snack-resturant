function Qn(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps
    if (Be(a, r) && e.ref === t.ref) {
      if (((_d = !1), (t.pendingProps = r = a), Cr(e, i))) e.flags & 131072 && (_d = !0)
      else return ((t.lanes = e.lanes), Sr(e, t, i))
    }
  }
  return ar(e, t, n, r, i)
}
