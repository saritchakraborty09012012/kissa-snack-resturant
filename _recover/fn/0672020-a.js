function a(n) {
  n.isInterleavedBufferAttribute && (n = n.data)
  let r = t.get(n)
  r && (e.deleteBuffer(r.buffer), t.delete(n))
}
