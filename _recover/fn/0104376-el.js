function el(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail
  r = r.children
  var o = jo.current
  if (t.flags & 128) return (Mo(t, o), null)
  var s = !!(o & 2)
  if (
    (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
    Mo(t, o),
    i === `backwards` && e !== null ? ($c(e), Dc(e, t, r, n), $c(e)) : Dc(e, t, r, n),
    (r = Qi ? zi : 0),
    !s && e !== null && e.flags & 128)
  )
    a: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Xc(e, n, t)
      else if (e.tag === 19) Xc(e, n, t)
      else if (e.child !== null) {
        ;((e.child.return = e), (e = e.child))
        continue
      }
      if (e === t) break a
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break a
        e = e.return
      }
      ;((e.sibling.return = e.return), (e = e.sibling))
    }
  switch (i) {
    case `backwards`:
      ;((n = Zc(t.child)),
        n === null
          ? ((i = t.child), (t.child = null))
          : ((i = n.sibling), (n.sibling = null), $c(t)),
        Qc(t, !0, i, null, a, r))
      break
    case `unstable_legacy-backwards`:
      for (n = null, i = t.child, t.child = null; i !== null;) {
        if (((e = i.alternate), e !== null && Po(e) === null)) {
          t.child = i
          break
        }
        ;((e = i.sibling), (i.sibling = n), (n = i), (i = e))
      }
      Qc(t, !0, n, null, a, r)
      break
    case `together`:
      Qc(t, !1, null, null, void 0, r)
      break
    case `independent`:
      t.memoizedState = null
      break
    default:
      ;((n = Zc(t.child)),
        n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
        Qc(t, !1, i, n, a, r))
  }
  return t.child
}
