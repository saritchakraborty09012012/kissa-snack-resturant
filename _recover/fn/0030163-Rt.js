function Rt(e) {
  return ke.call(Lt, e)
    ? !0
    : ke.call(It, e)
      ? !1
      : Ft.test(e)
        ? (Lt[e] = !0)
        : ((It[e] = !0), !1)
}
var zt = !1
