export const meta = {
  name: "MONSTER",
  role: "Full-Stack Developer",
  location: "France",
  email: "leadieudonat@gmail.com",
  github: "https://github.com/lea-dieudonat",
  linkedin: "https://linkedin.com/in/leadieudonat",
  status: "Open to work",
};

export const about = {
  bio: [
    "J'ai fait mes armes en Backend — PHP, Symfony, Python. En train de conquérir le Frontend - React, Vue, TypeScript.",
    "J'ai des problèmes pour toutes vos solutions, et j'utilise ma flemme pour écrire du code simple.",
    "Sur les pistes ou derrière une pinte quand je ne debug pas.",
  ],
  languages: [
    { flag: "🇫🇷", label: "Français", level: "Natif" },
    { flag: "🇬🇧", label: "English", level: "C1" },
    { flag: "🇩🇪", label: "Deutsch", level: "B1" },
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
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "SCSS", icon: "SiSass" },
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
    desc: "Plateforme e-commerce full-stack pour équipements de sports d'hiver. Gestion de catalogue, panier persistant côté serveur, checkout Stripe, authentification JWT, i18n FR/EN, interface admin EasyAdmin, tests fonctionnels PHPUnit.",
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
    desc: "Plateforme de tracking et planification pour riders (ski / snowboard). Création et suivi de sessions, statistiques de progression, recherche de stations. Stack JS full-stack moderne.",
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
      "<strong>Développeur full-stack dans une squad de 6 devs</strong> au sein d'une équipe produit de 15, sur une plateforme SaaS B2B pour l'industrie du coworking.",
      "<strong>Instauré les process qualité de zéro</strong> : tests automatisés PHPUnit backend + Cypress E2E, principes SOLID/DRY, code reviews systématiques.",
      "Créé toute la documentation technique pour rationaliser l'onboarding et la maintenance.",
      "Facilité les cérémonies Scrum et contribution à la migration d'une architecture monolithique vers une API REST moderne.",
    ],
  },
  {
    date: "Mar 2022 — Jun 2024",
    company: "Winback",
    role: "Full-Stack Developer",
    stack: "Symfony · PHP · Python · JavaScript · MySQL",
    points: [
      "<strong>Construit de zéro</strong> un dashboard SaaS B2B pour la gestion et le monitoring de dispositifs de physiothérapie déployés en cabinets médicaux.",
      "Equipe R&D de 5 : définition des user stories, spécifications techniques, décisions produit.",
      "<strong>Architecturé des connexions socket temps réel</strong> pour le monitoring sur des réseaux instables ou internationaux (Corée du Sud, USA).",
      "Stabilisation du serveur socket de crashs aléatoires à <strong>99.999% de disponibilité</strong> — debugging de fuites mémoire, race conditions, monitoring.",
      "Conformité <strong>IEC 62304</strong> (logiciel médical) et RGPD tout au long de l'évolution de la plateforme.",
    ],
  },
];