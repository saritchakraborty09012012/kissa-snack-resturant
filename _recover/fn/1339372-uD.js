function uD() {
  let { c: e, ctx: t } = QE(256)
  ;((t.fillStyle = `#b9bcc0`), t.fillRect(0, 0, 256, 256))
  for (let e = 0; e < 400; e++) {
    ;((t.strokeStyle = `rgba(${$() > 0.5 ? 255 : 60},${$() > 0.5 ? 255 : 60},${$() > 0.5 ? 255 : 60},0.05)`),
      t.beginPath())
    let e = $() * 256
    ;(t.moveTo(0, e), t.lineTo(256, e + $() * 4 - 2), t.stroke())
  }
  return $E(e, { srgb: !1 })
}
var dD = 12.5,
  fD = { pos: 0, active: 0, pointer: { x: 0, y: 0 }, spin: 0, spinTarget: 0, quality: 1 }
