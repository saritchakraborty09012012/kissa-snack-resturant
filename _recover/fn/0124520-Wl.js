function Wl(e) {
  if (Pl !== null && Pl.size !== 0) {
    var t = Pl
    if (e.subtreeFlags & 18874368)
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && e.flags & 18874368) {
            var n = e.memoizedProps,
              r = n.name
            if (r != null && r !== `auto`) {
              var i = t.get(r)
              if (i !== void 0) {
                var a = fi(n.default, n.share)
                if (
                  (a !== `none` &&
                    (zl(e, r, a, null, !1)
                      ? ((a = e.stateNode), (i.paired = a), (a.paired = i), Nd(e, n.onShare))
                      : Vl(e.child, !1)),
                  t.delete(r),
                  t.size === 0)
                )
                  break
              }
            }
          }
          Wl(e)
        }
        e = e.sibling
      }
  }
}
