function zh(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = Ch(e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;((pn = r), n.target.dispatchEvent(r), (pn = null))
    } else return ((t = Et(n)), t !== null && _h(t), (e.blockedOn = n), !1)
    t.shift()
  }
  return !0
}
