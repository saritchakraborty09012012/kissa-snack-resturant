function ua() {
  if (sf === 0) {
    if (!(Yd & 536870912) || du) {
      var e = Dl
      ;((Dl <<= 1), !(Dl & 3932160) && (Dl = 262144), (sf = e))
    } else sf = 536870912
  }
  return ((e = Zu.current), e !== null && (e.flags |= 32), sf)
}
