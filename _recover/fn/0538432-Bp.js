function Bp(e, t, n, r, i = 30) {
  let a = e.clone()
  a.name = t
  let o = []
  for (let e = 0; e < a.tracks.length; ++e) {
    let t = a.tracks[e],
      s = t.getValueSize(),
      c = [],
      l = []
    for (let e = 0; e < t.times.length; ++e) {
      let a = t.times[e] * i
      if (!(a < n || a >= r)) {
        c.push(t.times[e])
        for (let n = 0; n < s; ++n) l.push(t.values[e * s + n])
      }
    }
    c.length !== 0 &&
      ((t.times = Fp(c, t.times.constructor)),
      (t.values = Fp(l, t.values.constructor)),
      o.push(t))
  }
  a.tracks = o
  let s = 1 / 0
  for (let e = 0; e < a.tracks.length; ++e)
    s > a.tracks[e].times[0] && (s = a.tracks[e].times[0])
  for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * s)
  return (a.resetDuration(), a)
}
