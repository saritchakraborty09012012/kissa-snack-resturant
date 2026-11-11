function zr(e, t) {
  switch ((oe(t), t.tag)) {
    case 1:
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
    case 3:
      return (
        ve(xu),
        le(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 26:
    case 27:
    case 5:
      return (de(t), null)
    case 31:
      if (t.memoizedState !== null) {
        if ((yt(t), t.alternate === null)) throw Error(r(340))
        me()
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
    case 13:
      if ((yt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(r(340))
        me()
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
    case 19:
      return (
        xt(t),
        (e = t.flags),
        e & 65536
          ? ((t.flags = (e & -65537) | 128),
            (e = t.memoizedState),
            e !== null && ((e.rendering = null), (e.tail = null)),
            (t.flags |= 4),
            t)
          : null
      )
    case 4:
      return (le(), null)
    case 10:
      return (ve(t.type), null)
    case 22:
    case 23:
      return (
        yt(t),
        mt(),
        e !== null && f(Pu),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 24:
      return (ve(xu), null)
    case 25:
      return null
    default:
      return null
  }
}
