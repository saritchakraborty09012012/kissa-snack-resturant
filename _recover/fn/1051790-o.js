function o(e) {
  var t = e.alternate
  if (!t) {
    if (((t = i(e)), t === null)) throw Error(r(188))
    return t === e ? e : null
  }
  for (var n = e, o = t; ;) {
    var s = n.return
    if (s === null) break
    var c = s.alternate
    if (c === null) {
      if (((o = s.return), o !== null)) {
        n = o
        continue
      }
      break
    }
    if (s.child === c.child) {
      for (c = s.child; c;) {
        if (c === n) return (a(s), e)
        if (c === o) return (a(s), t)
        c = c.sibling
      }
      throw Error(r(188))
    }
    if (n.return !== o.return) ((n = s), (o = c))
    else {
      for (var l = !1, u = s.child; u;) {
        if (u === n) {
          ;((l = !0), (n = s), (o = c))
          break
        }
        if (u === o) {
          ;((l = !0), (o = s), (n = c))
          break
        }
        u = u.sibling
      }
      if (!l) {
        for (u = c.child; u;) {
          if (u === n) {
            ;((l = !0), (n = c), (o = s))
            break
          }
          if (u === o) {
            ;((l = !0), (o = c), (n = s))
            break
          }
          u = u.sibling
        }
        if (!l) throw Error(r(189))
      }
    }
    if (n.alternate !== o) throw Error(r(190))
  }
  if (n.tag !== 3) throw Error(r(188))
  return n.stateNode.current === n ? e : t
}
