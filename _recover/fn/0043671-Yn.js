function Yn(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Jn[e]) ? !!t[e] : !1
}
