import { s } from "../course";
import type { Lesson } from "../types";

export const CH3_LESSONS: Lesson[] = [
  {
    id: "ch3-authz",
    unitId: "ch3",
    topicId: "ch3-authz",
    order: 1,
    title: "Authorization and access control",
    summary: "Authorization is the blueprint of permissions; access control is the mechanism that enforces it.",
    blocks: [
      {
        heading: "Two complementary concepts",
        body: [
          "In any secure system we must decide what an entity (a user, a program, a device) is allowed to do, and whether to grant it access to specific resources.",
          "**Authorization** is the process of determining exactly **what an authenticated user can do** — think of it as the *master blueprint of permissions*.",
          "**Access control**: authorization is implemented using access controls, the **tools and systems used to deny or allow access** — the *mechanism that checks the blueprint and opens or closes the door*. Access controls can be implemented for **physical or logical** resources.",
          "**ACL** = how permissions may be recorded and enforced.",
        ],
        ar: "التفويض (Authorization) هو تحديد ما يستطيع المستخدم الذي تمت مصادقته فعله بالضبط — كأنه المخطط الرئيسي للصلاحيات. والتحكم في الوصول (Access Control) هو الأدوات والأنظمة التي تسمح بالوصول أو تمنعه، أي الآلية التي تتحقق من المخطط وتفتح الباب أو تغلقه، ويمكن تطبيقه على الموارد المادية أو المنطقية. وقائمة التحكم بالوصول ACL هي طريقة تسجيل الصلاحيات وتطبيقها.",
        source: s("L3", 3),
      },
      {
        heading: "Types of security controls (cross-reference)",
        body: [
          "The Chapter 3 outline lists *Types of Security Controls*, but no Chapter 3 slide covers it separately. The control types are taught in **Chapter 1, slides 15–16**: **physical** (locks, fences, guards), **logical/technical** (firewalls, passwords, encryption) and **administrative** (policies, training, hiring policies, incident response plans).",
        ],
        ar: "يذكر مخطط الفصل الثالث \"أنواع الضوابط الأمنية\" لكن لا توجد شريحة خاصة بها في هذا الفصل؛ وهي مشروحة في الفصل الأول (الشرائح 15–16): ضوابط مادية، ومنطقية/تقنية، وإدارية.",
        source: s("L1", 15, 16),
      },
    ],
    keyPoints: ["Authorization = what you can do (the blueprint).", "Access control = tools that allow/deny (the door).", "Access control applies to physical or logical resources."],
  },
  {
    id: "ch3-polp",
    unitId: "ch3",
    topicId: "ch3-polp",
    order: 2,
    title: "The principle of least privilege",
    summary: "Give only the bare minimum access needed to do the job.",
    blocks: [
      {
        heading: "The golden rule",
        body: [
          "The **principle of least privilege** dictates that we should only allow the **bare minimum of access** to a party (a person, user account, or process) **required for it to perform its necessary function**.",
          "The slide's everyday example: **correct implementation** — the employee reaches the work resource they need, and access to the other (personal) folder is blocked. **Violation** — the employee can also reach the folder they do not need.",
          "**Key insight:** violation of the principle of least privilege is the heart of many of the security problems we face today.",
        ],
        visual: "least-privilege",
        ar: "مبدأ الحد الأدنى من الصلاحيات (Least Privilege): نمنح الطرف (شخصاً أو حساباً أو عملية) الحد الأدنى فقط من الوصول اللازم لأداء وظيفته. ومخالفة هذا المبدأ هي جوهر كثير من المشاكل الأمنية اليوم.",
        source: s("L3", 4),
      },
    ],
    keyPoints: ["Bare minimum access required for the function.", "Applies to persons, user accounts and processes.", "Violating it is the heart of many security problems."],
  },
  {
    id: "ch3-components",
    unitId: "ch3",
    topicId: "ch3-components",
    order: 3,
    title: "Components of access control",
    summary: "Subject, object, identification, authentication, authorization, audit.",
    blocks: [
      {
        heading: "Six components",
        body: ["The access process runs from the subject's request to the audit record:"],
        table: {
          headers: ["Component", "Meaning (slide 5)"],
          rows: [
            ["Subject", "The entity requesting access, such as a user, device, or process."],
            ["Object", "The resource being requested, such as a file, database, or server."],
            ["Identification", "“Who are you?” — checks credentials like passwords or biometrics."],
            ["Authentication", "Verification of the identification before granting access."],
            ["Authorization", "“What are you allowed to do?” — the system applies rules based on the access control model used."],
            ["Audit", "The system records all attempts for security compliance and tracking."],
          ],
        },
        visual: "access-components",
        ar: "مكونات التحكم في الوصول: الفاعل (Subject) وهو الجهة الطالبة للوصول (مستخدم، جهاز، عملية)؛ الكائن (Object) وهو المورد المطلوب (ملف، قاعدة بيانات، خادم)؛ التعريف (من أنت؟)؛ المصادقة (التحقق من التعريف)؛ التفويض (ماذا يُسمح لك أن تفعل؟ وفق نموذج التحكم)؛ التدقيق (Audit) حيث يسجل النظام جميع المحاولات للامتثال والتتبع.",
        source: s("L3", 5),
      },
    ],
    keyPoints: ["Subject = who requests. Object = what is requested.", "Audit records all attempts."],
    traps: ["A process can be a subject; a database or server is an object."],
  },
  {
    id: "ch3-functions",
    unitId: "ch3",
    topicId: "ch3-functions",
    order: 4,
    title: "The four functions of access control",
    summary: "Allow, limit, deny, revoke.",
    blocks: [
      {
        heading: "Allow, limit, deny, revoke",
        body: ["Access control performs four functions:"],
        table: {
          headers: ["Function", "Meaning", "Example (slide 6)"],
          rows: [
            ["Allow", "Granting a party access to a given resource", "A user can open a specific file"],
            ["Limit", "Allowing partial access, but only up to a certain point", "A web application having restricted access to the underlying system"],
            ["Deny", "Explicitly preventing a party from accessing a resource", "Blocking a login attempt outside of business hours"],
            ["Revoke", "Removing previously granted access", "Deactivating an employee's account upon termination"],
          ],
        },
        ar: "وظائف التحكم في الوصول الأربع: السماح (Allow) بمنح الوصول، التقييد (Limit) بالسماح بوصول جزئي حتى حد معين، الرفض (Deny) بمنع الوصول صراحة مثل منع تسجيل الدخول خارج أوقات العمل، والإلغاء (Revoke) بسحب صلاحية ممنوحة سابقاً مثل تعطيل حساب موظف عند إنهاء خدمته.",
        source: s("L3", 6),
      },
    ],
    keyPoints: ["Allow = grant. Limit = partial. Deny = explicitly prevent. Revoke = remove previously granted access."],
    traps: ["Revoke is about access that was PREVIOUSLY granted (an employee leaving). Deny explicitly prevents an access attempt (a login outside business hours)."],
  },
  {
    id: "ch3-acl",
    unitId: "ch3",
    topicId: "ch3-acl",
    order: 5,
    title: "File system and network ACLs",
    summary: "rwx permissions for user/group/other; network ACLs by IP, MAC address and port.",
    blocks: [
      {
        heading: "File system ACLs",
        body: [
          "Most file systems use three permissions: **Read** (access the contents of a file or directory), **Write** (write to a file or directory) and **Execute** (run a file — the slide's sentence is cut off: “allowing us to presuming that a file”).",
          "In **UNIX-like** operating systems a file has separate access lists for **user, group and other**, displayed as `rwx rwx rwx`: the **first** set is the **user**, the **second** the **group**, the **third** **other**. A dash `-` means that permission is not granted.",
        ],
        visual: "rwx-decoder",
        ar: "قوائم التحكم في نظام الملفات تستخدم ثلاث صلاحيات: القراءة r، الكتابة w، والتنفيذ x. في أنظمة يونكس تُعرض بالشكل rwx rwx rwx: المجموعة الأولى للمستخدم (المالك)، والثانية للمجموعة، والثالثة للآخرين. والشرطة (-) تعني عدم منح الصلاحية.",
        source: s("L3", 7),
      },
      {
        heading: "Worked example: Tariq's private file",
        body: [
          "Tariq wants only himself to read and edit a project file; Amal and everyone else get no access. Options: A) `rwx rwx rwx` B) `rwx --- ---` C) `r-x r-x r-x` D) `rwx r-x ---`.",
          "**Correct answer: B) `rwx --- ---`** — full rights for the user (owner) and nothing for group or other.",
        ],
        ar: "مثال طارق: يريد أن يقرأ الملف ويعدّله وحده دون أي وصول لأمل أو للآخرين، فالإجابة الصحيحة rwx --- ---.",
        source: s("L3", 8),
      },
      {
        heading: "Network ACLs",
        body: [
          "Network ACLs regulate activities on networks. Their permissions tend to be **binary: allow and deny**.",
          "Network access is controlled by the identifiers used in network transactions: **IP addresses**, **MAC (Media Access Control) addresses**, and **ports**.",
          "One of the simplest forms is **MAC address filtering** — a MAC address is a unique identifier attached to each network interface. Another form filters by the **port** used to communicate.",
        ],
        table: {
          headers: ["Service", "Port(s)"],
          rows: [
            ["FTP (transfer files)", "20 and 21"],
            ["IMAP (managing e-mail)", "143"],
            ["SSH (manage remote connections)", "22"],
          ],
        },
        ar: "قوائم التحكم في الشبكة تنظّم الأنشطة على الشبكات وصلاحياتها ثنائية: سماح أو رفض. ويتم التحكم عبر عنوان IP، وعنوان MAC، والمنافذ (Ports). أبسط أشكالها تصفية عناوين MAC. ومن المنافذ: FTP يستخدم 20 و21، IMAP يستخدم 143، SSH يستخدم 22.",
        source: s("L3", 9),
      },
    ],
    keyPoints: ["rwx order: user, group, other.", "Network ACL permissions: allow / deny.", "Controlled by IP, MAC, port.", "FTP 20/21, IMAP 143, SSH 22."],
    traps: ["`rwx r-x ---` gives the group read+execute — not private.", "FTP uses TWO ports (20 and 21)."],
  },
  {
    id: "ch3-deputy",
    unitId: "ch3",
    topicId: "ch3-deputy",
    order: 6,
    title: "Confused deputy: CSRF and clickjacking",
    summary: "Software with more permission than its user is tricked into misusing that authority.",
    blocks: [
      {
        heading: "The confused deputy problem",
        body: [
          "The **confused deputy problem** is a type of attack common in systems that use **ACLs**.",
          "It is seen when **software with access to a resource has a greater level of permission to access the resource than the user who is controlling the software**.",
          "Two common client-side attacks that use it: **cross-site request forgery (CSRF)** and **clickjacking**.",
        ],
        ar: "مشكلة النائب المرتبك (Confused Deputy) نوع من الهجمات الشائعة في الأنظمة التي تستخدم قوائم ACL، وتحدث عندما يملك البرنامج الذي يصل إلى المورد صلاحيات أعلى من صلاحيات المستخدم الذي يتحكم فيه. ومن أمثلتها هجومان من جهة العميل: تزوير الطلبات عبر المواقع CSRF، واختطاف النقرات Clickjacking.",
        source: s("L3", 10),
      },
      {
        heading: "Cross-Site Request Forgery (CSRF)",
        body: [
          "CSRF **misuses the authority of a user's browser**. The browser (the deputy) is already authenticated to a trusted site (like a bank); the attack tricks it into sending an unwanted command to that site.",
          "**Example:** Tariq is logged into his bank in one tab; in another tab a malicious gaming site silently sends a transfer request to the bank. His session is active, so the bank processes it. **Answer: A) CSRF.**",
          "Explanation (slide): CSRF forces an authenticated user's browser to send a forged HTTP request, along with their session cookies, to a vulnerable web application that trusts the user.",
        ],
        ar: "هجوم CSRF يسيء استخدام سلطة متصفح المستخدم المصادَق عليه مسبقاً لدى موقع موثوق (مثل البنك)، فيخدع المتصفح لإرسال أمر غير مرغوب إلى ذلك الموقع مع ملفات تعريف الجلسة.",
        source: s("L3", 11),
      },
      {
        heading: "Clickjacking",
        body: [
          "**Clickjacking**, also known as **user interface redressing**, is a sneaky client-side attack that takes advantage of page-rendering features in newer web browsers. It fools users into thinking they are clicking on one thing when they are actually clicking on another (speaker notes).",
          "**Example:** Amal clicks a big green “Claim Prize” button, but an invisible layer over it is linked to her bank's “Delete Account” button. **Answer: B) Clickjacking.**",
        ],
        ar: "اختطاف النقرات (Clickjacking) ويسمى أيضاً إعادة تزيين واجهة المستخدم: يخدع المستخدم ليظن أنه ينقر على شيء بينما ينقر فعلياً على شيء آخر مخفي، مثل زر \"استلم الجائزة\" فوقه طبقة غير مرئية لزر \"حذف الحساب\".",
        source: s("L3", 12),
      },
    ],
    keyPoints: ["Confused deputy: software has more permission than its user.", "CSRF = forged request from an already-authenticated browser.", "Clickjacking = UI redressing: invisible layer, user clicks something else."],
  },
  {
    id: "ch3-models",
    unitId: "ch3",
    topicId: "ch3-models",
    order: 7,
    title: "Access control models: DAC, MAC, RBAC, ABAC",
    summary: "How the system decides who is allowed access.",
    blocks: [
      {
        heading: "Comparison of the four models",
        body: ["Formal access control models provide a systematic framework for managing permissions — to overcome the limits of simple lists and prevent attacks like the confused deputy."],
        table: {
          headers: ["Model", "Who decides / how", "Example"],
          rows: [
            ["Discretionary (DAC)", "The **owner** of the resource decides who has access", "You control who can see your files"],
            ["Mandatory (MAC)", "A **central authority** decides based on **security labels**; the owner cannot change this", "Military classifications"],
            ["Role-Based (RBAC)", "Access is determined by the user's **job function or role**; an authority sets permissions for each role", "‘Accountant’, ‘Manager’"],
            ["Attribute-Based (ABAC)", "Access is granted on a **combination of attributes** of the user, resource and environment", "Allow only if user is a manager, on a corporate network, during business hours"],
          ],
        },
        visual: "access-models",
        ar: "نماذج التحكم في الوصول: التقديري DAC (المالك يقرر)، الإلزامي MAC (سلطة مركزية تقرر حسب تصنيفات أمنية ولا يستطيع المالك تغييرها، مثل التصنيفات العسكرية)، القائم على الدور RBAC (حسب الوظيفة أو الدور مثل محاسب أو مدير)، والقائم على السمات ABAC (حسب مجموعة سمات للمستخدم والمورد والبيئة مثل الوقت والجهاز والموقع).",
        source: s("L3", 13),
      },
      {
        heading: "Scenario: Tariq the cloud engineer",
        body: ["All four models check Tariq's permissions at once:"],
        table: {
          headers: ["Model", "What happened"],
          rows: [
            ["RBAC", "His job title is “Engineer”, so he is automatically granted tools to write and deploy code."],
            ["DAC", "As owner of a new project folder he chooses to share it with Amal."],
            ["MAC", "The core source code is labelled “Top Secret”; with only “Standard Engineer” clearance he is blocked."],
            ["ABAC", "At 11:00 PM from a personal phone at a coffee shop he is blocked — time and device do not match the rules."],
          ],
        },
        ar: "سيناريو طارق: RBAC منحه أدوات البرمجة لأنه مهندس؛ DAC سمح له كمالك بمشاركة مجلده مع أمل؛ MAC منعه من ملف \"سري للغاية\" لأن تصريحه أقل؛ ABAC منعه ليلاً من هاتف شخصي في مقهى لأن الوقت والجهاز لا يطابقان القواعد.",
        source: s("L3", 14),
      },
    ],
    keyPoints: ["DAC = owner decides.", "MAC = central authority + labels; owner can't change.", "RBAC = job role.", "ABAC = attributes (user, resource, environment: time, device, location)."],
    traps: ["MAC here means Mandatory Access Control — not a MAC (Media Access Control) address."],
  },
  {
    id: "ch3-multilevel",
    unitId: "ch3",
    topicId: "ch3-multilevel",
    order: 8,
    title: "Multilevel models: Bell-LaPadula, Biba, Brewer and Nash",
    summary: "Confidentiality (no read up / no write down), integrity (no read down / no write up), and the Chinese Wall.",
    blocks: [
      {
        heading: "Multilevel access control",
        body: [
          "Used when simpler models are not robust enough, particularly in **government, military and intelligence** contexts where information is organized into different **sensitivity or classification levels**.",
        ],
        bullets: ["**Bell-LaPadula** — focused on **confidentiality**.", "**Biba** — focused on **integrity**.", "**Brewer and Nash (Chinese Wall)** — focused on preventing **conflicts of interest**."],
        ar: "التحكم متعدد المستويات يُستخدم عندما لا تكون النماذج البسيطة كافية، خاصة في السياقات الحكومية والعسكرية والاستخباراتية حيث تُصنَّف المعلومات بمستويات حساسية. النماذج الثلاثة: بيل-لابادولا (السرية)، بيبا (السلامة)، بروير وناش أو الجدار الصيني (منع تضارب المصالح).",
        source: s("L3", 15),
      },
      {
        heading: "Bell-LaPadula vs Biba",
        body: ["The two models are mirror images:"],
        table: {
          headers: ["", "Bell-LaPadula (protecting secrets)", "Biba (protecting trust)"],
          rows: [
            ["Goal", "Prevent unauthorized **disclosure** — confidentiality is key", "Prevent unauthorized or improper **modification** — integrity is key"],
            ["Read rule", "**No read up**: cannot read data at a higher security level", "**No read down**: a high-integrity subject cannot read data from a lower-integrity level (to avoid corruption)"],
            ["Write rule", "**No write down**: cannot write data to a lower security level", "**No write up**: a low-integrity subject cannot write data to a higher-integrity level"],
            ["Levels shown", "Top Secret / Secret / Unclassified", "High / Medium / Low integrity"],
          ],
        },
        visual: "blp-biba",
        ar: "نموذج بيل-لابادولا يحمي السرية: لا قراءة للأعلى (No Read Up) ولا كتابة للأسفل (No Write Down). نموذج بيبا يحمي السلامة: لا قراءة للأسفل (No Read Down) ولا كتابة للأعلى (No Write Up). كلاهما يسمح بالقراءة والكتابة في المستوى نفسه.",
        source: s("L3", 16),
      },
      {
        heading: "Brewer and Nash — the Chinese Wall",
        body: [
          "The **Brewer and Nash model**, also known as the **Chinese Wall model**, is designed to prevent conflicts of interest by **dynamically changing access permissions based on a user's previous choices**. Commonly used in **financial, medical and legal** industries.",
          "**Example:** Amal opens a confidential file for Company A; Company B is in the same conflict-of-interest class, so she is instantly blocked from Company B's files. **Answer: C) Brewer and Nash (Chinese Wall).** Once a user accesses a file within a conflict class, a virtual wall goes up to deny access to all rival datasets.",
        ],
        ar: "نموذج بروير وناش (الجدار الصيني) يمنع تضارب المصالح بتغيير الصلاحيات ديناميكياً حسب اختيارات المستخدم السابقة، ويُستخدم في القطاعات المالية والطبية والقانونية. مثال أمل: بعد فتح ملف الشركة A تُمنع من ملفات الشركة المنافسة B.",
        source: s("L3", 17),
      },
      {
        heading: "Summary table",
        body: ["The slide's three scenarios:"],
        table: {
          headers: ["Model", "Scenario", "Main idea"],
          rows: [
            ["Bell-LaPadula", "Ali (Secret clearance) can read Secret and lower, cannot read Top Secret, and cannot copy Secret information into an Unclassified file.", "Protects confidentiality"],
            ["Biba", "Sara's hospital: data from an unverified external website cannot directly update trusted patient records.", "Protects integrity"],
            ["Brewer and Nash", "Ahmed accesses Bank A's confidential data, then is prevented from accessing competing Bank B's.", "Prevents conflict of interest"],
          ],
        },
        ar: "ملخص: علي (بيل-لابادولا) لا يقرأ الأعلى ولا يكتب إلى غير المصنّف = حماية السرية. سارة (بيبا) بيانات غير موثوقة لا تحدّث سجلات موثوقة = حماية السلامة. أحمد (بروير وناش) بعد بنك A يُمنع من بنك B المنافس = منع تضارب المصالح.",
        source: s("L3", 18),
      },
    ],
    keyPoints: ["BLP: no read up, no write down → confidentiality.", "Biba: no read down, no write up → integrity.", "Brewer-Nash (Chinese Wall): dynamic, based on previous choices → conflict of interest."],
    traps: ["Biba is the reverse of BLP. “Copying Secret into Unclassified” = write down → blocked by BLP."],
  },
];
