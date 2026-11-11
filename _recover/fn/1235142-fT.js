function fT(e, t) {
  t.extras !== void 0 &&
    (typeof t.extras == `object`
      ? Object.assign(e.userData, t.extras)
      : console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, ` + t.extras))
}
