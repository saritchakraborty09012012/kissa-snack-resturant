/* Small, dependency-free motion helpers. */

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export const lerp = (a, b, t) => a + (b - a) * t

/** Frame-rate independent exponential approach. */
export const damp = (current, target, lambda, dt) =>
  lerp(current, target, 1 - Math.exp(-lambda * dt))

export const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0))
  return t * t * (3 - 2 * t)
}

export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export const mapRange = (v, inMin, inMax, outMin, outMax) =>
  outMin + ((clamp(v, inMin, inMax) - inMin) / (inMax - inMin)) * (outMax - outMin)
