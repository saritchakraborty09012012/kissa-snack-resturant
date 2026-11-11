function E(e) {
  let t = r.get(e).__ref
  t !== void 0 && (m.delete(t), h.unregister(t))
}
