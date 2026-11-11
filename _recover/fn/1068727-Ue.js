function Ue(e) {
  try {
    var t = e._init
    return t(e._payload)
  } catch (e) {
    throw typeof e == `object` && e && typeof e.then == `function` ? ((zu = e), Fu) : e
  }
}
