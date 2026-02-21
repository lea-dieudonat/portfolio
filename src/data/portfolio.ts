export const meta = {
  name: "Hubble",
  role: "Full-Stack Developer",
  location: "France",
  email: "leadieudonat@gmail.com",
  github: "https://github.com/lea-dieudonat",
  linkedin: "https://linkedin.com/in/leadieudonat",
  status: "Open to work",
};

export const about = {
  bio: [
    "3+ ans à construire des plateformes <strong>B2B SaaS critiques</strong> — de la gestion de dispositifs médicaux en temps réel à des dashboards e-commerce avec intégration de paiement.",
    "Lead technique d'une squad de 6 devs, j'ai instauré des process de qualité <strong>de zéro</strong> : tests E2E Cypress, PHPUnit, revues de code systématiques, documentation complète.",
    "Fan de <strong>Clean Architecture</strong>, SOLID/DRY, et de code qui ne hurle pas à 3h du matin. J'ai maintenu des serveurs à <strong>99.999% de disponibilité</strong>.",
  ],
  languages: [
    { flag: "🇫🇷", label: "Français", level: "Natif" },
    { flag: "🇬🇧", label: "English", level: "C1" },
    { flag: "🇩🇪", label: "Deutsch", level: "B1" },
  ],
  skills_bars: [
    { label: "Backend PHP/Symfony", pct: 90 },
    { label: "React / TypeScript", pct: 82 },
    { label: "Vue 3 / Nuxt 3", pct: 68 },
    { label: "DevOps / Docker", pct: 76 },
  ],
};

export type SkillDot = "green" | "violet" | "cyan";

export const skills: { cat: string; name: string; dot: SkillDot }[] = [
  { cat: "Frontend", name: "React 18", dot: "green" },
  { cat: "Frontend", name: "TypeScript", dot: "green" },
  { cat: "Frontend", name: "Vue 3 / Nuxt", dot: "cyan" },
  { cat: "Frontend", name: "Tailwind CSS", dot: "cyan" },
  { cat: "Backend", name: "Symfony 7", dot: "violet" },
  { cat: "Backend", name: "PHP 8.2", dot: "violet" },
  { cat: "Backend", name: "Node.js / Express", dot: "violet" },
  { cat: "Backend", name: "Python", dot: "violet" },
  { cat: "API & Archi", name: "API Platform", dot: "cyan" },
  { cat: "API & Archi", name: "REST / JWT", dot: "cyan" },
  { cat: "Base de données", name: "MySQL / PostgreSQL", dot: "green" },
  { cat: "Base de données", name: "Doctrine / Prisma", dot: "green" },
  { cat: "DevOps", name: "Docker", dot: "cyan" },
  { cat: "DevOps", name: "CI/CD", dot: "cyan" },
  { cat: "Tests", name: "PHPUnit", dot: "violet" },
  { cat: "Tests", name: "Cypress E2E", dot: "violet" },
  { cat: "Méthodo", name: "Scrum / Agile", dot: "green" },
  { cat: "Paiement", name: "Stripe", dot: "green" },
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
      "<strong>Lead d'une squad de 6 devs</strong> au sein d'une équipe produit de 15, sur une plateforme SaaS B2B pour l'industrie du coworking servant des milliers de clients.",
      "<strong>Instauré les process qualité de zéro</strong> : tests automatisés Cypress E2E + PHPUnit backend, principes SOLID/DRY, code reviews systématiques.",
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
      "Seule développeuse web dans une équipe R&D de 5 : définition des user stories, spécifications techniques, décisions produit.",
      "<strong>Architecturé des connexions socket temps réel</strong> pour le monitoring sur des réseaux instables ou internationaux (Corée du Sud, USA).",
      "Stabilisation du serveur socket de crashs aléatoires à <strong>99.999% de disponibilité</strong> — debugging de fuites mémoire, race conditions, monitoring.",
      "Conformité <strong>IEC 62304</strong> (logiciel médical) et RGPD tout au long de l'évolution de la plateforme.",
    ],
  },
];

export const education = [
  { year: "2021 — 2022", name: "Formation Développeur Web", school: "AFPA" },
  { year: "2018 — 2020", name: "Master en Informatique", school: "Université de Lorraine" },
];