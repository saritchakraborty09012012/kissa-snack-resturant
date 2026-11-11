function If(e) {
  return e == null || typeof e == `symbol` || typeof e == `boolean`
    ? null
    : typeof e == `function`
      ? e
      : dn(e)
}
