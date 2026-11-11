function mf(e, t, n, r, i) {
  let a
  if (i === Gf(e, t, n, r) > 0)
    for (let i = t; i < n; i += r) a = Hf((i / r) | 0, e[i], e[i + 1], a)
  else for (let i = n - r; i >= t; i -= r) a = Hf((i / r) | 0, e[i], e[i + 1], a)
  return (a && Pf(a, a.next) && (Uf(a), (a = a.next)), a)
}
