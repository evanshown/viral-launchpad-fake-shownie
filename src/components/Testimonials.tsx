import { Marquee } from "./Marquee";

const testimonials = [
  {
    quote: "They didn't just run our launch. They turned it into the only thing on my feed for two weeks.",
    name: "Founder",
    brand: "DTC Skincare Brand",
    color: "bg-lime",
    rotate: "-rotate-3",
  },
  {
    quote: "We hit our annual revenue target in 11 days. Eleven. I keep checking the dashboard.",
    name: "CMO",
    brand: "Consumer Tech Startup",
    color: "bg-magenta text-cream",
    rotate: "rotate-2",
  },
  {
    quote: "Most agencies talk about virality. Shown actually engineers it. There's a difference.",
    name: "Co-founder",
    brand: "Beverage Brand",
    color: "bg-cyber text-cream",
    rotate: "-rotate-2",
  },
  {
    quote: "Best ad creative we've ever shipped. By a lot. Not even close.",
    name: "Head of Growth",
    brand: "Wellness Brand",
    color: "bg-sun",
    rotate: "rotate-3",
  },
  {
    quote: "Our UGC pipeline went from a chore to our highest-ROAS channel in 30 days.",
    name: "Founder",
    brand: "Apparel DTC",
    color: "bg-mint",
    rotate: "-rotate-1",
  },
  {
    quote: "Felt like having an in-house creative team that already understood the algorithm.",
    name: "VP Marketing",
    brand: "Home Goods Brand",
    color: "bg-tangerine text-cream",
    rotate: "rotate-2",
  },
];

const pullQuotes = [
  '"Engineered virality."',
  '"Hit annual revenue in 11 days."',
  '"Highest-ROAS channel in 30 days."',
  '"The only thing on my feed."',
  '"Best creative we\'ve ever shipped."',
];

export const Testimonials = () => {
  return (
    <section id="proof" className="border-b-2 border-ink py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <span className="font-mono-retro text-xl text-magenta">// section_04</span>
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mt-2">
            What people say.
          </h2>
          <p className="mt-4 text-lg text-ink/70 max-w-xl mx-auto">
            Real reactions from the founders and growth leads we've worked with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`${t.color} ${t.rotate} border-2 border-ink rounded-2xl p-6 md:p-7 shadow-block hover:rotate-0 hover:-translate-y-1 transition-all`}
            >
              <div className="font-display text-4xl leading-none mb-3">"</div>
              <blockquote className="font-display font-semibold text-lg md:text-xl leading-snug">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t-2 border-ink/30 font-display font-bold text-sm uppercase tracking-wide">
                {t.name} · <span className="opacity-80">{t.brand}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-ink text-cream py-5 border-y-2 border-ink">
        <Marquee
          reverse
          items={pullQuotes.map((q, i) => (
            <span key={i} className="font-display font-bold text-2xl md:text-3xl">{q}</span>
          ))}
        />
      </div>
    </section>
  );
};
