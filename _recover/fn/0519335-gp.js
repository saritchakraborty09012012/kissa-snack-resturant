function gp(e) {
  let t = {}
  for (let n = 0; n < e.length; n++) {
    let r = hp(e[n])
    for (let e in r) t[e] = r[e]
  }
  return t
}
