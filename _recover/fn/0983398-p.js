function p(e, t, n) {
  if (t[n] === void 0)
    return (
      (t[n] =
        typeof e == `number` || typeof e == `boolean`
          ? e
          : ArrayBuffer.isView(e)
            ? e.slice()
            : e.clone()),
      !0
    )
  {
    let r = t[n]
    if (typeof e == `number` || typeof e == `boolean`) {
      if (r !== e) return ((t[n] = e), !0)
    } else if (ArrayBuffer.isView(e)) return !0
    else if (r.equals(e) === !1) return (r.copy(e), !0)
  }
  return !1
}
