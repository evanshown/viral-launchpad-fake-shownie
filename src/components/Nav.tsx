import { Marquee } from "./Marquee";

export const TopBar = () => {
  const items = [
    "NYC HQ",
    "$3M → $12M ARR",
    "66 humans strong",
    "Now booking Q3 launches",
    "Paid · Launches · UGC",
    "Get shown.",
  ];
  return (
    <div className="bg-ink text-cream font-display font-bold text-sm py-2 border-b-2 border-ink">
      <Marquee
        fast
        items={items.map((t, i) => (
          <span key={i} className="uppercase tracking-wider">{t}</span>
        ))}
      />
    </div>
  );
};

export const Nav = () => {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b-2 border-ink">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="inline-block w-7 h-7 bg-magenta border-2 border-ink rounded-md shadow-block-sm group-hover:rotate-12 transition-transform" />
            <span className="font-display font-bold text-xl tracking-tight">SHOWN<span className="text-magenta">.</span>MEDIA</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-display font-semibold text-sm uppercase tracking-wide">
            <a href="#services" className="hover:text-magenta transition-colors">Services</a>
            <a href="#proof" className="hover:text-magenta transition-colors">Proof</a>
            <a href="#founder" className="hover:text-magenta transition-colors">Founder</a>
            <a href="#contact" className="hover:text-magenta transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="btn-block bg-lime text-ink text-sm">
            Get Shown →
          </a>
        </div>
      </header>
    </>
  );
};
