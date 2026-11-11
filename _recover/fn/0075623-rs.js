function rs(e) {
  if (typeof e == `object` && e) {
    if (typeof e.then == `function`) return ns(e)
    if (e.$$typeof === ce) return
    if (e.$$typeof === F) return ya(e)
  }
  throw Error(i(438, String(e)))
}
