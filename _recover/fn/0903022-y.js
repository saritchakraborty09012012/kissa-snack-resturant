function y(t, n) {
  let r = u.get(n)
  return (r === void 0 ? ((r = new jy(e, n, t, i)), l.push(r), u.set(n, r)) : ++r.usedTimes, r)
}
