function Zt(e, t, n, r, i, a, o, s) {
  ;((e.name = ``),
    o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
      ? (e.type = o)
      : e.removeAttribute(`type`),
    t == null
      ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
      : o === `number`
        ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + Wt(t))
        : e.value !== `` + Wt(t) && (e.value = `` + Wt(t)),
    t == null
      ? n == null
        ? r != null && e.removeAttribute(`value`)
        : $t(e, Wt(n))
      : o === `number` && e.value == t
        ? $t(e, Wt(e.value))
        : $t(e, Wt(t)),
    i == null && a != null && (e.defaultChecked = !!a),
    i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
    s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
      ? (e.name = `` + Wt(s))
      : e.removeAttribute(`name`))
}
