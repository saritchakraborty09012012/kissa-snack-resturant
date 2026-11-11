import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DishPhotoStage from './DishPhotoStage'
import { dishes, DISHES_COUNT } from '../data/content'
import { buildOf, setDishNav, stage } from '../lib/stage'
import { scrollToY } from '../lib/scroll'
import { ArrowUpRight, Star } from './Icons'

gsap.registerPlugin(ScrollTrigger)

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))

/* ---------------------------------------------------------------- build steps */
function BuildSteps({ index, steps }) {
  const wrap = useRef(null)
  const bar = useRef(null)
  const count = useRef(null)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      const b = buildOf(index)
      if (bar.current) bar.current.style.transform = `scaleX(${b})`
      if (count.current) count.current.textContent = String(Math.round(b * 100)).padStart(3, '0')
      if (wrap.current) {
        const nodes = wrap.current.querySelectorAll('[data-step]')
        nodes.forEach((el, i) => {
          el.classList.toggle('is-on', b >= i / nodes.length + 0.02)
        })
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [index])

  return (
    <div className="flex items-end gap-5 md:gap-8">
      <div className="hidden shrink-0 flex-col gap-2 lg:flex">
        <span className="text-[8px] uppercase tracking-[0.26em] text-bone/25">Build</span>
        <span ref={count} className="font-serif text-2xl leading-none tabular-nums text-bone/65">
          000
        </span>
      </div>
      <div className="min-w-0">
        <div
          ref={wrap}
          className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 md:gap-x-7 md:gap-y-2"
          aria-label="Dish components"
        >
          {steps.map((step, i) => (
            <span
              key={step}
              data-step
              className="build-step flex items-center gap-2 whitespace-nowrap text-[7px] uppercase tracking-[0.16em] sm:text-[8px] sm:tracking-[0.2em]"
            >
              <span className="build-dot h-[3px] w-[3px] rounded-full" />
              <span className="hidden text-bone/25 sm:inline">
                {String(i + 1).padStart(2, '0')}
              </span>
              {step}
            </span>
          ))}
        </div>
        <div className="mt-3 hidden h-px w-full overflow-hidden bg-bone/10 sm:block">
          <div ref={bar} className="h-full w-full origin-left bg-ice/70" style={{ transform: 'scaleX(0)' }} />
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- dish copy */
function DishCopy({ dish, active }) {
  return (
    <div
      className="dish-overlay absolute inset-0 z-[3]"
      data-active={active ? 'true' : 'false'}
      aria-hidden={!active}
    >
      <div className="shell relative h-full">
        <div className="stage-copy absolute inset-x-[var(--pad)] bottom-[clamp(6rem,13vh,9rem)] max-w-[34rem] md:inset-x-auto md:bottom-auto md:left-[var(--pad)] md:top-[22%] md:max-w-[40vw] lg:max-w-[34vw] xl:max-w-[36vw]">
          <div className="stage-kicker mb-4 flex items-center gap-3 md:mb-7">
            <span className="h-px w-8 bg-bone/30" />
            <p className="label whitespace-nowrap">({dish.kicker})</p>
          </div>

          <h2 className="display text-[clamp(2.35rem,min(10.6vw,13vh),9.4rem)] text-bone">
            {dish.lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className={`dish-line ${
                    i === dish.lines.length - 1 && dish.lines.length > 1 ? 'italic text-ice/90' : ''
                  }`}
                  style={{ transitionDelay: `${120 + i * 90}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h2>

          <div className="dish-fade stage-longhide mt-6 hidden max-w-[300px] md:block" style={{ transitionDelay: '480ms' }}>
            <p className="text-[11px] font-light leading-relaxed text-bone/45">{dish.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="font-serif text-2xl leading-none text-bone/85">{dish.price}</span>
              <span className="h-3 w-px bg-bone/20" />
              <span className="text-[8px] uppercase tracking-[0.22em] text-bone/35">{dish.since}</span>
              <span className="sample-tag">Sample</span>
            </div>
          </div>
        </div>

        <div
          className="dish-fade stage-longhide absolute bottom-[124px] left-[var(--pad)] hidden items-center gap-3 lg:flex"
          style={{ transitionDelay: '600ms' }}
        >
          <Star size={8} className="text-ice/60" />
          <span className="text-[8px] uppercase tracking-[0.24em] text-bone/35">{dish.label}</span>
          <span className="h-px w-10 bg-bone/15" />
          <span className="text-[8px] uppercase tracking-[0.24em] text-bone/25">{dish.spec}</span>
        </div>

        <div className="stage-dish-no pointer-events-none absolute bottom-[15%] right-[var(--pad)] hidden items-start gap-4 md:flex md:bottom-[20%]">
          <span className="mt-2 hidden text-[7px] uppercase leading-relaxed tracking-[0.3em] text-bone/25 md:block">
            Dish
            <br />
            number
          </span>
          <span className="display text-[clamp(5.2rem,15vw,15rem)] leading-[0.7] text-bone/[0.14]">
            {dish.id}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- stage */
export default function DishStage({ onBook }) {
  const section = useRef(null)
  const sticky = useRef(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  const drag = useRef({ on: false, x: 0, spin: 0 })

  useEffect(() => {
    const el = section.current
    if (!el) return undefined

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom bottom',
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const pos = self.progress * DISHES_COUNT
        stage.pos = pos
        const next = clamp(Math.floor(pos), 0, DISHES_COUNT - 1)
        if (next !== activeRef.current) {
          activeRef.current = next
          setActive(next)
        }
      },
      onRefresh: (self) => {
        const pos = self.progress * DISHES_COUNT
        stage.pos = pos
        const next = clamp(Math.floor(pos), 0, DISHES_COUNT - 1)
        if (next !== activeRef.current) {
          activeRef.current = next
          setActive(next)
        }
      },
    })

    setDishNav((index) => {
      const i = clamp(index, 0, DISHES_COUNT - 1)
      const top = el.getBoundingClientRect().top + window.scrollY
      const travel = el.offsetHeight - window.innerHeight
      scrollToY(top + (i / DISHES_COUNT) * travel + 2, { duration: 1.5 })
    })

    const refresh = () => ScrollTrigger.refresh()
    const timeout = window.setTimeout(refresh, 350)
    window.addEventListener('resize', refresh)

    return () => {
      st.kill()
      window.clearTimeout(timeout)
      window.removeEventListener('resize', refresh)
      setDishNav(null)
    }
  }, [])

  const goTo = (index) => {
    const el = section.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const travel = el.offsetHeight - window.innerHeight
    scrollToY(top + (index / DISHES_COUNT) * travel + 2, { duration: 1.5 })
  }

  const onPointerDown = (e) => {
    if (e.target.closest('button, a')) return
    drag.current.on = true
    drag.current.x = e.clientX
    drag.current.spin = stage.spinTarget
    sticky.current?.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    const w = window.innerWidth
    const h = window.innerHeight
    if (!drag.current.on) {
      stage.pointer.x = (e.clientX / w) * 2 - 1
      stage.pointer.y = (e.clientY / h) * 2 - 1
      return
    }
    const dx = e.clientX - drag.current.x
    drag.current.x = e.clientX
    stage.spinTarget = drag.current.spin + dx * 0.0026
    stage.pointer.x = (e.clientX / w) * 2 - 1
    stage.pointer.y = (e.clientY / h) * 2 - 1
  }

  const endDrag = () => {
    if (!drag.current.on) return
    drag.current.on = false
    stage.spinTarget = Math.round(stage.spinTarget * 2) / 2
  }

  const dish = dishes[active]

  return (
    <section
      id="dishes"
      ref={section}
      className="relative bg-ink"
      style={{ height: `${DISHES_COUNT * 100}vh` }}
    >
      <div
        ref={sticky}
        className="sticky top-0 h-[100svh] w-full touch-pan-y overflow-hidden bg-ink"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        style={{ cursor: 'grab' }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 atmosphere opacity-80" />
        <div className="pointer-events-none absolute left-[54%] top-[46%] z-0 h-[46vw] w-[46vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f9eb2]/[0.11] blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[22vw] w-[90vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0b1119] blur-[100px]" />

        <DishPhotoStage />

        {dishes.map((item, i) => (
          <DishCopy key={item.id} dish={item} active={i === active} />
        ))}

        {/* mobile legibility scrim */}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-ink/90 via-ink/10 to-ink/90 md:hidden" />

        <div className="pointer-events-none absolute inset-0 z-[4]">
          <div className="shell flex h-full flex-col justify-between pb-28 pt-20 md:pb-[104px] md:pt-28">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="label">(The dishes)</p>
                <p className="mt-2 text-[8px] uppercase leading-relaxed tracking-[0.22em] text-bone/25">
                  Eight plates, made to order
                </p>
              </div>
              <div className="text-right">
                <p className="label-bone label">
                  {dish.id} <span className="text-bone/20">/ 08</span>
                </p>
                <p className="stage-longhide mt-2 hidden text-[8px] uppercase tracking-[0.22em] text-bone/30 sm:block">
                  Scroll to build · drag to turn
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="stage-rail absolute right-[calc(var(--pad)*0.55)] top-1/2 z-[6] hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
          {dishes.map((item, i) => {
            const on = i === active
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                data-cursor="view"
                className={`group flex items-center gap-3 py-0.5 text-[8px] uppercase tracking-[0.2em] transition-all duration-500 ${
                  on ? 'text-ice' : 'text-bone/25 hover:text-bone/70'
                }`}
                aria-label={`Go to ${item.name}`}
              >
                <span
                  className={`overflow-hidden whitespace-nowrap text-[7px] tracking-[0.18em] transition-all duration-500 ${
                    on ? 'w-[104px] opacity-100' : 'w-0 opacity-0 group-hover:w-[104px] group-hover:opacity-100'
                  }`}
                >
                  {item.name}
                </span>
                <span className="tabular-nums">{item.id}</span>
                <span
                  className={`h-px transition-all duration-500 ${
                    on ? 'w-7 bg-ice' : 'w-3 bg-bone/25 group-hover:w-5 group-hover:bg-bone/50'
                  }`}
                />
              </button>
            )
          })}
        </div>

        <div className="absolute inset-x-0 bottom-0 z-[6] border-t border-line bg-gradient-to-t from-ink via-ink/90 to-transparent">
          <div className="shell flex items-center justify-between gap-4 py-4 md:gap-6 md:py-5">
            <div className="min-w-0 flex-1">
              <BuildSteps index={active} steps={dish.components} />
            </div>
            <div className="hidden shrink-0 items-center gap-4 md:flex">
              <span className="text-[8px] uppercase tracking-[0.22em] text-bone/25">{dish.spec}</span>
              <button type="button" onClick={onBook} className="btn btn-ghost h-10 px-5" data-cursor="view">
                Book a table <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
