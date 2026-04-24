import { Marquee } from "./Marquee";

export const Footer = () => {
  const socials = ["Instagram", "TikTok", "X", "LinkedIn", "YouTube"];
  const items = ["SHOWN.MEDIA", "MADE IN NYC", "GET SHOWN", "VIRAL BY DESIGN", "EST. 2021"];

  return (
    <footer className="bg-ink text-cream">
      <div className="py-4 border-b-2 border-cream/20">
        <Marquee
          items={items.map((t, i) => (
            <span key={i} className="font-display font-bold text-2xl md:text-3xl tracking-tight">{t}</span>
          ))}
        />
      </div>
      <div className="container py-12 md:py-16 grid md:grid-cols-3 gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2 group">
            <span className="inline-block w-7 h-7 bg-magenta border-2 border-cream rounded-md group-hover:rotate-12 transition-transform" />
            <span className="font-display font-bold text-xl">SHOWN<span className="text-magenta">.</span>MEDIA</span>
          </a>
          <p className="mt-4 text-cream/70 text-sm max-w-xs">
            A NYC viral marketing & content agency for DTC brands. Paid ads, launches, UGC.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-cream/60">Follow</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 font-display font-semibold">
            {socials.map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-magenta transition-colors">{s} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-cream/60">Studio</h4>
          <p className="mt-4 font-display">
            New York City<br />
            <span className="text-cream/70 text-sm">By appointment</span>
          </p>
          <a href="#contact" className="mt-4 inline-block sticker bg-lime text-ink hover-wiggle">
            Work with us →
          </a>
        </div>
      </div>

      <div className="border-t-2 border-cream/20 py-5">
        <div className="container flex flex-wrap items-center justify-between gap-3 text-sm text-cream/60 font-mono-retro text-base">
          <span>© {new Date().getFullYear()} Shown Media · All rights reserved</span>
          <span>built for the internet · 🗽</span>
        </div>
      </div>
    </footer>
  );
};
