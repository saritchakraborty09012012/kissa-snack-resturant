function de(e, t, n) {
  var r = new TextDecoder().decode(new Uint8Array(e).slice(t.value, t.value + n))
  return ((t.value += n), r)
}
