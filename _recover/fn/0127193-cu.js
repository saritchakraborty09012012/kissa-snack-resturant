function cu(e, t, n) {
  if (((e = e.containerInfo), (up = yh), (e = Br(e)), Vr(e))) {
    if (`selectionStart` in e) var r = { start: e.selectionStart, end: e.selectionEnd }
    else
      a: {
        r = ((r = e.ownerDocument) && r.defaultView) || window
        var i = r.getSelection && r.getSelection()
        if (i && i.rangeCount !== 0) {
          r = i.anchorNode
          var a = i.anchorOffset,
            o = i.focusNode
          i = i.focusOffset
          try {
            ;(r.nodeType, o.nodeType)
          } catch {
            r = null
            break a
          }
          var s = 0,
            c = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            p = null
          b: for (;;) {
            for (
              var m;
              f !== r || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;
            )
              ((p = f), (f = m))
            for (;;) {
              if (f === e) break b
              if (
                (p === r && ++u === a && (c = s),
                p === o && ++d === i && (l = s),
                (m = f.nextSibling) !== null)
              )
                break
              ;((f = p), (p = f.parentNode))
            }
            f = m
          }
          r = c === -1 || l === -1 ? null : { start: c, end: l }
        } else r = null
      }
    r = r || { start: 0, end: 0 }
  } else r = null
  for (
    dp = { focusedElem: e, selectionRange: r },
      yh = !1,
      n = (n & 335544064) === n,
      ru = t,
      t = n ? 9270 : 1024;
    ru !== null;
  ) {
    if (((e = ru), n && ((r = e.deletions), r !== null)))
      for (a = 0; a < r.length; a++) n && Gl(r[a])
    if (e.alternate === null && e.flags & 2) (n && Fl(e), lu(n))
    else {
      if (e.tag === 22) {
        if (((r = e.alternate), e.memoizedState !== null)) {
          ;(r !== null && r.memoizedState === null && n && Gl(r), lu(n))
          continue
        }
        if (r !== null && r.memoizedState !== null) {
          ;(n && Fl(e), lu(n))
          continue
        }
      }
      ;((r = e.child),
        (e.subtreeFlags & t) !== 0 && r !== null
          ? ((r.return = e), (ru = r))
          : (n && Kl(e), lu(n)))
    }
  }
  Pl = null
}
