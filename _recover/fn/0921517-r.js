function r() {
  let n = !1,
    r = !1,
    i = null,
    a = null,
    o = null
  return {
    setReversed: function (e) {
      if (r !== e) {
        let n = t.get(`EXT_clip_control`)
        ;(e
          ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT)
          : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT),
          (r = e))
        let i = o
        ;((o = null), this.setClear(i))
      }
    },
    getReversed: function () {
      return r
    },
    setTest: function (t) {
      t ? se(e.DEPTH_TEST) : ce(e.DEPTH_TEST)
    },
    setMask: function (t) {
      i !== t && !n && (e.depthMask(t), (i = t))
    },
    setFunc: function (t) {
      if ((r && (t = ao[t]), a !== t)) {
        switch (t) {
          case 0:
            e.depthFunc(e.NEVER)
            break
          case 1:
            e.depthFunc(e.ALWAYS)
            break
          case 2:
            e.depthFunc(e.LESS)
            break
          case 3:
            e.depthFunc(e.LEQUAL)
            break
          case 4:
            e.depthFunc(e.EQUAL)
            break
          case 5:
            e.depthFunc(e.GEQUAL)
            break
          case 6:
            e.depthFunc(e.GREATER)
            break
          case 7:
            e.depthFunc(e.NOTEQUAL)
            break
          default:
            e.depthFunc(e.LEQUAL)
        }
        a = t
      }
    },
    setLocked: function (e) {
      n = e
    },
    setClear: function (t) {
      o !== t && ((o = t), r && (t = 1 - t), e.clearDepth(t))
    },
    reset: function () {
      ;((n = !1), (i = null), (a = null), (o = null), (r = !1))
    },
  }
}
