function Kv(e) {
  switch (e) {
    case 5126:
      return Dv
    case 35664:
      return Ov
    case 35665:
      return kv
    case 35666:
      return Av
    case 35674:
      return jv
    case 35675:
      return Mv
    case 35676:
      return Nv
    case 5124:
    case 35670:
      return Pv
    case 35667:
    case 35671:
      return Fv
    case 35668:
    case 35672:
      return Iv
    case 35669:
    case 35673:
      return Lv
    case 5125:
      return Rv
    case 36294:
      return zv
    case 36295:
      return Bv
    case 36296:
      return Vv
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hv
    case 35679:
    case 36299:
    case 36307:
      return Uv
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Wv
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Gv
  }
}
var qv = class {
    constructor(e, t, n) {
      ;((this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.type = t.type),
        (this.setValue = Ev(t.type)))
    }
  },
  Jv = class {
    constructor(e, t, n) {
      ;((this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.type = t.type),
        (this.size = t.size),
        (this.setValue = Kv(t.type)))
    }
  },
  Yv = class {
    constructor(e) {
      ;((this.id = e), (this.seq = []), (this.map = {}))
    }
    setValue(e, t, n) {
      let r = this.seq
      for (let i = 0, a = r.length; i !== a; ++i) {
        let a = r[i]
        a.setValue(e, t[a.id], n)
      }
    }
  },
  Xv = /(\w+)(\])?(\[|\.)?/g
