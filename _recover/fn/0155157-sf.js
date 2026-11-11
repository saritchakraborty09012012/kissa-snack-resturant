function sf() {
  if (yd === 1) {
    yd = 0
    var e = bd,
      t = xd,
      n = Sd,
      r = !!(t.flags & 13878)
    if (t.subtreeFlags & 13878 || r) {
      ;((r = L.T), (L.T = null))
      var i = R.p
      R.p = 2
      var a = Yu
      Yu |= 4
      try {
        ;((au = ou = !1), Tu(t, e, n), (n = dp))
        var o = Br(e.containerInfo),
          s = n.focusedElem,
          c = n.selectionRange
        if (o !== s && s && s.ownerDocument && zr(s.ownerDocument.documentElement, s)) {
          if (c !== null && Vr(s)) {
            var l = c.start,
              u = c.end
            if ((u === void 0 && (u = l), `selectionStart` in s))
              ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)))
            else {
              var d = s.ownerDocument || document,
                f = (d && d.defaultView) || window
              if (f.getSelection) {
                var p = f.getSelection(),
                  m = s.textContent.length,
                  h = Math.min(c.start, m),
                  g = c.end === void 0 ? h : Math.min(c.end, m)
                !p.extend && h > g && ((o = g), (g = h), (h = o))
                var _ = Rr(s, h),
                  v = Rr(s, g)
                if (
                  _ &&
                  v &&
                  (p.rangeCount !== 1 ||
                    p.anchorNode !== _.node ||
                    p.anchorOffset !== _.offset ||
                    p.focusNode !== v.node ||
                    p.focusOffset !== v.offset)
                ) {
                  var y = d.createRange()
                  ;(y.setStart(_.node, _.offset),
                    p.removeAllRanges(),
                    h > g
                      ? (p.addRange(y), p.extend(v.node, v.offset))
                      : (y.setEnd(v.node, v.offset), p.addRange(y)))
                }
              }
            }
          }
          for (d = [], p = s; (p = p.parentNode);)
            p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop })
          for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
            var b = d[s]
            ;((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top))
          }
        }
        ;((yh = !!up), (dp = up = null))
      } finally {
        ;((Yu = a), (R.p = i), (L.T = r))
      }
    }
    ;((e.current = t), (yd = 2))
  }
}
