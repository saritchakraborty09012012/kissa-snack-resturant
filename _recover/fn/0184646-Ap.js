function Ap(e, t, n) {
  return (
    (n = n.ownerDocument.defaultView),
    {
      rect: e,
      abs: t.position === `absolute` || t.position === `fixed`,
      clip:
        t.clipPath !== `none` ||
        t.overflow !== `visible` ||
        t.filter !== `none` ||
        t.mask !== `none` ||
        t.mask !== `none` ||
        t.borderRadius !== `0px`,
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth,
    }
  )
}
