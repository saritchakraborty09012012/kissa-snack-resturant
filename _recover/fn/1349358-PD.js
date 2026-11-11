function PD(e = 24, t = 0.018, n = 1, r = 1, i = 1.5) {
  WE(r)
  let a = []
  for (let r = 0; r < e; r++) {
    let e = [],
      r = new Y(($() - 0.5) * i, ($() - 0.5) * 0.16, ($() - 0.5) * i),
      o = $() * Math.PI * 2
    for (let t = 0; t < 4; t++)
      e.push(
        new Y(
          r.x + Math.cos(o + t * 0.9) * (t / 4) * n,
          r.y + Math.sin(t * 1.7 + $()) * 0.09,
          r.z + Math.sin(o + t * 0.9) * (t / 4) * n,
        ),
      )
    let s = new up(new Wd(e), 26, t * (0.8 + $() * 0.5), 5, !1)
    a.push(s)
  }
  return a
}
