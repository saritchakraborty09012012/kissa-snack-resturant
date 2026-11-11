function s() {
  ;(l(), t && t(this))
  let n = bm.get(this) || []
  for (let e = 0; e < n.length; e++) {
    let t = n[e]
    t.onLoad && t.onLoad(this)
  }
  ;(bm.delete(this), i.manager.itemEnd(e))
}
