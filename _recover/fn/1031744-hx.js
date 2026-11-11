function hx(e, t, n, r) {
  let i = e,
    a = i?.__r3f
  return (
    a ||
      ((a = {
        root: t,
        type: n,
        parent: null,
        children: [],
        props: mx(r),
        object: i,
        eventCount: 0,
        handlers: {},
        previousVisible: void 0,
        isHidden: !1,
      }),
      i && (i.__r3f = a)),
    a
  )
}
