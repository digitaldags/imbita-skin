import { MapPin, Shirt, MessageCircle, Palette, ClipboardList, LayoutDashboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  premium?: boolean;
};

const features: Feature[] = [
  {
    icon: MapPin,
    title: "Venue details",
    desc: "Ceremony and reception info with maps, times, and directions.",
  },
  {
    icon: Shirt,
    title: "Attire guide",
    desc: "Dress code details with visual references so no one shows up wrong.",
  },
  {
    icon: MessageCircle,
    title: "FAQ section",
    desc: "Answer the questions your guests will ask before they ask them.",
  },
  {
    icon: Palette,
    title: "Your colors & theme",
    desc: "The site is styled to match your palette, not a generic template.",
  },
  {
    icon: ClipboardList,
    title: "RSVP system",
    desc: "Guest list management with a form your guests can actually use.",
    premium: true,
  },
  {
    icon: LayoutDashboard,
    title: "Admin panel",
    desc: "View and manage RSVPs from a private dashboard.",
    premium: true,
  },
];

export default function WhatsIncluded() {
  return (
    <>
      <hr />
      <section className="py-[72px] bg-[#EDE6DA]">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="font-sans text-xs text-maroon uppercase tracking-[0.08em]">
            What&apos;s included
          </p>
          <h2 className="font-serif text-[32px] font-normal text-maroon leading-[1.2] mt-2 mb-10">
            Everything your guests need, all in one place.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc, premium }) => (
              <div key={title} className="flex gap-3">
                <Icon className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-[13px] font-medium text-text-primary">
                    {title}
                    {premium && (
                      <span className="ml-2 text-[10px] font-medium text-maroon border border-maroon rounded-full px-2 py-0.5 align-middle">
                        Premium
                      </span>
                    )}
                  </p>
                  <p className="font-sans text-[13px] text-text-muted mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
