function jx(e, t, n, r) {
  let i = n.get(t)
  i && (n.delete(t), n.size === 0 && (e.delete(r), i.target.releasePointerCapture(r)))
}
