import { ChevronLeft } from "lucide-react";
import { typeStyles, FONT_SANS } from "../theme";

export default function DayHero({ day, onBack }) {
  const style = typeStyles[day.type];
  const Icon = day.icon;

  return (
    <div
      className="px-6 pt-12 pb-10 relative overflow-hidden"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/25 blur-2xl" />
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm opacity-90 hover:opacity-100 mb-6 relative"
        style={{ fontFamily: FONT_SANS }}
      >
        <ChevronLeft size={16} />
        Week
      </button>
      <div className="flex items-start justify-between relative">
        <div>
          <div
            className="text-xs uppercase tracking-[0.25em] opacity-75 mb-2"
            style={{ fontFamily: FONT_SANS, fontWeight: 600 }}
          >
            {day.day} · {style.tag}
          </div>
          <h1 className="text-4xl leading-tight font-semibold">{day.title}</h1>
          <p className="text-sm opacity-85 mt-3 max-w-xs italic">{day.accent}</p>
        </div>
        <Icon size={28} className="opacity-70 mt-1 shrink-0" />
      </div>
    </div>
  );
}
