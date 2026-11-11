function d(e, t, n) {
  typeof e == `number` || typeof e == `boolean`
    ? (t[n] = e)
    : e.isMatrix3
      ? ((t[n] = e.elements[0]),
        (t[n + 1] = e.elements[1]),
        (t[n + 2] = e.elements[2]),
        (t[n + 3] = 0),
        (t[n + 4] = e.elements[3]),
        (t[n + 5] = e.elements[4]),
        (t[n + 6] = e.elements[5]),
        (t[n + 7] = 0),
        (t[n + 8] = e.elements[6]),
        (t[n + 9] = e.elements[7]),
        (t[n + 10] = e.elements[8]),
        (t[n + 11] = 0))
      : ArrayBuffer.isView(e)
        ? t.set(e.subarray(0, t.length - n), n)
        : e.toArray(t, n)
}
