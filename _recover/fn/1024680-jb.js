function jb(e, t, n = (e, t) => e === t) {
  if (e === t) return !0
  if (!e || !t) return !1
  let r = e.length
  if (t.length !== r) return !1
  for (let i = 0; i < r; i++) if (!n(e[i], t[i])) return !1
  return !0
}
