function e(e, t) {
  let n = !1,
    r = t.length
  for (let i = 0, a = r - 1; i < r; a = i++) {
    let r = t[i],
      o = t[a]
    r.y > e.y != o.y > e.y && e.x < ((o.x - r.x) * (e.y - r.y)) / (o.y - r.y) + r.x && (n = !n)
  }
  return n
}
