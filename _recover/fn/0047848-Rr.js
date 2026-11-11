function Rr(e, t) {
  var n = Lr(e)
  e = 0
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
      e = r
    }
    a: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling
          break a
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Lr(n)
  }
}
