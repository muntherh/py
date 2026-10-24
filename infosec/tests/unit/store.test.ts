// Persistence: stores write to IndexedDB (fake-indexeddb in tests) and rehydrate.
import { describe, expect, it } from "vitest";
import { QUESTIONS } from "../../src/data/questions";
import { createAttempt } from "../../src/exam/engine";
import { useExams } from "../../src/store/examStore";
import { idbStorage } from "../../src/store/idbStorage";
import { useProgress } from "../../src/store/progressStore";

const tick = () => new Promise((r) => setTimeout(r, 50));

describe("progress store", () => {
  it("records answers, mistakes and resolution", async () => {
    const q = QUESTIONS[0];
    useProgress.getState().recordAnswer(q, 0, false, "wrong", "practice");
    expect(useProgress.getState().mistakes[q.id].resolved).toBe(false);
    useProgress.getState().recordAnswer(q, 1, true, "right", "practice");
    expect(useProgress.getState().questions[q.id]).toMatchObject({ attempts: 2, correct: 1, lastCorrect: true });
    expect(useProgress.getState().mistakes[q.id].resolved).toBe(true);
    await tick();
    const raw = await idbStorage.getItem("isma-progress");
    expect(raw).toContain(q.id);
  });

  it("flashcards follow Leitner boxes", () => {
    const r = useProgress.getState().rateFlashcard;
    r("fc-x", true);
    r("fc-x", true);
    expect(useProgress.getState().flashcards["fc-x"].box).toBe(2);
    r("fc-x", false);
    expect(useProgress.getState().flashcards["fc-x"].box).toBe(0);
  });

  it("rehydrates from storage", async () => {
    useProgress.getState().markLesson("ch1-cia", true, "CIA");
    await tick();
    const saved = (await idbStorage.getItem("isma-progress"))!;
    useProgress.setState({ completedLessons: {} }); // also writes the empty state…
    await tick();
    await idbStorage.setItem("isma-progress", saved); // …so put the saved snapshot back, then reload it
    await useProgress.persist.rehydrate();
    expect(useProgress.getState().completedLessons["ch1-cia"]).toBeTruthy();
  });
});

describe("exam store", () => {
  it("answers, submits once, and persists the graded result", async () => {
    const a = createAttempt("p", "Paper", "easy", 3, 40, Date.now(), "t1");
    useExams.getState().start(a);
    const first = a.items[0].question;
    useExams.getState().answer("t1", first.id, first.kind === "tf" ? { kind: "tf", value: true } : { kind: "mcq", choice: 0 });
    const done = useExams.getState().submit("t1", Date.now(), false);
    expect(done?.result?.max).toBe(20);
    // A second submit does nothing.
    expect(useExams.getState().submit("t1", Date.now(), false)).toBeUndefined();
    // Answers cannot change after submission.
    useExams.getState().answer("t1", first.id, undefined);
    expect(useExams.getState().attempts[0].answers[first.id]).toBeDefined();
    await tick();
    const saved = (await idbStorage.getItem("isma-exams"))!;
    expect(JSON.parse(saved).state.attempts[0].result.max).toBe(20);
    useExams.setState({ attempts: [] });
    await tick();
    await idbStorage.setItem("isma-exams", saved);
    await useExams.persist.rehydrate();
    expect(useExams.getState().attempts[0].result?.max).toBe(20);
  });
});
