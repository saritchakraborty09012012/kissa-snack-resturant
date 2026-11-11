function je(t, n, r) {
  let i = l.get(n).get(t)
  c[i] !== r && (e.bindBufferBase(e.UNIFORM_BUFFER, i, r), (c[i] = r))
}
