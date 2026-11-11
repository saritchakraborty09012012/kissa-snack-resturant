function Ji(e, t, n, r) {
  var i = (n & 335544064) === n
  i && t.alternate === null && t.return !== null && t.return.alternate !== null && yi(t)
  var a = t.flags
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      ;(qi(e, t, n, r), a & 2048 && Vr(9, t))
      break
    case 1:
      qi(e, t, n, r)
      break
    case 3:
      ;(qi(e, t, n, r),
        i && ns && Nd && Xs(e.containerInfo),
        a & 2048 &&
          ((e = null),
          t.alternate !== null && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== e && (t.refCount++, e != null && Se(e))))
      break
    case 12:
      if (a & 2048) {
        ;(qi(e, t, n, r), (e = t.stateNode))
        try {
          var o = t.memoizedProps,
            s = o.id,
            c = o.onPostCommit
          typeof c == `function` &&
            c(s, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0)
        } catch (e) {
          Ga(t, t.return, e)
        }
      } else qi(e, t, n, r)
      break
    case 31:
      qi(e, t, n, r)
      break
    case 13:
      qi(e, t, n, r)
      break
    case 23:
      break
    case 22:
      ;((o = t.stateNode),
        (s = t.alternate),
        t.memoizedState === null
          ? (i && s !== null && s.memoizedState !== null && yi(t),
            o._visibility & 2
              ? qi(e, t, n, r)
              : ((o._visibility |= 2), Yi(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
          : (i && s !== null && s.memoizedState === null && yi(s),
            o._visibility & 2 ? qi(e, t, n, r) : Xi(e, t)),
        a & 2048 && Gi(s, t))
      break
    case 24:
      ;(qi(e, t, n, r), a & 2048 && Ki(t.alternate, t))
      break
    case 30:
      ;(i && ((i = t.alternate), i !== null && (fi(i.child, !0), fi(t.child, !0))),
        qi(e, t, n, r))
      break
    default:
      qi(e, t, n, r)
  }
}
