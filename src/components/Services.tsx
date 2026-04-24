import { Megaphone, Rocket, Sparkles } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Ads",
    body: "Targeted paid creative that turns viewers into customers — at any scale, on any platform.",
    color: "bg-lime",
    pill: "bg-magenta text-cream",
  },
  {
    icon: Rocket,
    title: "Viral Launches",
    body: "End-to-end product launches: scripting, on-site production, distribution. We've redesigned what launching means.",
    color: "bg-magenta text-cream",
    pill: "bg-lime text-ink",
  },
  {
    icon: Sparkles,
    title: "UGC",
    body: "Creator-led content engineered to perform across feeds, formats, and the algorithm of the week.",
    color: "bg-cyber text-cream",
    pill: "bg-sun text-ink",
  },
];

export const Services = () => {
  return (
    <section id="services" className="border-b-2 border-ink py-20 md:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono-retro text-xl text-magenta">// section_02</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mt-2">
              What we do.
            </h2>
          </div>
          <p className="max-w-md text-ink/70 text-lg">
            Three pillars, one job: get your brand seen by the right people, at scale, on purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`${s.color} border-2 border-ink rounded-2xl p-7 md:p-8 shadow-block-lg hover:-translate-x-1 hover:-translate-y-1 transition-transform group`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-cream border-2 border-ink flex items-center justify-center shadow-block-sm">
                    <Icon className="w-7 h-7 text-ink" />
                  </div>
                  <span className={`sticker ${s.pill} text-xs`}>0{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed opacity-90">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
