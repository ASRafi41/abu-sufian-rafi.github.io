export const personalInfo = {
  name: "Abu Sufian Rafi",
  title: "Software Engineer",
  location: "Sylhet, Bangladesh",
  email: "abusufianrafi326276@gmail.com",
  github: "https://github.com/ASRafi41",
  linkedin: "https://www.linkedin.com/in/abu-sufian-rafi/",
  resume:
    "https://drive.google.com/uc?export=download&id=1IV58C8ff0PyIsax-SBco4jtgC4v_MCqQ",
  avatar:
    "https://drive.google.com/uc?export=view&id=1H-Y4vOqb3Lnez0PBvZpezuvCRMlTRwge",
  tagline:
    "Building scalable applications and solving complex algorithmic problems.",
};

export const stats = [
  { label: "Problems Solved", value: 2000, suffix: "+" },
  { label: "Online Contests", value: 300, suffix: "+" },
  { label: "Onsite Contests", value: 20, suffix: "+" },
  { label: "IEEEXtreme 18.0", value: 349, suffix: "th Global" },
];

export const experiences = [
  {
    company: "LiiLab",
    role: "Software Engineer",
    period: "Feb 2026 - Present",
    location: "Sylhet, Bangladesh",
    points: [
      "Built core features for the OneIELTS app using Flutter and Clean Architecture.",
      "Contributed to a QTI-XML based dynamic Flutter widget rendering system powering mock tests for 150K+ users.",
      "Integrated REST APIs and improved app performance and scalability.",
    ],
  },
  {
    company: "LiiLab",
    role: "Software Engineer Intern",
    period: "Oct 2025 - Jan 2026",
    location: "Sylhet, Bangladesh",
    points: [
      "Developed features for OneIELTS using Flutter.",
      "Worked with REST APIs, state management, and Clean Architecture.",
      "Assisted in debugging, testing, and performance improvements.",
    ],
  },
  {
    company: "Concepft",
    role: "Unity Developer Intern",
    period: "Jun 2025 - Aug 2025",
    location: "Remote",
    points: [
      "Developed and optimized 2D mobile games using Unity (C#).",
      "Implemented gameplay systems (level progression, scoring, animations).",
      "Contributed to bug fixing, performance tuning, and Play Store deployment.",
    ],
  },
];

export const projects = [
  {
    title: "ClassMate",
    description:
      "Android app built with Flutter, Dart, and Firebase to auto-generate weekly class schedules. A scheduling engine reads Excel inputs and uses a greedy algorithm to avoid conflicts — reducing manual scheduling time by ~80%. Includes an admin panel for data import and manual adjustments.",
    tech: ["Flutter", "Dart", "Firebase", "Greedy Algorithm"],
    github: "https://github.com/ASRafi41",
    demo: "#",
  },
  {
    title: "CipherPuzzle",
    description:
      "Retro puzzle game built with HTML, CSS, JavaScript, and Firebase. Features Caesar, Vernam, and Hill cipher challenges with multimedia clues, Firebase Auth & Firestore for login and progress tracking, and a responsive 8-bit UI with audio effects. Deployed on Netlify.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/ASRafi41",
    demo: "https://cipherpuzzle.netlify.app/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["C/C++", "C#", "Java", "Python", "Dart", "JavaScript", "PHP"],
  },
  {
    group: "Frameworks & Tech",
    items: ["Flutter", "Unity", "Firebase", "HTML", "CSS", "MySQL"],
  },
  {
    group: "Tools & Practices",
    items: ["Git", "Clean Architecture", "REST APIs", "State Management"],
  },
];

export const cpPlatforms = [
  {
    platform: "Codeforces",
    handle: "_ASRafi__",
    url: "https://codeforces.com/profile/_ASRafi__",
  },
  {
    platform: "CodeChef",
    handle: "rafi41",
    url: "https://www.codechef.com/users/rafi41",
  },
  {
    platform: "LeetCode",
    handle: "ASRafi",
    url: "https://leetcode.com/u/ASRafi/",
  },
  {
    platform: "AtCoder",
    handle: "ASRafi",
    url: "https://atcoder.jp/users/ASRafi",
  },
  {
    platform: "LightOJ",
    handle: "asrafi_",
    url: "https://lightoj.com/user/asrafi_",
  },
  {
    platform: "Toph",
    handle: "ASRafi",
    url: "https://toph.co/u/ASRafi",
  },
  {
    platform: "Vjudge",
    handle: "ASRafi",
    url: "https://vjudge.net/user/ASRafi",
  },
];

export const education = [
  {
    icon: "GraduationCap" as const,
    institution: "Leading University",
    location: "Sylhet, Bangladesh",
    degree: "Bachelor of Science — Computer Science & Engineering",
    detail: "CGPA: 3.41 / 4.00",
    period: "Jun 2021 - Jul 2025",
  },
  {
    icon: "BookOpenCheck" as const,
    institution: "Sylhet Science & Technology College",
    location: "Sylhet, Bangladesh",
    degree: "Higher Secondary Certificate — Science",
    detail: "",
    period: "2018 - 2020",
  },
  {
    icon: "School" as const,
    institution: "Mohona Ideal Academy",
    location: "Khalomukh Bazar, Dakshin Surma, Sylhet",
    degree: "Secondary School Certificate",
    detail: "",
    period: "2011 - 2018",
  },
];

export const cpHighlights = [
  "Participated twice in ICPC Asia Dhaka Regional",
  "Runner-up in Bangladesh, 349th globally — IEEEXtreme 18.0",
  "24th place — UU IUPC 2025",
  "26th place — IUT 11th National ICT Fest 2024",
  "29th place — DUET IUPC 2025",
  "Champion — Intra LU Programming Contest 2023",
  "Problem setter — Intra LU IEEE Beginner Programming Contest 2025",
  "Problem setter — NEUB Junior IUPC 2025",
  "2,000+ problems solved · 300+ online contests · 20+ onsite contests",
];
