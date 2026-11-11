function Marquee({ children: e, className: t = ``, speed: n = 38 }) {
  return (
    <div className={`overflow-hidden ${t}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${n}s`,
        }}
      >
        {e}
        {e}
      </div>
    </div>
  )
}
var aI = [
  {
    no: `01`,
    title: `The kettle`,
    text: `Whole spices, broken by hand. Milk from the morning. A flame that has not been off since 2003.`,
  },
  {
    no: `02`,
    title: `The counter`,
    text: `Everything is made when you order it. No warming lamps, no trays, no food waiting to be chosen.`,
  },
  {
    no: `03`,
    title: `The table`,
    text: `Stay as long as you like. There is no last order here, only the slow turn of the night.`,
  },
]
