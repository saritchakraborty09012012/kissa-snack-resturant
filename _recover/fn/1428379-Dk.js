function Dk(e, t) {
  let n = e.current
  return t.length === n.length && t.every((e, t) => e === n[t]) ? !1 : ((e.current = t), !0)
}
