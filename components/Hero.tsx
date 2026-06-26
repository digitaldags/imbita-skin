export default function Hero() {
  return (
    <section className="pt-[96px] pb-[72px]">
      <div className="max-w-[720px] mx-auto px-6">
        <p className="font-sans text-xs text-text-muted uppercase tracking-[0.08em] mb-4">
          Custom event websites
        </p>
        <h1 className="font-serif text-[44px] font-normal text-text-primary leading-[1.2] mb-5">
          One link. Everything your guests need.
        </h1>
        <p className="font-sans text-base text-text-muted leading-[1.7] max-w-[480px] mb-8">
          Venue details, RSVP, attire guide — all in one place. We build it for you.
        </p>

        <div className="flex items-center gap-3 mb-14">
          <a
            href="#inquire"
            className="bg-maroon text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-maroon-dark transition-colors"
          >
            Get started
          </a>
          <a
            href="https://second-of-may.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-text-primary text-text-primary text-sm font-medium px-5 py-2.5 rounded-md hover:bg-divider transition-colors"
          >
            See an example ↗
          </a>
        </div>

        <div className="rounded-lg border border-divider overflow-hidden">
          <div className="bg-[#F0EFED] px-4 py-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9] block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9] block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9] block" />
            </div>
            <div className="flex-1 bg-white/60 rounded px-3 py-1 text-xs text-text-muted text-center">
              second-of-may.vercel.app
            </div>
          </div>
          <div className="bg-background pb-10">
            <div className="h-24 bg-stone-200 w-full" />
            <div className="px-8 pt-8">
              <p className="font-serif text-2xl text-text-primary">Sofia &amp; Marco</p>
              <p className="font-sans text-sm text-text-muted mt-1">
                May 2, 2025 &nbsp;·&nbsp; Manila, Philippines
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Ceremony", "Reception", "Attire", "RSVP"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-divider rounded-full px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
