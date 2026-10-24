import { useEffect, useState } from "react";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";
import { useSettings } from "../store/settingsStore";

const stores = [useSettings, useProgress, useExams];

/** True once every persisted store has been loaded from IndexedDB. */
export function useHydrated(): boolean {
  const [ready, setReady] = useState(() => stores.every((s) => s.persist.hasHydrated()));
  useEffect(() => {
    if (ready) return;
    const check = () => {
      if (stores.every((s) => s.persist.hasHydrated())) setReady(true);
    };
    const unsubs = stores.map((s) => s.persist.onFinishHydration(check));
    check();
    return () => unsubs.forEach((u) => u());
  }, [ready]);
  return ready;
}
