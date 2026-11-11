function wc() {
  let e = new ArrayBuffer(4),
    t = new Float32Array(e),
    n = new Uint32Array(e),
    r = new Uint32Array(512),
    i = new Uint32Array(512)
  for (let e = 0; e < 256; ++e) {
    let t = e - 127
    t < -27
      ? ((r[e] = 0), (r[e | 256] = 32768), (i[e] = 24), (i[e | 256] = 24))
      : t < -14
        ? ((r[e] = 1024 >> (-t - 14)),
          (r[e | 256] = (1024 >> (-t - 14)) | 32768),
          (i[e] = -t - 1),
          (i[e | 256] = -t - 1))
        : t <= 15
          ? ((r[e] = (t + 15) << 10),
            (r[e | 256] = ((t + 15) << 10) | 32768),
            (i[e] = 13),
            (i[e | 256] = 13))
          : t < 128
            ? ((r[e] = 31744), (r[e | 256] = 64512), (i[e] = 24), (i[e | 256] = 24))
            : ((r[e] = 31744), (r[e | 256] = 64512), (i[e] = 13), (i[e | 256] = 13))
  }
  let a = new Uint32Array(2048),
    o = new Uint32Array(64),
    s = new Uint32Array(64)
  for (let e = 1; e < 1024; ++e) {
    let t = e << 13,
      n = 0
    for (; !(t & 8388608);) ((t <<= 1), (n -= 8388608))
    ;((t &= -8388609), (n += 947912704), (a[e] = t | n))
  }
  for (let e = 1024; e < 2048; ++e) a[e] = 939524096 + ((e - 1024) << 13)
  for (let e = 1; e < 31; ++e) o[e] = e << 23
  ;((o[31] = 1199570944), (o[32] = 2147483648))
  for (let e = 33; e < 63; ++e) o[e] = 2147483648 + ((e - 32) << 23)
  o[63] = 3347054592
  for (let e = 1; e < 64; ++e) e !== 32 && (s[e] = 1024)
  return {
    floatView: t,
    uint32View: n,
    baseTable: r,
    shiftTable: i,
    mantissaTable: a,
    exponentTable: o,
    offsetTable: s,
  }
}
