function A(e, t, n) {
  let r,
    i,
    a,
    o = e.x - t.x,
    s = e.y - t.y,
    c = n.x - e.x,
    l = n.y - e.y,
    u = o * o + s * s,
    d = o * l - s * c
  if (Math.abs(d) > 2 ** -52) {
    let d = Math.sqrt(u),
      f = Math.sqrt(c * c + l * l),
      p = t.x - s / d,
      m = t.y + o / d,
      h = n.x - l / f,
      g = n.y + c / f,
      _ = ((h - p) * l - (g - m) * c) / (o * l - s * c)
    ;((r = p + o * _ - e.x), (i = m + s * _ - e.y))
    let v = r * r + i * i
    if (v <= 2) return new J(r, i)
    a = Math.sqrt(v / 2)
  } else {
    let e = !1
    ;(o > 2 ** -52
      ? c > 2 ** -52 && (e = !0)
      : o < -(2 ** -52)
        ? c < -(2 ** -52) && (e = !0)
        : Math.sign(s) === Math.sign(l) && (e = !0),
      e ? ((r = -s), (i = o), (a = Math.sqrt(u))) : ((r = o), (i = s), (a = Math.sqrt(u / 2))))
  }
  return new J(r / a, i / a)
}
let j = []
for (let e = 0, t = D.length, n = t - 1, r = e + 1; e < t; e++, n++, r++)
  (n === t && (n = 0), r === t && (r = 0), (j[e] = A(D[e], D[n], D[r])))
let M = [],
  N,
  P = j.concat()
for (let e = 0, t = E; e < t; e++) {
  let t = w[e]
  N = []
  for (let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++, r++, i++)
    (r === n && (r = 0), i === n && (i = 0), (N[e] = A(t[e], t[r], t[i])))
  ;(M.push(N), (P = P.concat(N)))
}
let F
if (p === 0) F = qf.triangulateShape(D, w)
else {
  let e = [],
    t = []
  for (let n = 0; n < p; n++) {
    let r = n / p,
      i = u * Math.cos((r * Math.PI) / 2),
      a = d * Math.sin((r * Math.PI) / 2) + f
    for (let t = 0, n = D.length; t < n; t++) {
      let n = O(D[t], j[t], a)
      ;(ie(n.x, n.y, -i), r === 0 && e.push(n))
    }
    for (let e = 0, n = E; e < n; e++) {
      let n = w[e]
      N = M[e]
      let o = []
      for (let e = 0, t = n.length; e < t; e++) {
        let t = O(n[e], N[e], a)
        ;(ie(t.x, t.y, -i), r === 0 && o.push(t))
      }
      r === 0 && t.push(o)
    }
  }
  F = qf.triangulateShape(e, t)
}
let ee = F.length,
  te = d + f
for (let e = 0; e < k; e++) {
  let t = l ? O(C[e], P[e], te) : C[e]
  _
    ? (b.copy(v.normals[0]).multiplyScalar(t.x),
      y.copy(v.binormals[0]).multiplyScalar(t.y),
      x.copy(g[0]).add(b).add(y),
      ie(x.x, x.y, x.z))
    : ie(t.x, t.y, 0)
}
for (let e = 1; e <= s; e++)
  for (let t = 0; t < k; t++) {
    let n = l ? O(C[t], P[t], te) : C[t]
    _
      ? (b.copy(v.normals[e]).multiplyScalar(n.x),
        y.copy(v.binormals[e]).multiplyScalar(n.y),
        x.copy(g[e]).add(b).add(y),
        ie(x.x, x.y, x.z))
      : ie(n.x, n.y, (c / s) * e)
  }
for (let e = p - 1; e >= 0; e--) {
  let t = e / p,
    n = u * Math.cos((t * Math.PI) / 2),
    r = d * Math.sin((t * Math.PI) / 2) + f
  for (let e = 0, t = D.length; e < t; e++) {
    let t = O(D[e], j[e], r)
    ie(t.x, t.y, c + n)
  }
  for (let e = 0, t = w.length; e < t; e++) {
    let t = w[e]
    N = M[e]
    for (let e = 0, i = t.length; e < i; e++) {
      let i = O(t[e], N[e], r)
      _ ? ie(i.x, i.y + g[s - 1].y, g[s - 1].x + n) : ie(i.x, i.y, c + n)
    }
  }
}
;(I(), ne())
