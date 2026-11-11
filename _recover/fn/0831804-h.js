function h(t, n) {
  let i = p(n)
  i && i.isCubeTexture
    ? (l === void 0 &&
        ((l = new Gl(
          new Cd(1, 1, 1),
          new Cp({
            name: `BackgroundCubeMaterial`,
            uniforms: hp(u_.backgroundCube.uniforms),
            vertexShader: u_.backgroundCube.vertexShader,
            fragmentShader: u_.backgroundCube.fragmentShader,
            side: 1,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1,
          }),
        )),
        l.geometry.deleteAttribute(`normal`),
        l.geometry.deleteAttribute(`uv`),
        (l.onBeforeRender = function (e, t, n) {
          this.matrixWorld.copyPosition(n.matrixWorld)
        }),
        Object.defineProperty(l.material, 'envMap', {
          get: function () {
            return this.uniforms.envMap.value
          },
        }),
        r.update(l)),
      (l.material.uniforms.envMap.value = i),
      (l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness),
      (l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity),
      l.material.uniforms.backgroundRotation.value
        .setFromMatrix4(f_.makeRotationFromEuler(n.backgroundRotation))
        .transpose(),
      i.isRenderTargetTexture === !1 &&
        l.material.uniforms.backgroundRotation.value.premultiply(p_),
      (l.material.toneMapped = Wo.getTransfer(i.colorSpace) !== ya),
      (u !== i || d !== i.version || f !== e.toneMapping) &&
        ((l.material.needsUpdate = !0), (u = i), (d = i.version), (f = e.toneMapping)),
      l.layers.enableAll(),
      t.unshift(l, l.geometry, l.material, 0, 0, null))
    : i &&
      i.isTexture &&
      (c === void 0 &&
        ((c = new Gl(
          new np(2, 2),
          new Cp({
            name: `BackgroundMaterial`,
            uniforms: hp(u_.background.uniforms),
            vertexShader: u_.background.vertexShader,
            fragmentShader: u_.background.fragmentShader,
            side: 0,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1,
          }),
        )),
        c.geometry.deleteAttribute(`normal`),
        Object.defineProperty(c.material, 'map', {
          get: function () {
            return this.uniforms.t2D.value
          },
        }),
        r.update(c)),
      (c.material.uniforms.t2D.value = i),
      (c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity),
      (c.material.toneMapped = Wo.getTransfer(i.colorSpace) !== ya),
      i.matrixAutoUpdate === !0 && i.updateMatrix(),
      c.material.uniforms.uvTransform.value.copy(i.matrix),
      (u !== i || d !== i.version || f !== e.toneMapping) &&
        ((c.material.needsUpdate = !0), (u = i), (d = i.version), (f = e.toneMapping)),
      c.layers.enableAll(),
      t.unshift(c, c.geometry, c.material, 0, 0, null))
}
