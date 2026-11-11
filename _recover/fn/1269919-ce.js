function ce(e) {
  var t = hw(e.array.slice(e.offset.value, e.offset.value + e.size))
  let n = e.lines * e.channels * e.width,
    r = e.type == 1 ? new Uint16Array(n) : new Uint32Array(n),
    i = 0,
    a = 0,
    o = [, , , ,]
  for (let n = 0; n < e.lines; n++)
    for (let n = 0; n < e.channels; n++) {
      let n = 0
      switch (e.type) {
        case 1:
          ;((o[0] = i), (o[1] = o[0] + e.width), (i = o[1] + e.width))
          for (let i = 0; i < e.width; ++i) {
            let e = (t[o[0]++] << 8) | t[o[1]++]
            ;((n += e), (r[a] = n), a++)
          }
          break
        case 2:
          ;((o[0] = i), (o[1] = o[0] + e.width), (o[2] = o[1] + e.width), (i = o[2] + e.width))
          for (let i = 0; i < e.width; ++i) {
            let e = (t[o[0]++] << 24) | (t[o[1]++] << 16) | (t[o[2]++] << 8)
            ;((n += e), (r[a] = n), a++)
          }
      }
    }
  return new DataView(r.buffer)
}
