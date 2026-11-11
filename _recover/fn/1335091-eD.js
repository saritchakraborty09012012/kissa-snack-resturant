function eD(e, t, n = 0.08, r = 2) {
  let { c: i, ctx: a } = QE(t),
    o = a.createImageData(t, t)
  for (let e = 0; e < t; e++)
    for (let i = 0; i < t; i++) {
      let a = ZE(i * 0.08 * r, e * 0.08 * r, 4) * 255,
        s = (e * t + i) * 4
      ;((o.data[s] = o.data[s + 1] = o.data[s + 2] = a), (o.data[s + 3] = n * 255))
    }
  ;(a.putImageData(o, 0, 0), e.drawImage(i, 0, 0))
}
