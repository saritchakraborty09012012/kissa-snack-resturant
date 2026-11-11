function we(e) {
  if (Se === void 0)
    try {
      throw Error()
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/)
      ;((Se = (t && t[1]) || ``),
        (Ce =
          -1 <
          e.stack.indexOf(`
    at`)
            ? ` (<anonymous>)`
            : -1 < e.stack.indexOf(`@`)
              ? `@unknown:0:0`
              : ``))
    }
  return (
    `
` +
    Se +
    e +
    Ce
  )
}
var Te = !1
