function B(t, n, r) {
  r === void 0 && (r = ee === null ? e.TEXTURE0 + M - 1 : ee)
  let i = te[r]
  ;(i === void 0 && ((i = { type: void 0, texture: void 0 }), (te[r] = i)),
    (i.type !== t || i.texture !== n) &&
      (ee !== r && (e.activeTexture(r), (ee = r)),
      e.bindTexture(t, n || oe[t]),
      (i.type = t),
      (i.texture = n)))
}
