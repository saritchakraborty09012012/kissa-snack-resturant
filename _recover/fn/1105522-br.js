function br(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail
  r = r.children
  var o = $u.current
  if (t.flags & 128) return (bt(t, o), null)
  var s = !!(o & 2)
  if (
    (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
    bt(t, o),
    i === `backwards` && e !== null ? (yr(e), Yn(e, t, r, n), yr(e)) : Yn(e, t, r, n),
    (r = du ? $l : 0),
    !s && e !== null && e.flags & 128)
  )
    e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && gr(e, n, t)
      else if (e.tag === 19) gr(e, n, t)
      else if (e.child !== null) {
        ;((e.child.return = e), (e = e.child))
        continue
      }
      if (e === t) break e
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e
        e = e.return
      }
      ;((e.sibling.return = e.return), (e = e.sibling))
    }
  switch (i) {
    case `backwards`:
      ;((n = _r(t.child)),
        n === null
          ? ((i = t.child), (t.child = null))
          : ((i = n.sibling), (n.sibling = null), yr(t)),
        vr(t, !0, i, null, a, r))
      break
    case `unstable_legacy-backwards`:
      for (n = null, i = t.child, t.child = null; i !== null;) {
        if (((e = i.alternate), e !== null && St(e) === null)) {
          t.child = i
          break
        }
        ;((e = i.sibling), (i.sibling = n), (n = i), (i = e))
      }
      vr(t, !0, n, null, a, r)
      break
    case `together`:
      vr(t, !1, null, null, void 0, r)
      break
    case `independent`:
      t.memoizedState = null
      break
    default:
      ;((n = _r(t.child)),
        n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
        vr(t, !1, i, n, a, r))
  }
  return t.child
}
