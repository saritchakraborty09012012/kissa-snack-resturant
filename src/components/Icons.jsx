export const ArrowUpRight = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ArrowDown = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M12 4v16m0 0 6-6m-6 6-6-6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Close = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
)

export const Menu = ({ size = 22, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
)

export const Pin = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.1" />
  </svg>
)

export const Star = ({ size = 10, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2c.6 5.4 3 8 8 10-5 2-7.4 4.6-8 10-.6-5.4-3-8-8-10 5-2 7.4-4.6 8-10Z" />
  </svg>
)
