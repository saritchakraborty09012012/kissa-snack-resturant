import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import DishStage from './components/DishStage'
import MadeToOrder from './components/MadeToOrder'
import SpiceSection from './components/SpiceSection'
import HoursSection from './components/HoursSection'
import StatsSection from './components/StatsSection'
import MenuSection from './components/MenuSection'
import QuoteSection from './components/QuoteSection'
import VisitSection from './components/VisitSection'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import MenuOverlay from './components/MenuOverlay'
import BookingModal from './components/BookingModal'
import { useSmoothScroll } from './lib/useSmoothScroll'
import { startScroll, stopScroll, scrollToEl, scrollToY } from './lib/scroll'
import { goToDish, stage } from './lib/stage'
import { SKIP_INTRO } from './lib/quality'

export default function App() {
  const [ready, setReady] = useState(SKIP_INTRO)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const didReady = useRef(false)

  useSmoothScroll()

  useEffect(() => {
    const onMove = (e) => {
      stage.pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      stage.pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const locked = !ready || menuOpen || bookingOpen
    if (locked) stopScroll()
    else startScroll()
  }, [ready, menuOpen, bookingOpen])

  useEffect(() => {
    if (!ready || didReady.current) return
    didReady.current = true
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 450)
    return () => window.clearTimeout(id)
  }, [ready])

  const handleNav = (href) => {
    if (!href || href === 'top' || href === '#top') {
      scrollToY(0, { duration: 1.4 })
      return
    }
    if (href.startsWith('#')) {
      scrollToEl(document.querySelector(href), { duration: 1.5 })
    }
  }

  const openBooking = () => {
    setMenuOpen(false)
    setBookingOpen(true)
  }

  const pickDish = (index) => {
    setMenuOpen(false)
    window.setTimeout(() => {
      startScroll()
      goToDish(index)
    }, 480)
  }

  return (
    <div className="relative min-h-screen bg-ink text-bone">
      {!ready && <Preloader onDone={() => setReady(true)} />}

      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Cursor />

      <Header onMenu={() => setMenuOpen(true)} onBook={openBooking} onNav={handleNav} />

      <main>
        <Hero ready={ready} onBook={openBooking} />
        <DishStage onBook={openBooking} />
        <MadeToOrder />
        <SpiceSection />
        <HoursSection />
        <StatsSection onBook={openBooking} />
        <MenuSection
          onMenu={() => setMenuOpen(true)}
          onBook={openBooking}
          onPickDish={pickDish}
        />
        <QuoteSection />
        <VisitSection onBook={openBooking} />
      </main>

      <Footer onMenu={() => setMenuOpen(true)} onBook={openBooking} />

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBook={openBooking}
        onPickDish={pickDish}
      />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}
