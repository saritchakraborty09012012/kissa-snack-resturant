let lenis = null

export function setLenis(instance) {
  lenis = instance
  if (typeof window !== 'undefined') window.__lenis = instance
}

export function getLenis() {
  return lenis
}

export function scrollToY(y, opts = {}) {
  if (lenis) {
    lenis.scrollTo(y, { duration: 1.6, ...opts })
    return
  }
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export function scrollToEl(el, opts = {}) {
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  scrollToY(top, opts)
}

export function stopScroll() {
  if (lenis) lenis.stop()
  document.documentElement.classList.add('locked')
}

export function startScroll() {
  if (lenis) lenis.start()
  document.documentElement.classList.remove('locked')
}
