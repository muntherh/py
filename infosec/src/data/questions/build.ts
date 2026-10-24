// Small constructors that fill in unitId (from the topic id prefix) and defaults,
// so the question files stay readable.
import type { CryptoQ, FillQ, MatchQ, McqQ, OrderQ, ShortQ, TfQ, UnitId } from "../types";

type Auto = "kind" | "unitId" | "origin" | "style";
type With<T> = Omit<T, Auto> & Partial<Pick<McqQ, "origin" | "style">>;

function unitOf(topicId: string): UnitId {
  return topicId.split("-")[0] as UnitId;
}

function base<T extends { topicId: string }>(o: T, style: McqQ["style"] = "concept") {
  return { unitId: unitOf(o.topicId), origin: "original" as const, style, ...o };
}

export const mcq = (o: With<McqQ>): McqQ => ({ kind: "mcq", ...base(o) });
export const tf = (o: With<TfQ>): TfQ => ({ kind: "tf", ...base(o) });
export const fill = (o: With<FillQ>): FillQ => ({ kind: "fill", ...base(o) });
export const match = (o: With<MatchQ>): MatchQ => ({ kind: "match", ...base(o) });
export const order = (o: With<OrderQ>): OrderQ => ({ kind: "order", ...base(o, "procedure") });
export const short = (o: With<ShortQ>): ShortQ => ({ kind: "short", ...base(o) });
export const crypto = (o: With<CryptoQ>): CryptoQ => ({ kind: "crypto", ...base(o, "calculation") });
