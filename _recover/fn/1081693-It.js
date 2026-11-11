function It(e) {
  if (typeof e == `object` && e) {
    if (typeof e.then == `function`) return Ft(e)
    if (e.$$typeof === Fo) return
    if (e.$$typeof === To) return H(e)
  }
  throw Error(r(438, String(e)))
}
