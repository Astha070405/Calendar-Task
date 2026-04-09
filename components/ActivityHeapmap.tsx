"use client";

import { useCalendarStore } from "../store/useCalendarStore";
import { isSameDay } from "date-fns";

export default function ActivityHeatmap({ className }: { className?: string }) {
  const { startDate, endDate } = useCalendarStore();

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg border border-white/40">

      <h3 className="font-semibold text-gray-700 mb-3">
        📊 Activity Overview
      </h3>

      <div className="grid grid-cols-10 gap-2">
        {days.map((d) => {
          let active = false;

          if (startDate && endDate) {
            const current = new Date(startDate);
            current.setDate(d);
            active =
              current >= startDate &&
              current <= endDate;
          }

          return (
            <div
              key={d}
              className={`w-5 h-5 rounded-md transition-all
                ${active ? "bg-blue-500 scale-110" : "bg-gray-200"}
              `}
            />
          );
        })}
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Selected range activity visualization
      </p>
    </div>
  );
}