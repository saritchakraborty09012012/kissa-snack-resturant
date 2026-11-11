import { useEffect, useRef, useState } from 'react'

export function useInView({ threshold = 0.15, once = true, rootMargin = '0px 0px -6% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once, rootMargin])

  return { ref, inView }
}

export function Reveal({ children, className = '', delay = 0, as = 'div', ...rest }) {
  const { ref, inView } = useInView()
  const Tag = as
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-up ${inView ? 'in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SplitLines({ lines, className = '', lineClassName = '', delay = 0, step = 110 }) {
  const { ref, inView } = useInView()
  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`} className="reveal-wrap">
          <span
            className={`reveal-line ${inView ? 'in' : ''} ${lineClassName}`}
            style={{ transitionDelay: `${delay + i * step}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  )
}

export function Counter({ to, suffix = '', duration = 1800, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.4 })
  const [value, setValue] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    if (!inView || done.current) return undefined
    done.current = true
    let raf = 0
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const e = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(e * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value}
      {suffix}
    </span>
  )
}

export function Marquee({ children, className = '', speed = 38 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {children}
        {children}
      </div>
    </div>
  )
}
