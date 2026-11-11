function p(e) {
  for (var t = 0; t <= 58; ++t) f[t] = 0
  for (var t = 0; t < r; ++t) f[e[t]] += 1
  for (var n = 0, t = 58; t > 0; --t) {
    var i = (n + f[t]) >> 1
    ;((f[t] = n), (n = i))
  }
  for (var t = 0; t < r; ++t) {
    var a = e[t]
    a > 0 && (e[t] = a | (f[a]++ << 6))
  }
}
