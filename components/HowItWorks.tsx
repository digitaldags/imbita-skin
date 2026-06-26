import { PenLine, Hammer, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    icon: PenLine,
    title: "You inquire",
    desc: "Fill out the form with your details and we'll get back to you within 24 hours.",
  },
  {
    icon: Hammer,
    title: "We build it",
    desc: "We configure your site, upload your photos, and match your colors.",
  },
  {
    icon: Share2,
    title: "You share it",
    desc: "Your site goes live on a link you can share with all your guests.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <hr />
      <section className="py-[72px] bg-[#F0EBE1]">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="font-sans text-xs text-maroon uppercase tracking-[0.08em]">
            How it works
          </p>
          <h2 className="font-serif text-[32px] font-normal text-maroon leading-[1.2] mt-2 mb-10">
            From inquiry to live site in a week.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <Icon className="w-5 h-5 text-maroon mb-3" />
                <p className="font-sans text-sm font-medium text-text-primary mb-1">{title}</p>
                <p className="font-sans text-[13px] text-text-muted leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
