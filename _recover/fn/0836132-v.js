function v() {
  let t = a.newAttributes,
    n = a.enabledAttributes
  for (let r = 0, i = n.length; r < i; r++)
    n[r] !== t[r] && (e.disableVertexAttribArray(r), (n[r] = 0))
}
