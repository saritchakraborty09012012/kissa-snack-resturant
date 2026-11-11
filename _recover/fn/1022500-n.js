function n(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
}
var r = typeof Object.is == `function` ? Object.is : n,
  i = t.useState,
  a = t.useEffect,
  o = t.useLayoutEffect,
  s = t.useDebugValue
