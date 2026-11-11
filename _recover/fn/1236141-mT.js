function mT(e, t) {
  if ((e.updateMorphTargets(), t.weights !== void 0))
    for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n]
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    let n = t.extras.targetNames
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {}
      for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t
    } else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)
  }
}
