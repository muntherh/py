import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { idbStorage } from "./idbStorage";

export type Theme = "dark" | "light";

export interface SettingsState {
  theme: Theme;
  /** Show the optional Arabic explanation under each lesson block. */
  showArabic: boolean;
  /** Default mock-exam duration override (minutes); null = per-difficulty default. */
  examMinutes: number | null;
  set: (patch: Partial<Omit<SettingsState, "set" | "reset">>) => void;
  reset: () => void;
}

const defaults = { theme: "dark" as Theme, showArabic: false, examMinutes: null as number | null };

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      ...defaults,
      set: (patch) => set(patch),
      reset: () => set(defaults),
    }),
    { name: "isma-settings", storage: createJSONStorage(() => idbStorage), version: 1 },
  ),
);
