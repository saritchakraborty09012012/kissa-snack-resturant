function he(e, t) {
  var n = e.getUint8(t.value)
  return ((t.value += 1), n)
}
let ge = function (e, t) {
  let n
  return (
    (n =
      `getBigInt64` in DataView.prototype
        ? Number(e.getBigInt64(t.value, !0))
        : e.getUint32(t.value + 4, !0) + Number(e.getUint32(t.value, !0) << 32)),
    (t.value += 8),
    n
  )
}
