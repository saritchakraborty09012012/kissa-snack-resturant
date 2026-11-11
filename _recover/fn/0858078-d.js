function d(e) {
  let n = e.index,
    r = e.attributes.position,
    i = 0
  if (r === void 0) return
  let o = n === null ? r.array.length / 3 - 1 : n.array.length,
    s = new (r.count >= 65535 ? Rc : Ic)(Math.ceil(o / 3) * 6, 1),
    c = s.array
  if (n !== null) {
    let e = n.array
    i = n.version
    for (let t = 0, n = 0; t < o; t += 3) {
      let r = e[t + 0],
        i = e[t + 1],
        a = e[t + 2]
      ;((c[n++] = r), (c[n++] = i), (c[n++] = i), (c[n++] = a), (c[n++] = a), (c[n++] = r))
    }
  } else {
    i = r.version
    for (let e = 0, t = 0; e < o; e += 3) {
      let n = e + 0,
        r = e + 1,
        i = e + 2
      ;((c[t++] = n), (c[t++] = r), (c[t++] = r), (c[t++] = i), (c[t++] = i), (c[t++] = n))
    }
  }
  s.version = i
  let l = a.get(e)
  ;(l && t.remove(l), a.set(e, s))
}
