/**
 * Demo-mode markers.
 *
 * Every detail, price, form and map on this build is placeholder content, so
 * the interface says so out loud: small stamps on detail blocks and a soft
 * diagonal watermark behind the larger ones.
 */

export function SampleBadge({ label = 'Sample', className = '' }) {
  return (
    <span aria-hidden="true" className={`sample-badge ${className}`}>
      {label}
    </span>
  )
}

export function SampleWatermark({ className = '', label = 'Sample' }) {
  return <span aria-hidden="true" data-label={label} className={`sample-watermark ${className}`} />
}

export function SampleToast({ message, sub, onClose, open }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`sample-toast ${open ? 'is-on' : ''}`}
      onClick={onClose}
    >
      <span className="sample-toast-dot" aria-hidden="true" />
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.22em] text-bone/90">{message}</span>
        {sub && (
          <span className="mt-1.5 block text-[10px] font-light leading-relaxed text-bone/45">
            {sub}
          </span>
        )}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onClose?.()
        }}
        aria-label="Dismiss"
        className="shrink-0 rounded-full border border-bone/20 px-3 py-1 text-[8px] uppercase tracking-[0.2em] text-bone/50 transition-colors hover:border-bone/40 hover:text-bone"
      >
        Close
      </button>
    </div>
  )
}
