function r(t, n, r) {
  let i = n.array,
    a = n.updateRanges
  if ((e.bindBuffer(r, t), a.length === 0)) e.bufferSubData(r, 0, i)
  else {
    a.sort((e, t) => e.start - t.start)
    let t = 0
    for (let e = 1; e < a.length; e++) {
      let n = a[t],
        r = a[e]
      r.start <= n.start + n.count + 1
        ? (n.count = Math.max(n.count, r.start + r.count - n.start))
        : (++t, (a[t] = r))
    }
    a.length = t + 1
    for (let t = 0, n = a.length; t < n; t++) {
      let n = a[t]
      e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count)
    }
    n.clearUpdateRanges()
  }
  n.onUploadCallback()
}
