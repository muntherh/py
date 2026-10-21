import { useEffect } from "react";

export function useDebouncedEffect(fn: () => void, deps: unknown[], ms = 600) {
  useEffect(() => {
    const id = setTimeout(fn, ms);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
