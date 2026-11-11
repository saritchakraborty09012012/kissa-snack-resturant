import { useEffect, useRef } from 'react'
import { dishes } from '../data/content'
import { stage } from '../lib/stage'
import { clamp, damp } from '../lib/motion'

/**
 * Photographic 2.5D dish stage.
 *
 * Eight feathered dish stills are cross-faded and moved on a single rAF loop:
 * slow camera travel, a subtle roll, pointer parallax, drifting smoke and a
 * light sweep that reveals each plate as its build progresses.
 */
export default function DishPhotoStage() {
  const refs = useRef([])

  useEffect(() => {
    const nodes = refs.current
      .filter(Boolean)
      .map((el) => ({
        el,
        media: el.querySelector('[data-media]'),
        tilt: el.querySelector('[data-tilt]'),
        smokeA: el.querySelector('[data-smoke-a]'),
        smokeB: el.querySelector('[data-smoke-b]'),
        glow: el.querySelector('[data-glow]'),
        sweep: el.querySelector('[data-sweep]'),
        embers: el.querySelector('[data-embers]'),
      }))

    if (!nodes.length) return undefined

    const state = { pos: stage.pos, px: 0, py: 0 }
    let raf = 0
    let last = performance.now()

    const tick = (now) => {
      const dt = Math.min(0.2, Math.max(0.001, (now - last) / 1000))
      last = now
      const t = now / 1000

      state.pos = damp(state.pos, stage.pos, 9, dt)
      state.px = damp(state.px, stage.pointer.x, 3.2, dt)
      state.py = damp(state.py, stage.pointer.y, 3.2, dt)

      const mobile = window.innerWidth < 900
      const px = mobile ? state.px * 0.5 : state.px
      const py = mobile ? state.py * 0.5 : state.py
      const spin = stage.spinTarget * 4.2

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const local = state.pos - i
        const fadeIn = clamp((local + 0.1) / 0.18)
        const fadeOut = 1 - clamp((local - 0.62) / 0.3)
        const p = clamp(fadeIn * fadeOut)
        const e = p * p * (3 - 2 * p)

        if (p <= 0.004) {
          if (n.el.style.visibility !== 'hidden') {
            n.el.style.visibility = 'hidden'
            n.el.style.opacity = '0'
          }
          continue
        }

        n.el.style.visibility = 'visible'
        n.el.style.opacity = e.toFixed(3)

        const b = clamp(local)
        const rise = 1 - b
        const bob = Math.sin(t * 0.55 + i * 1.7)

        const x = -local * (mobile ? 34 : 58) + px * (mobile ? 9 : 18)
        const y = local * (mobile ? 16 : 26) + py * (mobile ? 7 : 12) + bob * (mobile ? 4 : 7)
        const s = 0.9 + e * 0.1 + rise * 0.045
        const rz = local * 1.4 + Math.sin(t * 0.32 + i) * 0.35

        n.media.style.transform =
          'translate(-50%, -50%) translate3d(' +
          x.toFixed(2) +
          'px, ' +
          y.toFixed(2) +
          'px, 0) scale(' +
          s.toFixed(4) +
          ') rotateZ(' +
          rz.toFixed(2) +
          'deg)'

        n.tilt.style.transform =
          'rotateX(' +
          (-py * (mobile ? 2 : 3.2)).toFixed(2) +
          'deg) rotateY(' +
          (px * (mobile ? 2.4 : 3.8) + spin).toFixed(2) +
          'deg)'

        // photographic smoke drifting behind the plate
        n.smokeA.style.opacity = (e * (0.12 + b * 0.3)).toFixed(3)
        n.smokeA.style.transform =
          'translate(-50%, -50%) translate3d(' +
          (-local * 90 + px * 14).toFixed(1) +
          'px, ' +
          (bob * 22 - 10).toFixed(1) +
          'px, 0) scale(' +
          (1.16 + b * 0.1 + Math.sin(t * 0.18 + i) * 0.04).toFixed(3) +
          ') rotate(' +
          (Math.sin(t * 0.1 + i) * 4).toFixed(2) +
          'deg)'

        n.smokeB.style.opacity = (e * (0.08 + b * 0.2)).toFixed(3)
        n.smokeB.style.transform =
          'translate(-50%, -50%) translate3d(' +
          (local * 60 + px * -9).toFixed(1) +
          'px, ' +
          (-bob * 26 + 16).toFixed(1) +
          'px, 0) scale(' +
          (0.82 + b * 0.14 + Math.cos(t * 0.14 + i) * 0.03).toFixed(3) +
          ') rotate(' +
          (-Math.sin(t * 0.12 + i) * 6).toFixed(2) +
          'deg)'

        n.glow.style.opacity = (e * (0.24 + b * 0.5)).toFixed(3)

        // the plate rises out of shadow as it is built
        n.media.style.filter =
          'brightness(' +
          (1.08 + b * 0.42).toFixed(3) +
          ') saturate(' +
          (1.05 + b * 0.18).toFixed(3) +
          ') contrast(' +
          (1.08 + b * 0.1).toFixed(3) +
          ')'

        n.sweep.style.opacity = (e * (0.12 + b * 0.3)).toFixed(3)
        n.sweep.style.transform = 'translate3d(' + (-70 + b * 140).toFixed(1) + '%, 0, 0)'

        n.embers.style.opacity = (e * (0.12 + b * 0.62)).toFixed(3)
        n.embers.style.transform =
          'translate(-50%, -50%) translate3d(' +
          (px * 8).toFixed(1) +
          'px, ' +
          (-b * 12 + bob * 4).toFixed(1) +
          'px, 0)'
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="plate-stage" aria-hidden="true">
      {dishes.map((dish, i) => (
        <div
          key={dish.id}
          className="plate-layer"
          ref={(el) => {
            refs.current[i] = el
          }}
          style={{ '--accent': dish.accent }}
        >
          <div className="plate-glow" data-glow />

          <div className="plate-smoke plate-smoke-a" data-smoke-a>
            <img src="/photos/smoke-a.webp" alt="" loading={i < 2 ? 'eager' : 'lazy'} decoding="async" />
          </div>
          <div className="plate-smoke plate-smoke-b" data-smoke-b>
            <img
              src={i % 2 ? '/photos/smoke-b.webp' : '/photos/smoke-c.webp'}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="plate-media" data-media>
            <div className="plate-tilt" data-tilt>
              <img
                className="plate-img"
                src={`/photos/dish-${dish.id}.webp`}
                alt={dish.name}
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
                draggable="false"
              />
              <span className="plate-sweep" data-sweep />
            </div>
          </div>

          <div className="plate-embers" data-embers>
            {Array.from({ length: 7 }).map((_, k) => (
              <span key={k} style={{ '--k': k }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
