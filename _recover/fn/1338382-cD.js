function cD() {
  let { c: e, ctx: t } = QE(256)
  t.clearRect(0, 0, 256, 256)
  for (let e = 0; e < 34; e++) {
    let e = 128 + ($() - 0.5) * 256 * 0.45,
      n = 128 + ($() - 0.5) * 256 * 0.45,
      r = 256 * (0.08 + $() * 0.22),
      i = t.createRadialGradient(e, n, 0, e, n, r)
    ;(i.addColorStop(0, `rgba(255,255,255,${0.08 + $() * 0.14})`),
      i.addColorStop(0.5, `rgba(230,242,250,${0.03 + $() * 0.06})`),
      i.addColorStop(1, `rgba(255,255,255,0)`),
      (t.fillStyle = i),
      t.beginPath(),
      t.arc(e, n, r, 0, Math.PI * 2),
      t.fill())
  }
  let n = t.createRadialGradient(128, 128, 30.72, 128, 128, 128)
  return (
    n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.globalCompositeOperation = `destination-in`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 256, 256),
    (t.globalCompositeOperation = `source-over`),
    $E(e, { srgb: !1 })
  )
}
