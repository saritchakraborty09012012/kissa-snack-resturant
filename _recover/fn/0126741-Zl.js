function Zl(e, t) {
  for (e = e.child; e !== null;) {
    if (e.tag === 30) {
      var n = e.memoizedProps,
        r = e.stateNode,
        i = ui(n, r),
        a = fi(n.default, n.update)
      if (t) {
        r = r.clones
        var o = r === null ? null : r.map(Mp)
      } else ((o = e.memoizedState), (e.memoizedState = null))
      r = e
      var s = e.child
      ;((Rl = 0), (i = Xl(r, s, i, i, a, o, !1)), e.flags & 4 && i && (t || Nd(e, n.onUpdate)))
    } else e.subtreeFlags & 33554432 && Zl(e, t)
    e = e.sibling
  }
}
var Ql = !1,
  $l = !1,
  eu = !1,
  tu = !1,
  nu = typeof WeakSet == `function` ? WeakSet : Set,
  ru = null,
  iu = !1,
  au = !1,
  ou = !1,
  su = !1
