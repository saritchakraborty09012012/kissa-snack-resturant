function dx(e) {
  let t = { nodes: {}, materials: {}, meshes: {} }
  return (
    e &&
      e.traverse((e) => {
        ;(e.name && (t.nodes[e.name] = e),
          e.material &&
            !t.materials[e.material.name] &&
            (t.materials[e.material.name] = e.material),
          e.isMesh && !t.meshes[e.name] && (t.meshes[e.name] = e))
      }),
    t
  )
}
