function vp() {
  var e = window.event
  return e && e.type === `popstate` ? e !== _p && ((_p = e), !0) : ((_p = null), !1)
}
var yp = typeof setTimeout == `function` ? setTimeout : void 0,
  bp = typeof clearTimeout == `function` ? clearTimeout : void 0,
  xp = typeof Promise == `function` ? Promise : void 0,
  Sp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : yp,
  Cp =
    typeof queueMicrotask == `function`
      ? queueMicrotask
      : xp === void 0
        ? yp
        : function (e) {
            return xp.resolve(null).then(e).catch(wp)
          }
