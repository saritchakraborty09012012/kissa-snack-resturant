function fp(e, t, n) {
  let r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,
    i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`
  return n.has(r) === !0 || n.has(i) === !0 ? !1 : (n.add(r), n.add(i), !0)
}
var pp = Object.freeze({
    __proto__: null,
    BoxGeometry: Cd,
    CapsuleGeometry: wd,
    CircleGeometry: Td,
    ConeGeometry: Dd,
    CylinderGeometry: Ed,
    DodecahedronGeometry: kd,
    EdgesGeometry: Pd,
    ExtrudeGeometry: Xf,
    IcosahedronGeometry: $f,
    LatheGeometry: ep,
    OctahedronGeometry: tp,
    PlaneGeometry: np,
    PolyhedronGeometry: Od,
    RingGeometry: rp,
    ShapeGeometry: ip,
    SphereGeometry: op,
    TetrahedronGeometry: sp,
    TorusGeometry: cp,
    TorusKnotGeometry: lp,
    TubeGeometry: up,
    WireframeGeometry: dp,
  }),
  mp = class extends cl {
    constructor(e) {
      ;(super(),
        (this.isShadowMaterial = !0),
        (this.type = `ShadowMaterial`),
        (this.color = new X(0)),
        (this.transparent = !0),
        (this.fog = !0),
        this.setValues(e))
    }
    copy(e) {
      return (super.copy(e), this.color.copy(e.color), (this.fog = e.fog), this)
    }
  }
