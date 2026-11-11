function lp() {
  if (typeof performance.getEntriesByType == `function`) {
    for (
      var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
      r < n.length;
      r++
    ) {
      var i = n[r],
        a = i.transferSize,
        o = i.initiatorType,
        s = i.duration
      if (a && s && cp(o)) {
        for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
          var c = n[r],
            l = c.startTime
          if (l > s) break
          var u = c.transferSize,
            d = c.initiatorType
          u && cp(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))))
        }
        if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break
      }
    }
    if (0 < e) return t / e / 1e6
  }
  return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
    ? e
    : 5
}
var up = null,
  dp = null
