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

export interface Achievement {
  title: string;
  event: string;
  year: string;
  level: string;
  icon: string;
  color: string;
  rank: string;
}

export const PERSONAL_INFO = {
  name: "Kevin Dwi Andhika",
  surname: "Ahmad Yarmis",
  fullName: "Kevin Dwi Andhika Ahmad Yarmis",
  role: "Siswa Rekayasa Perangkat Lunak",
  specialty: "RPL Specialist",
  tagline: "Membangun pengalaman web yang elegan dan berperforma tinggi melalui arsitektur modern.",
  about: [
    "Halo! Saya Kevin, siswa SMK yang antusias dengan jurusan Rekayasa Perangkat Lunak (RPL). Perjalanan saya di dunia software engineering didorong oleh rasa ingin tahu yang mendalam tentang bagaimana teknologi bekerja di balik layar.",
    "Saya fokus pada pengembangan web modern, mulai dari membangun antarmuka yang responsif hingga merancang arsitektur backend yang skalabel. Saya percaya bahwa kode yang baik bukan hanya berfungsi dengan sempurna, tetapi juga terasa intuitif bagi pengguna.",
    "Saat ini saya terus memperluas pengetahuan di bidang web stack modern, bereksperimen dengan framework terbaru, dan mempersiapkan diri untuk berkontribusi secara nyata di industri teknologi."
  ],
  education: [
    { title: "SMK", subtitle: "Sekolah Menengah Kejuruan", border: "border-l-violet-500" },
    { title: "RPL", subtitle: "Rekayasa Perangkat Lunak", border: "border-l-cyan-500" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://www.instagram.com/kvin.dwyrms_?igsh=c3hhMnAyajF0ZHVl",
    email: "kevin@example.com"
  }
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Juara 1 Kejurkab",
    event: "Kejuaraan Kabupaten Bulu Tangkis",
    year: "2023",
    level: "Kabupaten",
    icon: "emoji_events",
    color: "gold",
    rank: "1"
  },
  {
    title: "Juara 1 O2SN",
    event: "Olimpiade Olahraga Siswa Nasional Tingkat Kabupaten",
    year: "2023",
    level: "Kabupaten",
    icon: "emoji_events",
    color: "gold",
    rank: "1"
  },
  {
    title: "Juara 3 POPDA",
    event: "Pekan Olahraga Pelajar Daerah",
    year: "2023",
    level: "Daerah",
    icon: "military_tech",
    color: "bronze",
    rank: "3"
  },
  {
    title: "Peserta POPNAS",
    event: "Pekan Olahraga Pelajar Nasional — Jakarta",
    year: "2023",
    level: "Nasional",
    icon: "flag",
    color: "national",
    rank: "–"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "sistem-absensi",
    title: "Sistem Absensi Digital",
    category: "PHP / MySQL",
    description: "Aplikasi absensi berbasis web dengan fitur QR Code, laporan otomatis, dan manajemen kelas.",
    fullDescription: "Sistem absensi digital yang dibangun menggunakan PHP dan MySQL. Dilengkapi fitur scan QR Code untuk absensi cepat, dashboard admin untuk monitoring kehadiran, laporan otomatis dalam format PDF/Excel, dan manajemen data siswa per kelas.",
    tags: ["PHP", "MySQL", "QR Code", "Bootstrap", "AJAX"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    size: "large"
  },
  {
    id: "inventory-api",
    title: "Inventory API",
    category: "PHP / MySQL",
    description: "RESTful API untuk manajemen inventaris dengan autentikasi JWT dan laporan stok otomatis.",
    fullDescription: "Sistem API backend berperforma tinggi yang mengimplementasikan autentikasi token JWT, rate limiting, trigger database relasional, notifikasi stok otomatis, dan log audit yang dapat diekspor untuk perencanaan sumber daya perusahaan.",
    tags: ["PHP", "MySQL", "REST API", "JWT Auth"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    size: "small"
  },
  {
    id: "web-portofolio",
    title: "Web Portofolio Personal",
    category: "React / TypeScript",
    description: "Website portofolio modern dengan tema terang/gelap, animasi halus, dan desain responsif.",
    fullDescription: "Website portofolio personal yang dibangun dengan React dan TypeScript. Menampilkan desain glassmorphism, toggle tema terang/gelap, animasi micro-interaction, tampilan responsif untuk semua perangkat, dan performa loading yang dioptimalkan.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    size: "medium"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Pengembangan Frontend",
    description: "Membangun antarmuka yang intuitif dan responsif dengan performa tinggi.",
    icon: "code",
    skills: [
      { name: "React.js / Next.js", level: 90, tag: "Framework Utama" },
      { name: "TypeScript", level: 88, tag: "Bahasa" },
      { name: "Tailwind CSS", level: 95, tag: "Styling" },
      { name: "HTML5 / CSS3 / ES6+", level: 92, tag: "Web Dasar" }
    ]
  },
  {
    title: "Backend & Sistem",
    description: "Merancang API yang skalabel, skema database, dan logika bisnis yang kuat.",
    icon: "dns",
    skills: [
      { name: "Node.js / Express", level: 85, tag: "Runtime" },
      { name: "PHP / Laravel", level: 82, tag: "Framework Backend" },
      { name: "Arsitektur RESTful API", level: 90, tag: "Desain API" },
      { name: "OOP & Clean Code", level: 88, tag: "Prinsip Software" }
    ]
  },
  {
    title: "Database & DevOps",
    description: "Mengelola lapisan data persisten dan pipeline build/deploy yang efisien.",
    icon: "database",
    skills: [
      { name: "MySQL / MariaDB", level: 86, tag: "DB Relasional" },
      { name: "PostgreSQL", level: 78, tag: "SQL Engine" },
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Vite / Build Tools", level: 85, tag: "Dev Tooling" }
    ]
  }
];
