function ku(e, t) {
  var n = e.alternate
  if (n === null) Ul(e, !1)
  else
    switch (e.tag) {
      case 3:
        if (((su = iu = !1), Ll(), Ou(t, e), !iu && !ou)) {
          if (((e = Il), e !== null))
            for (var r = 0; r < e.length; r += 3) {
              n = e[r]
              var i = e[r + 1]
              ;(kp(n, e[r + 2]),
                (n = n.ownerDocument.documentElement),
                n !== null &&
                  n.animate(
                    { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition-group(` + i + `)`,
                    },
                  ))
            }
          ;((e = t.containerInfo),
            (e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement),
            e !== null &&
              e.style.viewTransitionName === `` &&
              ((e.style.viewTransitionName = `none`),
              e.animate(
                { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                {
                  duration: 0,
                  fill: `forwards`,
                  pseudoElement: `::view-transition-group(root)`,
                },
              ),
              e.animate(
                { width: [0, 0], height: [0, 0] },
                { duration: 0, fill: `forwards`, pseudoElement: `::view-transition` },
              )),
            (su = !0))
        }
        Il = null
        break
      case 5:
        Ou(t, e)
        break
      case 4:
        ;((r = iu), (iu = !1), Ou(t, e), iu && (ou = !0), (iu = r))
        break
      case 22:
        e.memoizedState === null && (n.memoizedState === null ? Ou(t, e) : Ul(e, !1))
        break
      case 30:
        ;((r = iu), (i = Ll()), (iu = !1), Ou(t, e), iu && (e.flags |= 4))
        var a = e.memoizedProps,
          o = e.stateNode
        ;((t = ui(a, o)), (o = ui(n.memoizedProps, o)))
        var s = fi(a.default, a.update)
        ;(s === `none`
          ? (t = !1)
          : ((a = n.memoizedState),
            (n.memoizedState = null),
            (n = e.child),
            (Rl = 0),
            (t = Xl(e, n, t, o, s, a, !0)),
            Rl !== (a === null ? 0 : a.length) && (e.flags |= 32)),
          e.flags & 4 && t
            ? (Nd(e, e.memoizedProps.onUpdate), (Il = i))
            : i !== null && (i.push.apply(i, Il), (Il = i)),
          (iu = e.flags & 32 ? !0 : r))
        break
      default:
        Ou(t, e)
    }
}
