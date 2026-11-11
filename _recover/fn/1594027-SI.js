function SI() {
  let e = (0, v.useRef)(null),
    t = (0, v.useRef)(null),
    n = (0, v.useRef)(null)
  return (
    (0, v.useEffect)(() => {
      if (typeof window > `u` || !window.matchMedia(`(pointer: fine)`).matches) return
      let r = e.current,
        i = t.current,
        a = n.current,
        o = window.innerWidth / 2,
        s = window.innerHeight / 2,
        c = o,
        l = s,
        u = 0,
        d = !1,
        f = ``,
        p = (e) => {
          ;((o = e.clientX),
            (s = e.clientY),
            (r.style.transform = `translate3d(${o}px, ${s}px, 0)`))
        },
        m = () => {
          ;((c += (o - c) * 0.13),
            (l += (s - l) * 0.13),
            (i.style.transform = `translate3d(${c}px, ${l}px, 0)`),
            f && (a.style.transform = `translate3d(${c}px, ${l}px, 0) translate(-50%, -50%)`),
            (u = requestAnimationFrame(m)))
        },
        h = (e) => {
          let t = e.target.closest?.(`a, button, [data-cursor]`),
            n = !!t,
            r = t?.getAttribute(`data-cursor-label`) || ``,
            o = t?.getAttribute(`data-cursor`) === `view`
          ;(n !== d || r !== f) &&
            ((d = n),
            (f = r),
            i.classList.toggle(`is-hover`, n && !o),
            i.classList.toggle(`is-view`, o),
            (a.textContent = r),
            (a.style.opacity = r ? `1` : `0`))
        },
        g = () => {
          a.style.opacity = `0`
        }
      return (
        window.addEventListener(`pointermove`, p, { passive: !0 }),
        window.addEventListener(`pointerover`, h, { passive: !0 }),
        document.addEventListener(`pointerleave`, g),
        (u = requestAnimationFrame(m)),
        () => {
          ;(cancelAnimationFrame(u),
            window.removeEventListener(`pointermove`, p),
            window.removeEventListener(`pointerover`, h),
            document.removeEventListener(`pointerleave`, g))
        }
      )
    }, []),
    (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsx)(`div`, { ref: e, className: `cursor-dot` }),
        (0, K.jsx)(`div`, { ref: t, className: `cursor-ring` }),
        (0, K.jsx)(`div`, { ref: n, className: `cursor-label`, style: { opacity: 0 } }),
      ],
    })
  )
}
var CI = {
    'Signature Chai': `dish-01`,
    'KitKat Shake': `dish-02`,
    'Classic Vada Pav': `dish-03`,
    'Paneer Tandoori Sandwich': `dish-04`,
    'Masala Maggi': `dish-05`,
    'White Sauce Pasta': `dish-06`,
    'Stuffed Paratha': `dish-07`,
    'Papadi Chaat': `dish-08`,
  },
  wI = {
    'Signature Chai': 0,
    'KitKat Shake': 1,
    'Classic Vada Pav': 2,
    'Paneer Tandoori Sandwich': 3,
    'Masala Maggi': 4,
    'White Sauce Pasta': 5,
    'Stuffed Paratha': 6,
    'Papadi Chaat': 7,
  }
