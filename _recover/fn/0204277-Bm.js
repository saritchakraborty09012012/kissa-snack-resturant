function Bm(e, t, n, r) {
  if ((t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`))) {
    if (!0 !== t[Ct]) {
      r.loading = 1
      return
    }
  } else
    ((t = e.createElement(`link`)),
      (t[Ct] = !0),
      (t.onload = t.onerror = At.bind(null, t)),
      ap(t, `link`, n),
      kt(t),
      e.head.appendChild(t))
  ;((r.preload = t),
    t.addEventListener(`load`, function () {
      return (r.loading |= 1)
    }),
    t.addEventListener(`error`, function () {
      return (r.loading |= 2)
    }))
}
