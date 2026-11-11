function VI(e, t) {
  return e === 1 ? zI : e === 2 ? t : 1
}
var HI = class {
    constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      ;(Q(this, `touchStart`, { x: 0, y: 0 }),
        Q(this, `lastDelta`, { x: 0, y: 0 }),
        Q(this, `window`, { width: 0, height: 0 }),
        Q(this, `emitter`, new RI()),
        Q(this, `onTouchStart`, (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e
          ;((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }))
        }),
        Q(this, `onTouchMove`, (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier
          ;((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }))
        }),
        Q(this, `onTouchEnd`, (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          })
        }),
        Q(this, `onWheel`, (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = VI(r, this.window.width),
            a = VI(r, this.window.height)
          ;((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }))
        }),
        Q(this, `onWindowResize`, () => {
          this.window = { width: window.innerWidth, height: window.innerHeight }
        }),
        (this.element = e),
        (this.options = t),
        window.addEventListener(`resize`, this.onWindowResize),
        this.onWindowResize(),
        this.element.addEventListener(`wheel`, this.onWheel, BI),
        this.element.addEventListener(`touchstart`, this.onTouchStart, BI),
        this.element.addEventListener(`touchmove`, this.onTouchMove, BI),
        this.element.addEventListener(`touchend`, this.onTouchEnd, BI))
    }
    on(e, t) {
      return this.emitter.on(e, t)
    }
    destroy() {
      ;(this.emitter.destroy(),
        window.removeEventListener(`resize`, this.onWindowResize),
        this.element.removeEventListener(`wheel`, this.onWheel, BI),
        this.element.removeEventListener(`touchstart`, this.onTouchStart, BI),
        this.element.removeEventListener(`touchmove`, this.onTouchMove, BI),
        this.element.removeEventListener(`touchend`, this.onTouchEnd, BI))
    }
  },
  UI = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
  WI = class {
    constructor({
      wrapper: e = window,
      content: t = document.documentElement,
      eventsTarget: n = e,
      smoothWheel: r = !0,
      syncTouch: i = !1,
      syncTouchLerp: a = 0.075,
      touchInertiaExponent: o = 1.7,
      duration: s,
      easing: c,
      lerp: l = 0.1,
      infinite: u = !1,
      orientation: d = `vertical`,
      gestureOrientation: f = d === `horizontal` ? `both` : `vertical`,
      touchMultiplier: p = 1,
      wheelMultiplier: m = 1,
      autoResize: h = !0,
      prevent: g,
      virtualScroll: _,
      overscroll: v = !0,
      autoRaf: y = !1,
      anchors: b = !1,
      autoToggle: x = !1,
      allowNestedScroll: S = !1,
      __experimental__naiveDimensions: C = !1,
      naiveDimensions: w = C,
      stopInertiaOnNavigate: T = !1,
      respectReducedMotion: E = !0,
    } = {}) {
      ;(Q(this, `_isScrolling`, !1),
        Q(this, `_isStopped`, !1),
        Q(this, `_isLocked`, !1),
        Q(this, `_preventNextNativeScrollEvent`, !1),
        Q(this, `_resetVelocityTimeout`, null),
        Q(this, `_rafId`, null),
        Q(this, `_isDraggingSelection`, !1),
        Q(
          this,
          `reducedMotionMediaQuery`,
          window.matchMedia(`(prefers-reduced-motion: reduce)`),
        ),
        Q(this, `isTouching`, void 0),
        Q(this, `isIos`, void 0),
        Q(this, `time`, 0),
        Q(this, `userData`, {}),
        Q(this, `lastVelocity`, 0),
        Q(this, `velocity`, 0),
        Q(this, `direction`, 0),
        Q(this, `options`, void 0),
        Q(this, `targetScroll`, void 0),
        Q(this, `animatedScroll`, void 0),
        Q(this, `animate`, new FI()),
        Q(this, `emitter`, new RI()),
        Q(this, `dimensions`, void 0),
        Q(this, `virtualScroll`, void 0),
        Q(this, `onScrollEnd`, (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation())
        }),
        Q(this, `dispatchScrollendEvent`, () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            }),
          )
        }),
        Q(this, `onTransitionEnd`, (e) => {
          e.propertyName?.includes(`overflow`) &&
            e.target === this.rootElement &&
            this.checkOverflow()
        }),
        Q(this, `onClick`, (e) => {
          let t = e
              .composedPath()
              .filter((e) => e instanceof HTMLAnchorElement && e.href)
              .map((e) => new URL(e.href)),
            n = new URL(window.location.href)
          if (this.options.anchors) {
            let e = t.find((e) => n.host === e.host && n.pathname === e.pathname && e.hash)
            if (e) {
              let t =
                  typeof this.options.anchors == `object` && this.options.anchors
                    ? this.options.anchors
                    : void 0,
                n = decodeURIComponent(e.hash)
              this.scrollTo(n, t)
              return
            }
          }
          this.options.stopInertiaOnNavigate &&
            t.some((e) => n.host === e.host && n.pathname !== e.pathname) &&
            this.reset()
        }),
        Q(this, `onPointerDown`, (e) => {
          e.button === 1 && this.reset()
        }),
        Q(this, `onVirtualScroll`, (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return
          let { deltaX: t, deltaY: n, event: r } = e
          if (
            (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return
          let i = r.type.includes(`touch`),
            a = r.type.includes(`wheel`)
          if (
            i &&
            this.isIos &&
            (r.type === `touchstart` &&
              (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)),
            this._isDraggingSelection)
          ) {
            r.type === `touchend` && (this._isDraggingSelection = !1)
            return
          }
          this.isTouching = r.type === `touchstart` || r.type === `touchmove`
          let o = t === 0 && n === 0
          if (
            this.options.syncTouch &&
            i &&
            r.type === `touchstart` &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset()
            return
          }
          let s =
            (this.options.gestureOrientation === `vertical` && n === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0)
          if (o || s) return
          let c = r.composedPath()
          c = c.slice(0, c.indexOf(this.rootElement))
          let l = this.options.prevent,
            u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`
          if (
            c.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof l == `function` && l?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (u === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
                  (u === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
                  (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.hasNestedScroll(e, { deltaX: t, deltaY: n }))),
            )
          )
            return
          if (this.isStopped || this.isLocked) {
            r.cancelable && r.preventDefault()
            return
          }
          if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
            ;((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0))
            return
          }
          let d = n
          ;(this.options.gestureOrientation === `both`
            ? (d = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === `horizontal` && (d = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault())
          let f = i && this.options.syncTouch,
            p = i && r.type === `touchend`
          ;(p &&
            (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + d, {
              programmatic: !1,
              ...(f
                ? { lerp: p ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }))
        }),
        Q(this, `onNativeScroll`, () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          )
            this._preventNextNativeScrollEvent = !1
          else if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll
            ;((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ;((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit())
                }, 400)))
          }
        }),
        Q(this, `raf`, (e) => {
          let t = e - (this.time || e)
          ;((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)))
        }),
        (window.lenisVersion = AI),
        window.lenis || (window.lenis = {}),
        (window.lenis.version = AI),
        d === `horizontal` && (window.lenis.horizontal = !0),
        i === !0 && (window.lenis.touch = !0),
        (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
        (e && e !== document.documentElement) || (e = window),
        typeof s == `number` && typeof c != `function`
          ? (c = UI)
          : typeof c == `function` && typeof s != `number` && (s = 1),
        (this.options = {
          wrapper: e,
          content: t,
          eventsTarget: n,
          smoothWheel: r,
          syncTouch: i,
          syncTouchLerp: a,
          touchInertiaExponent: o,
          duration: s,
          easing: c,
          lerp: l,
          infinite: u,
          gestureOrientation: f,
          orientation: d,
          touchMultiplier: p,
          wheelMultiplier: m,
          autoResize: h,
          prevent: g,
          virtualScroll: _,
          overscroll: v,
          autoRaf: y,
          anchors: b,
          autoToggle: x,
          allowNestedScroll: S,
          naiveDimensions: w,
          stopInertiaOnNavigate: T,
          respectReducedMotion: E,
        }),
        (this.dimensions = new LI(e, t, { autoResize: h })),
        this.updateClassName(),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.addEventListener(`click`, this.onClick),
        this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
        (this.virtualScroll = new HI(n, { touchMultiplier: p, wheelMultiplier: m })),
        this.virtualScroll.on(`scroll`, this.onVirtualScroll),
        this.options.autoToggle &&
          (this.checkOverflow(),
          this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
        this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)))
    }
    destroy() {
      ;(this.emitter.destroy(),
        this._resetVelocityTimeout !== null &&
          (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
        this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
          capture: !0,
        }),
        this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.removeEventListener(`click`, this.onClick),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this._rafId && cancelAnimationFrame(this._rafId))
    }
    on(e, t) {
      return this.emitter.on(e, t)
    }
    off(e, t) {
      return this.emitter.off(e, t)
    }
    get overflow() {
      let e = this.isHorizontal ? `overflow-x` : `overflow-y`
      return getComputedStyle(this.rootElement)[e]
    }
    checkOverflow() {
      ;[`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart()
    }
    setScroll(e) {
      this.isHorizontal
        ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
        : this.options.wrapper.scrollTo({ top: e, behavior: `instant` })
    }
    isTouchOnSelectionHandle(e) {
      let t = window.getSelection()
      if (!t || t.isCollapsed || t.rangeCount === 0) return !1
      let n = e.targetTouches[0] ?? e.changedTouches[0]
      if (!n) return !1
      let r = t.getRangeAt(0).getClientRects()
      if (r.length === 0) return !1
      let i = r[0],
        a = r[r.length - 1],
        o = Math.hypot(n.clientX - i.left, n.clientY - i.top) <= 40,
        s = Math.hypot(n.clientX - a.right, n.clientY - a.bottom) <= 40
      return o || s
    }
    resize() {
      ;(this.dimensions.resize(),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        this.emit())
    }
    emit() {
      this.emitter.emit(`scroll`, this)
    }
    reset() {
      ;((this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop())
    }
    start() {
      this.isStopped &&
        (this.options.autoToggle
          ? this.rootElement.style.removeProperty(`overflow`)
          : this.internalStart())
    }
    internalStart() {
      this.isStopped && (this.reset(), (this.isStopped = !1), this.emit())
    }
    stop() {
      this.isStopped ||
        (this.options.autoToggle
          ? this.rootElement.style.setProperty(`overflow`, `clip`)
          : this.internalStop())
    }
    internalStop() {
      this.isStopped || (this.reset(), (this.isStopped = !0), this.emit())
    }
    scrollTo(
      e,
      {
        offset: t = 0,
        immediate: n = !1,
        lock: r = !1,
        programmatic: i = !0,
        lerp: a = i ? this.options.lerp : void 0,
        duration: o = i ? this.options.duration : void 0,
        easing: s = i ? this.options.easing : void 0,
        onStart: c,
        onComplete: l,
        force: u = !1,
        userData: d,
      } = {},
    ) {
      if (
        (this.prefersReducedMotion && (i ? (n = !0) : ((a = 1), (o = void 0), (s = void 0))),
        (this.isStopped || this.isLocked) && !u)
      )
        return
      let f = e,
        p = t
      if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f)) f = 0
      else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f)) f = this.limit
      else {
        let e = null
        if (
          (typeof f == `string`
            ? ((e = f.startsWith(`#`)
                ? document.getElementById(f.slice(1))
                : document.querySelector(f)),
              e || (f === `#top` ? (f = 0) : console.warn(`Lenis: Target not found`, f)))
            : f instanceof Element && (e = f),
          e)
        ) {
          if (this.options.wrapper !== window) {
            let e = this.rootElement.getBoundingClientRect()
            p -= this.isHorizontal ? e.left : e.top
          }
          let t = e.getBoundingClientRect(),
            n = getComputedStyle(e),
            r = this.isHorizontal
              ? Number.parseFloat(n.scrollMarginLeft)
              : Number.parseFloat(n.scrollMarginTop),
            i = getComputedStyle(this.rootElement),
            a = this.isHorizontal
              ? Number.parseFloat(i.scrollPaddingLeft)
              : Number.parseFloat(i.scrollPaddingTop)
          f =
            (this.isHorizontal ? t.left : t.top) +
            this.animatedScroll -
            (Number.isNaN(r) ? 0 : r) -
            (Number.isNaN(a) ? 0 : a)
        }
      }
      if (typeof f == `number`) {
        if (((f += p), this.options.infinite)) {
          if (i) {
            this.targetScroll = this.animatedScroll = this.scroll
            let e = f - this.animatedScroll
            e > this.limit / 2 ? (f -= this.limit) : e < -this.limit / 2 && (f += this.limit)
          }
        } else f = jI(0, f, this.limit)
        f === this.targetScroll
          ? (c?.(this), l?.(this))
          : ((this.userData = d ?? {}),
            n
              ? ((this.animatedScroll = this.targetScroll = f),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent()
                }))
              : (i || (this.targetScroll = f),
                typeof o == `number` && typeof s != `function`
                  ? (s = UI)
                  : typeof s == `function` && typeof o != `number` && (o = 1),
                this.animate.fromTo(this.animatedScroll, f, {
                  duration: o,
                  easing: s,
                  lerp: a,
                  onStart: () => {
                    ;(r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this))
                  },
                  onUpdate: (e, t) => {
                    ;((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      i && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        l?.(this),
                        (this.userData = {}),
                        requestAnimationFrame(() => {
                          this.dispatchScrollendEvent()
                        }),
                        this.preventNextNativeScrollEvent()))
                  },
                })))
      }
    }
    preventNextNativeScrollEvent() {
      ;((this._preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          this._preventNextNativeScrollEvent = !1
        }))
    }
    hasNestedScroll(e, { deltaX: t, deltaY: n }) {
      let r = Date.now()
      e._lenis || (e._lenis = {})
      let i = e._lenis,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m
      if (r - (i.time ?? 0) > 2e3) {
        i.time = Date.now()
        let t = window.getComputedStyle(e)
        if (
          ((i.computedStyle = t),
          (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
          (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
          (l = [`auto`].includes(t.overscrollBehaviorX)),
          (u = [`auto`].includes(t.overscrollBehaviorY)),
          (i.hasOverflowX = a),
          (i.hasOverflowY = o),
          !(a || o))
        )
          return !1
        ;((d = e.scrollWidth),
          (f = e.scrollHeight),
          (p = e.clientWidth),
          (m = e.clientHeight),
          (s = d > p),
          (c = f > m),
          (i.isScrollableX = s),
          (i.isScrollableY = c),
          (i.scrollWidth = d),
          (i.scrollHeight = f),
          (i.clientWidth = p),
          (i.clientHeight = m),
          (i.hasOverscrollBehaviorX = l),
          (i.hasOverscrollBehaviorY = u))
      } else
        ((s = i.isScrollableX),
          (c = i.isScrollableY),
          (a = i.hasOverflowX),
          (o = i.hasOverflowY),
          (d = i.scrollWidth),
          (f = i.scrollHeight),
          (p = i.clientWidth),
          (m = i.clientHeight),
          (l = i.hasOverscrollBehaviorX),
          (u = i.hasOverscrollBehaviorY))
      if (!((a && s) || (o && c))) return !1
      let h = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
        g,
        _,
        v,
        y,
        b,
        x
      if (h === `horizontal`)
        ((g = Math.round(e.scrollLeft)), (_ = d - p), (v = t), (y = a), (b = s), (x = l))
      else if (h === `vertical`)
        ((g = Math.round(e.scrollTop)), (_ = f - m), (v = n), (y = o), (b = c), (x = u))
      else return !1
      return (!x && (g >= _ || g <= 0)) || ((v > 0 ? g < _ : g > 0) && y && b)
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
      return this.options.naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? `x` : `y`]
    }
    get isHorizontal() {
      return this.options.orientation === `horizontal`
    }
    get actualScroll() {
      let e = this.options.wrapper
      return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop)
    }
    get scroll() {
      return this.options.infinite ? PI(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
      return this._isScrolling
    }
    set isScrolling(e) {
      this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName())
    }
    get isStopped() {
      return this._isStopped
    }
    set isStopped(e) {
      this._isStopped !== e && ((this._isStopped = e), this.updateClassName())
    }
    get isLocked() {
      return this._isLocked
    }
    set isLocked(e) {
      this._isLocked !== e && ((this._isLocked = e), this.updateClassName())
    }
    get isSmooth() {
      return this.isScrolling === `smooth`
    }
    get prefersReducedMotion() {
      return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches
    }
    get className() {
      let e = `lenis`
      return (
        this.options.autoToggle && (e += ` lenis-autoToggle`),
        this.isStopped && (e += ` lenis-stopped`),
        this.isLocked && (e += ` lenis-locked`),
        this.isScrolling && (e += ` lenis-scrolling`),
        this.isScrolling === `smooth` && (e += ` lenis-smooth`),
        e
      )
    }
    updateClassName() {
      ;(this.cleanUpClassName(),
        this.className.split(` `).forEach((e) => {
          this.rootElement.classList.add(e)
        }))
    }
    cleanUpClassName() {
      for (let e of Array.from(this.rootElement.classList))
        (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e)
    }
  }
OF.registerPlugin(qn)
