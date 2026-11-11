function Ry(e, t) {
  return e.groupOrder === t.groupOrder
    ? e.renderOrder === t.renderOrder
      ? e.material.id === t.material.id
        ? e.materialVariant === t.materialVariant
          ? e.z === t.z
            ? e.id - t.id
            : e.z - t.z
          : e.materialVariant - t.materialVariant
        : e.material.id - t.material.id
      : e.renderOrder - t.renderOrder
    : e.groupOrder - t.groupOrder
}
