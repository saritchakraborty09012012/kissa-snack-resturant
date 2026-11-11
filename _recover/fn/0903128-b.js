function b(e) {
  if (--e.usedTimes === 0) {
    let t = l.indexOf(e)
    ;((l[t] = l[l.length - 1]), l.pop(), u.delete(e.cacheKey), e.destroy())
  }
}
