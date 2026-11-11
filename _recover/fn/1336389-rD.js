function rD() {
  let { c: e, ctx: t } = QE(512),
    n = t.createLinearGradient(0, 0, 0, 512)
  ;(n.addColorStop(0, `#d69d5c`),
    n.addColorStop(0.25, `#b7783a`),
    n.addColorStop(0.62, `#8b4e20`),
    n.addColorStop(1, `#5a2c0f`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 512, 512))
  for (let e = 0; e < 46; e++) {
    ;((t.strokeStyle = `rgba(${210 + $() * 40}, ${150 + $() * 50}, ${90 + $() * 40}, ${0.04 + $() * 0.08})`),
      (t.lineWidth = 1 + $() * 5),
      t.beginPath())
    let e = $() * 512
    ;(t.moveTo(0, e),
      t.bezierCurveTo(150, e + $() * 60 - 30, 360, e + $() * 60 - 30, 512, e + $() * 30 - 15),
      t.stroke())
  }
  return $E(e)
}
