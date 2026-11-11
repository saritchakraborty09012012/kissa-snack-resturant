function IC(e) {
  if (typeof e == `number`) e = Math.abs(e)
  else if (typeof e == `string`) {
    var t = e
    e = 0
    for (var n = 0; n < t.length; n++) e = (e + (n + 1) * (t.charCodeAt(n) % 96)) % 2147483647
  }
  return (e === 0 && (e = 311), e)
}
