function eh(e, t) {
  typeof t.decode == `function` &&
    (e.imgCount++,
    t.complete || ((e.imgBytes += $m(t)), e.suspenseyImages.push(t)),
    (e = oh.bind(e)),
    t.decode().then(e, e))
}
