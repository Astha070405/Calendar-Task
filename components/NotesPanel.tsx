"use client";

import { useEffect } from "react";
import { useCalendarStore } from "../store/useCalendarStore";

export default function NotesPanel() {
  const { notes, setNotes } = useCalendarStore();

  // LOAD
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(saved);
  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-5">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Notes</h3>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your plans..."
        className="w-full h-36 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
      />
    </div>
  );
}