function II(e, t) {
  let n
  return function (...r) {
    ;(clearTimeout(n),
      (n = setTimeout(() => {
        ;((n = void 0), e.apply(this, r))
      }, t)))
  }
}
var LI = class {
    constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
      ;(Q(this, `width`, 0),
        Q(this, `height`, 0),
        Q(this, `scrollHeight`, 0),
        Q(this, `scrollWidth`, 0),
        Q(this, `debouncedResize`, void 0),
        Q(this, `wrapperResizeObserver`, void 0),
        Q(this, `contentResizeObserver`, void 0),
        Q(this, `resize`, () => {
          ;(this.onWrapperResize(), this.onContentResize())
        }),
        Q(this, `onWrapperResize`, () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight))
        }),
        Q(this, `onContentResize`, () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth))
        }),
        (this.wrapper = e),
        (this.content = t),
        n &&
          ((this.debouncedResize = II(this.resize, r)),
          this.wrapper instanceof Window
            ? window.addEventListener(`resize`, this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
          this.contentResizeObserver.observe(this.content)),
        this.resize())
    }
    destroy() {
      ;(this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener(`resize`, this.debouncedResize))
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height }
    }
  },
  RI = class {
    constructor() {
      Q(this, `events`, {})
    }
    emit(e, ...t) {
      let n = this.events[e] || []
      for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t)
    }
    on(e, t) {
      return (
        this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
        () => {
          this.events[e] = this.events[e]?.filter((e) => t !== e)
        }
      )
    }
    off(e, t) {
      this.events[e] = this.events[e]?.filter((e) => t !== e)
    }
    destroy() {
      this.events = {}
    }
  },
  zI = 100 / 6,
  BI = { passive: !1 }
