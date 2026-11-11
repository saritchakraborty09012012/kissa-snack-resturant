function l(e) {
  return typeof e != `object` || !e
    ? null
    : ((e = (J && e[J]) || e[`@@iterator`]), typeof e == `function` ? e : null)
}
