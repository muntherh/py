import { Link } from "react-router-dom";
import { CheckCircle2, Circle } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { UNITS } from "../data/course";
import { lessonsForUnit } from "../data/lessons";
import { UNIT_COLOR } from "../lib/unitStyle";
import { useProgress } from "../store/progressStore";

export function LearnPage() {
  const done = useProgress((s) => s.completedLessons);
  return (
    <div>
      <PageHeader eyebrow="Learn" title="Chapter lessons & lab tutorials" description="Every lesson restates the slides or Lab Manual in simple English, with an optional Arabic explanation and the exact source reference on each block." />
      {(["chapter", "lab"] as const).map((kind) => (
        <section key={kind} className="mb-10">
          <h2 className="mb-4 font-display text-xl font-bold">{kind === "chapter" ? "Theory — Chapters 1 to 4" : "Labs 4, 5 and 6 (questions based on lab activities)"}</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {UNITS.filter((u) => u.kind === kind).map((u) => {
              const ls = lessonsForUnit(u.id);
              const n = ls.filter((l) => done[l.id]).length;
              return (
                <div key={u.id} id={u.id} className="card scroll-mt-24 p-5">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold tracking-wider uppercase" style={{ color: UNIT_COLOR[u.id] }}>{u.kind === "chapter" ? `Chapter ${u.number}` : `Lab ${u.number}`}</span>
                    <span className="text-xs text-subtle">{n}/{ls.length} done</span>
                  </div>
                  <h3 className="font-display text-lg font-bold">{u.title}</h3>
                  <p lang="ar" dir="rtl" className="text-sm text-subtle">{u.titleAr}</p>
                  <p className="mt-1 mb-3 text-sm text-muted">{u.description}</p>
                  <ol className="space-y-1">
                    {ls.map((l) => (
                      <li key={l.id}>
                        <Link to={`/learn/${l.id}`} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-surface-2">
                          {done[l.id] ? <CheckCircle2 size={16} className="shrink-0 text-success" /> : <Circle size={16} className="shrink-0 text-subtle" />}
                          <span>{l.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
