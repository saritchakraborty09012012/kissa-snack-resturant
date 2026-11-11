function $m(e) {
  return (
    (e.width || 100) *
    (e.height || 100) *
    (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) *
    0.25
  )
}
