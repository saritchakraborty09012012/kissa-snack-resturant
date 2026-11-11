function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty(`$` + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0))
  } else {
    for (n = `` + Wt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;((e[i].selected = !0), r && (e[i].defaultSelected = !0))
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
