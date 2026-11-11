function f(e, t, n, r) {
  let i = e.value,
    a = t + `_` + n
  if (Array.isArray(i)) {
    r[a] === void 0 && (r[a] = [])
    let e = r[a],
      t = !1
    for (let n = 0; n < i.length; n++) p(i[n], e, n) === !0 && (t = !0)
    return t
  }
  return p(i, r, a)
}
