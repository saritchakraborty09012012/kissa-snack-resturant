function Or(e, t) {
  if (e !== null && e.child === t.child) return !1
  if (t.flags & 16) return !0
  for (e = t.child; e !== null;) {
    if (e.flags & 8218 || e.subtreeFlags & 8218) return !0
    e = e.sibling
  }
  return !1
}
