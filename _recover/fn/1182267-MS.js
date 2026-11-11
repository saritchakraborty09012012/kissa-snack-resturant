function MS(e, t, n) {
  if (!t || !n) return
  if (t.parent === e) {
    let n = e.children.indexOf(t)
    n !== -1 && e.children.splice(n, 1)
  }
  t.parent = e
  let r = e.children.indexOf(n)
  ;(r === -1 ? e.children.push(t) : e.children.splice(r, 0, t), AS(e, t, n))
}
