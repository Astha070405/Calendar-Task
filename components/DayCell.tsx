"use client";

import { isSameDay, isWithinInterval } from "date-fns";
import { useCalendarStore } from "../store/useCalendarStore";

export default function DayCell({ date }: { date: Date }) {

  if (!date || !(date instanceof Date)) return null;

  const { startDate, endDate, setStartDate, setEndDate } = useCalendarStore();

  const handleClick = () => {
    if (!startDate) setStartDate(date);
    else if (!endDate) setEndDate(date);
    else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const isSelected =
    startDate &&
    endDate &&
    isWithinInterval(date, { start: startDate, end: endDate });

  const isStart = startDate && isSameDay(date, startDate);
  const isEnd = endDate && isSameDay(date, endDate);

  const today = new Date();
  const isToday = isSameDay(date, today);
const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  return (
    <div
      onClick={handleClick}
      className={`p-3 text-sm text-center cursor-pointer rounded-lg transition-all duration-200
  text-gray-800
  hover:bg-gray-100 hover:scale-105
 ${isSelected ? "bg-blue-100 rounded-none" : ""}
  ${isStart ? "bg-blue-500 text-white font-semibold shadow" : ""}
  ${isEnd ? "bg-blue-500 text-white font-semibold shadow" : ""}
  ${isToday && !isStart && !isEnd && !isSelected 
  ? "border-2 border-blue-500 bg-blue-50 font-semibold" 
  : ""}
  ${isWeekend ? "text-red-400" : ""}
`}
    >
      {date.getDate()}
    </div>
  );
}