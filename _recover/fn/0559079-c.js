function c(t) {
  ;(l(), r && r(t), um.remove(`image:${e}`))
  let n = bm.get(this) || []
  for (let e = 0; e < n.length; e++) {
    let r = n[e]
    r.onError && r.onError(t)
  }
  ;(bm.delete(this), i.manager.itemError(e), i.manager.itemEnd(e))
}
