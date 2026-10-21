import type { ExamDefinition } from "../../data/types";

export const KIND_LABEL: Record<string, string> = {
  mcq: "Multiple choice",
  tracing: "Code tracing",
  error: "Error identification",
  coding: "Practical coding",
};

export function examTotals(exam: ExamDefinition) {
  const items = exam.sections.reduce((n, s) => n + s.questionIds.length, 0);
  const points = exam.sections.reduce((n, s) => n + s.questionIds.length * s.pointsEach, 0);
  return { items, points };
}
