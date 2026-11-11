function yC(e, t) {
  let n
  return (...r) => {
    ;(window.clearTimeout(n), (n = window.setTimeout(() => e(...r), t)))
  }
}
