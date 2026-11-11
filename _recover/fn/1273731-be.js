function be(e, t, n, r) {
  for (var i = n.value, a = []; n.value < i + r - 1;) {
    var o = ue(t, n),
      s = L(e, n),
      c = he(e, n)
    n.value += 3
    var l = L(e, n),
      u = L(e, n)
    a.push({ name: o, pixelType: s, pLinear: c, xSampling: l, ySampling: u })
  }
  return ((n.value += 1), a)
}
