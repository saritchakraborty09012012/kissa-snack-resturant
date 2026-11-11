function t(t) {
  let { internal: n } = e.getState(),
    r = t.offsetX - n.initialClick[0],
    i = t.offsetY - n.initialClick[1]
  return Math.round(Math.sqrt(r * r + i * i))
}
