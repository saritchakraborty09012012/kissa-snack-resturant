function vm(e, t, n) {
  switch (((t = fp(n)), e)) {
    case `html`:
      if (((e = t.documentElement), !e)) throw Error(i(452))
      return e
    case `head`:
      if (((e = t.head), !e)) throw Error(i(453))
      return e
    case `body`:
      if (((e = t.body), !e)) throw Error(i(454))
      return e
    default:
      throw Error(i(451))
  }
}
