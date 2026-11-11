function Rk(e) {
  let t = new WeakMap()
  return {
    acquire(n, r) {
      let i = t.get(n)
      i
        ? (i.count++, (i.forcedValue = r))
        : t.set(n, { count: 1, original: n[e], forcedValue: r })
    },
    release(n) {
      let r = t.get(n)
      r && --r.count <= 0 && (n[e] === r.forcedValue && (n[e] = r.original), t.delete(n))
    },
  }
}
var zk = Rk(`autoClear`),
  Bk = Rk(`toneMapping`),
  Vk = new J(),
  Hk = (e, t) => new EO(e, t),
  Uk = new WeakSet(),
  Wk = new WeakSet()
