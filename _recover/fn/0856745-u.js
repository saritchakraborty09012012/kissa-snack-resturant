function u(e) {
  let t = e.target
  t.removeEventListener(`dispose`, u)
  let r = n.get(t)
  r !== void 0 && (n.delete(t), r.dispose())
}
