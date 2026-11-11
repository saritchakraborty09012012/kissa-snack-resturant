function Ae(t, n) {
  let r = l.get(n)
  r === void 0 && ((r = new WeakMap()), l.set(n, r))
  let i = r.get(t)
  i === void 0 &&
    ((i = e.getUniformBlockIndex(n, t.name)), e.uniformBlockBinding(n, i, i), r.set(t, i))
}
