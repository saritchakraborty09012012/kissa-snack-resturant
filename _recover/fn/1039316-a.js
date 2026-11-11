function a(t) {
  let { internal: n } = e.getState()
  for (let e of n.hovered.values())
    if (
      !t.length ||
      !t.find(
        (t) => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId,
      )
    ) {
      let r = e.eventObject.__r3f
      if ((n.hovered.delete(Ax(e)), r != null && r.eventCount)) {
        let n = r.handlers,
          i = { ...e, intersections: t }
        ;(n.onPointerOut == null || n.onPointerOut(i),
          n.onPointerLeave == null || n.onPointerLeave(i))
      }
    }
}
