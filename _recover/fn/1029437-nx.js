function nx(e) {
  let t = e.root
  for (; t.getState().previousRoot;) t = t.getState().previousRoot
  return t
}
var rx = (e) => e && e.isOrthographicCamera,
  ix = (e) => e && e.hasOwnProperty(`current`),
  ax = (e) => e != null && (typeof e == `string` || typeof e == `number` || e.isColor),
  ox = () => {}
