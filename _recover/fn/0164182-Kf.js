function Kf(e) {
  if (!e[Gf]) {
    ;((e[Gf] = !0),
      jt.forEach(function (t) {
        t !== `selectionchange` && (Vf.has(t) || Wf(t, !1, e), Wf(t, !0, e))
      }))
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Gf] || ((t[Gf] = !0), Wf(`selectionchange`, !1, t))
  }
}
