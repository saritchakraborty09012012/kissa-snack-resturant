function ym(e, t, n) {
  for (var r in n) {
    var i = n[r]
    n.hasOwnProperty(r) && i != null && rp(e, t, r, null, op, i)
  }
  ;(n.dangerouslySetInnerHTML != null && (e.textContent = ``),
    e.onclick === fn && (e.onclick = null),
    wt(e))
}
