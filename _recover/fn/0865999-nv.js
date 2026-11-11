function nv(e, t, n) {
  let r = e[0]
  if (r <= 0 || r > 0) return e
  let i = t * n,
    a = Z_[i]
  if ((a === void 0 && ((a = new Float32Array(i)), (Z_[i] = a)), t !== 0)) {
    r.toArray(a, 0)
    for (let r = 1, i = 0; r !== t; ++r) ((i += n), e[r].toArray(a, i))
  }
  return a
}
