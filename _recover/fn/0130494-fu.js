function fu(e, t) {
  switch (e.tag) {
    case 5:
    case 26:
      try {
        var n = e.stateNode
        if (t) {
          var r = n.style
          typeof r.setProperty == `function`
            ? r.setProperty(`display`, `none`, `important`)
            : (r.display = `none`)
        } else {
          var i = e.stateNode,
            a = e.memoizedProps.style,
            o = a != null && a.hasOwnProperty(`display`) ? a.display : null
          i.style.display = o == null || typeof o == `boolean` ? `` : (`` + o).trim()
        }
      } catch (t) {
        mf(e, e.return, t)
      }
      pu(e, t)
      break
    case 6:
      try {
        ;((e.stateNode.nodeValue = t ? `` : e.memoizedProps), (zt = !0))
      } catch (t) {
        mf(e, e.return, t)
      }
      break
    case 18:
      try {
        var s = e.stateNode
        t ? Dp(s, !0) : Dp(e.stateNode, !1)
      } catch (t) {
        mf(e, e.return, t)
      }
      break
    case 22:
    case 23:
      e.memoizedState === null && du(e, t)
      break
    default:
      du(e, t)
  }
}
