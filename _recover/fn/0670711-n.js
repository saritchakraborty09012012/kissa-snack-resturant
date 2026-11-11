function n(t, n) {
  let r = t.array,
    i = t.usage,
    a = r.byteLength,
    o = e.createBuffer()
  ;(e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback())
  let s
  if (r instanceof Float32Array) s = e.FLOAT
  else if (typeof Float16Array < `u` && r instanceof Float16Array) s = e.HALF_FLOAT
  else if (r instanceof Uint16Array)
    s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT
  else if (r instanceof Int16Array) s = e.SHORT
  else if (r instanceof Uint32Array) s = e.UNSIGNED_INT
  else if (r instanceof Int32Array) s = e.INT
  else if (r instanceof Int8Array) s = e.BYTE
  else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE
  else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE
  else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: ` + r)
  return {
    buffer: o,
    type: s,
    bytesPerElement: r.BYTES_PER_ELEMENT,
    version: t.version,
    size: a,
  }
}
