function m() {
  ;(s.current.scrollContainers &&
    (s.current.scrollContainers.forEach((e) => e.removeEventListener(`scroll`, p, !0)),
    (s.current.scrollContainers = null)),
    s.current.resizeObserver &&
      (s.current.resizeObserver.disconnect(), (s.current.resizeObserver = null)),
    s.current.orientationHandler &&
      (`orientation` in screen && `removeEventListener` in screen.orientation
        ? screen.orientation.removeEventListener(`change`, s.current.orientationHandler)
        : `onorientationchange` in window &&
          window.removeEventListener(`orientationchange`, s.current.orientationHandler)))
}
