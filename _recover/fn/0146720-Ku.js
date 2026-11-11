function Ku(e, t) {
  for (; ru !== null;) {
    var n = ru
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gl(8, n, t)
        break
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var r = n.memoizedState.cachePool.pool
          r != null && r.refCount++
        }
        break
      case 24:
        Da(n.memoizedState.cache)
    }
    if (((r = n.child), r !== null)) ((r.return = n), (ru = r))
    else
      a: for (n = e; ru !== null;) {
        r = ru
        var i = r.sibling,
          a = r.return
        if ((mu(r), r === n)) {
          ru = null
          break a
        }
        if (i !== null) {
          ;((i.return = a), (ru = i))
          break a
        }
        ru = a
      }
  }
}
var qu = {
    getCacheForType: function (e) {
      var t = ya(Ta),
        n = t.data.get(e)
      return (n === void 0 && ((n = e()), t.data.set(e, n)), n)
    },
    cacheSignal: function () {
      return ya(Ta).controller.signal
    },
  },
  Ju = typeof WeakMap == `function` ? WeakMap : Map,
  Yu = 0,
  Xu = null,
  Zu = null,
  Qu = 0,
  $u = 0,
  ed = null,
  td = !1,
  nd = !1,
  rd = !1,
  id = 0,
  ad = 0,
  od = 0,
  sd = 0,
  cd = 0,
  ld = 0,
  ud = 0,
  dd = null,
  fd = null,
  pd = !1,
  md = 0,
  hd = 0,
  gd = 1 / 0,
  _d = null,
  vd = null,
  yd = 0,
  bd = null,
  xd = null,
  Sd = 0,
  Cd = 0,
  wd = null,
  Td = null,
  Ed = null,
  Dd = null,
  Od = null,
  kd = 0,
  Ad = null
