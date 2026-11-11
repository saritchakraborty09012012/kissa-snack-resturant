function BO(e, t, n) {
  for (let r of t) {
    let t = `$1` + e + r.charAt(0).toUpperCase() + r.slice(1),
      i = RegExp(`([^\\.])(\\b` + r + `\\b)`, `g`)
    for (let e of n.entries()) e[1] !== null && n.set(e[0], e[1].replace(i, t))
  }
}
