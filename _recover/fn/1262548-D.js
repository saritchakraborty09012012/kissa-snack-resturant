function D(e, t, n, r, i, a, o) {
  for (var s = o < 16384, c = n > i ? i : n, l = 1, u; l <= c;) l <<= 1
  for (l >>= 1, u = l, l >>= 1; l >= 1;) {
    for (
      var d = 0, f = d + a * (i - u), p = a * l, m = a * u, h = r * l, g = r * u, _, v, y, b;
      d <= f;
      d += m
    ) {
      for (var x = d, S = d + r * (n - u); x <= S; x += g) {
        var C = x + h,
          D = x + p,
          O = D + h
        s
          ? (T(e[x + t], e[D + t]),
            (_ = w.a),
            (y = w.b),
            T(e[C + t], e[O + t]),
            (v = w.a),
            (b = w.b),
            T(_, v),
            (e[x + t] = w.a),
            (e[C + t] = w.b),
            T(y, b),
            (e[D + t] = w.a),
            (e[O + t] = w.b))
          : (E(e[x + t], e[D + t]),
            (_ = w.a),
            (y = w.b),
            E(e[C + t], e[O + t]),
            (v = w.a),
            (b = w.b),
            E(_, v),
            (e[x + t] = w.a),
            (e[C + t] = w.b),
            E(y, b),
            (e[D + t] = w.a),
            (e[O + t] = w.b))
      }
      if (n & l) {
        var D = x + p
        ;(s ? T(e[x + t], e[D + t]) : E(e[x + t], e[D + t]),
          (_ = w.a),
          (e[D + t] = w.b),
          (e[x + t] = _))
      }
    }
    if (i & l)
      for (var x = d, S = d + r * (n - u); x <= S; x += g) {
        var C = x + h
        ;(s ? T(e[x + t], e[C + t]) : E(e[x + t], e[C + t]),
          (_ = w.a),
          (e[C + t] = w.b),
          (e[x + t] = _))
      }
    ;((u = l), (l >>= 1))
  }
  return d
}
