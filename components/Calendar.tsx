"use client";

import { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { generateCalendar } from "../utils/calendar";
import DayCell from "./DayCell";

export default function Calendar({ currentDate, setCurrentDate }: any) {


  const days = generateCalendar(currentDate);

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 border">

      <div className="flex justify-between items-center mb-4">
        <button
  onClick={() => setCurrentDate(subMonths(currentDate, 1))}
  className="w-10 h-10 flex items-center justify-center rounded-full 
             bg-white shadow-md border border-gray-200 
             text-gray-700 hover:bg-blue-500 hover:text-white 
             transition-all duration-200"
>
  ←
</button>

        <h2 className="font-semibold text-gray-700">
          {format(currentDate, "MMMM yyyy")}
        </h2>

       <button
  onClick={() => setCurrentDate(addMonths(currentDate, 1))}
  className="w-10 h-10 flex items-center justify-center rounded-full 
             bg-white shadow-md border border-gray-200 
             text-gray-700 hover:bg-blue-500 hover:text-white 
             transition-all duration-200"
>
  →
</button>
      </div>

      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {["SUN","MON","TUE","WED","THU","FRI","SAT"].map((d) => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      <div className="transition-all duration-300 ease-in-out">
  <div className="grid grid-cols-7 gap-2">
    {days.map((day, i) => (
      <DayCell key={i} date={day} />
    ))}
  </div>
</div>

    </div>
  );
}