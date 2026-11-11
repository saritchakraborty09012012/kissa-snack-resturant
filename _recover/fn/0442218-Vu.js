function Vu(e, t, n = 0) {
  let r = t.itemSize
  if (e.isInterleavedBufferAttribute || e.array.constructor !== t.array.constructor) {
    let i = e.count
    for (let a = 0; a < i; a++)
      for (let i = 0; i < r; i++) t.setComponent(a + n, i, e.getComponent(a, i))
  } else t.array.set(e.array, n * r)
  t.needsUpdate = !0
}
