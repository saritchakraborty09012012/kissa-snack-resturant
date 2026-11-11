function zp(e, t, n, r) {
  let i = 1,
    a = e[0]
  for (; a !== void 0 && a[r] === void 0;) a = e[i++]
  if (a === void 0) return
  let o = a[r]
  if (o !== void 0) {
    if (Array.isArray(o))
      do ((o = a[r]), o !== void 0 && (t.push(a.time), n.push(...o)), (a = e[i++]))
      while (a !== void 0)
    else if (o.toArray !== void 0)
      do ((o = a[r]), o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), (a = e[i++]))
      while (a !== void 0)
    else
      do ((o = a[r]), o !== void 0 && (t.push(a.time), n.push(o)), (a = e[i++]))
      while (a !== void 0)
  }
}
