function Eu(e, t) {
  return t.z - e.z
}
var Du = class {
    constructor() {
      ;((this.index = 0), (this.pool = []), (this.list = []))
    }
    push(e, t, n, r) {
      let i = this.pool,
        a = this.list
      this.index >= i.length && i.push({ start: -1, count: -1, z: -1, index: -1 })
      let o = i[this.index]
      ;(a.push(o), this.index++, (o.start = e), (o.count = t), (o.z = n), (o.index = r))
    }
    reset() {
      ;((this.list.length = 0), (this.index = 0))
    }
  },
  Ou = new ls(),
  ku = new X(1, 1, 1),
  Au = new xu(),
  ju = new Cu(),
  Mu = new cc(),
  Nu = new Wc(),
  Pu = new Y(),
  Fu = new Y(),
  Iu = new Y(),
  Lu = new Y(),
  Ru = new Du(),
  zu = new Gl(),
  Bu = []
