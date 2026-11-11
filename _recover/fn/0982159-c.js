function c(t) {
  let n = e.createBuffer(),
    r = t.__size,
    i = t.usage
  return (
    e.bindBuffer(e.UNIFORM_BUFFER, n),
    e.bufferData(e.UNIFORM_BUFFER, r, i),
    e.bindBuffer(e.UNIFORM_BUFFER, null),
    n
  )
}
