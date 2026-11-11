function av(e, t) {
  let n = Q_[t]
  n === void 0 && ((n = new Int32Array(t)), (Q_[t] = n))
  for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit()
  return n
}
