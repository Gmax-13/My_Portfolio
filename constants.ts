
import { Project, Experience, Skill, Education } from './types';

export const SKILLS: Record<string, Skill[]> = {
  programming: [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'JavaScript / TS', level: 85, icon: '📜' },
    { name: 'SQL', level: 85, icon: '🗄️' },
    { name: 'Java', level: 75, icon: '☕' },
    { name: 'C/C++', level: 80, icon: '⚙️' },
  ],
  dataML: [
    { name: 'Scikit-learn', level: 90, icon: '🤖' },
    { name: 'Pandas / NumPy', level: 95, icon: '🐼' },
    { name: 'HuggingFace', level: 80, icon: '🤗' },
    { name: 'DistilBERT / BiLSTM', level: 78, icon: '🧠' },
    { name: 'CNN (Keras)', level: 75, icon: '👁️' },
  ],
  web: [
    { name: 'React / Next.js', level: 85, icon: '⚛️' },
    { name: 'Flask', level: 82, icon: '🌶️' },
    { name: 'MongoDB', level: 78, icon: '🍃' },
    { name: 'PostgreSQL', level: 80, icon: '🐘' },
    { name: 'HTML/CSS', level: 90, icon: '🌐' },
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'InternPro',
    role: 'Data Analytics Intern',
    period: 'June 2025 - July 2025',
    description: [
      'Applied regression and classification models using Scikit-learn on clinic and booking datasets with 1,000+ records.',
      'Performed data cleaning and preprocessing using Python, Pandas, NumPy, and SQL, improving data quality for modeling.',
      'Built end-to-end ML pipelines in Jupyter Notebook, covering feature engineering, model training, and evaluation.',
      'Conducted time-series analysis to identify appointment demand trends and peak usage periods.',
      'Created analytical reports and visualizations using Matplotlib to communicate insights clearly.'
    ]
  },
  {
    id: 'exp-2',
    company: 'VanillaKart',
    role: 'Web Development & Digital Marketing Intern',
    period: 'January 2024 - June 2024',
    description: [
      'Developed and maintained responsive website components using HTML, CSS, and JavaScript.',
      'Optimized on-page SEO elements including metadata and content structure to improve search visibility.',
      'Managed and customized WordPress content workflows, reducing update turnaround time.',
      'Coordinated technical updates with marketing objectives to ensure design-content alignment.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'PhishGuard',
    description: 'AI-powered phishing detection Chrome extension for Gmail. Built on a 5-model HuggingFace ensemble (DistilBERT + BiLSTM) with a Flask backend on Render, MongoDB Atlas persistence, and a Next.js reporting site with print-ready PDF reports.',
    tech: ['Python', 'DistilBERT', 'Flask', 'MongoDB', 'Next.js', 'Chrome MV3'],
    github: 'https://github.com/Gmax-13/PhishGuard',
    image: 'https://picsum.photos/seed/phishguard/600/400'
  },
  {
    id: 'proj-2',
    title: 'Health Horizon',
    description: 'A full-stack nutrition tracking platform with a CNN-based food recognition model, relational PostgreSQL schema, rule-based meal plan recommendation engine, and Flask REST APIs serving a React frontend.',
    tech: ['React', 'Flask', 'PostgreSQL', 'Python', 'CNN'],
    github: 'https://github.com/Gmax-13/HealthHorizon',
    image: 'https://picsum.photos/seed/healthhorizon/600/400'
  },
  {
    id: 'proj-3',
    title: 'Prior Art Search',
    description: 'Automated patent prior art search tool that processes IPC/CPC classification codes, queries patent databases, and aggregates per-code match counts into structured analytical reports.',
    tech: ['Python', 'NLP', 'Pandas', 'Patent APIs'],
    github: 'https://github.com/Gmax-13/prior-art-search',
    image: 'https://picsum.photos/seed/priorart/600/400'
  },
  {
    id: 'proj-4',
    title: 'Clinic Appointment Website',
    description: 'Full-stack clinic appointment management system built as a team internship project. Handles patient booking flows, appointment scheduling, and admin management with a responsive web interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Flask', 'SQL'],
    github: 'https://github.com/Gmax-13/Interpro_WEBdev_team-4',
    image: 'https://picsum.photos/seed/clinic/600/400'
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: 'Fr. Conceicao Rodrigues Institute of Technology',
    degree: 'Bachelor of Technology: Computer Engineering',
    period: '2027 (Expected)',
    cgpa: '8.66'
  },
  {
    institution: 'Maharashtra State Board',
    degree: '12th HSC',
    period: '2023',
    score: '69.00%'
  },
  {
    institution: 'Maharashtra State Board',
    degree: '10th SSC',
    period: '2021',
    score: '93.20%'
  }
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }
};
