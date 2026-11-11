function Gl(e) {
  if (e.tag === 30) {
    var t = e.memoizedProps,
      n = ui(t, e.stateNode),
      r = Pl === null ? void 0 : Pl.get(n),
      i = fi(t.default, r === void 0 ? t.exit : t.share)
    ;(i !== `none` &&
      (zl(e, n, i, null, !1)
        ? r === void 0
          ? Nd(e, t.onExit)
          : ((i = e.stateNode), (r.paired = i), (i.paired = r), Pl.delete(n), Nd(e, t.onShare))
        : Vl(e.child, !1)),
      Pl !== null && Wl(e))
  } else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) (Gl(e), (e = e.sibling))
  else Pl !== null && Wl(e)
}
