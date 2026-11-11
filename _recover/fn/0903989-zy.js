function zy(e, t) {
  return e.groupOrder === t.groupOrder
    ? e.renderOrder === t.renderOrder
      ? e.z === t.z
        ? e.id - t.id
        : t.z - e.z
      : e.renderOrder - t.renderOrder
    : e.groupOrder - t.groupOrder
}
