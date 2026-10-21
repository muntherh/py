import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { idbStorage } from "./idbStorage";

export type Theme = "system" | "dark" | "light";

export interface SettingsState {
  theme: Theme;
  editorFontSize: number;
  timeoutSeconds: number;
  lineWrap: boolean;
  showLineNumbers: boolean;
  set: (patch: Partial<Omit<SettingsState, "set" | "reset">>) => void;
  reset: () => void;
}

const defaults = { theme: "system" as Theme, editorFontSize: 14, timeoutSeconds: 10, lineWrap: false, showLineNumbers: true };

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      ...defaults,
      set: (patch) => set(patch),
      reset: () => set(defaults),
    }),
    { name: "pml-settings", storage: createJSONStorage(() => idbStorage), version: 1 },
  ),
);
