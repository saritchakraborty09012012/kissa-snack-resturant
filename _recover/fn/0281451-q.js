function q(...e) {
  e = to(e)
  let t = `THREE.` + e.shift()
  if (Za) Za(`warn`, t, ...e)
  else {
    let n = e[0]
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e)
  }
}
