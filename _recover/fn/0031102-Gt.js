function Gt(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
}
