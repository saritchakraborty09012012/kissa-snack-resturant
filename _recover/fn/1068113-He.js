function He(e, t, n) {
  switch (
    ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Te, Te), (t = n)), t.status)
  ) {
    case `fulfilled`:
      return t.value
    case `rejected`:
      throw ((e = t.reason), Ge(e), e === void 0 && !(`reason` in t) ? Error(r(600)) : e)
    default:
      if (typeof t.status == `string`) t.then(Te, Te)
      else {
        if (((e = qd), e !== null && 100 < e.shellSuspendCounter)) throw Error(r(482))
        ;((e = t),
          (e.status = `pending`),
          e.then(
            function (e) {
              if (t.status === `pending`) {
                var n = t
                ;((n.status = `fulfilled`), (n.value = e))
              }
            },
            function (e) {
              if (t.status === `pending`) {
                var n = t
                ;((n.status = `rejected`), (n.reason = e))
              }
            },
          ))
      }
      switch (t.status) {
        case `fulfilled`:
          return t.value
        case `rejected`:
          throw ((e = t.reason), Ge(e), e)
      }
      throw ((zu = t), Fu)
  }
}
