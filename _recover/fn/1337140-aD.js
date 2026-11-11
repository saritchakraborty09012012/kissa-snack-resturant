function aD() {
  let { c: e, ctx: t } = QE(512)
  ;((t.fillStyle = `#e9e5da`), t.fillRect(0, 0, 512, 512))
  for (let e = 0; e < 900; e++) {
    t.fillStyle = `rgba(${90 + $() * 70}, ${85 + $() * 60}, ${75 + $() * 50}, ${0.03 + $() * 0.07})`
    let e = $() * 512,
      n = $() * 512
    ;(t.beginPath(), t.arc(e, n, 0.4 + $() * 1.8, 0, Math.PI * 2), t.fill())
  }
  return (eD(t, 512, 0.05, 1.2), $E(e))
}
