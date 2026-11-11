function oy(e, t, n) {
  let r = e.getShaderParameter(t, e.COMPILE_STATUS),
    i = (e.getShaderInfoLog(t) || ``).trim()
  if (r && i === ``) return ``
  let a = /ERROR: 0:(\d+)/.exec(i)
  if (a) {
    let r = parseInt(a[1])
    return (
      n.toUpperCase() +
      `

` +
      i +
      `

` +
      ry(e.getShaderSource(t), r)
    )
  }
  return i
}
