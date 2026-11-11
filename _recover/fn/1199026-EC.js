function EC({
  ref: e,
  children: t,
  fallback: n,
  resize: r,
  style: i,
  gl: a,
  events: o = vC,
  eventSource: s,
  eventPrefix: c,
  shadows: l,
  linear: u,
  flat: d,
  legacy: f,
  orthographic: p,
  frameloop: m,
  dpr: h,
  performance: g,
  raycaster: _,
  camera: y,
  scene: b,
  onPointerMissed: x,
  onCreated: S,
  ...C
}) {
  v.useMemo(() => SS(o_), [])
  let w = $b(),
    [T, E] = bC({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...r }),
    D = v.useRef(null),
    O = v.useRef(null)
  v.useImperativeHandle(e, () => D.current)
  let k = Yb(x),
    A = v.useCallback((e) => (k.current == null ? void 0 : k.current(e)), [k]),
    [j, M] = v.useState(!1),
    [N, P] = v.useState(!1)
  if (j) throw j
  if (N) throw N
  let F = v.useRef(null),
    [ee, te] = Zb(),
    I = v.useRef(null),
    ne = () => (s ? (ix(s) ? s.current : s) : O.current)
  return (
    v.useInsertionEffect(
      () => () => {
        let e = F.current
        ;((F.current = null), e?.unmount())
      },
      [],
    ),
    Jb(() => {
      let e = D.current
      E.width > 0 &&
        E.height > 0 &&
        e &&
        (F.current || (F.current = qS(e)),
        F.current
          .configure({
            gl: a,
            scene: b,
            events: o,
            shadows: l,
            linear: u,
            flat: d,
            legacy: f,
            orthographic: p,
            frameloop: m,
            dpr: h,
            performance: g,
            raycaster: _,
            camera: y,
            size: E,
            onPointerMissed: A,
            onCreated: (e) => {
              ;((I.current = e),
                e.events.connect == null || e.events.connect(ne() ?? O.current),
                c &&
                  e.setEvents({
                    compute: (e, t) => {
                      let n = e[c + `X`],
                        r = e[c + `Y`]
                      ;(t.pointer.set((n / t.size.width) * 2 - 1, -(r / t.size.height) * 2 + 1),
                        t.raycaster.setFromCamera(t.pointer, t.camera))
                    },
                  }),
                S?.(e))
            },
          })
          .catch(P),
        F.current.ready.status === `fulfilled`
          ? F.current.render(
              (0, K.jsx)(w, {
                children: (0, K.jsx)(tx, {
                  set: P,
                  children: (0, K.jsx)(v.Suspense, {
                    fallback: (0, K.jsx)(ex, { set: M }),
                    children: t ?? null,
                  }),
                }),
              }),
            )
          : F.current.ready.status === `pending` && te(F.current.ready))
    }),
    v.useEffect(() => {
      let e = I.current?.get(),
        t = ne()
      e && t && e.events.connected !== t && (e.events.connect == null || e.events.connect(t))
    }),
    v.useEffect(() => {
      let e = D.current
      return () => {
        var t
        e.isConnected || (t = F.current) == null || t.unmount()
      }
    }, []),
    (0, K.jsxs)(`div`, {
      ref: O,
      style: {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        overflow: `hidden`,
        pointerEvents: s ? `none` : `auto`,
        ...i,
      },
      ...C,
      children: [
        (0, K.jsx)(`div`, {
          ref: T,
          style: { width: `100%`, height: `100%` },
          children: (0, K.jsx)(`canvas`, { ref: D, style: { display: `block` }, children: n }),
        }),
        ee,
      ],
    })
  )
}
