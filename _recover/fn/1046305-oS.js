function oS({ store: e, configuration: t }, n, r) {
  let {
      gl: i,
      scene: a,
      camera: o,
      shadows: s = !1,
      linear: c = !1,
      flat: l = !1,
      legacy: u = !1,
      frameloop: d = `always`,
      dpr: f = [1, 2],
      performance: p,
      onPointerMissed: m,
    } = r,
    h = aS(n, r.size),
    g = { ...r, shadows: s, linear: c, flat: l, legacy: u, frameloop: d, size: h },
    _ = e.getState(),
    v = _.gl,
    y = t.previous,
    b = (e) => !y || !ux.equ(g[e], y[e], iS)
  t.previous = void 0
  let x = _.raycaster
  if ((x || _.set({ raycaster: (x = new ig()) }), b(`raycaster`))) {
    let { params: e, ...t } = r.raycaster ?? {}
    Ex(x, { ...t, params: { ...x.params, ...e } })
  }
  if (!_.camera || (_.camera === t.camera && b(`camera`))) {
    t.camera = o
    let e = o?.isCamera,
      n = e ? o : r.orthographic ? new Um(0, 0, 0, 0, 0.1, 1e3) : new Rm(75, 0, 0.1, 1e3)
    ;(e ||
      ((n.position.z = 5),
      o &&
        (Ex(n, o),
        n.manual ||
          ((`aspect` in o || `left` in o || `right` in o || `bottom` in o || `top` in o) &&
            ((n.manual = !0), n.updateProjectionMatrix()))),
      !_.camera && !(o != null && o.rotation) && n.lookAt(0, 0, 0)),
      _.set({ camera: n }),
      (x.camera = n))
  }
  if (!_.scene) {
    let t
    ;(a != null && a.isScene
      ? ((t = a), hx(t, e, ``, {}))
      : ((t = new qs()), hx(t, e, ``, {}), a && Ex(t, a)),
      _.set({ scene: t }))
  }
  if (
    (r.events && !_.events.handlers && _.set({ events: r.events(e) }),
    b(`size`) && _.setSize(h.width, h.height, h.top, h.left),
    _.viewport.dpr !== sx(f) && _.setDpr(f),
    b(`frameloop`) && _.setFrameloop(d),
    b(`onPointerMissed`) && _.set({ onPointerMissed: m }),
    p && b(`performance`) && _.set((e) => ({ performance: { ...e.performance, ...p } })),
    !_.xr)
  ) {
    let t = (t, n) => {
        let r = e.getState()
        r.frameloop !== `never` && fC(t, !0, r, n)
      },
      n = () => {
        let n = e.getState()
        ;((n.gl.xr.enabled = n.gl.xr.isPresenting),
          n.gl.xr.setAnimationLoop(n.gl.xr.isPresenting ? t : null),
          n.gl.xr.isPresenting || dC(n))
      },
      r = {
        connect() {
          let t = e.getState().gl
          ;(t.xr.addEventListener(`sessionstart`, n), t.xr.addEventListener(`sessionend`, n))
        },
        disconnect() {
          let t = e.getState().gl
          ;(t.xr.removeEventListener(`sessionstart`, n),
            t.xr.removeEventListener(`sessionend`, n))
        },
      }
    ;(typeof v.xr?.addEventListener == `function` && r.connect(), _.set({ xr: r }))
  }
  if (v.shadowMap && b(`shadows`)) {
    let e = v.shadowMap.enabled,
      t = v.shadowMap.type
    if (((v.shadowMap.enabled = !!s), ux.boo(s))) v.shadowMap.type = 2
    else if (ux.str(s)) {
      let e = { basic: 0, percentage: 1, soft: 2, variance: 3 }
      v.shadowMap.type = e[s] ?? 2
    } else ux.obj(s) && Object.assign(v.shadowMap, s)
    ;(e !== v.shadowMap.enabled || t !== v.shadowMap.type) && (v.shadowMap.needsUpdate = !0)
  }
  let S = i && !ux.fun(i) && !zx(i) ? i : void 0
  ;(b(`legacy`) && ((Wo.enabled = !u), _.set({ legacy: u })),
    b(`linear`) &&
      (S?.outputColorSpace === void 0 && (v.outputColorSpace = c ? _a : ga),
      _.set({ linear: c })),
    b(`flat`) && (S?.toneMapping === void 0 && (v.toneMapping = l ? 0 : 4), _.set({ flat: l })),
    S && b(`gl`) && Ex(v, S),
    (t.previous = g))
}
