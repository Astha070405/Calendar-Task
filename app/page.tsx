"use client";

import { useState } from "react";
import Calendar from "../components/Calendar";
import NotesPanel from "../components/NotesPanel";
import RangeSummary from "../components/RangeSummary";
import InsightsCard from "../components/InsightsCard";
import ActivityHeapmap from "../components/ActivityHeapmap";
import { useThemeColor } from "../hooks/useThemeColor";


export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

 const monthImages = [
  "https://images.unsplash.com/photo-1542601098-8fc114e148e2?q=80&w=1200", // Jan ❄️
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200", // Feb 💙

  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200",

  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200",

  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200", // May 🌿
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", // Jun 🌊
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200", // Jul ☀️
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200", // Aug 🌄
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200", // Sep 🍂
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200", // Oct 🍁
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200", // Nov 🌫️
  "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200", // Dec 🎄
];
  const monthIndex = currentDate.getMonth();
const image = monthImages[monthIndex];

const themeColor = useThemeColor(image);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">

    
      <div className="flex flex-col gap-6">

  
  <div className="relative rounded-3xl overflow-hidden shadow-xl h-[260px] group">


  <img
    key={currentDate.getMonth()}
    src={monthImages[currentDate.getMonth()]}
    className="w-full h-full object-cover 
               transition-all duration-700 ease-in-out 
               group-hover:scale-105"
  />


  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

  <div className="absolute bottom-5 left-6 text-white">
    <p className="text-sm opacity-80">
      {currentDate.getFullYear()}
    </p>

    <h1 className="text-3xl font-semibold">
      {currentDate.toLocaleString("default", { month: "long" })}
    </h1>
  </div>

</div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <RangeSummary />
    <InsightsCard />
  </div>

  <ActivityHeapmap className="hover:scale-[1.01] transition" />

</div>

      

        <div className="flex flex-col gap-6">

          <div className="p-4 bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg">
            <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
          </div>

          <NotesPanel />

        </div>

      </div>

    </main>
  );
}