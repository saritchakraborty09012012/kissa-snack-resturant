function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
  e.timeoutHandle = -1
  var m = t.subtreeFlags,
    h = (a & 335544064) === a
  ;((d = null),
    (h || m & 8192 || (m & 16785408) == 16785408) &&
    ((d = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: fn,
    }),
    (Pl = null),
    Vu(t, a, d),
    h &&
      ((m = d),
      (h = e.containerInfo),
      (h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition),
      h != null &&
        (m.count++,
        (m.waitingForViewTransition = !0),
        (m = ah.bind(m)),
        h.finished.then(m, m))),
    (m = (a & 62914560) === a ? md - Ne() : (a & 4194048) === a ? hd - Ne() : 0),
    (m = rh(d, m)),
    m !== null)
      ? ((Sd = a),
        (e.cancelPendingCommit = m(
          nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p),
        )),
        Rd(e, a, o, !l))
      : nf(e, t, a, n, r, i, o, s, c, l, u, d))
}
