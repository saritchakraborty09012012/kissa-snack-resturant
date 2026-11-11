function Df(e) {
  let t,
    n = 1
  do {
    let r = e,
      i
    e = null
    let a = null
    for (t = 0; r;) {
      t++
      let o = r,
        s = 0
      for (let e = 0; e < n && (s++, (o = o.nextZ), o); e++);
      let c = n
      for (; s > 0 || (c > 0 && o);)
        (s !== 0 && (c === 0 || !o || r.z <= o.z)
          ? ((i = r), (r = r.nextZ), s--)
          : ((i = o), (o = o.nextZ), c--),
          a ? (a.nextZ = i) : (e = i),
          (i.prevZ = a),
          (a = i))
      r = o
    }
    ;((a.nextZ = null), (n *= 2))
  } while (t > 1)
  return e
}
