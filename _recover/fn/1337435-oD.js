function oD() {
  let { c: e, ctx: t } = QE(512),
    n = t.createLinearGradient(0, 0, 0, 512)
  ;(n.addColorStop(0, `#6b3a1a`),
    n.addColorStop(0.5, `#4b2510`),
    n.addColorStop(1, `#381a0a`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 512, 512))
  for (let e = 0; e < 240; e++) {
    ;((t.strokeStyle = `rgba(${20 + $() * 40}, ${10 + $() * 25}, ${5 + $() * 15}, ${0.1 + $() * 0.3})`),
      (t.lineWidth = 0.5 + $() * 2.5))
    let e = $() * 512
    ;(t.beginPath(),
      t.moveTo(e, 0),
      t.bezierCurveTo(e + $() * 20 - 10, 170, e + $() * 20 - 10, 340, e + $() * 14 - 7, 512),
      t.stroke())
  }
  for (let e = 0; e < 18; e++) {
    ;((t.strokeStyle = `rgba(200, 140, 80, 0.12)`), (t.lineWidth = 1))
    let e = $() * 512
    ;(t.beginPath(), t.moveTo(0, e), t.lineTo(512, e + $() * 20 - 10), t.stroke())
  }
  return $E(e)
}
