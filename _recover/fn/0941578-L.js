function L(t, r, i, a) {
  let o = t.updateRanges
  if (o.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data)
  else {
    o.sort((e, t) => e.start - t.start)
    let s = 0
    for (let e = 1; e < o.length; e++) {
      let t = o[s],
        n = o[e],
        i = t.start + t.count,
        a = pe(n.start, r.width, 4),
        c = pe(t.start, r.width, 4)
      n.start <= i + 1 && a === c && pe(n.start + n.count - 1, r.width, 4) === a
        ? (t.count = Math.max(t.count, n.start + n.count - t.start))
        : (++s, (o[s] = n))
    }
    o.length = s + 1
    let c = n.getParameter(e.UNPACK_ROW_LENGTH),
      l = n.getParameter(e.UNPACK_SKIP_PIXELS),
      u = n.getParameter(e.UNPACK_SKIP_ROWS)
    n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width)
    for (let t = 0, s = o.length; t < s; t++) {
      let s = o[t],
        c = Math.floor(s.start / 4),
        l = Math.ceil(s.count / 4),
        u = c % r.width,
        d = Math.floor(c / r.width),
        f = l
      ;(n.pixelStorei(e.UNPACK_SKIP_PIXELS, u),
        n.pixelStorei(e.UNPACK_SKIP_ROWS, d),
        n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data))
    }
    ;(t.clearUpdateRanges(),
      n.pixelStorei(e.UNPACK_ROW_LENGTH, c),
      n.pixelStorei(e.UNPACK_SKIP_PIXELS, l),
      n.pixelStorei(e.UNPACK_SKIP_ROWS, u))
  }
}
