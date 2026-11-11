function i(e, t, n, r) {
  if (e.length) {
    let i = { stopped: !1 }
    for (let o of e) {
      let s = lx(o.object)
      if (
        (s ||
          o.object.traverseAncestors((e) => {
            let t = lx(e)
            if (t) return ((s = t), !1)
          }),
        s)
      ) {
        let { raycaster: c, pointer: l, camera: u, internal: d } = s,
          f = new Y(l.x, l.y, 0).unproject(u),
          p = (e) => d.capturedMap.get(e)?.has(o.eventObject) ?? !1,
          m = (e) => {
            let n = { intersection: o, target: t.target }
            ;(d.capturedMap.has(e)
              ? d.capturedMap.get(e).set(o.eventObject, n)
              : d.capturedMap.set(e, new Map([[o.eventObject, n]])),
              t.target.setPointerCapture(e))
          },
          h = (e) => {
            let t = d.capturedMap.get(e)
            t && jx(d.capturedMap, o.eventObject, t, e)
          },
          g = {}
        for (let e in t) {
          let n = t[e]
          typeof n != `function` && (g[e] = n)
        }
        let _ = {
          ...o,
          ...g,
          pointer: l,
          intersections: e,
          stopped: i.stopped,
          delta: n,
          unprojectedPoint: f,
          ray: c.ray,
          camera: u,
          stopPropagation() {
            let n = `pointerId` in t && d.capturedMap.get(t.pointerId)
            ;(!n || n.has(o.eventObject)) &&
              ((_.stopped = i.stopped = !0),
              d.hovered.size &&
                Array.from(d.hovered.values()).find((e) => e.eventObject === o.eventObject) &&
                a([...e.slice(0, e.indexOf(o)), o]))
          },
          target: { hasPointerCapture: p, setPointerCapture: m, releasePointerCapture: h },
          currentTarget: {
            hasPointerCapture: p,
            setPointerCapture: m,
            releasePointerCapture: h,
          },
          nativeEvent: t,
        }
        if ((r(_), i.stopped === !0)) break
      }
    }
  }
  return e
}
