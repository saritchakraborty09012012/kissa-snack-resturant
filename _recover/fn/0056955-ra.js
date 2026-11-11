function ra(e) {
  var t = e.stateNode,
    n = e.type,
    r = e.memoizedProps
  switch (((t[ht] = e), (t[gt] = r), n)) {
    case `dialog`:
      ;(Uf(`cancel`, t), Uf(`close`, t))
      break
    case `iframe`:
    case `object`:
    case `embed`:
      Uf(`load`, t)
      break
    case `video`:
    case `audio`:
      for (n = 0; n < Bf.length; n++) Uf(Bf[n], t)
      break
    case `source`:
      Uf(`error`, t)
      break
    case `img`:
    case `image`:
    case `link`:
      ;(Uf(`error`, t), Uf(`load`, t))
      break
    case `details`:
      Uf(`toggle`, t)
      break
    case `input`:
      ;(Uf(`invalid`, t),
        Qt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0))
      break
    case `select`:
      Uf(`invalid`, t)
      break
    case `textarea`:
      ;(Uf(`invalid`, t), nn(t, r.value, r.defaultValue, r.children))
  }
  ;((n = r.children),
    (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
    t.textContent === `` + n ||
    !0 === r.suppressHydrationWarning ||
    np(t.textContent, n)
      ? (r.popover != null && (Uf(`beforetoggle`, t), Uf(`toggle`, t)),
        r.onScroll != null && Uf(`scroll`, t),
        r.onScrollEnd != null && Uf(`scrollend`, t),
        r.onClick != null && (t.onclick = fn),
        (t = !0))
      : (t = !1),
    t || na(e, !0))
}
