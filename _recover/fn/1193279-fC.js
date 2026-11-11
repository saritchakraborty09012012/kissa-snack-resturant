function fC(e, t = !0, n, r) {
  if ((t && tC(`before`, e), n)) iC(e, n, r)
  else for (let t of GS.values()) iC(e, t.store.getState())
  t && tC(`after`, e)
}
