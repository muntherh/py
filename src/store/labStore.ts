// Coding Lab notebook cells and saved snippets.
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { idbStorage } from "./idbStorage";

export interface NotebookCell {
  id: string;
  code: string;
}

export interface SavedFile {
  name: string;
  code: string;
  updatedAt: number;
}

const WELCOME: NotebookCell[] = [
  { id: "c1", code: '# Welcome to the Python Coding Lab!\n# Press Shift+Enter (or the Run button) to run a cell.\nprint("Hello World")' },
  { id: "c2", code: 'name = input("Enter your name: ")\nprint(f"Hello {name} !")' },
  { id: "c3", code: "# Cells share variables, like Jupyter. The last expression is displayed:\nname" },
];

interface LabState {
  cells: NotebookCell[];
  files: Record<string, SavedFile>;
  setCellCode: (id: string, code: string) => void;
  addCell: (afterId?: string, code?: string) => string;
  removeCell: (id: string) => void;
  moveCell: (id: string, dir: -1 | 1) => void;
  resetNotebook: () => void;
  saveFile: (name: string, code: string) => void;
  deleteFile: (name: string) => void;
}

let counter = Date.now();
const newId = () => `c${(counter++).toString(36)}`;

export const useLab = create<LabState>()(
  persist(
    (set, get) => ({
      cells: WELCOME,
      files: {},
      setCellCode: (id, code) => set({ cells: get().cells.map((c) => (c.id === id ? { ...c, code } : c)) }),
      addCell: (afterId, code = "") => {
        const id = newId();
        const cells = [...get().cells];
        const idx = afterId ? cells.findIndex((c) => c.id === afterId) : cells.length - 1;
        cells.splice(idx + 1, 0, { id, code });
        set({ cells });
        return id;
      },
      removeCell: (id) => {
        const cells = get().cells.filter((c) => c.id !== id);
        set({ cells: cells.length ? cells : [{ id: newId(), code: "" }] });
      },
      moveCell: (id, dir) => {
        const cells = [...get().cells];
        const i = cells.findIndex((c) => c.id === id);
        const j = i + dir;
        if (i < 0 || j < 0 || j >= cells.length) return;
        [cells[i], cells[j]] = [cells[j], cells[i]];
        set({ cells });
      },
      resetNotebook: () => set({ cells: WELCOME }),
      saveFile: (name, code) => set({ files: { ...get().files, [name]: { name, code, updatedAt: Date.now() } } }),
      deleteFile: (name) => {
        const files = { ...get().files };
        delete files[name];
        set({ files });
      },
    }),
    { name: "pml-lab", storage: createJSONStorage(() => idbStorage), version: 1 },
  ),
);
