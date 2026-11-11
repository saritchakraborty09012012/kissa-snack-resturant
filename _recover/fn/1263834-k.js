function k(e, t, n, a, o, s) {
  var c = { value: 0 },
    u = n.value,
    d = R(t, n),
    f = R(t, n)
  n.value += 4
  var p = R(t, n)
  if (((n.value += 4), d < 0 || d >= r || f < 0 || f >= r))
    throw `Something wrong with HUF_ENCSIZE`
  var h = Array(r),
    g = Array(i)
  if ((l(g), m(e, t, n, a - (n.value - u), d, f, h), p > 8 * (a - (n.value - u))))
    throw `Something wrong with hufUncompress`
  ;(_(h, d, f, g), O(h, g, e, t, n, p, f, s, o, c))
}
