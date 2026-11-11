function qr(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Kr ||
    Ur == null ||
    Ur !== Ir(r) ||
    ((r = Ur),
    `selectionStart` in r && Vr(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gr && Fr(Gr, r)) ||
      ((Gr = r),
      (r = Xf(Wr, `onSelect`)),
      0 < r.length &&
        ((t = new Nn(`onSelect`, `select`, null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ur))))
}
