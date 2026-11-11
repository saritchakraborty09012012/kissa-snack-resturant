function i(t, n) {
  return (t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid)
}
if (this.isScene)
  (this.background &&
    (this.background.isColor
      ? (r.background = this.background.toJSON())
      : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
    this.environment &&
      this.environment.isTexture &&
      this.environment.isRenderTargetTexture !== !0 &&
      (r.environment = this.environment.toJSON(e).uuid))
else if (this.isMesh || this.isLine || this.isPoints) {
  r.geometry = i(e.geometries, this.geometry)
  let t = this.geometry.parameters
  if (t !== void 0 && t.shapes !== void 0) {
    let n = t.shapes
    if (Array.isArray(n))
      for (let t = 0, r = n.length; t < r; t++) {
        let r = n[t]
        i(e.shapes, r)
      }
    else i(e.shapes, n)
  }
}
if (
  (this.isSkinnedMesh &&
    ((r.bindMode = this.bindMode),
    (r.bindMatrix = this.bindMatrix.toArray()),
    this.skeleton !== void 0 &&
      (i(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
  this.material !== void 0)
) {
  if (Array.isArray(this.material)) {
    let t = []
    for (let n = 0, r = this.material.length; n < r; n++)
      t.push(i(e.materials, this.material[n]))
    r.material = t
  } else r.material = i(e.materials, this.material)
}
if (this.children.length > 0) {
  r.children = []
  for (let t = 0; t < this.children.length; t++)
    r.children.push(this.children[t].toJSON(e).object)
}
if (this.animations.length > 0) {
  r.animations = []
  for (let t = 0; t < this.animations.length; t++) {
    let n = this.animations[t]
    r.animations.push(i(e.animations, n))
  }
}
if (t) {
  let t = a(e.geometries),
    r = a(e.materials),
    i = a(e.textures),
    o = a(e.images),
    s = a(e.shapes),
    c = a(e.skeletons),
    l = a(e.animations),
    u = a(e.nodes)
  ;(t.length > 0 && (n.geometries = t),
    r.length > 0 && (n.materials = r),
    i.length > 0 && (n.textures = i),
    o.length > 0 && (n.images = o),
    s.length > 0 && (n.shapes = s),
    c.length > 0 && (n.skeletons = c),
    l.length > 0 && (n.animations = l),
    u.length > 0 && (n.nodes = u))
}
return ((n.object = r), n)
