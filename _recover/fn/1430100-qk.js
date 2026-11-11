function qk(e, t, n) {
  let r = []
  for (let i = 0; i < e.length; i++) {
    let a = e[i]
    if (a instanceof sO) {
      let o = [a],
        s = Ik(a),
        c = Lk(a)
      if (n !== `none`) {
        let t
        for (; (t = e[i + 1]) instanceof sO;) {
          let e = Ik(t),
            r = Lk(t)
          if (n === `auto` && ((s && e) || (s && r) || (c && e))) break
          ;(o.push(t), s || (s = e), c || (c = r), i++)
        }
      }
      let l = new HO(t, ...o)
      ;(Uk.add(l), r.push(l))
    } else a instanceof LD && r.push(a)
  }
  return r
}
var Jk = (0, v.memo)(function ({
    children: e,
    camera: t,
    scene: n,
    resolutionScale: r,
    enabled: i = !0,
    renderPriority: a = 1,
    autoClear: o = !0,
    autoRenderToScreen: s = !0,
    depthBuffer: c,
    enableNormalPass: l,
    stencilBuffer: u,
    multisampling: d = 4,
    frameBufferType: f = ti,
    renderPass: p = Hk,
    mergeMode: m = `auto`,
    ref: h,
  }) {
    let { gl: g, scene: _, camera: y } = qx(),
      b = n || _,
      x = t || y
    g.getSize(Vk)
    let [S, C] = (0, v.useState)(null),
      [, w] = (0, v.useReducer)((e) => e + 1, 0)
    ;(0, v.useEffect)(() => {
      zk.acquire(g, !1)
      let e = new XD(g, {
        depthBuffer: c,
        stencilBuffer: u,
        multisampling: d,
        frameBufferType: f,
      })
      ;((e.autoRenderToScreen = s), e.addPass(p(b, x)))
      let t = null,
        n = null
      ;(l &&
        ((t = new UO(b, x)),
        (t.enabled = !1),
        e.addPass(t),
        r !== void 0 &&
          ((n = new NO({ normalBuffer: t.texture, resolutionScale: r })),
          (n.enabled = !1),
          e.addPass(n))),
        e.setSize(Vk.width, Vk.height))
      let i = new Set(e.passes)
      return (
        C({ composer: e, normalPass: t, downSamplingPass: n }),
        () => {
          for (let t of [...e.passes]) i.has(t) || (e.removePass(t), Kk(t))
          ;(e.dispose(), zk.release(g))
        }
      )
    }, [x, g, c, u, d, f, s, p, b, l, r])
    let T = (0, v.useRef)({ width: -1, height: -1, pixelRatio: -1 })
    Jx(
      (e, t) => {
        if (!i || !S) return
        let { composer: n } = S
        g.getSize(Vk)
        let r = g.getPixelRatio(),
          a = T.current
        ;(Vk.width !== a.width || Vk.height !== a.height || r !== a.pixelRatio) &&
          (n.setSize(Vk.width, Vk.height),
          (a.width = Vk.width),
          (a.height = Vk.height),
          (a.pixelRatio = r))
        let s = g.autoClear
        ;((g.autoClear = o), u && !o && g.clearStencil(), n.render(t), (g.autoClear = s))
      },
      i ? a : 0,
    )
    let E = (0, v.useRef)(null),
      D = (0, v.useRef)([]),
      [O, k] = (0, v.useState)(0)
    ;((0, v.useLayoutEffect)(() => {
      if (!S) return
      let e = Ek(E.current, (e) => e instanceof sO || e instanceof LD)
      Dk(D, e) && k((e) => e + 1)
    }),
      (0, v.useLayoutEffect)(() => {
        if (!S) return
        let { composer: e, normalPass: t, downSamplingPass: n } = S,
          r = qk(D.current, x, m)
        if (r.some((e) => Wk.has(e))) {
          let e = new HD()
          ;(Uk.add(e), r.push(e))
        }
        for (let t of r) e.addPass(t)
        return (
          r.length && (t && (t.enabled = !0), n && (n.enabled = !0)),
          () => {
            for (let t of r) (e.removePass(t), Kk(t))
            ;(t && (t.enabled = !1), n && (n.enabled = !1))
          }
        )
      }, [S, O, x, m]),
      (0, v.useEffect)(
        () => (
          Bk.acquire(g, 0),
          (g.toneMapping = 0),
          () => {
            Bk.release(g)
          }
        ),
        [g],
      ))
    let A = (0, v.useMemo)(
      () =>
        S
          ? {
              composer: S.composer,
              normalPass: S.normalPass,
              downSamplingPass: S.downSamplingPass,
              resolutionScale: r,
              camera: x,
              scene: b,
              requestRebuild: w,
              autoClear: o,
            }
          : null,
      [S, r, x, b, w, o],
    )
    return (
      (0, v.useImperativeHandle)(h, () => S?.composer, [S]),
      A
        ? (0, K.jsx)(Fk.Provider, {
            value: A,
            children: (0, K.jsx)(`group`, { ref: E, children: e }),
          })
        : null
    )
  }),
  Yk = Pk(TO)
