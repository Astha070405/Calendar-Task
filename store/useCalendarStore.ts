import { create } from "zustand";

interface State {
  startDate: Date | null;
  endDate: Date | null;
  notes: string;

  setStartDate: (d: Date) => void;
  setEndDate: (d: Date | null) => void;
  setNotes: (n: string) => void;
}

export const useCalendarStore = create<State>((set) => ({
  startDate: null,
  endDate: null,
  notes: "",

  setStartDate: (d) => set({ startDate: d }),
  setEndDate: (d) => set({ endDate: d }),

  setNotes: (n) => {
    localStorage.setItem("notes", n);
    set({ notes: n });
  },
}));