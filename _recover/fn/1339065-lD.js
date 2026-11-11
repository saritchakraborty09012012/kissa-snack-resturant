function lD() {
  let { c: e, ctx: t } = QE(256),
    n = t.createRadialGradient(128, 128, 0, 128, 128, 128)
  return (
    n.addColorStop(0, `rgba(255,255,255,0.9)`),
    n.addColorStop(0.2, `rgba(220,238,250,0.42)`),
    n.addColorStop(0.55, `rgba(160,196,220,0.12)`),
    n.addColorStop(1, `rgba(120,160,190,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 256, 256),
    $E(e)
  )
}
