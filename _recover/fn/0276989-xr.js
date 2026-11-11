function xr({ onMenu: e, onBook: t, onNav: n }) {
  let [r, i] = (0, v.useState)(!1),
    [a, o] = (0, v.useState)(``)
  ;((0, v.useEffect)(() => {
    let e = () => i(window.scrollY > 40)
    return (
      e(),
      window.addEventListener(`scroll`, e, { passive: !0 }),
      () => window.removeEventListener(`scroll`, e)
    )
  }, []),
    (0, v.useEffect)(() => {
      let e = () => {
        try {
          o(
            new Intl.DateTimeFormat(`en-GB`, {
              hour: `2-digit`,
              minute: `2-digit`,
              hour12: !1,
              timeZone: `Asia/Kolkata`,
            }).format(new Date()),
          )
        } catch {
          o(``)
        }
      }
      e()
      let t = setInterval(e, 3e4)
      return () => clearInterval(t)
    }, []))
  let s = (t) => (r) => {
    ;(r.preventDefault(), t.action === `menu` ? e?.() : n?.(t.href))
  }
  return (0, K.jsxs)(`header`, {
    className: `fixed inset-x-0 top-0 z-[60] transition-all duration-700 ease-silk ${r ? `bg-ink/55 backdrop-blur-xl` : `bg-transparent`}`,
    children: [
      (0, K.jsxs)(`div`, {
        className: `shell flex items-center justify-between transition-all duration-700 ease-silk ${r ? `py-3.5` : `py-5 md:py-6`}`,
        children: [
          (0, K.jsx)(or, { compact: r, onClick: () => n?.(`top`) }),
          (0, K.jsx)(`nav`, {
            className: `absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex`,
            children: yr.map((e) =>
              (0, K.jsxs)(
                `a`,
                {
                  href: e.href,
                  onClick: s(e),
                  className: `group relative flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-bone/55 transition-colors duration-500 hover:text-bone`,
                  children: [
                    (0, K.jsx)(`span`, {
                      className: `h-1 w-1 rounded-full bg-ice/0 transition-all duration-500 group-hover:bg-ice/80`,
                    }),
                    e.label,
                  ],
                },
                e.label,
              ),
            ),
          }),
          (0, K.jsxs)(`div`, {
            className: `flex items-center gap-3 md:gap-6`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `hidden items-center gap-2 md:flex`,
                children: [
                  (0, K.jsx)(`span`, {
                    className: `h-1 w-1 animate-pulse rounded-full bg-ice/70`,
                  }),
                  (0, K.jsxs)(`span`, {
                    className: `text-[8px] uppercase tracking-[0.24em] text-bone/40`,
                    children: [a, ` IST · Open`],
                  }),
                ],
              }),
              (0, K.jsx)(`div`, {
                className: `hidden sm:block`,
                children: (0, K.jsx)(`button`, {
                  type: `button`,
                  onClick: t,
                  className: `btn btn-ghost h-10 px-5`,
                  children: `Book a table`,
                }),
              }),
              (0, K.jsx)(`button`, {
                type: `button`,
                onClick: e,
                'aria-label': `Open menu`,
                className: `flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-bone/50 hover:text-bone lg:hidden`,
                children: (0, K.jsx)(dr, { size: 18 }),
              }),
            ],
          }),
        ],
      }),
      (0, K.jsx)(`div`, {
        className: `hairline transition-opacity duration-700 ${r ? `opacity-100` : `opacity-0`}`,
      }),
    ],
  })
}
var Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Mr = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Nr = `attached`,
  Pr = `detached`,
  Fr = 1e3,
  Ir = 1001,
  Lr = 1002,
  Rr = 1003,
  zr = 1004,
  Br = 1004,
  Vr = 1005,
  Hr = 1005,
  Ur = 1006,
  Wr = 1007,
  Gr = 1007,
  Kr = 1008,
  qr = 1008,
  Jr = 1009,
  Yr = 1010,
  Xr = 1011,
  Zr = 1012,
  Qr = 1013,
  $r = 1014,
  ei = 1015,
  ti = 1016,
  ni = 1017,
  ri = 1018,
  ii = 1020,
  ai = 35902,
  oi = 35899,
  si = 1021,
  ci = 1022,
  li = 1023,
  ui = 1026,
  di = 1027,
  fi = 1028,
  pi = 1029,
  mi = 1030,
  hi = 1031,
  gi = 1032,
  _i = 1033,
  vi = 33776,
  yi = 33777,
  bi = 33778,
  xi = 33779,
  Si = 35840,
  Ci = 35841,
  wi = 35842,
  Ti = 35843,
  Ei = 36196,
  Di = 37492,
  Oi = 37496,
  ki = 37488,
  Ai = 37489,
  ji = 37490,
  Mi = 37491,
  Ni = 37808,
  Pi = 37809,
  Fi = 37810,
  Ii = 37811,
  Li = 37812,
  Ri = 37813,
  zi = 37814,
  Bi = 37815,
  Vi = 37816,
  Hi = 37817,
  Ui = 37818,
  Wi = 37819,
  Gi = 37820,
  Ki = 37821,
  qi = 36492,
  Ji = 36494,
  Yi = 36495,
  Xi = 36283,
  Zi = 36284,
  Qi = 36285,
  $i = 36286,
  ea = 2200,
  ta = 2201,
  na = 2202,
  ra = 2300,
  ia = 2301,
  aa = 2302,
  oa = 2303,
  sa = 2400,
  ca = 2401,
  la = 2402,
  ua = 2500,
  da = 2501,
  fa = 3200,
  pa = 3201,
  ma = 3202,
  ha = 3203,
  ga = `srgb`,
  _a = `srgb-linear`,
  va = `linear`,
  ya = `srgb`,
  ba = 7680,
  xa = 7681,
  Sa = 7682,
  Ca = 7683,
  wa = 34055,
  Ta = 34056,
  Ea = 5386,
  Da = 35044,
  Oa = 35048,
  ka = 35040,
  Aa = 35045,
  ja = 35049,
  Ma = 35041,
  Na = 35046,
  Pa = 35050,
  Fa = 35042,
  Ia = `300 es`,
  La = 2e3,
  Ra = 2001,
  za = { COMPUTE: `compute`, RENDER: `render` },
  Ba = { PERSPECTIVE: `perspective`, LINEAR: `linear`, FLAT: `flat` },
  Va = {
    NORMAL: `normal`,
    CENTROID: `centroid`,
    SAMPLE: `sample`,
    FIRST: `first`,
    EITHER: `either`,
  },
  Ha = { TEXTURE_COMPARE: `depthTextureCompare` },
  Ua = { NONE: 0, SHARED: 1, FULL: 2 }
