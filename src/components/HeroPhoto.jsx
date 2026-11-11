import { useEffect, useRef } from 'react'
import { damp } from '../lib/motion'

/**
 * Hero photograph with a slow breathing camera, pointer parallax and
 * photographic steam. One lightweight transform loop, no WebGL.
 */
export default function HeroPhoto({ ready }) {
  const frame = useRef(null)

  useEffect(() => {
    const el = frame.current
    if (!el) return undefined

    const target = { x: 0, y: 0 }
    const state = { x: 0, y: 0 }
    let raf = 0
    let last = performance.now()

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const tick = (now) => {
      const dt = Math.min(0.2, Math.max(0.001, (now - last) / 1000))
      last = now
      const t = now / 1000
      const mobile = window.innerWidth < 900

      state.x = damp(state.x, target.x, 2.2, dt)
      state.y = damp(state.y, target.y, 2.2, dt)

      const scroll = window.scrollY || 0
      const drift = Math.min(scroll, window.innerHeight) * 0.05
      const zoom = 1.035 + Math.sin(t * 0.06) * 0.012 + state.y * 0.004
      const tx = state.x * (mobile ? 6 : 14)
      const ty = -drift + state.y * (mobile ? 4 : 7)

      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${zoom.toFixed(4)})`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero-photo" aria-hidden="true">
      <div className="hero-photo-glow" />

      <div className="hero-photo-frame" ref={frame}>
        <img
          className="hero-photo-img"
          src="/photos/hero.webp"
          alt="A glass of chai on a dark table"
          fetchPriority="high"
          draggable="false"
        />

        <div className="hero-steam hero-steam-a">
          <img src="/photos/smoke-b.webp" alt="" />
        </div>
        <div className="hero-steam hero-steam-b">
          <img src="/photos/smoke-c.webp" alt="" />
        </div>

        <span className="hero-photo-shade" />
      </div>

      <div className="hero-motes">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero-photo-caption">
        <span className="h-px w-6 bg-bone/25" />
        <span>Brewed since 2003 · 11 hours a night</span>
      </div>

      <span className={`hero-photo-enter ${ready ? 'is-in' : ''}`} />
    </div>
  )
}
