function r(e, n) {
  if (t[n] !== void 0) return t[n]
  let r = e.interleavedBuffers[n],
    a = i(e, r.buffer),
    o = new $c(Ka(r.type, a), r.stride)
  return ((o.uuid = r.uuid), r.usage !== void 0 && o.setUsage(r.usage), (t[n] = o), o)
}
