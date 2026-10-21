import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Save, Send, Eye } from "lucide-react";
import { EXERCISES, EXERCISE_MAP } from "../data/practice/exercises";
import { CONCEPT_MAP } from "../data/concepts";
import { topicById } from "../data/sources";
import { useProgress } from "../store/progressStore";
import { useSettings } from "../store/settingsStore";
import { pythonRunner } from "../runtime/PythonRunner";
import { gradeCoding, type CodingGrade } from "../grading/checks";
import { CodeRunner } from "../components/code/CodeRunner";
import { CodeBlock, TerminalBlock } from "../components/code/CodeBlock";
import { GradeReport } from "../components/questions/GradeReport";
import { HintPanel } from "../components/questions/HintPanel";
import { SourceCitation } from "../components/SourceCitation";
import { DifficultyChip, OriginChip, Chip } from "../components/ui/Chip";
import { RichText } from "../components/ui/RichText";
import { EmptyState } from "../components/ui/PageHeader";
import { useDebouncedEffect } from "../lib/useDebouncedEffect";
import { lessonForConcept } from "../lib/analytics";

const CATEGORY_LABEL = { write: "Write a program", complete: "Complete the code", fix: "Find & fix the error", modify: "Modify the program" };

export function ExercisePage() {
  const { exerciseId = "" } = useParams();
  const ex = EXERCISE_MAP[exerciseId];
  if (!ex) return <EmptyState title="Exercise not found">This exercise does not exist. <Link className="text-primary-text underline" to="/lab">Back to the Coding Lab</Link></EmptyState>;
  return <ExerciseView key={ex.id} exerciseId={ex.id} />;
}

function ExerciseView({ exerciseId }: { exerciseId: string }) {
  const ex = EXERCISE_MAP[exerciseId];
  const navigate = useNavigate();
  const rec = useProgress((s) => s.exercises[ex.id]);
  const saveCode = useProgress((s) => s.saveExerciseCode);
  const recordSubmission = useProgress((s) => s.recordExerciseSubmission);
  const revealHint = useProgress((s) => s.revealHint);
  const timeoutSeconds = useSettings((s) => s.timeoutSeconds);
  const [code, setCode] = useState(rec?.code || ex.starterCode);
  const [grade, setGrade] = useState<CodingGrade | null>(null);
  const [grading, setGrading] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [saved, setSaved] = useState(true);
  const submitted = (rec?.attempts ?? 0) > 0;

  useDebouncedEffect(() => {
    if (code !== (rec?.code || ex.starterCode)) {
      saveCode(ex.id, code);
      setSaved(true);
    }
  }, [code]);

  const idx = EXERCISES.findIndex((e) => e.id === ex.id);
  const prev = EXERCISES[idx - 1];
  const next = EXERCISES[idx + 1];
  const visibleTests = useMemo(() => ex.tests.filter((t) => !t.hidden), [ex]);

  async function submit() {
    setGrading(true);
    setGrade(null);
    saveCode(ex.id, code);
    const g = await gradeCoding(ex, code, (c, inputs) => pythonRunner.run({ code: c, inputs, timeoutMs: Math.min(timeoutSeconds, 10) * 1000 }));
    setGrade(g);
    recordSubmission(ex.id, code, g.fraction, g.passedAll, ex.title);
    setGrading(false);
  }

  return (
    <div className="space-y-5 animate-fade-up">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Link to="/lab" className="btn-ghost btn-sm">
          <ArrowLeft size={14} /> Coding Lab
        </Link>
        <span className="text-subtle">/</span>
        <span className="text-muted">Topic {topicById(ex.topicId).number}</span>
      </div>
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <DifficultyChip difficulty={ex.difficulty} />
          <Chip tone="accent">{CATEGORY_LABEL[ex.category]}</Chip>
          <OriginChip origin={ex.origin} />
          {rec?.passed && (
            <Chip tone="success">
              <CheckCircle2 size={12} /> Solved
            </Chip>
          )}
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{ex.title}</h1>
        <SourceCitation refs={ex.sources} />
      </header>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <section className="space-y-4" aria-label="Task">
          <div className="card space-y-3 p-4">
            <h2 className="label">Task</h2>
            {ex.prompt.split("\n").filter(Boolean).map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-ink">
                <RichText text={p} />
              </p>
            ))}
            {ex.code && <CodeBlock code={ex.code} title="Given code" />}
          </div>
          {ex.sampleRun !== undefined && <TerminalBlock title="Sample run" text={ex.sampleRun} />}
          <div className="card space-y-2 p-4">
            <h2 className="label">Visible test cases</h2>
            <p className="text-xs text-subtle">
              Your program is run with these inputs and its printed output is checked. There are also {ex.tests.length - visibleTests.length} hidden test(s) for edge cases.
            </p>
            <ul className="space-y-1.5">
              {visibleTests.map((t) => (
                <li key={t.id} className="rounded-lg bg-surface-2 px-3 py-2 text-sm">
                  <span className="text-ink">{t.description}</span>
                  {t.inputs.length > 0 && <span className="mt-0.5 block font-mono text-xs text-muted">inputs: {t.inputs.map((x) => JSON.stringify(x)).join(", ")}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="card space-y-3 p-4">
            <h2 className="label">Hints</h2>
            <HintPanel hints={ex.hints} revealed={rec?.hintsRevealed ?? 0} onReveal={(l) => revealHint(ex.id, l)} submitted={submitted} />
          </div>
          <div className="card space-y-2 p-4 text-sm">
            <h2 className="label">Concepts</h2>
            <div className="flex flex-wrap gap-2">
              {ex.conceptIds.map((c) => {
                const lesson = lessonForConcept(c);
                return lesson ? (
                  <Link key={c} to={`/learn/${lesson.id}`} className="chip border-line bg-surface-2 text-muted hover:text-ink">
                    {CONCEPT_MAP[c]?.title ?? c} →
                  </Link>
                ) : (
                  <Chip key={c}>{CONCEPT_MAP[c]?.title ?? c}</Chip>
                );
              })}
            </div>
          </div>
        </section>

        <section className="space-y-4" aria-label="Your solution">
          <div className="card space-y-3 p-4">
            <CodeRunner
              code={code}
              onChange={(v) => {
                setCode(v);
                setSaved(false);
              }}
              initialCode={ex.starterCode}
              ariaLabel={`Code editor for ${ex.title}`}
              minHeight="260px"
              extraActions={
                <span className="flex items-center gap-1 text-xs text-subtle" aria-live="polite">
                  <Save size={13} /> {saved ? "Saved" : "Saving…"}
                </span>
              }
            />
            <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
              <button className="btn-primary" onClick={submit} disabled={grading} data-testid="submit-exercise">
                {grading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Submit for grading
              </button>
              <span className="text-xs text-subtle">Runs all tests (visible and hidden) on your current code.</span>
            </div>
          </div>
          {grade && (
            <div className="card p-4">
              <GradeReport grade={grade} />
            </div>
          )}
          {submitted && (
            <div className="card space-y-3 p-4">
              <button className="btn-secondary" onClick={() => setShowSolution(!showSolution)} aria-expanded={showSolution}>
                <Eye size={15} /> {showSolution ? "Hide" : "Show"} a reference solution
              </button>
              {showSolution && (
                <>
                  <p className="text-xs text-subtle">One correct solution — other programs that behave the same way are equally correct.</p>
                  <CodeBlock code={ex.solution} title="Reference solution" />
                  <p className="text-sm leading-relaxed text-muted">
                    <RichText text={ex.hints[3]} />
                  </p>
                </>
              )}
            </div>
          )}
        </section>
      </div>

      <nav className="flex flex-wrap justify-between gap-2 border-t border-line pt-4" aria-label="Exercise navigation">
        {prev ? (
          <button className="btn-secondary" onClick={() => navigate(`/lab/exercise/${prev.id}`)}>
            <ArrowLeft size={15} /> {prev.title}
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button className="btn-secondary" onClick={() => navigate(`/lab/exercise/${next.id}`)}>
            {next.title} <ArrowRight size={15} />
          </button>
        )}
      </nav>
    </div>
  );
}
