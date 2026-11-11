function sD() {
  let { c: e, ctx: t } = QE(512)
  ;((t.fillStyle = `#cfae7a`), t.fillRect(0, 0, 512, 512))
  for (let e = 0; e < 160; e++) {
    let e = $() * 512,
      n = $() * 512,
      r = 4 + $() * 40,
      i = t.createRadialGradient(e, n, 0, e, n, r)
    ;(i.addColorStop(0, `rgba(40, 22, 10, ${0.1 + $() * 0.25})`),
      i.addColorStop(1, `rgba(40,22,10,0)`),
      (t.fillStyle = i),
      t.beginPath(),
      t.arc(e, n, r, 0, Math.PI * 2),
      t.fill())
  }
  return $E(e)
}
