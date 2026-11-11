function Aa(e) {
  var t = e,
    n = t.alternate
  switch (t.tag) {
    case 15:
    case 0:
      t = or(n, t, t.pendingProps, t.type, void 0, Yd)
      break
    case 11:
      t = or(n, t, t.pendingProps, t.type.render, t.ref, Yd)
      break
    case 5:
      jt(t)
      var r = t
      is &&
        r === lu &&
        (du
          ? (L(r), r.tag === 5 && r.stateNode != null && (uu = r.stateNode))
          : (L(r), (du = !0)))
    default:
      ;(Br(n, t), (t = Jd = to(t, tf)), (t = Tr(n, t, tf)))
  }
  ;((e.memoizedProps = e.pendingProps), t === null ? Ma(e) : (Jd = t))
}
