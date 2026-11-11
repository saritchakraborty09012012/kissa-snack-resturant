function Ac(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps
    if (Fr(a, r) && e.ref === t.ref) {
      if (((Ec = !1), (t.pendingProps = r = a), rl(e, i))) e.flags & 131072 && (Ec = !0)
      else return ((t.lanes = e.lanes), nl(e, t, i))
    }
  }
  return Rc(e, t, n, r, i)
}
