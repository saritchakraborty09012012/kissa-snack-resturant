function fx(e) {
  e.type !== `Scene` && (e.dispose == null || e.dispose())
  for (let t in e) {
    let n = e[t]
    n?.type !== `Scene` && (n == null || n.dispose == null || n.dispose())
  }
}
var px = [`children`, `key`, `ref`]
