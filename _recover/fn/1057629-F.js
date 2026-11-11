function F(e) {
  if (Kl === void 0)
    try {
      throw Error()
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/)
      ;((Kl = (t && t[1]) || ``),
        (ql =
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
    Kl +
    e +
    ql
  )
}
