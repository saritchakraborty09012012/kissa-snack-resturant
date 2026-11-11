function Vp(e) {
  return e != null &&
    typeof e != `boolean` &&
    (!0 === e.once || e.signal instanceof AbortSignal)
    ? { capture: e.capture, passive: e.passive }
    : e
}
