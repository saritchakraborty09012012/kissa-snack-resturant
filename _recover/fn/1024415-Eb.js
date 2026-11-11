function Eb(e, t = Tb, n) {
  let r = wb(e.subscribe, e.getState, e.getInitialState, t, n)
  return (v.useDebugValue(r), r)
}
var Db = (e, t) => {
    let n = Cb(e),
      r = (e, r = t) => Eb(n, e, r)
    return (Object.assign(r, n), r)
  },
  Ob = (e, t) => (e ? Db(e, t) : Db),
  kb = (e) => typeof e == `object` && typeof e.then == `function`,
  Ab = []
