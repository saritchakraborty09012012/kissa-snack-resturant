function ia(e) {
  var t = as(e)
  if (t != null) {
    if (typeof t.memoizedProps[`data-testname`] != `string`) throw Error(r(364))
    return t
  }
  if (((e = Es(e)), e === null)) throw Error(r(362))
  return e.stateNode.current
}
