function Mu(e, t, n) {
  for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
    var r = t.alternate,
      i = e,
      a = t,
      o = a.flags,
      s = !!(n & 1)
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ;(Mu(i, a, n), hl(4, a))
        break
      case 1:
        if ((Mu(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
          try {
            i.componentDidMount()
          } catch (e) {
            mf(r, r.return, e)
          }
        if (((r = a), (i = r.updateQueue), i !== null)) {
          var c = r.stateNode
          try {
            var l = i.shared.hiddenCallbacks
            if (l !== null)
              for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) _o(l[i], c)
          } catch (e) {
            mf(r, r.return, e)
          }
        }
        ;(s && o & 64 && _l(a), yl(a, a.return))
        break
      case 27:
        n & 2 && Ml(a)
      case 5:
        ;((a.tag !== 5 && a.tag !== 27) || Sl(a),
          Mu(i, a, n),
          s && r === null && o & 4 && El(a),
          yl(a, a.return))
        break
      case 6:
        Sl(a)
        break
      case 26:
        ;((c = a.stateNode),
          a.memoizedState !== null || c === null || Ql || Ym(Cm(c.ownerDocument), a.type, c),
          Mu(i, a, n),
          s && r === null && o & 4 && El(a),
          yl(a, a.return))
        break
      case 12:
        Mu(i, a, n)
        break
      case 31:
        ;(Mu(i, a, n), s && o & 4 && yu(i, a))
        break
      case 13:
        ;(Mu(i, a, n), s && o & 4 && bu(i, a))
        break
      case 22:
        ;(a.memoizedState === null && Mu(i, a, n), yl(a, a.return))
        break
      case 30:
        ;(Mu(i, a, n), yl(a, a.return))
        break
      case 7:
        yl(a, a.return)
      default:
        Mu(i, a, n)
    }
    t = t.sibling
  }
}
