import DayCard from "../components/DayCard";
import { week } from "../data";
import { COLORS, FONT_SANS, FONT_SERIF } from "../theme";

export default function WeekView() {
  return (
    <div className="min-h-screen" style={{ fontFamily: FONT_SERIF, backgroundColor: COLORS.bg }}>
      <div className="px-6 pt-14 pb-8 relative">
        <div
          className="absolute top-10 right-4 w-32 h-32 rounded-full blur-3xl opacity-50"
          style={{ backgroundColor: COLORS.blush }}
        />
        <div
          className="absolute top-32 -left-8 w-40 h-40 rounded-full blur-3xl opacity-40"
          style={{ backgroundColor: COLORS.cream }}
        />
        <div className="relative">
          <div
            className="text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: COLORS.terracotta, fontFamily: FONT_SANS, fontWeight: 700 }}
          >
            Your Week · Glute &amp; Core
          </div>
          <h1
            className="text-5xl leading-[1.05] font-semibold mb-3"
            style={{ color: COLORS.ink }}
          >
            Build the<br />
            <em
              className="font-normal"
              style={{ fontStyle: "italic", color: COLORS.terracotta }}
            >
              shape
            </em>{" "}
            you<br />
            actually want.
          </h1>
          <p
            className="text-base mt-4 max-w-sm leading-relaxed"
            style={{ color: COLORS.inkSoft, fontFamily: FONT_SANS }}
          >
            Two lifting days do the heavy work. Two pilates days for core and joy. The rest is recovery.
          </p>
        </div>
      </div>

      <div className="px-6 pb-12 space-y-3">
        {week.map((d, i) => (
          <DayCard key={i} day={d} index={i} />
        ))}
      </div>

      <div className="px-6 pb-16">
        <div className="border-t pt-6" style={{ borderColor: COLORS.border }}>
          <p
            className="text-sm italic leading-relaxed text-center"
            style={{ color: COLORS.inkSoft }}
          >
            "Progressive overload is the whole game.<br />
            Add weight or reps every week or two."
          </p>
        </div>
      </div>
    </div>
  );
}
