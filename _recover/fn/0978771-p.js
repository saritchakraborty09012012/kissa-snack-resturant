function p(e, t, r) {
  ;((e.ior.value = t.ior),
    t.diffuseRoughness > 0 &&
      ((e.diffuseRoughness.value = t.diffuseRoughness),
      t.diffuseRoughnessMap &&
        ((e.diffuseRoughnessMap.value = t.diffuseRoughnessMap),
        n(t.diffuseRoughnessMap, e.diffuseRoughnessMapTransform))),
    t.sheen > 0 &&
      (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),
      (e.sheenRoughness.value = t.sheenRoughness),
      t.sheenColorMap &&
        ((e.sheenColorMap.value = t.sheenColorMap),
        n(t.sheenColorMap, e.sheenColorMapTransform)),
      t.sheenRoughnessMap &&
        ((e.sheenRoughnessMap.value = t.sheenRoughnessMap),
        n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))),
    t.clearcoat > 0 &&
      ((e.clearcoat.value = t.clearcoat),
      (e.clearcoatRoughness.value = t.clearcoatRoughness),
      t.clearcoatMap &&
        ((e.clearcoatMap.value = t.clearcoatMap), n(t.clearcoatMap, e.clearcoatMapTransform)),
      t.clearcoatRoughnessMap &&
        ((e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
        n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)),
      t.clearcoatNormalMap &&
        ((e.clearcoatNormalMap.value = t.clearcoatNormalMap),
        n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform),
        e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
        t.side === 1 && e.clearcoatNormalScale.value.negate())),
    t.dispersion > 0 && (e.dispersion.value = t.dispersion),
    t.retroreflectivity > 0 && (e.retroreflectivity.value = t.retroreflectivity),
    t.iridescence > 0 &&
      ((e.iridescence.value = t.iridescence),
      (e.iridescenceIOR.value = t.iridescenceIOR),
      (e.iridescenceThicknessMinimum.value = t.iridescenceThicknessMinimum),
      (e.iridescenceThicknessMaximum.value = t.iridescenceThicknessMaximum),
      t.iridescenceMap &&
        ((e.iridescenceMap.value = t.iridescenceMap),
        n(t.iridescenceMap, e.iridescenceMapTransform)),
      t.iridescenceThicknessMap &&
        ((e.iridescenceThicknessMap.value = t.iridescenceThicknessMap),
        n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))),
    t.transmission > 0 &&
      ((e.transmission.value = t.transmission),
      (e.transmissionSamplerMap.value = r.texture),
      e.transmissionSamplerSize.value.set(r.width, r.height),
      t.transmissionMap &&
        ((e.transmissionMap.value = t.transmissionMap),
        n(t.transmissionMap, e.transmissionMapTransform)),
      (e.thickness.value = t.thickness),
      t.thicknessMap &&
        ((e.thicknessMap.value = t.thicknessMap), n(t.thicknessMap, e.thicknessMapTransform)),
      (e.attenuationDistance.value = t.attenuationDistance),
      e.attenuationColor.value.copy(t.attenuationColor)),
    t.anisotropy > 0 &&
      (e.anisotropyVector.value.set(
        t.anisotropy * Math.cos(t.anisotropyRotation),
        t.anisotropy * Math.sin(t.anisotropyRotation),
      ),
      t.anisotropyMap &&
        ((e.anisotropyMap.value = t.anisotropyMap),
        n(t.anisotropyMap, e.anisotropyMapTransform))),
    (e.specularIntensity.value = t.specularIntensity),
    e.specularColor.value.copy(t.specularColor),
    t.specularColorMap &&
      ((e.specularColorMap.value = t.specularColorMap),
      n(t.specularColorMap, e.specularColorMapTransform)),
    t.specularIntensityMap &&
      ((e.specularIntensityMap.value = t.specularIntensityMap),
      n(t.specularIntensityMap, e.specularIntensityMapTransform)))
}
