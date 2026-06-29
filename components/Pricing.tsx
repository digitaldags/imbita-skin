import { Check } from "lucide-react";

const regularFeatures = [
  "Venue details",
  "Attire guide",
  "FAQ section",
  "Your colors & theme",
];

const premiumFeatures = [
  "Everything in Regular",
  "RSVP system with your guest list uploaded",
  "Admin panel to view and manage RSVPs",
];

function FeatureList({ items, inverted }: { items: string[]; inverted?: boolean }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <Check
            className={`w-4 h-4 shrink-0 mt-0.5 ${inverted ? "text-white/60" : "text-text-muted"}`}
          />
          <span
            className={`font-sans text-[13px] ${inverted ? "text-white/70" : "text-text-muted"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Pricing() {
  return (
    <>
      <hr />
      <section className="py-[48px] md:py-[72px] bg-maroon">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="font-sans text-xs text-white/70 uppercase tracking-[0.08em]">
            Pricing
          </p>
          <h2 className="font-serif text-[32px] font-normal text-white leading-[1.2] mt-2">
            Simple, flat pricing.
          </h2>
          <p className="font-sans text-sm text-white/70 mt-2 mb-8">
            One payment. Your site, built and live within a week.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/20 rounded-lg p-6">
              <p className="font-sans text-sm font-medium text-white">Regular</p>
              <p className="font-serif text-[36px] font-normal text-white leading-none mt-2">
                ₱3,500
              </p>
              <FeatureList items={regularFeatures} inverted />
            </div>

            <div className="border border-white/20 border-l-2 border-l-white/40 rounded-lg p-6">
              <p className="font-sans text-sm font-medium text-white">Premium</p>
              <p className="font-serif text-[36px] font-normal text-white leading-none mt-2">
                ₱5,000
              </p>
              <FeatureList items={premiumFeatures} inverted />
              <a
                href="https://imbita-skeleton.vercel.app/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-sans text-xs text-white/60 hover:text-white transition-colors"
              >
                See admin demo →
              </a>
            </div>
          </div>

          <div className="mt-8 text-center space-y-1">
            <p className="font-sans text-xs text-white/60">
              Custom domains are available at an additional cost depending on the domain.
              A shareable Vercel link is included by default.
            </p>
            <p className="font-sans text-xs text-white/60">
              * Launch pricing — available for the first month only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
