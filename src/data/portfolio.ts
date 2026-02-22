export const meta = {
  name: "MONSTER",
  role: "Full-Stack Developer",
  location: "Antibes, France",
  email: "leadieudonat@gmail.com",
  github: "https://github.com/lea-dieudonat",
  linkedin: "https://linkedin.com/in/leadieudonat",
  status: "Open to work",
};

export const about = {
  bio: [
    "I honed my skills in Backend — PHP, Symfony, Python. Currently conquering the Frontend - React, Vue, TypeScript.",
    "I have solutions for all your problems, and I use my laziness to write simple code.",
    "On the slopes or behind a pint when I'm not debugging.",
  ],
  languages: [
    { flag: "🇫🇷", label: "French", level: "Native" },
    { flag: "🇬🇧", label: "English", level: "C1" },
    { flag: "🇩🇪", label: "German", level: "B1" },
  ],
};

export type SkillCategory = {
  title: string;
  skills: { name: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React 18", icon: "SiReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Vue 3 / Nuxt", icon: "SiNuxt" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Chart.js", icon: "SiChartdotjs" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP 8.2", icon: "SiPhp" },
      { name: "Symfony 7", icon: "SiSymfony" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Python", icon: "SiPython" },
      { name: "API Platform", icon: "SiApachekafka" },
      { name: "PHPUnit", icon: "SiPhp" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Git", icon: "SiGit" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
];

export const projects = [
  {
    num: "01",
    title: "WinterShop",
    desc: "Full-stack e-commerce platform for winter sports equipment. Catalog management, server-side persistent cart, Stripe checkout, JWT authentication, i18n FR/EN, EasyAdmin admin interface, PHPUnit functional tests.",
    links: [
      { label: "Frontend →", url: "https://github.com/lea-dieudonat/wintershop-front" },
      { label: "Backend →", url: "https://github.com/lea-dieudonat/wintershop-back" },
    ],
    tags: [
      { label: "React 18", color: "green" },
      { label: "TypeScript", color: "green" },
      { label: "React Query", color: "green" },
      { label: "Symfony 7", color: "violet" },
      { label: "PHP 8.2", color: "violet" },
      { label: "API Platform", color: "violet" },
      { label: "Stripe", color: "cyan" },
      { label: "Docker", color: "cyan" },
      { label: "PHPUnit", color: "green" },
      { label: "MySQL", color: "violet" },
    ],
  },
  {
    num: "02",
    title: "Snow Companion",
    desc: "Full-stack web app to track ski sessions and equipment maintenance. Real-time weather data, JWT authentication, responsive design, admin dashboard, Dockerized deployment.",
    links: [
      { label: "Frontend →", url: "https://github.com/lea-dieudonat/snow-companion-front" },
      { label: "Backend →", url: "https://github.com/lea-dieudonat/snow-companion-backend" },
    ],
    tags: [
      { label: "Nuxt 3", color: "cyan" },
      { label: "Vue 3", color: "cyan" },
      { label: "TypeScript", color: "green" },
      { label: "Node.js", color: "violet" },
      { label: "Express", color: "violet" },
      { label: "Prisma ORM", color: "violet" },
      { label: "PostgreSQL", color: "cyan" },
      { label: "Supabase", color: "green" },
    ],
  },
];

export const experiences = [
  {
    date: "Jul 2024 — Nov 2025",
    company: "SaasOffice",
    role: "Full-Stack Developer",
    stack: "Symfony · PHP · React.js · PHPUnit · Cypress",
    points: [
      "<strong>Established quality processes from scratch</strong>: automated PHPUnit backend tests + Cypress E2E, SOLID/DRY principles, systematic code reviews.",
      "Created all technical documentation to streamline onboarding and maintenance.",
      "Facilitated Scrum ceremonies and contributed to the migration from a monolithic architecture to a modern REST API.",
    ],
  },
  {
    date: "Mar 2022 — Jun 2024",
    company: "Winback",
    role: "Full-Stack Developer",
    stack: "Symfony · PHP · Python · JavaScript · MySQL",
    points: [
      "<strong>Built from scratch</strong> a B2B SaaS dashboard for managing and monitoring physiotherapy devices deployed in medical offices.",
      "R&D team of 5: defined user stories, technical specifications, product decisions.",
      "<strong>Architected real-time socket connections</strong> for monitoring on unstable or international networks (South Korea, USA).",
      "Stabilized the socket server from random crashes to <strong>99.999% uptime</strong> — debugging memory leaks, race conditions, monitoring.",
      "Ensured <strong>IEC 62304</strong> (medical software) and GDPR compliance throughout the platform's evolution.",
    ],
  },
];