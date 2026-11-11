function ue(e, t) {
  for (var n = new Uint8Array(e), r = 0; n[t.value + r] != 0;) r += 1
  var i = new TextDecoder().decode(n.slice(t.value, t.value + r))
  return ((t.value = t.value + r + 1), i)
}
