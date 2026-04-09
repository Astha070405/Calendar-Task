"use client";

import { useCalendarStore } from "../store/useCalendarStore";
import { differenceInDays, format } from "date-fns";

export default function RangeSummary() {
  const { startDate, endDate } = useCalendarStore();

  if (!startDate) {
    return (
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 h-[150px] flex items-center justify-center text-gray-400">
        Select dates to see summary
      </div>
    );
  }

  const days = endDate
    ? differenceInDays(endDate, startDate) + 1
    : 1;

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg hover:shadow-xl transition border border-white/40">

      <h3 className="text-lg font-semibold text-gray-700">
        📅 Selected Range
      </h3>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium">Start:</span>{" "}
          {format(startDate, "dd MMM yyyy")}
        </p>

        <p>
          <span className="font-medium">End:</span>{" "}
          {endDate
            ? format(endDate, "dd MMM yyyy")
            : "Not selected"}
        </p>
      </div>

     <div className="bg-blue-50 rounded-xl p-4 text-center">
  <p className="text-2xl font-bold text-blue-600">
    {days}
  </p>
  <p className="text-sm text-gray-500">Total Days</p>
</div>

    </div>
  );
}