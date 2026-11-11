function NE(e) {
  return e.ground
    ? v.createElement(ME, e)
    : e.map
      ? v.createElement(kE, e)
      : e.children
        ? v.createElement(jE, e)
        : v.createElement(AE, e)
}
var PE = v.forwardRef(
    (
      {
        light: e,
        args: t,
        map: n,
        toneMapped: r = !1,
        color: i = `white`,
        form: a = `rect`,
        intensity: o = 1,
        scale: s = 1,
        target: c = [0, 0, 0],
        children: l,
        ...u
      },
      d,
    ) => {
      let f = v.useRef(null)
      return (
        v.useImperativeHandle(d, () => f.current, []),
        v.useLayoutEffect(() => {
          !l &&
            !u.material &&
            (Ex(f.current.material, { color: i }), f.current.material.color.multiplyScalar(o))
        }, [i, o, l, u.material]),
        v.useLayoutEffect(() => {
          ;(u.rotation || f.current.quaternion.identity(),
            c &&
              !u.rotation &&
              (typeof c == `boolean`
                ? f.current.lookAt(0, 0, 0)
                : f.current.lookAt(Array.isArray(c) ? new Y(...c) : c)))
        }, [c, u.rotation]),
        (s = Array.isArray(s) && s.length === 2 ? [s[0], s[1], 1] : s),
        v.createElement(
          `mesh`,
          OC({ ref: f, scale: s }, u),
          a === `circle`
            ? v.createElement(`ringGeometry`, { args: t || [0, 0.5, 64] })
            : a === `ring`
              ? v.createElement(`ringGeometry`, { args: t || [0.25, 0.5, 64] })
              : a === `rect` || a === `plane`
                ? v.createElement(`planeGeometry`, { args: t || [1, 1] })
                : a === `box`
                  ? v.createElement(`boxGeometry`, { args: t || [1, 1, 1] })
                  : v.createElement(a, { args: t }),
          l || v.createElement(`meshBasicMaterial`, { toneMapped: r, map: n, side: 2 }),
          e && v.createElement(`pointLight`, OC({ castShadow: !0 }, e)),
        )
      )
    },
  ),
  FE = class extends Cp {
    constructor() {
      super({
        uniforms: { time: { value: 0 }, pixelRatio: { value: 1 } },
        vertexShader: `
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,
        fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${jT >= 154 ? `colorspace_fragment` : `encodings_fragment`}>
        }
      `,
      })
    }
    get time() {
      return this.uniforms.time.value
    }
    set time(e) {
      this.uniforms.time.value = e
    }
    get pixelRatio() {
      return this.uniforms.pixelRatio.value
    }
    set pixelRatio(e) {
      this.uniforms.pixelRatio.value = e
    }
  },
  IE = (e) => e && e.constructor === Float32Array,
  LE = (e) => [e.r, e.g, e.b],
  RE = (e) => e instanceof J || e instanceof Y || e instanceof ns,
  zE = (e) => (Array.isArray(e) ? e : RE(e) ? e.toArray() : [e, e, e])
