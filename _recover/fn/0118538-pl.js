function pl(e, t) {
  switch ((Ji(t), t.tag)) {
    case 1:
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
    case 3:
      return (
        pa(Ta),
        U(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 26:
    case 27:
    case 5:
      return (xe(t), null)
    case 31:
      if (t.memoizedState !== null) {
        if ((Ao(t), t.alternate === null)) throw Error(i(340))
        oa()
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
    case 13:
      if ((Ao(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(i(340))
        oa()
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null)
    case 19:
      return (
        No(t),
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
      return (U(), null)
    case 10:
      return (pa(t.type), null)
    case 22:
    case 23:
      return (
        Ao(t),
        Co(),
        e !== null && ve(za),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 24:
      return (pa(Ta), null)
    case 25:
      return null
    default:
      return null
  }
}
