function j(e) {
  let t = x.indexOf(e.inputSource)
  if (t === -1) return
  let n = b[t]
  n !== void 0 &&
    (n.update(e.inputSource, e.frame, c || a),
    n.dispatchEvent({ type: e.type, data: e.inputSource }))
}
