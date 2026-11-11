function M(e, t) {
  for (
    var n = 0, r = Math.floor((e.length + 1) / 2), i = 0, a = e.length - 1;
    !(i > a || ((t[i++] = e[n++]), i > a));
  )
    t[i++] = e[r++]
}
