function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-t border-line bg-ink pb-8 pt-24 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[20%] h-[48vw] w-[48vw] rounded-full bg-[#547083]/[0.09] blur-[150px]" />
        <img
          src="/renders/dish-07.png"
          alt=""
          className="absolute -bottom-[18%] right-[-6%] w-[62vw] max-w-[900px] opacity-20 mix-blend-screen mask-fade-b"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = `none`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
      </div>
      <div className="shell relative flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-ice/40" />
          <p className="label text-ice/60">(No shortcuts)</p>
        </div>
        <h2 className="mt-8 display text-[clamp(3.6rem,10.4vw,12.4rem)] text-bone">
          <SplitLines lines={[`Nothing here`]} />
          <SplitLines lines={[`waits for you.`]} delay={110} />
          <SplitLines lines={[`It begins`]} lineClassName="italic text-ice/90" delay={220} />
          <SplitLines lines={[`when you do.`]} lineClassName="italic text-ice/90" delay={320} />
        </h2>
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-line pt-5 sm:flex-row sm:items-center">
          <Reveal delay={200}>
            <p className="max-w-sm text-[11px] font-light leading-relaxed text-bone/35">
              The kettle is already on. The first glass is for the staff. The next one is for you.
            </p>
          </Reveal>
          <Reveal delay={280} className="flex items-center gap-4">
            <Star size={9} className="text-ice/60" />
            <p className="text-[8px] uppercase tracking-[0.26em] text-bone/30">
              Mr. Chaiwala · Bandra West · Est. 2003
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
