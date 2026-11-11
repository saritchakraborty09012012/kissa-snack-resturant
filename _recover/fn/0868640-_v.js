function _v(e, t) {
  let n = this.cache
  n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t))
}
