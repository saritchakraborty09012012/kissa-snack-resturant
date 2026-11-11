function LT(e, t) {
  if (IT(e) != `object` || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || `default`)
    if (IT(r) != `object`) return r
    throw TypeError(`@@toPrimitive must return a primitive value.`)
  }
  return (t === `string` ? String : Number)(e)
}
