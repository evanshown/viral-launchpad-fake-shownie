const stickers = [
  { label: "⚡ viral", color: "bg-lime", pos: "top-4 left-[5%] -rotate-6" },
  { label: "🚀 launches", color: "bg-magenta text-cream", pos: "top-16 right-[8%] rotate-6" },
  { label: "📈 scale", color: "bg-cyber text-cream", pos: "bottom-24 left-[10%] rotate-3" },
  { label: "🗽 NYC", color: "bg-sun", pos: "bottom-12 right-[12%] -rotate-6" },
  { label: "★ DTC", color: "bg-tangerine text-cream", pos: "top-1/2 left-[2%] -rotate-12 hidden lg:inline-flex" },
  { label: "✦ UGC", color: "bg-mint", pos: "top-1/3 right-[3%] rotate-12 hidden lg:inline-flex" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {stickers.map((s, i) => (
        <span
          key={i}
          className={`sticker absolute ${s.color} ${s.pos} text-base hover-wiggle z-10`}
          style={{ ["--tilt" as string]: s.pos.includes("-rotate") ? "-6deg" : "6deg" }}
        >
          {s.label}
        </span>
      ))}

      <div className="container relative py-24 md:py-32 text-center">
        <p className="font-mono-retro text-2xl md:text-3xl text-magenta mb-6 blink">
          [ now loading: your internet moment_ ]
        </p>
        <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mx-auto max-w-5xl">
          We turn companies into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-lime border-2 border-ink px-3 -rotate-2 inline-block shadow-block">
              internet
            </span>
          </span>{" "}
          moments.
        </h1>
        <p className="mt-10 max-w-2xl mx-auto text-lg md:text-xl text-ink/80">
          NYC-based viral marketing & content for DTC brands. Paid ads, end-to-end launches,
          and UGC that actually gets seen — at any scale.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-block bg-magenta text-cream text-base md:text-lg">
            Get Shown →
          </a>
          <a href="#services" className="btn-block bg-cream text-ink text-base md:text-lg">
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
};
