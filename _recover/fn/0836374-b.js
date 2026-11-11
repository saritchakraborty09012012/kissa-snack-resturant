function b(n, r, i, a) {
  h()
  let o = a.attributes,
    s = i.getAttributes(),
    c = r.defaultAttributeValues
  for (let r in s) {
    let i = s[r]
    if (i.location >= 0) {
      let s = o[r]
      if (
        (s === void 0 &&
          (r === `instanceMatrix` && n.instanceMatrix && (s = n.instanceMatrix),
          r === `instanceColor` && n.instanceColor && (s = n.instanceColor)),
        s !== void 0)
      ) {
        let r = s.normalized,
          o = s.itemSize,
          c = t.get(s)
        if (c === void 0) continue
        let l = c.buffer,
          u = c.type,
          d = c.bytesPerElement,
          f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013
        if (s.isInterleavedBufferAttribute) {
          let t = s.data,
            c = t.isInterleavedBuffer === !0 ? t.stride : t.itemSize,
            p = s.offset
          if (t.isInstancedInterleavedBuffer || t.isInstancedBufferAttribute) {
            for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute)
            n.isInstancedMesh !== !0 &&
              a._maxInstanceCount === void 0 &&
              (a._maxInstanceCount = t.meshPerAttribute * t.count)
          } else for (let e = 0; e < i.locationSize; e++) g(i.location + e)
          e.bindBuffer(e.ARRAY_BUFFER, l)
          for (let e = 0; e < i.locationSize; e++)
            y(
              i.location + e,
              o / i.locationSize,
              u,
              r,
              c * d,
              (p + (o / i.locationSize) * e) * d,
              f,
            )
        } else {
          if (s.isInstancedBufferAttribute) {
            for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute)
            n.isInstancedMesh !== !0 &&
              a._maxInstanceCount === void 0 &&
              (a._maxInstanceCount = s.meshPerAttribute * s.count)
          } else for (let e = 0; e < i.locationSize; e++) g(i.location + e)
          e.bindBuffer(e.ARRAY_BUFFER, l)
          for (let e = 0; e < i.locationSize; e++)
            y(i.location + e, o / i.locationSize, u, r, o * d, (o / i.locationSize) * e * d, f)
        }
      } else if (c !== void 0) {
        let t = c[r]
        if (t !== void 0)
          switch (t.length) {
            case 2:
              e.vertexAttrib2fv(i.location, t)
              break
            case 3:
              e.vertexAttrib3fv(i.location, t)
              break
            case 4:
              e.vertexAttrib4fv(i.location, t)
              break
            default:
              e.vertexAttrib1fv(i.location, t)
          }
      }
    }
  }
  v()
}
