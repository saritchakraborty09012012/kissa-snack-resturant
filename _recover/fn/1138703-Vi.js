function Vi(e, t) {
  var n = e.alternate
  if (n === null) mi(e, !1)
  else
    switch (e.tag) {
      case 3:
        if (((Nd = Ad = !1), li(), Bi(t, e), !Ad && !Md)) {
          if (((e = Sd), e !== null))
            for (var r = 0; r < e.length; r += 3) Js(e[r], e[r + 1], e[r + 2])
          ;(Ys(t.containerInfo), (Nd = !0))
        }
        Sd = null
        break
      case 5:
        Bi(t, e)
        break
      case 4:
        ;((r = Ad), (Ad = !1), Bi(t, e), Ad && (Md = !0), (Ad = r))
        break
      case 22:
        e.memoizedState === null && (n.memoizedState === null ? Bi(t, e) : mi(e, !1))
        break
      case 30:
        r = Ad
        var i = li()
        ;((Ad = !1), Bi(t, e), Ad && (e.flags |= 4))
        var a = e.memoizedProps,
          o = e.stateNode
        ;((t = j(a, o)), (o = j(n.memoizedProps, o)))
        var s = N(a.default, a.update)
        ;(s === `none`
          ? (n = !1)
          : ((a = n.memoizedState),
            (n.memoizedState = null),
            (n = e.child),
            (Cd = 0),
            (n = xi(e, n, t, o, s, a, !0)),
            Cd !== (a === null ? 0 : a.length) && (e.flags |= 32)),
          e.flags & 4 && n
            ? (da(e, e.memoizedProps.onUpdate), (Sd = i))
            : i !== null && (i.push.apply(i, Sd), (Sd = i)),
          (Ad = e.flags & 32 ? !0 : r))
        break
      default:
        Bi(t, e)
    }
}
