import { useEffect, useRef, useState } from 'react'
import { CupLogo } from './Brand'
import { SampleBadge, SampleToast, SampleWatermark } from './Sample'
import { ArrowUpRight, Close } from './Icons'

const TIME_OPTIONS = (() => {
  const out = []
  const push = (h, m) => {
    const value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
    const hour = h % 12 === 0 ? 12 : h % 12
    const suffix = h >= 12 && h < 24 ? 'PM' : 'AM'
    out.push({ value, label: `${hour}:${String(m).padStart(2, '0')} ${suffix}` })
  }
  for (let h = 18; h <= 23; h++) {
    push(h, 0)
    push(h, 30)
  }
  for (let h = 0; h <= 4; h++) {
    push(h, 0)
    push(h, 30)
  }
  return out
})()

const TODAY = new Date().toISOString().split('T')[0]

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-3 text-[8px] uppercase tracking-[0.24em] text-bone/35">
        <span>{label}</span>
        <span className="sample-tag">Sample</span>
      </span>
      {children}
    </label>
  )
}

export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: TODAY,
    time: '20:00',
    guests: '2',
    notes: '',
  })
  const [state, setState] = useState('idle')
  const [toast, setToast] = useState(false)
  const [error, setError] = useState('')
  const firstField = useRef(null)
  const toastTimer = useRef(0)

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const showSample = () => {
    setToast(true)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(false), 9000)
  }

  useEffect(() => {
    if (!open) return undefined
    setState((s) => (s === 'sending' ? s : 'idle'))
    const focusTimer = window.setTimeout(() => firstField.current?.focus(), 500)
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const change = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (state === 'sending') return
    setState('sending')
    setError('')
    try {
      await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      /* this is a demo — never block the sample confirmation */
    }
    setState('idle')
    showSample()
    window.setTimeout(() => onClose?.(), 600)
  }

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[140] flex items-center justify-center p-3 transition-[opacity,visibility] duration-700 ease-silk sm:p-6 ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a table at Kissa"
        className={`relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto overscroll-contain border border-line bg-[#080a10] shadow-[0_40px_140px_rgba(0,0,0,0.8)] transition-all duration-[900ms] ease-silk md:grid-cols-[0.85fr_1.15fr] ${
          open ? 'translate-y-0 scale-100' : 'translate-y-8 scale-[0.98]'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-ink/40 text-bone/70 backdrop-blur transition-colors hover:border-bone/40 hover:text-bone"
        >
          <Close size={17} />
        </button>

        <div className="relative hidden min-h-[560px] overflow-hidden border-r border-line bg-gradient-to-b from-[#0b1017] to-[#06070b] p-8 md:block">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-[18%] h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#7f9cb0]/15 blur-[80px]" />
            <img
              src="/photos/dish-01.webp"
              alt=""
              className="absolute bottom-[-4%] left-1/2 w-[112%] max-w-none -translate-x-1/2 opacity-90"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06070b] via-transparent to-[#06070b]/40" />
          </div>

          <div className="relative flex h-full flex-col justify-between">
            <CupLogo size={38} className="text-bone/60" />
            <div>
              <p className="label mb-4">(Reservations)</p>
              <p className="display text-5xl leading-[0.92] text-bone/90">
                A table
                <br />
                under the
                <br />
                <em className="text-ice/90">fan.</em>
              </p>
              <p className="mt-6 max-w-[240px] text-[10px] uppercase leading-relaxed tracking-[0.18em] text-bone/35">
                We hold tables for fifteen minutes. The kettle waits longer.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden p-6 sm:p-10 md:p-12">
          <SampleWatermark className="opacity-30" />
          <div className="relative mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="label mb-2">(Book a table)</p>
              <h2 className="display text-4xl text-bone sm:text-5xl">
                {'Come and '}
                <em className="text-ice/90">sit down.</em>
              </h2>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <CupLogo size={30} className="text-bone/25 md:hidden" />
              <SampleBadge label="Sample form" />
            </div>
          </div>

          <form onSubmit={submit} className="relative space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    ref={firstField}
                    required
                    value={form.name}
                    onChange={change('name')}
                    placeholder="Full name"
                    className="field"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    value={form.phone}
                    onChange={change('phone')}
                    placeholder="+91"
                    className="field"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Field label="Date">
                  <input
                    type="date"
                    required
                    min={TODAY}
                    value={form.date}
                    onChange={change('date')}
                    className="field scheme-dark"
                  />
                </Field>
                <Field label="Time">
                  <select value={form.time} onChange={change('time')} className="field">
                    {TIME_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Guests">
                  <select value={form.guests} onChange={change('guests')} className="field">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Anything we should know?">
                <input
                  value={form.notes}
                  onChange={change('notes')}
                  placeholder="Birthday, allergies, favourite corner…"
                  className="field"
                />
              </Field>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <p className="max-w-[240px] text-[8px] uppercase leading-relaxed tracking-[0.18em] text-bone/30">
                  Demo only — nothing is really booked. Held for 15 minutes when it is.
                </p>
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="btn btn-ice min-w-[180px] disabled:opacity-60"
                >
                  {state === 'sending' ? 'Sending sample…' : 'Request table'}
                  {state !== 'sending' && <ArrowUpRight />}
                </button>
              </div>

              {error && <p className="text-[10px] text-ember">{error}</p>}
          </form>
        </div>
      </div>

      <SampleToast
        open={toast}
        onClose={() => setToast(false)}
        message="Sample only — nothing was booked."
        sub="This is a demo confirmation. It fades away on its own, or close it whenever you like."
      />
    </div>
  )
}
