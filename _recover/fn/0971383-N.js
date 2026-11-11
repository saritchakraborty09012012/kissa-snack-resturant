function N(e) {
  for (let t = 0; t < e.removed.length; t++) {
    let n = e.removed[t],
      r = x.indexOf(n)
    r >= 0 && ((x[r] = null), b[r].disconnect(n))
  }
  for (let t = 0; t < e.added.length; t++) {
    let n = e.added[t],
      r = x.indexOf(n)
    if (r === -1) {
      for (let e = 0; e < b.length; e++)
        if (e >= x.length) {
          ;(x.push(n), (r = e))
          break
        } else if (x[e] === null) {
          ;((x[e] = n), (r = e))
          break
        }
      if (r === -1) break
    }
    let i = b[r]
    i && i.connect(n)
  }
}
