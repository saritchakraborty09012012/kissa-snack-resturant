function Qd(e) {
  var t = e,
    n = t.alternate
  switch (t.tag) {
    case 15:
    case 0:
      t = zc(n, t, t.pendingProps, t.type, void 0, Qu)
      break
    case 11:
      t = zc(n, t, t.pendingProps, t.type.render, t.ref, Qu)
      break
    case 5:
      Qo(t)
      var r = t
      r === Xi &&
        (Qi
          ? (ia(r), r.tag === 5 && r.stateNode != null && (Zi = r.stateNode))
          : (ia(r), (Qi = !0)))
    default:
      ;(ml(n, t), (t = Zu = Oi(t, id)), (t = al(n, t, id)))
  }
  ;((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (Zu = t))
}
