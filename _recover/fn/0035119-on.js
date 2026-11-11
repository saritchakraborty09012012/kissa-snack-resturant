function on(e, t, n) {
  var r = t.indexOf(`--`) === 0
  n == null || typeof n == `boolean` || n === ``
    ? r
      ? e.setProperty(t, ``)
      : t === `float`
        ? (e.cssFloat = ``)
        : (e[t] = ``)
    : r
      ? e.setProperty(t, n)
      : typeof n != `number` || n === 0 || an.has(t)
        ? t === `float`
          ? (e.cssFloat = n)
          : (e[t] = (`` + n).trim())
        : (e[t] = n + `px`)
}
