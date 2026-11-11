function i(e) {
  for (var t = e, n = t; n && !n.alternate;)
    ((t = n), t.flags & 4098 && (e = t.return), (n = t.return))
  for (; t.return;) t = t.return
  return t.tag === 3 ? e : null
}
