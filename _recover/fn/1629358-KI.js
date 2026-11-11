function KI() {
  let [e, t] = (0, v.useState)(nA),
    [n, r] = (0, v.useState)(!1),
    [i, a] = (0, v.useState)(!1),
    o = (0, v.useRef)(!1)
  ;(GI(),
    (0, v.useEffect)(() => {
      let e = (e) => {
        ;((fD.pointer.x = (e.clientX / window.innerWidth) * 2 - 1),
          (fD.pointer.y = (e.clientY / window.innerHeight) * 2 - 1))
      }
      return (
        window.addEventListener(`pointermove`, e, { passive: !0 }),
        () => window.removeEventListener(`pointermove`, e)
      )
    }, []),
    (0, v.useEffect)(() => {
      !e || n || i ? _A() : vA()
    }, [e, n, i]),
    (0, v.useEffect)(() => {
      if (!e || o.current) return
      o.current = !0
      let t = window.setTimeout(() => qn.refresh(), 450)
      return () => window.clearTimeout(t)
    }, [e]))
  let s = (e) => {
      !e || e === `top` || e === `#top`
        ? hA(0, { duration: 1.4 })
        : e.startsWith(`#`) && gA(document.querySelector(e), { duration: 1.5 })
    },
    c = () => {
      ;(r(!1), a(!0))
    },
    l = (e) => {
      ;(r(!1),
        window.setTimeout(() => {
          ;(vA(), _D(e))
        }, 480))
    }
  return (0, K.jsxs)(`div`, {
    className: `relative min-h-screen bg-ink text-bone`,
    children: [
      !e && (0, K.jsx)(sr, { onDone: () => t(!0) }),
      (0, K.jsx)(`div`, { className: `grain`, 'aria-hidden': `true` }),
      (0, K.jsx)(`div`, { className: `vignette`, 'aria-hidden': `true` }),
      (0, K.jsx)(SI, {}),
      (0, K.jsx)(xr, { onMenu: () => r(!0), onBook: c, onNav: s }),
      (0, K.jsxs)(`main`, {
        children: [
          (0, K.jsx)(bA, { ready: e, onBook: c }),
          (0, K.jsx)($F, { onBook: c }),
          (0, K.jsx)(oI, {}),
          (0, K.jsx)(uI, {}),
          (0, K.jsx)(pI, {}),
          (0, K.jsx)(mI, { onBook: c }),
          (0, K.jsx)(gI, { onMenu: () => r(!0), onBook: c, onPickDish: l }),
          (0, K.jsx)(_I, {}),
          (0, K.jsx)(yI, { onBook: c }),
        ],
      }),
      (0, K.jsx)(xI, { onMenu: () => r(!0), onBook: c }),
      (0, K.jsx)(TI, { open: n, onClose: () => r(!1), onBook: c, onPickDish: l }),
      (0, K.jsx)(OI, { open: i, onClose: () => a(!1) }),
    ],
  })
}
y.createRoot(document.getElementById(`root`)).render(
  (0, K.jsx)(v.StrictMode, { children: (0, K.jsx)(KI, {}) }),
)
