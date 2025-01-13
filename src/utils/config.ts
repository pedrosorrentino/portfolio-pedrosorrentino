interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

export const DEFAULT_META = {
  title:
    'Pedro Sorrentino | JavaScript Developer & Modern Web Frameworks Expert',
  description:
    'I’m a JavaScript developer specializing in Next.js and Astro. I build fast, scalable web apps and optimize performance for impactful results. Let’s work together and bring your vision to life with cutting-edge tech! 🚀',
  socialImage: '/ogImage.webp',
};

export const MAIN_MENU = [
  {
    title: '~/about',
    url: '/',
    desc: 'About me',
  },
  {
    title: '~/projects',
    url: '/projects',
    desc: "Projects I've worked on",
  },

  {
    title: '~/resources',
    url: '/resources',
    desc: "Resources I've used",
  },
  {
    title: '~/docs',
    url: '/docs',
    desc: 'My last blog posts',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Roast My Website',
    description:
      'A platform to get feedback on your website’s design and performance.',
    technologies: ['Astro', 'Preact', 'Tailwind CSS', 'SQLite', 'Grok AI'],
    image: '/ogImage.webp',
    url: 'https://roastmyweb.site',
  },
  {
    title: 'Expired Domain Finder',
    description:
      'A tool to discover and analyze expired domains for SEO opportunities.',
    technologies: ['Astro', 'Preact', 'Turso', 'Tailwind CSS', 'Node.js'],
    image: '/ogImage.webp',
    url: 'https://expireddomain.site',
  },
  {
    title: 'Guachinches.info',
    description: 'A client project showcasing local restaurants and events.',
    technologies: ['Astro', 'Tailwind CSS', 'Google Sheets'],
    image: '/ogImage.webp',
    url: 'https://guachinches.info',
  },
  {
    title: 'Fly Fast',
    description: 'A flight search and booking platform with real-time data.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'AMADEUS API'],
    image: '/ogImage.webp',
    url: 'https://fly-fast.vercel.app/',
  },
];

export const RESOURCES = [
  {
    category: 'Hardware',
    items: [
      {
        name: 'Laptop',
        description: 'MSI M16 Creator (Intel i7, 64GB RAM, 1TB SSD)',
      },
      {
        name: 'Monitor',
        description: 'Various hotel TVs (I work remotely from anywhere!)',
      },
      {
        name: 'Mouse',
        description: 'A trusty Chinese mouse with 2 extra buttons',
      },
    ],
  },
  {
    category: 'Software',
    items: [
      {
        name: 'Code Editor',
        description: 'Visual Studio Code',
      },
      {
        name: 'Terminal',
        description: 'Integrated terminal in Ubuntu',
      },
      {
        name: 'Browser',
        description: 'Brave',
      },
      {
        name: 'Design Tool',
        description: 'Photoshop',
      },
    ],
  },
  {
    category: 'Apps & Tools',
    items: [
      {
        name: 'Project Management',
        description: 'Google Sheets (simple and effective!)',
      },
      {
        name: 'Communication',
        description: 'Telegram & Slack',
      },
      {
        name: 'Version Control',
        description: 'Git & GitHub',
      },
      {
        name: 'API Testing',
        description: 'Thunder Client (lightweight and powerful)',
      },
    ],
  },
  {
    category: 'Learning Resources',
    items: [
      {
        name: 'Online Courses',
        description: 'Udemy',
      },
      {
        name: 'Books',
        description:
          '"Clean Code" by Robert C. Martin, "You Don’t Know JS" series',
      },
      {
        name: 'Books',
        description: '"JavaScript: The Definitive Guide" by O\'Reilly',
      },
    ],
  },
];
