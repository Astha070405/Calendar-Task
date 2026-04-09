"use client";

import { useCalendarStore } from "../store/useCalendarStore";
import { format, differenceInDays, isWeekend } from "date-fns";

export default function InsightsCard() {
  const { startDate, endDate } = useCalendarStore();

  const today = new Date();

  let totalDays = 0;
  let weekendDays = 0;

  if (startDate && endDate) {
    totalDays = differenceInDays(endDate, startDate) + 1;

    let current = new Date(startDate);
    while (current <= endDate) {
      if (isWeekend(current)) weekendDays++;
      current.setDate(current.getDate() + 1);
    }
  }

  return (
  <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg hover:shadow-xl transition border border-white/40">

  <h3 className="text-sm text-gray-500">Today</h3>

  <p className="text-lg font-semibold text-gray-800 mb-3">
    {format(today, "dd MMM yyyy")}
  </p>

  {startDate ? (
    <div className="space-y-2 text-sm text-gray-600">
      <p>📅 Total Days: {totalDays}</p>
      <p>🌴 Weekends: {weekendDays}</p>
    </div>
  ) : (
    <p className="text-sm text-gray-400">
      Select a range to see insights ✨
    </p>
  )}
</div>
  );
}