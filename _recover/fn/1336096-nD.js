function nD() {
  let { c: e, ctx: t } = QE(512)
  ;((t.fillStyle = `#808080`), t.fillRect(0, 0, 512, 512))
  for (let e = 0; e < 420; e++) {
    let e = $() * 512,
      n = $() * 512,
      r = 1 + $() * 8,
      i = Math.floor(40 + $() * 180)
    ;((t.fillStyle = `rgba(${i},${i},${i},0.5)`),
      t.beginPath(),
      t.arc(e, n, r, 0, Math.PI * 2),
      t.fill())
  }
  return (eD(t, 512, 0.14, 1.8), $E(e, { srgb: !1 }))
}
