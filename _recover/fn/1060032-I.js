function I(e) {
  try {
    var t = ``,
      n = null
    do ((t += te(e, n)), (n = e), (e = e.return))
    while (e)
    return t
  } catch (e) {
    return (
      `
Error generating stack: ` +
      e.message +
      `
` +
      e.stack
    )
  }
}
