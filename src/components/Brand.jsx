export function CupLogo({ size = 44, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22.4" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.8" />
      <circle
        cx="24"
        cy="24"
        r="18.6"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="0.7"
        strokeDasharray="0.6 2.6"
      />
      <path
        d="M17.6 20.4h12.8l-1.35 11.9a1.1 1.1 0 0 1-1.09.98h-7.92a1.1 1.1 0 0 1-1.09-.98L17.6 20.4Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M18.4 25.6h11.2" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.7" />
      <path d="M19.2 29.4h9.6" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.35" />
      <path
        d="M21.4 17.4c-1.5-1.5 1.3-2.4-.1-4M24.1 16.8c-1.4-1.6 1.2-2.6 0-4.2M26.8 17.4c-1.5-1.5 1.3-2.4-.1-4"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <span className={`font-sans text-[10px] font-medium uppercase tracking-[0.26em] ${className}`}>
      Kissa
    </span>
  )
}

export default function Brand({ onClick, compact = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="KISSA — home"
      data-cursor="home"
      className="group flex items-center gap-3 text-bone"
    >
      <CupLogo
        size={compact ? 34 : 42}
        className="transition-transform duration-700 ease-silk group-hover:rotate-[18deg]"
      />
      <span className="flex flex-col items-start leading-none">
        <Wordmark className="text-bone" />
        <span className="mt-1.5 font-sans text-[7px] uppercase tracking-[0.34em] text-bone/35">
          Est. 2003 · Mumbai
        </span>
      </span>
    </button>
  )
}
