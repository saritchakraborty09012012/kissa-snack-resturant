function c(e) {
  let t = new Y()
  for (let n = 0; n < i.length; n += 3)
    ((t.x = i[n + 0]),
      (t.y = i[n + 1]),
      (t.z = i[n + 2]),
      t.normalize().multiplyScalar(e),
      (i[n + 0] = t.x),
      (i[n + 1] = t.y),
      (i[n + 2] = t.z))
}
