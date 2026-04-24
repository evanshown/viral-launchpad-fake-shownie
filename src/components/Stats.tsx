const stats = [
  { num: "$12M", label: "ARR, up from $3M", color: "bg-lime" },
  { num: "66", label: "humans in NYC", color: "bg-magenta text-cream" },
  { num: "4×", label: "growth in months", color: "bg-cyber text-cream" },
  { num: "1", label: "city. all internet.", color: "bg-sun" },
];

export const Stats = () => {
  return (
    <section className="border-b-2 border-ink bg-cream py-16 md:py-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`${s.color} border-2 border-ink rounded-2xl p-6 md:p-8 shadow-block hover-wiggle`}
            style={{ ["--tilt" as string]: i % 2 ? "2deg" : "-2deg" }}
          >
            <div className="font-display font-bold text-4xl md:text-6xl leading-none tracking-tighter">
              {s.num}
            </div>
            <div className="mt-3 font-display font-semibold text-sm md:text-base uppercase tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
