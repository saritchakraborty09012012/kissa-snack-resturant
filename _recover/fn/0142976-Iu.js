function Iu(e, t, n, r) {
  var i = (n & 335544064) === n
  i && t.alternate === null && t.return !== null && t.return.alternate !== null && Jl(t)
  var a = t.flags
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      ;(Fu(e, t, n, r), a & 2048 && hl(9, t))
      break
    case 1:
      Fu(e, t, n, r)
      break
    case 3:
      ;(Fu(e, t, n, r),
        i &&
          su &&
          ((e = e.containerInfo),
          (e = e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e),
          e.style.viewTransitionName === `root` && (e.style.viewTransitionName = ``),
          (e = e.ownerDocument.documentElement),
          e !== null &&
            e.style.viewTransitionName === `none` &&
            (e.style.viewTransitionName = ``)),
        a & 2048 &&
          ((a = null),
          t.alternate !== null && (a = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== a && (t.refCount++, a != null && Da(a))))
      break
    case 12:
      if (a & 2048) {
        ;(Fu(e, t, n, r), (a = t.stateNode))
        try {
          var o = t.memoizedProps,
            s = o.id,
            c = o.onPostCommit
          typeof c == `function` &&
            c(s, t.alternate === null ? `mount` : `update`, a.passiveEffectDuration, -0)
        } catch (e) {
          mf(t, t.return, e)
        }
      } else Fu(e, t, n, r)
      break
    case 31:
      Fu(e, t, n, r)
      break
    case 13:
      Fu(e, t, n, r)
      break
    case 23:
      break
    case 22:
      ;((o = t.stateNode),
        (s = t.alternate),
        t.memoizedState === null
          ? (i && s !== null && s.memoizedState !== null && Jl(t),
            o._visibility & 2
              ? Fu(e, t, n, r)
              : ((o._visibility |= 2), Lu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
          : (i && s !== null && s.memoizedState === null && Jl(s),
            o._visibility & 2 ? Fu(e, t, n, r) : Ru(e, t)),
        a & 2048 && Nu(s, t))
      break
    case 24:
      ;(Fu(e, t, n, r), a & 2048 && Pu(t.alternate, t))
      break
    case 30:
      ;(i && ((a = t.alternate), a !== null && (Vl(a.child, !0), Vl(t.child, !0))),
        Fu(e, t, n, r))
      break
    default:
      Fu(e, t, n, r)
  }
}
