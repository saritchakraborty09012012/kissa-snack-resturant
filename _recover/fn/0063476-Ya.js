function Ya(e) {
  try {
    var t = e._init
    return t(e._payload)
  } catch (e) {
    throw typeof e == `object` && e && typeof e.then == `function` ? ((Xa = e), Ua) : e
  }
}
var Xa = null
