function N(e) {
  for (var t = e.byteLength, n = [], r = 0, i = new DataView(e); t > 0;) {
    var a = i.getInt8(r++)
    if (a < 0) {
      var o = -a
      t -= o + 1
      for (var s = 0; s < o; s++) n.push(i.getUint8(r++))
    } else {
      var o = a
      t -= 2
      for (var c = i.getUint8(r++), s = 0; s < o + 1; s++) n.push(c)
    }
  }
  return n
}
