function Eu(e) {
  var t = e.flags
  if (t & 2) {
    try {
      for (var n, r = e.return; r !== null;) {
        if (Ol(r)) {
          n = r
          break
        }
        r = r.return
      }
      r = null
      for (var a = e.return; a !== null;) {
        if (Tl(a)) {
          var o = a.stateNode
          r === null ? (r = [o]) : r.push(o)
        }
        if (wl(a)) break
        a = a.return
      }
      var s = r
      if (n == null) throw Error(i(160))
      switch (n.tag) {
        case 27:
          var c = n.stateNode
          jl(e, kl(e), c, s)
          break
        case 5:
          var l = n.stateNode
          ;(n.flags & 32 && (rn(l, ``), (n.flags &= -33)), jl(e, kl(e), l, s))
          break
        case 3:
        case 4:
          var u = n.stateNode.containerInfo
          Al(e, kl(e), u, s)
          break
        default:
          throw Error(i(161))
      }
    } catch (t) {
      mf(e, e.return, t)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
