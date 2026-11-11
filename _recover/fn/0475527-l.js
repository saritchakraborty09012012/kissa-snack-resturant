function l() {
  let e = new Y()
  for (let t = 0; t < i.length; t += 3) {
    ;((e.x = i[t + 0]), (e.y = i[t + 1]), (e.z = i[t + 2]))
    let n = h(e) / 2 / Math.PI + 0.5,
      r = g(e) / Math.PI + 0.5
    a.push(n, 1 - r)
  }
  ;(p(), u())
}
