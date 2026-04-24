import { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
  fast?: boolean;
  reverse?: boolean;
}

export const Marquee = ({ items, className = "", fast, reverse }: MarqueeProps) => {
  const cls = [
    "marquee",
    fast ? "marquee-fast" : "",
    reverse ? "marquee-reverse" : "",
    className,
  ].join(" ");

  const Track = (
    <div className="marquee-track" aria-hidden="false">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          {it}
          <span className="text-2xl" aria-hidden>★</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cls}>
      {Track}
      <div className="marquee-track" aria-hidden="true">
        {items.map((it, i) => (
          <span key={`d-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            {it}
            <span className="text-2xl" aria-hidden>★</span>
          </span>
        ))}
      </div>
    </div>
  );
};
