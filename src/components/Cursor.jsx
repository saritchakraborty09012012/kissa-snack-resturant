import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return undefined

    const d = dot.current
    const r = ring.current
    const l = label.current
    if (!d || !r || !l) return undefined

    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let cx = tx
    let cy = ty
    let hovering = false
    let text = ''
    let raf = 0

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      d.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    }

    const frame = () => {
      cx += (tx - cx) * 0.13
      cy += (ty - cy) * 0.13
      r.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      if (text) l.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(frame)
    }

    const onOver = (e) => {
      const target = e.target.closest?.('a, button, [data-cursor]')
      const isHover = !!target
      const nextText = target?.getAttribute('data-cursor-label') || ''
      const isView = target?.getAttribute('data-cursor') === 'view'
      if (isHover === hovering && nextText === text) return
      hovering = isHover
      text = nextText
      r.classList.toggle('is-hover', isHover && !isView)
      r.classList.toggle('is-view', isView)
      l.textContent = nextText
      l.style.opacity = nextText ? '1' : '0'
    }

    const onLeave = () => {
      l.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
      <div ref={label} className="cursor-label" style={{ opacity: 0 }} />
    </>
  )
}
