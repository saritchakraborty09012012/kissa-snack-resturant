function I(e) {
  for (var t = 0; t < 64; ++t) {
    var n = e[0][t],
      r = e[1][t],
      i = e[2][t]
    ;((e[0][t] = n + 1.5747 * i),
      (e[1][t] = n - 0.1873 * r - 0.4682 * i),
      (e[2][t] = n + 1.8556 * r))
  }
}
