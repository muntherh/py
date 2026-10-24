import { describe, expect, it } from "vitest";
import {
  caesar,
  diagnoseCaesar,
  diagnoseRail,
  diagnoseRoute,
  diagnoseVigenere,
  mod26,
  railDecrypt,
  railEncrypt,
  repeatKey,
  routeDecrypt,
  routeEncrypt,
  routeOrder,
  toChar,
  toNum,
  vigenere,
} from "../../src/crypto/ciphers";

// Every expected value below is copied from the Lab Manual (Lab 6, pg. 13–16).
describe("alphabet table (pg. 13)", () => {
  it("maps A=0 … Z=25", () => {
    expect(toNum("A")).toBe(0);
    expect(toNum("M")).toBe(12);
    expect(toNum("N")).toBe(13);
    expect(toNum("Z")).toBe(25);
    expect(toChar(25)).toBe("Z");
    expect(toChar(26)).toBe("A");
    expect(mod26(-3)).toBe(23);
  });
});

describe("Caesar (pg. 14)", () => {
  it("solved example: SECRET, K=3 → VHFUHW with the manual's table", () => {
    const t = caesar("SECRET", 3, "encrypt");
    expect(t.output).toBe("VHFUHW");
    expect(t.rows.map((r) => [r.letter, r.x, r.raw, r.result, r.out])).toEqual([
      ["S", 18, 21, 21, "V"],
      ["E", 4, 7, 7, "H"],
      ["C", 2, 5, 5, "F"],
      ["R", 17, 20, 20, "U"],
      ["E", 4, 7, 7, "H"],
      ["T", 19, 22, 22, "W"],
    ]);
  });
  it("question: CRYPTO, K=7 → JYFWAV", () => {
    expect(caesar("CRYPTO", 7, "encrypt").output).toBe("JYFWAV");
  });
  it("decrypts back", () => {
    expect(caesar("VHFUHW", 3, "decrypt").output).toBe("SECRET");
    expect(caesar("JYFWAV", 7, "decrypt").output).toBe("CRYPTO");
  });
});

describe("Vigenère (pg. 14–15)", () => {
  it("repeats the key: WORD → WORDWO", () => {
    expect(repeatKey("WORD", 6)).toBe("WORDWO");
  });
  it("solved example: SECRET / WORD → OSTUAH with the manual's sums", () => {
    const t = vigenere("SECRET", "WORD", "encrypt");
    expect(t.output).toBe("OSTUAH");
    expect(t.rows.map((r) => [r.letter, r.keyLetter, r.v, r.k, r.raw, r.result, r.out])).toEqual([
      ["S", "W", 18, 22, 40, 14, "O"],
      ["E", "O", 4, 14, 18, 18, "S"],
      ["C", "R", 2, 17, 19, 19, "T"],
      ["R", "D", 17, 3, 20, 20, "U"],
      ["E", "W", 4, 22, 26, 0, "A"],
      ["T", "O", 19, 14, 33, 7, "H"],
    ]);
  });
  it("decrypts with (C − K) mod 26", () => {
    expect(vigenere("OSTUAH", "WORD", "decrypt").output).toBe("SECRET");
  });
});

describe("Rail Fence (pg. 15–16)", () => {
  it("solved example: MUSCAT, depth 3 → MAUCTS", () => {
    const t = railEncrypt("MUSCAT", 3);
    expect(t.output).toBe("MAUCTS");
    expect(t.rails).toEqual(["MA", "UCT", "S"]);
  });
  it("question: CIPHERTEXT, depth 3 → CEXIHRETPT", () => {
    expect(railEncrypt("CIPHERTEXT", 3).output).toBe("CEXIHRETPT");
  });
  it("decrypts by rebuilding the placeholders", () => {
    const d = railDecrypt("CEXIHRETPT", 3);
    expect(d.counts).toEqual([3, 5, 2]);
    expect(d.output).toBe("CIPHERTEXT");
    expect(railDecrypt("MAUCTS", 3).output).toBe("MUSCAT");
  });
});

describe("Route (pg. 16)", () => {
  it("Example 1: HIDETHEGOLD, 3 cols × 4 rows, spiral inward clockwise from top-left → HIDHOXDLEETG", () => {
    const t = routeEncrypt("HIDETHEGOLD", 4, 3, "rows", "spiral-tl");
    expect(t.grid).toEqual([
      ["H", "I", "D"],
      ["E", "T", "H"],
      ["E", "G", "O"],
      ["L", "D", "X"],
    ]);
    expect(t.padding).toBe(1);
    expect(t.output).toBe("HIDHOXDLEETG");
  });
  it("Example 2 grid is written column by column", () => {
    const t = routeEncrypt("WE ARE DISCOVERED FLEE AT ONCE", 5, 5, "columns", "corner-tr");
    expect(t.grid.map((r) => r.join(""))).toEqual(["WDVFT", "EIELO", "ASREN", "RCEEC", "EODAE"]);
  });
  it("Example 2, Key1 (top-right corner down to the left) → TONCEADOEFLEEECRVERSADIEW", () => {
    expect(routeEncrypt("WEAREDISCOVEREDFLEEATONCE", 5, 5, "columns", "corner-tr").output).toBe("TONCEADOEFLEEECRVERSADIEW");
  });
  it("Example 2, spiral model from top-right → TONCEADOERAEWDVFLEEECSIER", () => {
    expect(routeEncrypt("WEAREDISCOVEREDFLEEATONCE", 5, 5, "columns", "spiral-tr").output).toBe("TONCEADOERAEWDVFLEEECSIER");
  });
  it("decrypts every example back to the plaintext", () => {
    expect(routeDecrypt("HIDHOXDLEETG", 4, 3, "rows", "spiral-tl").output).toBe("HIDETHEGOLDX");
    expect(routeDecrypt("TONCEADOEFLEEECRVERSADIEW", 5, 5, "columns", "corner-tr").output).toBe("WEAREDISCOVEREDFLEEATONCE");
    expect(routeDecrypt("TONCEADOERAEWDVFLEEECSIER", 5, 5, "columns", "spiral-tr").output).toBe("WEAREDISCOVEREDFLEEATONCE");
  });
  it("every route visits every cell exactly once, for many grid shapes", () => {
    for (let r = 1; r <= 7; r++)
      for (let c = 1; c <= 7; c++)
        for (const k of ["spiral-tl", "spiral-tr", "corner-tr"] as const) {
          const order = routeOrder(r, c, k);
          expect(order.length).toBe(r * c);
          expect(new Set(order.map(([a, b]) => `${a},${b}`)).size).toBe(r * c);
        }
  });
});

describe("round trips", () => {
  const words = ["SECURITY", "AUTHENTICATION", "FIREWALL", "NONREPUDIATION", "AB", "Z"];
  it("all ciphers invert", () => {
    for (const w of words) {
      for (let k = 1; k <= 25; k++) expect(caesar(caesar(w, k, "encrypt").output, k, "decrypt").output).toBe(w);
      for (const key of ["KEY", "LEMON", "Z"]) expect(vigenere(vigenere(w, key, "encrypt").output, key, "decrypt").output).toBe(w);
      for (let d = 2; d <= 5; d++) expect(railDecrypt(railEncrypt(w, d).output, d).output).toBe(w);
    }
  });
});

describe("mistake diagnosis", () => {
  it("accepts the right answer ignoring spaces and case", () => {
    expect(diagnoseCaesar("SECRET", 3, "encrypt", "vhf uhw").correct).toBe(true);
  });
  it("detects the wrong direction in Caesar", () => {
    const d = diagnoseCaesar("SECRET", 3, "encrypt", caesar("SECRET", 3, "decrypt").output);
    expect(d.correct).toBe(false);
    expect(d.summary).toMatch(/subtracted K/);
  });
  it("detects A=1 off-by-one", () => {
    const d = diagnoseCaesar("SECRET", 3, "encrypt", "WHFUHW");
    expect(d.issues).toHaveLength(1);
    expect(d.issues[0].index).toBe(0);
    expect(d.issues[0].reason).toMatch(/Off by one/);
  });
  it("explains the wrap-around in Vigenère", () => {
    const d = diagnoseVigenere("SECRET", "WORD", "encrypt", "OSTUAI");
    expect(d.issues[0].reason).toMatch(/33 − 26 = 7/);
  });
  it("detects a misaligned Vigenère key", () => {
    const wrong = vigenere("SECRET", "ORDW", "encrypt").output;
    expect(diagnoseVigenere("SECRET", "WORD", "encrypt", wrong).summary).toMatch(/misaligned/);
  });
  it("detects a wrong rail depth", () => {
    const d = diagnoseRail("CIPHERTEXT", 3, "encrypt", railEncrypt("CIPHERTEXT", 2).output);
    expect(d.summary).toMatch(/depth 2/);
  });
  it("detects changed letters in a transposition", () => {
    expect(diagnoseRail("MUSCAT", 3, "encrypt", "MAUCTZ").summary).toMatch(/only re-orders/);
  });
  it("detects the wrong route", () => {
    const wrong = routeEncrypt("WEAREDISCOVEREDFLEEATONCE", 5, 5, "columns", "spiral-tr").output;
    expect(diagnoseRoute("WEAREDISCOVEREDFLEEATONCE", 5, 5, "columns", "corner-tr", "encrypt", wrong).summary).toMatch(/different route/);
  });
  it("detects the wrong fill direction", () => {
    const wrong = routeEncrypt("HIDETHEGOLD", 4, 3, "columns", "spiral-tl").output;
    expect(diagnoseRoute("HIDETHEGOLD", 4, 3, "rows", "spiral-tl", "encrypt", wrong).summary).toMatch(/column by column/);
  });
  it("accepts a route decryption without padding", () => {
    expect(diagnoseRoute("HIDHOXDLEETG", 4, 3, "rows", "spiral-tl", "decrypt", "HIDETHEGOLD").correct).toBe(true);
  });
});
