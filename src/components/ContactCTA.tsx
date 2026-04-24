import { useState, FormEvent } from "react";
import { toast } from "sonner";

export const ContactCTA = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      toast.success("Got it. We'll be in touch within 48 hours.", {
        description: "Check your inbox — replies come from the founder.",
      });
      form.reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="bg-magenta text-cream border-b-2 border-ink py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <span className="sticker bg-lime text-ink absolute top-8 left-[8%] -rotate-6 hidden md:inline-flex">
        ⚡ replies in 48h
      </span>
      <span className="sticker bg-sun text-ink absolute bottom-12 right-[10%] rotate-6 hidden md:inline-flex">
        ★ now booking
      </span>

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-mono-retro text-xl text-lime">// section_05</span>
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mt-2 leading-[0.95]">
            Ready to get shown?
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-md">
            Tell us about your brand and what you're launching. We'll come back within 48 hours.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-cream text-ink border-2 border-ink rounded-2xl p-6 md:p-8 shadow-block-lg space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="font-display font-bold text-sm uppercase tracking-wide">Your name</span>
              <input
                required
                name="name"
                placeholder="Jane Founder"
                className="mt-1 w-full border-2 border-ink rounded-lg px-3 py-2.5 bg-cream font-body focus:outline-none focus:ring-2 focus:ring-magenta"
              />
            </label>
            <label className="block">
              <span className="font-display font-bold text-sm uppercase tracking-wide">Brand</span>
              <input
                required
                name="brand"
                placeholder="Your DTC brand"
                className="mt-1 w-full border-2 border-ink rounded-lg px-3 py-2.5 bg-cream font-body focus:outline-none focus:ring-2 focus:ring-magenta"
              />
            </label>
          </div>
          <label className="block">
            <span className="font-display font-bold text-sm uppercase tracking-wide">Email</span>
            <input
              required
              type="email"
              name="email"
              placeholder="you@brand.com"
              className="mt-1 w-full border-2 border-ink rounded-lg px-3 py-2.5 bg-cream font-body focus:outline-none focus:ring-2 focus:ring-magenta"
            />
          </label>
          <label className="block">
            <span className="font-display font-bold text-sm uppercase tracking-wide">What are you launching?</span>
            <textarea
              required
              name="message"
              rows={3}
              placeholder="A new product, a relaunch, a UGC engine — tell us anything."
              className="mt-1 w-full border-2 border-ink rounded-lg px-3 py-2.5 bg-cream font-body focus:outline-none focus:ring-2 focus:ring-magenta resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="btn-block bg-lime text-ink w-full text-base md:text-lg disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send it →"}
          </button>
        </form>
      </div>
    </section>
  );
};
