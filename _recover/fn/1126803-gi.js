function gi(e) {
  if (e.tag === 30) {
    var t = e.memoizedProps,
      n = j(t, e.stateNode),
      r = xd === null ? void 0 : xd.get(n),
      i = N(t.default, r === void 0 ? t.exit : t.share)
    ;(i !== `none` &&
      (ui(e, n, i, null, !1)
        ? r === void 0
          ? da(e, t.onExit)
          : ((i = e.stateNode), (r.paired = i), (i.paired = r), xd.delete(n), da(e, t.onShare))
        : fi(e.child, !1)),
      xd !== null && hi(e))
  } else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) (gi(e), (e = e.sibling))
  else xd !== null && hi(e)
}
