// IndexedDB-backed storage for zustand's persist middleware (falls back to
// memory when IndexedDB is unavailable, e.g. some private-browsing modes).
import { createStore, del, get, set } from "idb-keyval";
import type { StateStorage } from "zustand/middleware";

const memory = new Map<string, string>();
let store: ReturnType<typeof createStore> | null = null;
try {
  if (typeof indexedDB !== "undefined") store = createStore("cssy1208-midterm-academy", "state");
} catch {
  store = null;
}

export const idbStorage: StateStorage = {
  getItem: async (name) => {
    if (!store) return memory.get(name) ?? null;
    try {
      return (await get<string>(name, store)) ?? null;
    } catch {
      return memory.get(name) ?? null;
    }
  },
  setItem: async (name, value) => {
    memory.set(name, value);
    if (!store) return;
    try {
      await set(name, value, store);
    } catch {
      /* keep in memory */
    }
  },
  removeItem: async (name) => {
    memory.delete(name);
    if (!store) return;
    try {
      await del(name, store);
    } catch {
      /* ignore */
    }
  },
};
