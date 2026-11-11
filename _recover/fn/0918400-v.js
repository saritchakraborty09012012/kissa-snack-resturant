function v(n, r) {
  let a = t.update(h)
  ;(f.defines.VSM_SAMPLES !== n.blurSamples &&
    ((f.defines.VSM_SAMPLES = n.blurSamples),
    (p.defines.VSM_SAMPLES = n.blurSamples),
    (f.needsUpdate = !0),
    (p.needsUpdate = !0)),
    n.mapPass === null
      ? (n.mapPass = new is(i.x, i.y, { format: mi, type: ti }))
      : (n.mapPass.width !== n.map.width || n.mapPass.height !== n.map.height) &&
        n.mapPass.setSize(n.map.width, n.map.height),
    (f.uniforms.shadow_pass.value = n.map.depthTexture),
    f.uniforms.resolution.value.set(n.map.width, n.map.height),
    (f.uniforms.radius.value = n.radius),
    e.setRenderTarget(n.mapPass),
    e.clear(),
    e.renderBufferDirect(r, null, a, f, h, null),
    (p.uniforms.shadow_pass.value = n.mapPass.texture),
    p.uniforms.resolution.value.set(n.map.width, n.map.height),
    (p.uniforms.radius.value = n.radius),
    e.setRenderTarget(n.map),
    e.clear(),
    e.renderBufferDirect(r, null, a, p, h, null))
}
