import { Link } from "react-router-dom";
import { typeStyles, FONT_SANS } from "../theme";

export default function DayCard({ day, index }) {
  const style = typeStyles[day.type];
  const Icon = day.icon;

  return (
    <Link
      to={`/day/${index}`}
      className="w-full rounded-2xl p-5 text-left flex items-center gap-4 hover:scale-[0.99] transition-transform"
      style={{
        backgroundColor: style.bg,
        color: style.text,
        boxShadow: "0 4px 12px rgba(42, 24, 16, 0.08)",
      }}
    >
      <div className="w-12 text-center">
        <div
          className="text-[10px] uppercase tracking-widest opacity-75"
          style={{ fontFamily: FONT_SANS, fontWeight: 700 }}
        >
          {day.short}
        </div>
        <div className="text-3xl font-semibold leading-none mt-1">{index + 1}</div>
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="text-xs uppercase tracking-widest opacity-75 mb-1"
          style={{ fontFamily: FONT_SANS, fontWeight: 700 }}
        >
          {style.tag}
        </div>
        <div className="text-xl leading-tight truncate font-semibold">{day.title}</div>
      </div>
      <Icon size={22} className="opacity-75 shrink-0" />
    </Link>
  );
}
