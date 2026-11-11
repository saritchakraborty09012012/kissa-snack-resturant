function gl(e, t, n) {
  try {
    var r = t.updateQueue,
      i = r === null ? null : r.lastEffect
    if (i !== null) {
      var a = i.next
      r = a
      do {
        if ((r.tag & e) === e) {
          var o = r.inst,
            s = o.destroy
          if (s !== void 0) {
            ;((o.destroy = void 0), (i = t))
            var c = n,
              l = s
            try {
              l()
            } catch (e) {
              mf(i, c, e)
            }
          }
        }
        r = r.next
      } while (r !== a)
    }
  } catch (e) {
    mf(t, t.return, e)
  }
}
