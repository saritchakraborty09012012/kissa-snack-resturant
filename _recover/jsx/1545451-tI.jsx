function Reveal({ children: e, className: t = ``, delay: n = 0, as: r = `div`, ...i }) {
  let { ref: a, inView: o } = useInView()
  return (
    <r
      ref={a}
      style={{
        transitionDelay: `${n}ms`,
      }}
      className={`fade-up ${o ? `in` : ``} ${t}`}
      {...i}
    >
      {e}
    </r>
  )
}
