function iC(e, t, n) {
  let r = t.clock.getDelta()
  ;(t.frameloop === `never` &&
    typeof e == `number` &&
    ((r = e - t.clock.elapsedTime),
    (t.clock.oldTime = t.clock.elapsedTime),
    (t.clock.elapsedTime = e)),
    (nC = t.internal.subscribers))
  for (let e = 0; e < nC.length; e++) ((rC = nC[e]), rC.ref.current(rC.store.getState(), r, n))
  return (
    !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
    (t.internal.frames = Math.max(0, t.internal.frames - 1)),
    t.frameloop === `always` ? 1 : t.internal.frames
  )
}
var aC = !1,
  oC = !1,
  sC,
  cC,
  lC
