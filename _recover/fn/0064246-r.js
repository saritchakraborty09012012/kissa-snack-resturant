function r(e) {
  for (var t = new Map(); e !== null;)
    (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling))
  return t
}
