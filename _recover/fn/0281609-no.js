function no(...e) {
  e = to(e)
  let t = `THREE.` + e.shift()
  if (Za) Za(`error`, t, ...e)
  else {
    let n = e[0]
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e)
  }
}
