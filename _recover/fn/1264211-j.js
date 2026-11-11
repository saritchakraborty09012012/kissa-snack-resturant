function j(e) {
  for (var t = 1; t < e.length; t++) {
    var n = e[t - 1] + e[t] - 128
    e[t] = n
  }
}
