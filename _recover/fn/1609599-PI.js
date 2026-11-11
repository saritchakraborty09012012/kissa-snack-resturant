function PI(e, t) {
  return ((e % t) + t) % t
}
var FI = class {
  constructor() {
    ;(Q(this, `isRunning`, !1),
      Q(this, `value`, 0),
      Q(this, `from`, 0),
      Q(this, `to`, 0),
      Q(this, `currentTime`, 0),
      Q(this, `lerp`, void 0),
      Q(this, `duration`, void 0),
      Q(this, `easing`, void 0),
      Q(this, `onUpdate`, void 0))
  }
  advance(e) {
    if (!this.isRunning) return
    let t = !1
    if (this.duration && this.easing) {
      this.currentTime += e
      let n = jI(0, this.currentTime / this.duration, 1)
      t = n >= 1
      let r = t ? 1 : this.easing(n)
      this.value = this.from + (this.to - this.from) * r
    } else
      this.lerp
        ? ((this.value = NI(this.value, this.to, this.lerp * 60, e)),
          Math.round(this.value) === Math.round(this.to) && ((this.value = this.to), (t = !0)))
        : ((this.value = this.to), (t = !0))
    ;(t && this.stop(), this.onUpdate?.(this.value, t))
  }
  stop() {
    this.isRunning = !1
  }
  fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
    ;((this.from = this.value = e),
      (this.to = t),
      (this.lerp = n),
      (this.duration = r),
      (this.easing = i),
      (this.currentTime = 0),
      (this.isRunning = !0),
      a?.(),
      (this.onUpdate = o))
  }
}
