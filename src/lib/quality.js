const params =
  typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null

export const LITE = !!params?.has('lite')

export const SKIP_INTRO = !!params?.has('skipIntro')

/**
 * Post-processing mode.
 *   full  – bloom + vignette + film grain (default)
 *   bloom – bloom only, cheapest
 *   off   – no composer, raw WebGL render
 * Override with `?fx=off`, `?fx=bloom`, `?fx=full`.
 */
export const FX = LITE ? 'off' : params?.get('fx') || 'full'

export const FX_ON = FX !== 'off'
