import type { TopicId } from "../data/types";

/** Each topic has its own hue so screens are easy to scan. */
export const TOPIC_STYLE: Record<TopicId, { color: string; soft: string; text: string; chip: string; dot: string }> = {
  t2: { color: "var(--t2)", soft: "bg-t2-soft", text: "text-t2-text", chip: "bg-t2-soft text-t2-text", dot: "bg-t2" },
  t3: { color: "var(--t3)", soft: "bg-t3-soft", text: "text-t3-text", chip: "bg-t3-soft text-t3-text", dot: "bg-t3" },
  t4: { color: "var(--t4)", soft: "bg-t4-soft", text: "text-t4-text", chip: "bg-t4-soft text-t4-text", dot: "bg-t4" },
};
