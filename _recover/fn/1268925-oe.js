function oe(e) {
  var t = hw(e.array.slice(e.offset.value, e.offset.value + e.size)),
    n = new Uint8Array(t.length)
  return (j(t), M(t, n), new DataView(n.buffer))
}
