function Ri(e) {
  var t = e.flags
  if (t & 2) {
    try {
      for (var n, i = e.return; i !== null;) {
        if (ti(i)) {
          n = i
          break
        }
        i = i.return
      }
      i = null
      for (var a = e.return; a !== null;) {
        if (Qr(a)) {
          var o = a.stateNode
          i === null ? (i = [o]) : i.push(o)
        }
        if (Zr(a)) break
        a = a.return
      }
      var s = i
      if (ns) {
        if (n == null) throw Error(r(160))
        switch (n.tag) {
          case 27:
            if (ml) {
              var c = n.stateNode
              ii(e, ni(e), c, s)
              break
            }
          case 5:
            var l = n.stateNode
            ;(n.flags & 32 && (Hs(l), (n.flags &= -33)), ii(e, ni(e), l, s))
            break
          case 3:
          case 4:
            var u = n.stateNode.containerInfo
            ri(e, ni(e), u, s)
            break
          default:
            throw Error(r(161))
        }
      } else ai(e, s)
    } catch (t) {
      Ga(e, e.return, t)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
