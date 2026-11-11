function _(t, n) {
  let r = a.newAttributes,
    i = a.enabledAttributes,
    o = a.attributeDivisors
  ;((r[t] = 1),
    i[t] === 0 && (e.enableVertexAttribArray(t), (i[t] = 1)),
    o[t] !== n && (e.vertexAttribDivisor(t, n), (o[t] = n)))
}
