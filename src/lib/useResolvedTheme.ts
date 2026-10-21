import { useEffect, useState } from "react";
import { useSettings } from "../store/settingsStore";

const query = "(prefers-color-scheme: dark)";

/** The theme actually shown: the user's choice, or the device setting for "system". */
export function useResolvedTheme(): "light" | "dark" {
  const theme = useSettings((s) => s.theme);
  const [systemDark, setSystemDark] = useState(() => typeof matchMedia !== "undefined" && matchMedia(query).matches);
  useEffect(() => {
    if (typeof matchMedia === "undefined") return;
    const mq = matchMedia(query);
    const on = () => setSystemDark(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return theme === "system" ? (systemDark ? "dark" : "light") : theme;
}
