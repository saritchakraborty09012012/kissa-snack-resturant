function Qp(e, t) {
  if (e.tag === 6) {
    e = e.stateNode
    var n = e.ownerDocument.createRange()
    ;(n.selectNodeContents(e), t.push.apply(t, n.getClientRects()))
  } else ((e = b(e)), t.push.apply(t, e.getClientRects()))
  return !1
}
;((Rp.prototype.getRootNode = function (e) {
  var t = g(this._fragmentFiber)
  return t === null ? this : b(t).getRootNode(e)
}),
  (Rp.prototype.compareDocumentPosition = function (e) {
    var t = g(this._fragmentFiber)
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED
    var n = []
    m(this._fragmentFiber.child, !1, Gp, n, void 0, void 0)
    var r = b(t)
    if (n.length === 0) {
      if (((n = r), _(this._fragmentFiber))) {
        a: {
          for (t = this._fragmentFiber.return; t !== null;) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo
              break a
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27) break
            t = t.return
          }
          t = null
        }
        t != null && (n = t)
      }
      t = this._fragmentFiber
      var i = (r = n.compareDocumentPosition(e))
      return (
        n === e
          ? (i = Node.DOCUMENT_POSITION_CONTAINS)
          : r & Node.DOCUMENT_POSITION_CONTAINED_BY &&
            ((n = v(t)[1]),
            n === null
              ? (i = Node.DOCUMENT_POSITION_PRECEDING)
              : ((e = b(n).compareDocumentPosition(e)),
                (i =
                  e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                    ? Node.DOCUMENT_POSITION_FOLLOWING
                    : Node.DOCUMENT_POSITION_PRECEDING))),
        (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      )
    }
    ;((t = b(n[0])), (i = b(n[n.length - 1])))
    var a = _(this._fragmentFiber) ? t.parentElement : r
    if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED
    ;((r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
      (a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY))
    var o = t.compareDocumentPosition(e),
      s = i.compareDocumentPosition(e),
      c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY
    return (
      (s =
        r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING),
      (t =
        (r && t === e) || (a && i === e) || c || s
          ? Node.DOCUMENT_POSITION_CONTAINED_BY
          : (!r && t === e) || (!a && i === e)
            ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
            : o),
      t & Node.DOCUMENT_POSITION_DISCONNECTED ||
      t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
      $p(t, this._fragmentFiber, n[0], n[n.length - 1], e)
        ? t
        : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    )
  }))
