function r(t, n) {
  ;(n.color.getRGB(t.fogColor.value, yp(e)),
    n.isFog
      ? ((t.fogNear.value = n.near), (t.fogFar.value = n.far))
      : n.isFogExp2 && (t.fogDensity.value = n.density))
}
