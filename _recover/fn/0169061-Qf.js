function Qf(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r;) {
    var s = n,
      c = s.alternate,
      l = s.stateNode
    if (((s = s.tag), c !== null && c === r)) break
    ;((s !== 5 && s !== 26 && s !== 27) ||
      l === null ||
      ((c = l),
      i
        ? ((l = bn(n, a)), l != null && o.unshift(Yf(n, l, c)))
        : i || ((l = bn(n, a)), l != null && o.push(Yf(n, l, c)))),
      (n = n.return))
  }
  o.length !== 0 && e.push({ event: t, listeners: o })
}
var $f = /\r\n?/g,
  ep = /\u0000|\uFFFD/g
