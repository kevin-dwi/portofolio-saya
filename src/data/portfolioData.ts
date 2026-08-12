export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  imageUrl?: string;
  icon?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  size?: 'large' | 'small' | 'medium';
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level: number; tag: string }[];
}

export const PERSONAL_INFO = {
  name: "Kevin Dwi Andhika",
  surname: "Ahmad Yarmis",
  fullName: "Kevin Dwi Andhika Ahmad Yarmis",
  role: "Software Engineering Student | Future Tech Innovator",
  specialty: "RPL Specialist",
  tagline: "Building elegant, high-performance web experiences through modern architecture.",
  about: [
    "Hello! I'm Kevin, an enthusiastic SMK student specializing in Rekayasa Perangkat Lunak (RPL). My journey in software engineering is driven by a profound curiosity for how things work beneath the surface.",
    "I focus on bridging the gap between rigorous back-end architecture and fluid, engaging user experiences. I believe that good code should not only function flawlessly but also feel intuitive and responsive to the user.",
    "Currently, I'm expanding my knowledge in modern web stacks, constantly experimenting with new frameworks, and preparing myself to contribute meaningfully to the tech industry."
  ],
  education: [
    { title: "SMK", subtitle: "Vocational High School", border: "border-l-[#d0bcff]" },
    { title: "RPL", subtitle: "Software Engineering", border: "border-l-[#4cd7f6]" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "john@example.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "system-architecture",
    title: "System Architecture Visualization",
    category: "React / Node.js",
    description: "Interactive webGL dashboard for monitoring complex microservice architectures in real-time.",
    fullDescription: "A comprehensive real-time dashboard built for visual telemetry of distributed systems. Features live webSockets monitoring, node network graphs, latency heatmap analytics, and reactive node failure simulation.",
    tags: ["React", "Node.js", "WebGL", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    size: "large"
  },
  {
    id: "inventory-api",
    title: "Inventory API",
    category: "PHP / MySQL",
    description: "Robust RESTful API built with PHP and MySQL for seamless inventory management.",
    fullDescription: "High-performance backend API system implementing JWT token authentication, rate limiting, relational database triggers, automated stock alerts, and exportable audit logs for enterprise resource planning.",
    tags: ["PHP", "MySQL", "REST API", "JWT Auth"],
    icon: "database",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    size: "small"
  },
  {
    id: "ecommerce-frontend",
    title: "E-Commerce Frontend",
    category: "React / UI Design",
    description: "Modern, dark-themed mobile & web application interface for seamless digital shopping.",
    fullDescription: "Sleek e-commerce client UI featuring translucent glassmorphism cards, micro-interactions, responsive shopping cart drawer, dark mode toggle, and accelerated checkout flow with instant state recalculation.",
    tags: ["React", "Tailwind CSS", "Motion", "UI/UX"],
    imageUrl: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    size: "medium"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Crafting intuitive, performant user interfaces with high responsive fluidity.",
    icon: "code",
    skills: [
      { name: "React.js / Next.js", level: 90, tag: "Primary Framework" },
      { name: "TypeScript", level: 88, tag: "Language" },
      { name: "Tailwind CSS", level: 95, tag: "Styling Engine" },
      { name: "HTML5 / CSS3 / ES6+", level: 92, tag: "Core Web" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Engineering scalable APIs, database schemas, and robust business logic.",
    icon: "dns",
    skills: [
      { name: "Node.js / Express", level: 85, tag: "Runtime" },
      { name: "PHP / Laravel", level: 82, tag: "Backend Framework" },
      { name: "RESTful API Architecture", level: 90, tag: "API Design" },
      { name: "OOP & Clean Code", level: 88, tag: "Software Principles" }
    ]
  },
  {
    title: "Database & DevOps",
    description: "Structuring persistent data layers and efficient build/deploy pipelines.",
    icon: "database",
    skills: [
      { name: "MySQL / MariaDB", level: 86, tag: "Relational DB" },
      { name: "PostgreSQL", level: 78, tag: "SQL Engine" },
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Vite / Build Tools", level: 85, tag: "Dev Tooling" }
    ]
  }
];
