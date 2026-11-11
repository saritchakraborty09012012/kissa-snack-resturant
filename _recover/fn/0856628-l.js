function l(e) {
  let n = e.target
  n.removeEventListener(`dispose`, l)
  let r = t.get(n)
  r !== void 0 && (t.delete(n), r.dispose())
}
