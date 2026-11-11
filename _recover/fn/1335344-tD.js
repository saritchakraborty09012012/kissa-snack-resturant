function tD() {
  let { c: e, ctx: t } = QE(512),
    n = t.createLinearGradient(0, 0, 0, 512)
  ;(n.addColorStop(0, `#d8a35c`),
    n.addColorStop(0.5, `#c9914a`),
    n.addColorStop(1, `#b97c39`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 512, 512))
  for (let e = 0; e < 220; e++) {
    let e = $() * 512,
      n = $() * 512,
      r = 2 + $() * 26,
      i = $() > 0.55,
      a = t.createRadialGradient(e, n, 0, e, n, r)
    ;(a.addColorStop(0, i ? `rgba(245, 211, 158, 0.16)` : `rgba(92, 51, 17, 0.16)`),
      a.addColorStop(1, `rgba(0,0,0,0)`),
      (t.fillStyle = a),
      t.beginPath(),
      t.arc(e, n, r, 0, Math.PI * 2),
      t.fill())
  }
  for (let e = 0; e < 26; e++) {
    let e = $() * 512,
      n = $() * 512,
      r = 6 + $() * 32,
      i = t.createRadialGradient(e, n, 0, e, n, r)
    ;(i.addColorStop(0, `rgba(108, 57, 18, 0.24)`),
      i.addColorStop(1, `rgba(0,0,0,0)`),
      (t.fillStyle = i),
      t.beginPath(),
      t.arc(e, n, r, 0, Math.PI * 2),
      t.fill())
  }
  return (eD(t, 512, 0.11, 1.4), $E(e, { repeat: [1, 1] }))
}
