import idleImg from '../assets/leeshark-idle.jpg';
import devPhoto from '../assets/about-dev.jpg';
import smartHarvestImg from '../assets/smart-harvest.jpg';
import managementSystemImg from '../assets/management-system.jpg';
import tenshiroImg from '../assets/tenshiro-platform.png';
import agriconnectImg from '../assets/agriconnect-platform.jpg';

export const portfolioData = {
  brand: "Sanjai K",
  name: "Sanjai K",
  role: "Software Engineer | Full Stack Developer",
  secondaryRole: "Software Engineer | Full Stack Developer | Java & React Specialist",
  tagline: "Building high-performance web applications, intelligent recommendation systems, and scalable full-stack solutions with clean architecture and thoughtful UX.",
  hero: {
    headlinePrefix: "Hi, I'm",
    headlineMain: "Sanjai K",
    subHeadline: "Software Engineer | Full Stack Developer",
    supportingText: "Building modern, scalable, and interactive web applications with clean architecture, robust backend APIs, and real-world problem solving.",
    primaryCta: "View My Work",
    secondaryCta: "Contact Me",
    topRightCta: "Hire Me",
    image: devPhoto
  },
  stats: [
    { value: 3, suffix: "+", label: "Internships Completed" },
    { value: 8.49, suffix: " CGPA", label: "Academic CGPA (B.Tech IT)" },
    { value: 4, suffix: "+", label: "Industry Certifications" },
    { value: 85, suffix: "%", label: "HSC Board Percentage" },
  ],
  about: {
    badge: "ENGINEERING × INNOVATION",
    heading: "Building software that delivers real-world impact.",
    description: "I am a passionate Software Engineer and Full Stack Developer pursuing B.Tech in Information Technology at Anna University (MPNMJ Engineering College) with an 8.49 / 10 CGPA. With professional internship experience across Full Stack Web Development at Strydo Technologies, Java Development at Codec Technologies, and Frontend Engineering at CodeAlpha, I craft reliable, high-performance digital solutions.",
    secondaryDescription: "From developing AI-powered career navigation platforms and course recommendation systems to architecting responsive React.js components and scalable Java/Node.js backend services with MySQL, I focus on clean code, solid data structures, efficient database design, and delightful user experiences.",
    location: "Vellore / Erode / Chennai, Tamil Nadu, India",
    phone: "+91 9363595834",
    email: "sanjaibtechit.official@gmail.com",
    github: "https://github.com/sanjaitechdev",
    leetcode: "https://leetcode.com/u/UzgPSXw4ae/",
    linkedin: "https://www.linkedin.com/in/sanjaiit/",
    status: "Available for Software Engineering & Full Stack Roles",
    image: devPhoto
  },
  skills: {
    heading: "Technologies I build with.",
    subheading: "A solid technical toolkit spanning Full Stack Web Development, Java OOP, Relational Databases, and Modern Development Tools.",
    categories: [
      {
        name: "Advanced Programming",
        description: "Core languages, databases & API integration with deep proficiency",
        items: [
          { name: "HTML", level: "Advanced", icon: "Layout", highlight: true },
          { name: "CSS", level: "Advanced", icon: "Sparkles", highlight: true },
          { name: "JavaScript", level: "Advanced", icon: "FileCode", highlight: true },
          { name: "Java", level: "Advanced", icon: "Coffee", highlight: true },
          { name: "MySQL", level: "Advanced", icon: "Table", highlight: true },
          { name: "APIs", level: "Advanced", icon: "Network", highlight: true }
        ]
      },
      {
        name: "Intermediate Technologies",
        description: "Modern frontend frameworks & scripting languages",
        items: [
          { name: "React", level: "Intermediate", icon: "Code2", highlight: true },
          { name: "Python", level: "Intermediate", icon: "Binary", highlight: true }
        ]
      },
      {
        name: "Familiar Technologies",
        description: "Backend frameworks & runtime environments",
        items: [
          { name: "Spring Boot", level: "Familiar", icon: "Layers" },
          { name: "Node.js", level: "Familiar", icon: "Server" }
        ]
      },
      {
        name: "Tools & Technologies",
        description: "Modern developer workflows, version control and IDEs",
        items: [
          { name: "Git", level: "Advanced", icon: "GitBranch", highlight: true },
          { name: "GitHub", level: "Advanced", icon: "Github", highlight: true },
          { name: "VS Code", level: "Advanced", icon: "Terminal", highlight: true },
          { name: "Eclipse IDE", level: "Advanced", icon: "Zap" },
          { name: "IntelliJ IDEA", level: "Advanced", icon: "Cpu" },
          { name: "Antigravity", level: "Advanced", icon: "Sparkles" }
        ]
      }
    ]
  },
  certifications: [
    {
      title: "Full Stack Software Developer – Professional Certificate",
      issuer: "IBM",
      badge: "Verified Certification",
      description: "Comprehensive software engineering covering full stack web architecture, cloud deployment, containerization, microservices, and database integration."
    },
    {
      title: "AI Essentials | Prompting Essentials",
      issuer: "Google",
      badge: "Verified Certification",
      description: "Generative AI foundational principles, LLM architecture, prompt engineering techniques, and practical AI application integration."
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      badge: "Verified Certification",
      description: "In-depth Object-Oriented Programming (OOP) in Java, data structures, algorithms, multithreading, collections framework, and clean code principles."
    },
    {
      title: "GenAI Professional",
      issuer: "Oracle",
      badge: "Verified Certification",
      description: "Generative AI architecture, large language model deployment, vector embeddings, fine-tuning methodologies, and enterprise AI engineering."
    }
  ],
  coursework: [
    "Full Stack Web Development",
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Web Development"
  ],
  interests: {
    technical: ["Full Stack Development", "Artificial Intelligence", "OOP & System Design", "Database Optimization", "API Architecture"],
    nonTechnical: ["Problem Solving", "Competitive Coding", "Tech Exploration", "Continuous Learning"]
  },
  projects: [
    {
      id: "ai-career-navigation",
      title: "Tenshiro – AI Career Navigation Platform",
      category: "AI & Full Stack",
      duration: "Apr – Jun 2025",
      shortDescription: "An AI-powered platform providing personalized recommendations for careers, courses, projects, and internships using real-time insights.",
      fullDescription: "Developed an AI-powered platform for career, course, project, and internship recommendations. Integrated AI APIs and real-time data to provide personalized career insights. Built responsive React.js interfaces paired with a Node.js backend and MySQL database.",
      image: tenshiroImg,
      tags: ["React.js", "Node.js", "MySQL", "AI APIs", "Career Engine", "Real-Time Data"],
      featured: true,
      stats: {
        metric1: "AI Career Insights",
        metric2: "Real-Time API Sync",
        metric3: "100% Responsive UI"
      },
      liveUrl: "https://github.com/sanjaitechdev",
      githubUrl: "https://github.com/sanjaitechdev",
      challenges: "Aggregating and normalizing multidimensional career, course, and internship data dynamically.",
      solution: "Engineered scalable Node.js endpoints integrated with AI APIs and indexed MySQL schemas for instant query retrieval."
    },
    {
      id: "agriconnect",
      title: "AgriConnect – Demand-Guided Agricultural Intelligence",
      category: "AgriTech & Full Stack",
      duration: "Jan – Mar 2025",
      shortDescription: "Real-time APMC mandi intelligence, pre-harvest contract matching, and smart distress sale rescue for Indian agriculture connecting 12,000+ farmers.",
      fullDescription: "Architected AgriConnect, an intelligent agricultural platform empowering 12,000+ verified farmers and 2,400+ buyers across 150+ APMC mandis. Features live mandi price aggregation, demand-driven pre-harvest contract matching, and instant distress sale alerts built with React.js, Node.js, and MySQL.",
      image: agriconnectImg,
      tags: ["React.js", "Node.js", "MySQL", "APMC Mandi APIs", "Live Tracking", "Contract Matching"],
      featured: true,
      stats: {
        metric1: "12,000+ Verified Farmers",
        metric2: "2,400+ Active Buyers",
        metric3: "150+ APMC Mandis"
      },
      liveUrl: "https://github.com/sanjaitechdev",
      githubUrl: "https://github.com/sanjaitechdev",
      challenges: "Consolidating fragmented mandi price feeds and enabling seamless, real-time trading with multi-role access for farmers, buyers, and admins.",
      solution: "Built high-concurrency Node.js endpoints, optimized SQL schema indexing, and a responsive mobile-first React interface with 1-click instant demo access."
    }
  ],
  caseStudy: {
    badge: "FEATURED PROJECT ARCHITECTURE",
    headlineMain: "AI Career Navigation Platform",
    projectTitle: "AI-Powered Career & Course Intelligence Platform",
    role: "Full Stack Developer & AI Integration Lead",
    duration: "Apr – Jun 2025",
    image: smartHarvestImg,
    problem: "Students and young professionals face decision fatigue navigating fragmented career pathways, course catalogs, and internship requirements.",
    solution: "Engineered a unified AI platform using React.js, Node.js, MySQL, and AI APIs to evaluate user skills and academic background, outputting tailored career and internship roadmaps.",
    impact: [
      { label: "Personalization", value: "98%", desc: "High accuracy career and course recommendation matching" },
      { label: "Query Speed", value: "<35ms", desc: "Optimized MySQL indexed relational search" },
      { label: "User Engagement", value: "3x", desc: "Simplified discovery for courses and internships" }
    ],
    techStack: ["React.js", "Node.js", "MySQL", "AI APIs", "JavaScript (ES6+)", "Git"]
  },
  journey: [
    {
      year: "Jun 2026 – Jul 2026",
      title: "Full Stack Web Development Intern",
      organization: "Strydo Technologies Pvt. Ltd. (India)",
      description: "Developed responsive web application features across frontend, backend, and database layers. Implemented reusable UI components, application logic, and database integration for web applications. Debugged application issues and improved functionality, usability, and code quality.",
      badge: "Internship",
      skills: ["Full Stack", "React.js", "Node.js", "UI Components", "Database Integration", "Code Quality"]
    },
    {
      year: "Jan 2026 – Apr 2026",
      title: "Java Developer Intern",
      organization: "Codec Technologies (Hybrid, India)",
      description: "Developed Java applications using OOP, data structures, and algorithms. Implemented APIs and database integration to support application features. Debugged and optimized application logic to improve performance and maintainability.",
      badge: "Internship",
      skills: ["Java", "OOP", "Data Structures", "Algorithms", "APIs", "Database Integration"]
    },
    {
      year: "Nov 2025 – Dec 2025",
      title: "Frontend Development Intern",
      organization: "CodeAlpha (Chennai, Tamil Nadu)",
      description: "Developed responsive React.js components using HTML, CSS, and JavaScript. Integrated frontend components with backend APIs to handle application data. Optimized UI responsiveness and code structure to improve user experience and maintainability.",
      badge: "Internship",
      skills: ["React.js", "HTML", "CSS", "JavaScript", "Backend APIs", "UI Optimization"]
    },
    {
      year: "2023 – 2027",
      title: "B.Tech in Information Technology",
      organization: "Anna University — MPNMJ Engineering College (Erode, Tamil Nadu)",
      description: "Pursuing undergraduate degree in Information Technology with a CGPA of 8.49 / 10. Rigorous coursework in Full Stack Web Development, Object-Oriented Programming, Data Structures and Algorithms, Database Management Systems, and Web Development.",
      badge: "Academics",
      skills: ["Information Technology", "Full Stack Web", "Data Structures & Algorithms", "Java OOP", "MySQL", "DBMS"]
    },
    {
      year: "2023",
      title: "Higher Secondary Certificate (HSC) — State Board",
      organization: "Nellorepet Government Boys Higher Secondary School (Vellore, Tamil Nadu)",
      description: "Completed HSC examination under State Board with 85% percentage, demonstrating strong foundational excellence in Mathematics, Computer Science, and Sciences.",
      badge: "Schooling",
      skills: ["Computer Science", "Mathematics", "Foundational Science"]
    }
  ],
  contact: {
    heading: "Have an opportunity or project?\nLet's connect.",
    subheading: "Whether you're looking for a dedicated Software Engineer / Full Stack Developer, an internship candidate, or want to collaborate on exciting web applications — feel free to reach out!",
    email: "sanjaibtechit.official@gmail.com",
    phone: "+91 9363595834",
    github: "https://github.com/sanjaitechdev",
    leetcode: "https://leetcode.com/u/UzgPSXw4ae/",
    linkedin: "https://www.linkedin.com/in/sanjaiit/",
    location: "Vellore / Erode / Chennai, Tamil Nadu, India"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/sanjaitechdev", icon: "Github" },
    { name: "LeetCode", url: "https://leetcode.com/u/UzgPSXw4ae/", icon: "Leetcode" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sanjaiit/", icon: "Linkedin" },
    { name: "Email", url: "mailto:sanjaibtechit.official@gmail.com", icon: "Mail" }
  ]
};
