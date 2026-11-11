function u(e, t) {
  ;(e.specular.value.copy(t.specular), (e.shininess.value = Math.max(t.shininess, 1e-4)))
}
