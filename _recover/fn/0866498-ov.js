function ov(e, t) {
  let n = this.cache
  n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t))
}
