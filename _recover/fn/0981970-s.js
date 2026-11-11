function s(e, n) {
  let o = i[e.id]
  o === void 0 && (m(e), (o = c(e)), (i[e.id] = o), e.addEventListener(`dispose`, g))
  let s = n.program
  r.updateUBOMapping(e, s)
  let u = t.render.frame
  a[e.id] !== u && (l(e), (a[e.id] = u))
}
