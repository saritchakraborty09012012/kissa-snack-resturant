function ef(e) {
  var t = e
  do {
    if (t.flags & 32768) {
      tf(t, td)
      return
    }
    e = t.return
    var n = fl(t.alternate, t, id)
    if (n !== null) {
      Zu = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Zu = t
      return
    }
    Zu = t = e
  } while (t !== null)
  ad === 0 && (ad = 5)
}
