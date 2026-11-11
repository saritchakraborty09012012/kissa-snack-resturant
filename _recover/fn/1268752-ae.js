function ae(e) {
  var t = e.viewer.buffer.slice(e.offset.value, e.offset.value + e.size),
    n = new Uint8Array(N(t)),
    r = new Uint8Array(n.length)
  return (j(n), M(n, r), new DataView(r.buffer))
}
