export const Founder = () => {
  return (
    <section id="founder" className="border-b-2 border-ink py-20 md:py-28 bg-cream">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="font-mono-retro text-xl text-magenta">// section_03</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tighter mt-2">
            Founded by an internet kid who never logged off.
          </h2>
          <p className="mt-6 text-lg text-ink/80 leading-relaxed">
            Matthew Epstein built a YouTube channel to <strong>3 million subscribers by age 17</strong>,
            then went on to work with major tech brands before starting Shown Media. Today, his team of 66
            in NYC runs full-scale, end-to-end launches — from scripting to on-site production to scale —
            for some of the most-watched DTC brands on the internet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="sticker bg-lime">3M subs by 17</span>
            <span className="sticker bg-magenta text-cream">ex-tech</span>
            <span className="sticker bg-cyber text-cream">NYC native</span>
          </div>
        </div>

        {/* Terminal window */}
        <div className="relative">
          <div className="border-2 border-ink rounded-2xl overflow-hidden shadow-block-lg bg-ink">
            <div className="flex items-center gap-2 px-4 py-2 bg-cream border-b-2 border-ink">
              <span className="w-3 h-3 rounded-full bg-tangerine border-2 border-ink" />
              <span className="w-3 h-3 rounded-full bg-sun border-2 border-ink" />
              <span className="w-3 h-3 rounded-full bg-mint border-2 border-ink" />
              <span className="ml-3 font-mono-retro text-base">~/shown-media — bash</span>
            </div>
            <div className="p-6 md:p-8 font-mono-retro text-cream text-xl md:text-2xl leading-relaxed">
              <p><span className="text-magenta">$</span> whoami</p>
              <p className="opacity-90">→ shown_media</p>
              <p className="mt-3"><span className="text-magenta">$</span> cat mission.txt</p>
              <p className="opacity-90">
                → "We've completely redesigned what it means to launch a product."
              </p>
              <p className="mt-3"><span className="text-magenta">$</span> status</p>
              <p className="opacity-90">
                → 55+ FT in NYC · scaling · <span className="blink text-lime">_</span>
              </p>
            </div>
          </div>
          {/* sticker on top */}
          <span className="sticker bg-sun absolute -top-4 -right-3 rotate-6 z-10 hover-wiggle">
            since 2021
          </span>
        </div>
      </div>
    </section>
  );
};
