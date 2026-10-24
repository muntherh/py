// Issues found while reading the five course files. Shown on the Sources page and in docs/SOURCE_COVERAGE.md.
import { pg, s } from "./course";
import type { SourceRef } from "./types";

export interface SourceNote {
  ref: SourceRef;
  severity: "info" | "review";
  note: string;
  handling: string;
}

export const SOURCE_NOTES: SourceNote[] = [
  {
    ref: s("L1", 4),
    severity: "info",
    note: "Slide numbers printed on Lecture 1 slides do not match their position in the deck (e.g. deck slide 4 shows “3”, deck slide 14 shows “14”). Lectures 2–4 have similar offsets or “<number>” placeholders.",
    handling: "Every citation on this site uses the slide's POSITION in the file (1 = title slide), so you can find it in your own copy of the file.",
  },
  {
    ref: s("L1", 8, 9),
    severity: "review",
    note: "Slide 8 lists “unauthorized deletion of data” as an integrity example, while slide 9 uses an accidental folder deletion as its availability scenario.",
    handling: "Both are taught as written. Lessons explain the distinction (unauthorized change → integrity; authorized users cannot access data → availability). Ask your instructor if a question is ambiguous.",
  },
  {
    ref: s("L1", 9),
    severity: "info",
    note: "The third discussion question on slide 9 is cut off: “What is the type of”.",
    handling: "Not used as a question.",
  },
  {
    ref: s("L1", 11, 12),
    severity: "info",
    note: "Slides 11–12 (Online Bank and Smartphone scenarios) are images with no extractable text.",
    handling: "Transcribed manually from the slide images.",
  },
  {
    ref: s("L1", 13),
    severity: "info",
    note: "The passive/active attack definitions on slide 13 are an embedded image.",
    handling: "Transcribed manually.",
  },
  {
    ref: s("L1", 21),
    severity: "info",
    note: "Typo on slide 21: “the role have and regulations play” (meaning “laws and regulations”). The Key Definitions and Omani law examples are an image.",
    handling: "Transcribed manually; wording corrected to “laws and regulations”.",
  },
  {
    ref: s("L2", 11),
    severity: "review",
    note: "Speaker notes say a biometric authentication transaction is “by definition, verification, and not authentication”, while the slide lists verifying a claim of identity as a use of biometrics.",
    handling: "Taught as the slide states (two uses: verify a claim; identification). The speaker-note remark is not used in questions.",
  },
  {
    ref: s("L2", 6),
    severity: "info",
    note: "The Identification → Authentication → Authorization → Accountability flow on slide 6 is a diagram.",
    handling: "Transcribed manually.",
  },
  {
    ref: s("L3", 2),
    severity: "review",
    note: "The Chapter 3 outline lists “Types of Security Controls”, but no Chapter 3 slide covers it.",
    handling: "Cross-referenced to Lecture 1, slides 15–16 (physical, logical/technical, administrative controls).",
  },
  {
    ref: s("L3", 7),
    severity: "review",
    note: "Slide 7's definition of Execute is garbled: “Execute: allowing us to presuming that a file”.",
    handling: "Presented as “Execute: run a file (the slide's sentence is cut off)”. No question tests the exact wording.",
  },
  {
    ref: s("L3", 13, 15, 16, 17),
    severity: "info",
    note: "The access-control model comparison and the multilevel model slides (13, 15, 16 and part of 17) are infographic images.",
    handling: "Transcribed manually, including the No Read Up / No Write Down and No Read Down / No Write Up rules.",
  },
  {
    ref: s("L4", 7, 11),
    severity: "info",
    note: "Lecture 4 is a legacy .ppt file; slide 7 (Nonrepudiation) and slide 11 (IDS infographic) are images.",
    handling: "Converted and transcribed manually.",
  },
  {
    ref: pg(5, 11),
    severity: "info",
    note: "Lab Manual pg. 11 contains both the Lab 4 “Checking your understanding” answers and the start of Lab 5; pg. 13 contains the end of Lab 5 and the start of Lab 6.",
    handling: "Citations on shared pages name the lab explicitly.",
  },
  {
    ref: pg(4, 8, 9, 10),
    severity: "review",
    note: "The Lab 4 screenshots contain garbled interface labels (e.g. “Reto actient”, “Permission direction”). Step 10 only says “choose the second option to remove all inherited permissions”; the wording of the first option is not in the manual.",
    handling: "The simulator follows the step text, not the screenshot labels. Its default permission entries and the first-option wording are marked as sample/simulation content.",
  },
  {
    ref: pg(4, 11),
    severity: "info",
    note: "The manual states that a Deny entry “natively overrides any existing Allow rules”.",
    handling: "Taught exactly as the manual states.",
  },
  {
    ref: pg(5, 12),
    severity: "info",
    note: "Typo “lase hour” (last hour). Step 4 lists the levels as “Information, Warning, Error, Audits”.",
    handling: "Corrected in lessons. The Event Viewer simulator's events are sample data; it places audit events in the Security log.",
  },
  {
    ref: pg(6, 13),
    severity: "info",
    note: "Typo “Caeser Cipher” in the Lab 6 overview. The alphabet table is an image.",
    handling: "Spelled “Caesar”; the alphabet table was transcribed and is verified by unit tests (A = 0 … Z = 25).",
  },
  {
    ref: pg(6, 15),
    severity: "info",
    note: "The Rail Fence solved example (MUSCAT → MAUCTS) is an image.",
    handling: "Transcribed; the cipher engine reproduces it exactly (unit tested).",
  },
  {
    ref: pg(6, 16),
    severity: "review",
    note: "Route cipher step 2 says to write the plaintext row by row, but Example 2's 5 × 5 grid (WE ARE DISCOVERED FLEE AT ONCE) is filled column by column. Example 2's routes are described only briefly (“Top Right corner down to the left”; “… using spiral model”).",
    handling: "The Crypto Lab supports both fill directions. Both Example 2 routes were reconstructed so that they reproduce the manual's ciphertexts exactly (TONCEADOEFLEEECRVERSADIEW and TONCEADOERAEWDVFLEEECSIER) — verified by unit tests. Confirm with your instructor which conventions the exam expects.",
  },
  {
    ref: pg(6, 16),
    severity: "info",
    note: "Route Example 1's route (spiral) is drawn by hand in an image.",
    handling: "Transcribed; HIDHOXDLEETG reproduced by the engine.",
  },
];

/** Things the course files do not specify. */
export const MISSING_INFO: string[] = [
  "The official question distribution (how many marks per question type or per chapter) — mock exams use a labelled practice blueprint.",
  "The exam duration — mock-exam timers are practice settings you can change.",
  "Whether Rail Fence / Route decryption, and Vigenère decryption, will be examined — the manual gives decryption formulas/steps, so they are included in practice.",
  "Lecture 2 slide 14 and Lecture 4 slide 20 are “Thank You” slides; title and textbook slides contain no examinable content.",
];
