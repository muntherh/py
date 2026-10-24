import { s } from "../course";
import type { Lesson } from "../types";

export const CH2_LESSONS: Lesson[] = [
  {
    id: "ch2-iaa",
    unitId: "ch2",
    topicId: "ch2-iaa",
    order: 1,
    title: "Identification, authentication and authorization",
    summary: "The claim, the proof, and the permission — always in that order.",
    blocks: [
      {
        heading: "Why we need them",
        body: [
          "Digital interactions lack the trust cues of face-to-face communication (body language, physical presence). We need a reliable protocol to verify that people, systems, and services are who they claim to be.",
          "**Identification** is the **claim** of what someone or something is. **Authentication** establishes **whether this claim is true**.",
          "Example: a payment card that requires a PIN. Swiping the card asserts *I am the person on this card* — that is identification only. Entering the PIN completes the **authentication** (speaker notes).",
        ],
        ar: "التعريف (Identification) هو ادعاء الهوية: من أنت أو ما هو الشيء. المصادقة (Authentication) تثبت هل هذا الادعاء صحيح. مثال بطاقة الدفع: تمرير البطاقة = تعريف فقط، وإدخال الرقم السري PIN = مصادقة.",
        source: s("L2", 3),
      },
      {
        heading: "Identification",
        body: ["Identification may include:"],
        bullets: [
          "who we claim to be as a person (full names, shortened names, images of ourselves, nicknames, account numbers, usernames, ID cards)",
          "who a computer system claims to be over the network",
          "who the originating party of an e-mail claims to be",
          "what authority we claim to have, or similar transactions",
          "**However: identification is public and unverified.** Anyone (or any system) can claim to be 10.0.0.5.",
        ],
        table: {
          headers: ["Speaker-note point", "Meaning"],
          rows: [
            ["Not unique", "Most identification methods are not unique; even a fingerprint can sometimes be duplicated or spoofed."],
            ["Can change", "Names, account numbers and usernames can change easily; even physical identifiers can change."],
            ["Not reliable alone", "An unvalidated claim of identity is not reliable information on its own."],
          ],
        },
        ar: "قد يشمل التعريف: الاسم، اسم المستخدم، رقم الحساب، بطاقة الهوية، ما يدّعيه نظام حاسوبي عن نفسه في الشبكة، أو مرسل البريد الإلكتروني. لكن التعريف عام وغير مُتحقَّق منه؛ أي شخص يستطيع أن يدعي أنه 10.0.0.5. والادعاء غير المُتحقَّق منه لا يُعتمد عليه وحده.",
        source: s("L2", 4),
      },
      {
        heading: "Authentication and its four factors",
        body: [
          "**Authentication** is the set of methods we use to establish a claim of identity as being true. It **only establishes whether the claim of identity is correct** — it does not decide permissions.",
        ],
        table: {
          headers: ["Factor", "Examples (slide 5)"],
          rows: [
            ["Something you know", "Passwords, PIN numbers"],
            ["Something you have", "Smart card, security token"],
            ["Something you are", "Fingerprint, voice, retina, iris"],
            ["Where you are", "Inside or outside a company firewall; proximity of login location to a personal GPS location"],
          ],
        },
        ar: "المصادقة هي مجموعة الأساليب التي نثبت بها صحة ادعاء الهوية، وهي تثبت صحة الادعاء فقط. عوامل المصادقة الأربعة: شيء تعرفه (كلمة مرور، PIN)، شيء تملكه (بطاقة ذكية، رمز أمان)، شيء أنت عليه (بصمة الإصبع، الصوت، شبكية أو قزحية العين)، والمكان الذي أنت فيه (داخل/خارج جدار الحماية، موقع GPS).",
        source: s("L2", 5),
      },
      {
        heading: "Authorization (granting permissions)",
        body: [
          "**Authorization** is the process of verifying that an **authenticated identity has permission** to access a specific resource or perform a specific action.",
          "**Authentication must always happen before authorization.** A system cannot safely grant permissions to an unverified identity.",
          "The slide's flow: **Identification → Authentication → Authorization → Accountability**.",
        ],
        visual: "iaa-flow",
        ar: "التفويض/التخويل (Authorization) هو التحقق من أن الهوية التي تمت مصادقتها لديها إذن للوصول إلى مورد معين أو تنفيذ إجراء معين. يجب أن تسبق المصادقة التفويض دائماً. التسلسل: تعريف ← مصادقة ← تفويض ← مساءلة.",
        source: s("L2", 6),
      },
      {
        heading: "The ATM scenario",
        body: ["All three steps in one transaction:"],
        table: {
          headers: ["Step", "What happens", "Concept"],
          rows: [
            ["1. Identification (the claim)", "Insert your debit card; it reads the account number", "“I am the owner of account #12345.” The machine does not trust you yet."],
            ["2. Authentication (the proof)", "Type your secret PIN", "You prove identity with something you know; the PIN matches."],
            ["3. Authorization (the permission)", "Withdraw $500 with only $200 → “Transaction Denied”; $50 → approved", "You are authenticated but not authorized for that amount."],
          ],
        },
        ar: "سيناريو الصراف الآلي: إدخال البطاقة = تعريف (ادعاء)؛ إدخال الرقم السري = مصادقة (إثبات)؛ رفض سحب 500 مع رصيد 200 والموافقة على 50 = تفويض (إذن).",
        source: s("L2", 7),
      },
    ],
    keyPoints: [
      "Identification = the claim (public, unverified).",
      "Authentication = proving the claim is true.",
      "Authorization = what an authenticated identity is permitted to do.",
      "Authentication always comes before authorization.",
    ],
    traps: ["Being authenticated does NOT mean being authorized (ATM: correct PIN, but $500 denied)."],
  },
  {
    id: "ch2-factors",
    unitId: "ch2",
    topicId: "ch2-factors",
    order: 2,
    title: "Multifactor authentication (MFA)",
    summary: "More than one factor: a single compromised factor is not enough for an attacker.",
    blocks: [
      {
        heading: "Multifactor authentication",
        body: [
          "**Multi-factor authentication** uses **more than one factor** to verify identity, dramatically increasing security. A single compromised factor is not enough for an attacker to gain access.",
          "Example — Sarah entering a secure server room:",
        ],
        bullets: [
          "Factor 1: **Something you have (possession)** — she swipes her physical ID badge.",
          "Factor 2: **Something you know (knowledge)** — she types her secret 6-digit PIN.",
          "Factor 3: **Something you are (inherence / biology)** — she places her hand on a fingerprint scanner.",
        ],
        visual: "factors",
        ar: "المصادقة متعددة العوامل (MFA) تستخدم أكثر من عامل للتحقق من الهوية فتزيد الأمان كثيراً؛ فاختراق عامل واحد لا يكفي للمهاجم. مثال سارة: بطاقة الهوية (شيء تملكه)، الرقم السري المكون من 6 أرقام (شيء تعرفه)، بصمة اليد (شيء أنت عليه).",
        source: s("L2", 8),
      },
    ],
    keyPoints: ["MFA = more than one factor type.", "Badge = have, PIN = know, fingerprint = are."],
    traps: ["Two passwords are still ONE factor type (something you know)."],
  },
  {
    id: "ch2-mutual",
    unitId: "ch2",
    topicId: "ch2-mutual",
    order: 3,
    title: "Mutual authentication and man-in-the-middle",
    summary: "Both parties authenticate each other — usually with digital certificates.",
    blocks: [
      {
        heading: "Mutual authentication",
        body: [
          "**Mutual authentication** is an authentication mechanism in which **both parties authenticate each other**: the client authenticates to the server **and** the server authenticates to the client.",
          "It is often implemented through the use of **digital certificates**.",
          "Without mutual authentication we are open to impersonation attacks, often called **man-in-the-middle (MITM)** attacks: the attacker inserts himself between the client and the server, **impersonating the server to the client and the client to the server**.",
        ],
        visual: "mitm",
        ar: "المصادقة المتبادلة: كل طرف يصادق الطرف الآخر؛ العميل يصادق نفسه للخادم والخادم يصادق نفسه للعميل، وغالباً تُطبق باستخدام الشهادات الرقمية. بدونها نصبح عرضة لهجوم الرجل في المنتصف (MITM) حيث يدخل المهاجم بين العميل والخادم وينتحل شخصية كل منهما أمام الآخر.",
        source: s("L2", 9),
      },
    ],
    keyPoints: ["Both sides authenticate.", "Implemented with digital certificates.", "Prevents man-in-the-middle impersonation."],
  },
  {
    id: "ch2-passwords",
    unitId: "ch2",
    topicId: "ch2-passwords",
    order: 4,
    title: "Passwords and brute-force cracking",
    summary: "Passwords are “something you know”; strong ones mix character types.",
    blocks: [
      {
        heading: "Passwords",
        body: [
          "A **password** is an authentication factor of the type **“something you know”**.",
          "A **good password** is a combination of **uppercase letters, lowercase letters, numbers, and symbols** (such as punctuation marks). The slide contrasts a bad password `password123` (simple, common words or sequences) with a good one `$sU&qw!3.$` (crack time > 25 days).",
          "**Brute force cracking** tries every possible combination of characters the password could be composed of, in sequence, until all have been tried.",
          "Speaker notes: using the **same password everywhere** places the security of all your accounts with every system owner — if any one is compromised, all are exposed.",
        ],
        ar: "كلمة المرور من عامل \"شيء تعرفه\". كلمة المرور الجيدة تجمع بين الأحرف الكبيرة والصغيرة والأرقام والرموز. هجوم القوة الغاشمة (Brute Force) يجرّب كل التركيبات الممكنة بالتسلسل حتى ينتهي منها. وإعادة استخدام كلمة المرور نفسها في كل مكان خطر لأن اختراق موقع واحد يكشف جميع الحسابات.",
        source: s("L2", 10),
      },
    ],
    keyPoints: ["Password = something you know.", "Good = upper + lower + numbers + symbols.", "Brute force = try every combination in sequence."],
  },
  {
    id: "ch2-biometrics",
    unitId: "ch2",
    topicId: "ch2-biometrics",
    order: 5,
    title: "Biometrics and measuring performance",
    summary: "Recognizing people by physiological or behavioral traits; FAR, FRR and EER.",
    blocks: [
      {
        heading: "What biometrics are and how they are used",
        body: [
          "**Biometrics** are automated methods of recognizing a person based on **physiological or behavioral characteristics** (the slide shows iris, retina, face and fingerprint recognition).",
          "Two ways to use them:",
        ],
        bullets: [
          "To **verify a claim of identity** that someone has put forth.",
          "In reverse, as a **method of identification**: you provide a fingerprint and the system searches its entire database to find out who you are, without a prior claim.",
        ],
        ar: "القياسات الحيوية (Biometrics) أساليب آلية للتعرف على الشخص اعتماداً على خصائص فسيولوجية أو سلوكية. تُستخدم بطريقتين: للتحقق من ادعاء هوية قدّمه الشخص، أو كوسيلة تعريف حيث يبحث النظام في كامل قاعدة البيانات ليعرف من أنت دون ادعاء مسبق.",
        source: s("L2", 11),
      },
      {
        heading: "How a biometric system works",
        body: ["Four major steps:"],
        table: {
          headers: ["Step", "Meaning"],
          rows: [
            ["1. Acquire biometric sample", "Using a sensing device such as a fingerprint scanner or video camera"],
            ["2. Feature extraction", "Distinguishing characteristics are extracted from the raw sample and converted into a processed biometric identifier record"],
            ["3. Matching", "The sample is matched against a database identifier"],
            ["4. Decision", "The sample matches the database or not"],
          ],
        },
        visual: "biometric-steps",
        ar: "خطوات عمل النظام الحيوي: 1) أخذ العينة بجهاز استشعار، 2) استخراج الخصائص المميزة وتحويلها إلى سجل معرّف، 3) المطابقة مع قاعدة البيانات، 4) القرار: تطابق أم لا.",
        source: s("L2", 12),
      },
      {
        heading: "Measuring performance: FAR, FRR, EER",
        body: ["A few primary metrics stand out when evaluating how well a biometric system is working:"],
        table: {
          headers: ["Metric", "Meaning", "Also called"],
          rows: [
            ["False acceptance rate (FAR)", "We accept a user whom we should actually have rejected", "False positive"],
            ["False rejection rate (FRR)", "We reject a legitimate user when we should have accepted him", "False negative"],
            ["Equal error rate (EER)", "The balance between the two error types", "—"],
          ],
        },
        visual: "far-frr",
        ar: "قياس الأداء: معدل القبول الخاطئ FAR = قبول مستخدم كان يجب رفضه (إيجابي كاذب). معدل الرفض الخاطئ FRR = رفض مستخدم شرعي كان يجب قبوله (سلبي كاذب). معدل الخطأ المتساوي EER = نقطة التوازن بين النوعين.",
        source: s("L2", 13),
      },
    ],
    keyPoints: ["Biometrics = physiological or behavioral characteristics.", "Acquire → extract → match → decide.", "FAR = false positive (wrongly accepted). FRR = false negative (wrongly rejected). EER = balance."],
    traps: ["Don't swap them: FAR = Accepting someone who should be rejected (false positive); FRR = Rejecting a legitimate user (false negative)."],
  },
];
