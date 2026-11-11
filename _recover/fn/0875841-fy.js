function fy(e) {
  return [
    e.extensionClipCullDistance ? `#extension GL_ANGLE_clip_cull_distance : require` : ``,
    e.extensionMultiDraw ? `#extension GL_ANGLE_multi_draw : require` : ``,
  ].filter(hy).join(`
`)
}
