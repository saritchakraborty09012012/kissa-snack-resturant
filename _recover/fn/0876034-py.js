function py(e) {
  let t = []
  for (let n in e) {
    let r = e[n]
    r !== !1 && t.push(`#define ` + n + ` ` + r)
  }
  return t.join(`
`)
}
