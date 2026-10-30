import devPhoto from '../assets/about-dev.jpg';
import smartHarvestImg from '../assets/smart-harvest.jpg';
import tenshiroImg from '../assets/tenshiro-platform.png';
import agriconnectImg from '../assets/agriconnect-platform.jpg';

export const portfolioData = {
  brand: "Sanjai K",
  name: "Sanjai K",
  role: "Software Engineer | Full Stack Developer",
  secondaryRole: "Software Engineer | Full Stack Developer | Java & MERN Specialist",
  tagline: "Building scalable, efficient, and reliable software with strong emphasis on code quality, RESTful APIs, AI systems, and continuous innovation.",
  hero: {
    headlinePrefix: "HELLO! I'M",
    headlineMain: "Sanjai K",
    subHeadline: "Software Engineer | Full Stack Developer",
    supportingText: "Aspiring Software Engineer skilled in full-stack web development, Java programming, the MERN Stack (MongoDB, Express.js, React.js, Node.js), and AI systems. Focused on developing scalable, efficient, and reliable software with clean architecture, robust backend APIs, and real-world problem solving.",
    primaryCta: "Book a Call",
    secondaryCta: "Free Website Audit",
    downloadCv: "Download CV",
    image: devPhoto
  },
  stats: [
    { value: 3, suffix: "+", label: "Internships Completed" },
    { value: 8.7, suffix: " / 10", label: "B.Tech IT CGPA" },
    { value: 100, suffix: "%", label: "SSLC Board Percentage" },
    { value: 4, suffix: " Verified", label: "Industry Certifications" }
  ],
  about: {
    badge: "ENGINEERING × INNOVATION",
    heading: "Building scalable software that delivers real-world impact.",
    description: "I am an aspiring Software Engineer skilled in full-stack web development, Java programming, the MERN Stack (MongoDB, Express.js, React.js, Node.js), and AI systems. Pursuing B.Tech in Information Technology at M.P.N.M.J. Engineering College with an 8.7 / 10 CGPA, I bring a strong foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), RESTful APIs, and software engineering principles.",
    secondaryDescription: "With professional internship experience spanning Full Stack Web Development at Strydo Technologies, Java Development at Codec Technologies, and Frontend Engineering at CodeAlpha, I focus on developing scalable, efficient, and maintainable software with high performance and delightful UX.",
    location: "Vellore, Tamil Nadu, India",
    phone: "+91 9363595834",
    email: "sanjaibtechit.official@gmail.com",
    github: "https://github.com/sanjaitechdev",
    portfolio: "https://sanjaitechiee.vercel.app/",
    leetcode: "https://leetcode.com/u/UzgPSXw4ae/",
    linkedin: "https://www.linkedin.com/in/sanjaiit/",
    status: "Available for Software Engineering & Full Stack Roles",
    image: devPhoto
  },
  skills: {
    heading: "Technical Skills & Competencies",
    subheading: "A solid technical toolkit spanning Full Stack Web Development, Java OOP, Relational & NoSQL Databases, Core Computer Science, and Modern AI Systems.",
    categories: [
      {
        name: "Programming Languages",
        description: "Core programming languages with strong OOP and algorithmic foundations",
        items: [
          { name: "Java", level: "Advanced", icon: "Coffee", highlight: true },
          { name: "JavaScript", level: "Advanced", icon: "FileCode", highlight: true },
          { name: "Python", level: "Intermediate", icon: "Binary", highlight: true },
          { name: "C", level: "Proficient", icon: "Code2" },
          { name: "SQL", level: "Advanced", icon: "Table", highlight: true }
        ]
      },
      {
        name: "Frontend Development",
        description: "Modern, component-driven responsive UI architectures and animations",
        items: [
          { name: "React.js", level: "Advanced", icon: "Code2", highlight: true },
          { name: "Framer Motion", level: "Advanced", icon: "Sparkles", highlight: true },
          { name: "HTML5", level: "Advanced", icon: "Layout", highlight: true },
          { name: "CSS3 / Tailwind CSS", level: "Advanced", icon: "Sparkles", highlight: true }
        ]
      },
      {
        name: "Backend Development",
        description: "Robust RESTful APIs, enterprise Java architectures, and microservices",
        items: [
          { name: "Node.js", level: "Advanced", icon: "Server", highlight: true },
          { name: "Express.js", level: "Advanced", icon: "Layers", highlight: true },
          { name: "Spring Boot", level: "Advanced", icon: "Layers", highlight: true },
          { name: "Spring Data JPA", level: "Advanced", icon: "Database" },
          { name: "REST API Development", level: "Advanced", icon: "Zap", highlight: true },
          { name: "Microservices", level: "Proficient", icon: "Cpu" }
        ]
      },
      {
        name: "Databases",
        description: "Relational, document, and real-time cloud database systems",
        items: [
          { name: "MySQL", level: "Advanced", icon: "Table", highlight: true },
          { name: "MongoDB", level: "Advanced", icon: "Database", highlight: true },
          { name: "PostgreSQL", level: "Proficient", icon: "Database" },
          { name: "Firebase", level: "Proficient", icon: "Zap" }
        ]
      },
      {
        name: "Core Computer Science",
        description: "Foundational CS fundamentals and system architecture principles",
        items: [
          { name: "Data Structures & Algorithms (DSA)", level: "Advanced", icon: "Binary", highlight: true },
          { name: "Object-Oriented Programming (OOP)", level: "Advanced", icon: "Code2", highlight: true },
          { name: "Database Management Systems (DBMS)", level: "Advanced", icon: "Database" },
          { name: "System Design Fundamentals", level: "Proficient", icon: "Layers" },
          { name: "Software Development Life Cycle (SDLC)", level: "Advanced", icon: "Sparkles" },
          { name: "Complexity Analysis", level: "Advanced", icon: "Terminal" }
        ]
      },
      {
        name: "Tools & DevOps",
        description: "Modern developer workflow, version control, API testing, and cloud",
        items: [
          { name: "Git", level: "Advanced", icon: "GitBranch", highlight: true },
          { name: "GitHub", level: "Advanced", icon: "Github", highlight: true },
          { name: "Postman", level: "Advanced", icon: "Zap", highlight: true },
          { name: "CI/CD Pipelines", level: "Proficient", icon: "Layers" },
          { name: "AWS Cloud", level: "Proficient", icon: "Globe" }
        ]
      },
      {
        name: "AI & ML Technologies",
        description: "Generative AI, Large Language Models, and intelligent system integration",
        items: [
          { name: "AI API Integration", level: "Advanced", icon: "Sparkles", highlight: true },
          { name: "Large Language Models (LLMs)", level: "Advanced", icon: "Cpu", highlight: true },
          { name: "OpenAI SDK", level: "Advanced", icon: "Zap" },
          { name: "Groq Llama 3.3 70B", level: "Advanced", icon: "Cpu" },
          { name: "Hugging Face", level: "Proficient", icon: "Binary" }
        ]
      }
    ]
  },
  certifications: [
    {
      id: "ibm-fullstack",
      title: "Full Stack Software Developer",
      subtitle: "Professional Certificate",
      issuer: "IBM",
      badge: "Verified Credential",
      verifyUrl: "https://coursera.org/share/a2878bc5b37784ab537b6c102095e6c4",
      description: "Comprehensive software engineering covering full-stack web architecture, cloud deployment, containerization, microservices, and database integration.",
      skills: ["Full Stack", "Cloud Native", "React & Node.js", "Microservices"]
    },
    {
      id: "nptel-java",
      title: "Programming in Java",
      subtitle: "NPTEL Online Certification",
      issuer: "NPTEL",
      badge: "Elite Credential",
      verifyUrl: "https://drive.google.com/file/d/11u-FQ9AgsfdMxkUDLDPh-Kj0ALydrcRY/view?usp=drive_link",
      description: "In-depth Object-Oriented Programming (OOP) in Java, data structures, algorithms, multithreading, collections framework, and clean code principles.",
      skills: ["Java OOP", "Multithreading", "Collections", "Data Structures"]
    },
    {
      id: "google-ai",
      title: "AI Essentials & Prompting Essentials",
      subtitle: "Specialization Credential",
      issuer: "Google",
      badge: "Verified Credential",
      verifyUrl: "https://coursera.org/share/de2d8ee38efcd9223916868bae78dbff",
      description: "Generative AI foundational principles, LLM architecture, prompt engineering techniques, and practical AI application integration.",
      skills: ["Generative AI", "Prompt Engineering", "LLM Architectures", "AI Workflows"]
    },
    {
      id: "hackerrank-swe",
      title: "Software Engineer",
      subtitle: "HackerRank Skill Assessment",
      issuer: "HackerRank",
      badge: "Verified Certificate",
      verifyUrl: "https://www.hackerrank.com/certificates/08d0c7b8d04e",
      description: "Rigorous assessment evaluating core problem solving, data structures, algorithms, database queries, and software engineering competencies.",
      skills: ["Problem Solving", "Data Structures", "SQL & Databases", "System Design"]
    }
  ],
  achievements: [
    {
      title: "Finalist — Web Development Domain",
      organization: "India Skills and WorldSkills",
      badge: "National Finalist",
      desc: "Selected as a finalist in the premier national skills competition representing excellence in web development architecture and standards."
    },
    {
      title: "Finalist — Protothon Hackathon",
      organization: "Prince Dr. K. Vasudevan College of Engg., Chennai",
      badge: "Hackathon Finalist",
      desc: "Finalist in the intensive Proto-Thon Hackathon, designing and prototyping high-impact software solutions under rapid turnaround."
    },
    {
      title: "Winner — Intra-College Hackathon",
      organization: "M.P.N.M.J. Engineering College",
      badge: "1st Place Winner",
      desc: "Secured First Place championship in the college-wide competitive hackathon solving pressing real-world domain challenges."
    },
    {
      title: "Runner-Up (Second Place) — TECHNOVANZA-2K26",
      organization: "Shree Venkateshwara Hi-Tech Engineering College",
      badge: "Runner-Up with Cash Prize",
      desc: "Awarded Second Place Runner-Up honors and cash reward in the State Level Technical Symposium and Hackathon."
    }
  ],
  interests: {
    technical: [
      "Full Stack Development",
      "Java & Spring Boot",
      "AI & LLM Integration",
      "Data Structures & Algorithms",
      "Database Optimization",
      "REST & Microservices"
    ],
    nonTechnical: [
      "Problem Solving",
      "Hackathons & Coding",
      "Content Creation",
      "Video Editing",
      "Tech Exploration"
    ]
  },
  projects: [
    {
      id: "harvion-ai",
      title: "Harvion AI – Smart Agricultural System",
      category: "AgriTech & Full Stack AI",
      duration: "2025",
      shortDescription: "Full-stack smart agriculture platform with Random Forest crop prediction (29 crops), JWT role-based security, Redis caching, Socket.io alerts, and 8-language UI.",
      fullDescription: "Engineered a production-ready full-stack agricultural platform utilizing React.js, Node.js, Express.js, MongoDB, and FastAPI with 39 responsive pages, 74 RESTful APIs, and 20 data models. Trained an integrated Random Forest crop model (29 crops, 8,700 synthetic samples) with 8 passing unit tests validating the decision engine. Secured APIs with JWT role-based access control, rate limiting, and Redis caching, complemented by real-time Socket.io alerts and an 8-language multilingual interface.",
      image: agriconnectImg,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "FastAPI", "Random Forest", "Redis", "Socket.io", "Multilingual"],
      featured: true,
      stats: {
        metric1: "39 Pages & 74 APIs",
        metric2: "29 Crop Models (8.7k Samples)",
        metric3: "8-Language UI & Socket.io"
      },
      liveUrl: "https://agri-pulse-pied.vercel.app/",
      githubUrl: "https://github.com/sanjaitechdev/AgriPulse",
      challenges: "Deploying low-latency ML inferences for multi-factor soil and weather inputs while maintaining role-based access and caching across high-concurrency requests.",
      solution: "Decoupled the ML decision engine into a FastAPI microservice, backed by Redis caching, MongoDB data models, and real-time Socket.io notification streams."
    },
    {
      id: "tenshiro-ai",
      title: "Tenshiro – AI Career Navigation Platform",
      category: "AI & Full Stack",
      duration: "2025",
      shortDescription: "AI career mentoring platform with 23 pages, 74 REST endpoints, 15 relational tables, and personalized roadmaps across 18 domains and 153 roles.",
      fullDescription: "Developed a comprehensive AI career navigation platform engineered with React.js, Node.js, MySQL, and the OpenAI SDK. Features 23 pages, 74 REST endpoints, and 15 structured relational tables. Delivered AI-driven career mentoring, step-by-step career roadmaps, mock interview preparation, and intelligent resume analysis across 18 specialized industry domains and 153 roles.",
      image: tenshiroImg,
      tags: ["React.js", "Node.js", "MySQL", "OpenAI SDK", "Groq Llama 3.3 70B", "Career Mentoring", "REST APIs"],
      featured: true,
      stats: {
        metric1: "18 Domains & 153 Roles",
        metric2: "74 REST Endpoints",
        metric3: "23 Pages & 15 Tables"
      },
      liveUrl: "https://tenshiro.vercel.app/",
      githubUrl: "https://github.com/sanjaitechdev/Tenshiro",
      challenges: "Generating consistent, context-aware career roadmaps and resume scoring without incurring slow response times or hallucinated skills.",
      solution: "Engineered structured LLM prompt pipelines with the OpenAI SDK and Groq Llama 3.3 70B, combined with indexed MySQL query caching for immediate response delivery."
    }
  ],
  caseStudy: {
    badge: "FEATURED ARCHITECTURE",
    headlineMain: "Harvion AI & Tenshiro Platform",
    projectTitle: "Harvion AI – Smart Agricultural Decision System",
    role: "Full Stack Engineer & AI Developer",
    duration: "2025",
    image: smartHarvestImg,
    problem: "Farmers and agrarian stakeholders struggle with unpredictable weather patterns, unguided crop selection, and fragmented language accessibility across agricultural tools.",
    solution: "Engineered a 39-page, 74-API full-stack platform with React.js, Node.js, Express.js, MongoDB, and FastAPI. Integrated a validated Random Forest crop model covering 29 crops across 8,700 samples with Socket.io live alerts and an 8-language interface.",
    impact: [
      { label: "Crop Precision", value: "29 Crops", desc: "Trained Random Forest model on 8,700 synthetic samples" },
      { label: "API Throughput", value: "74 Endpoints", desc: "Secured with JWT, rate limiting, and Redis caching" },
      { label: "Accessibility", value: "8 Languages", desc: "Multilingual interface with real-time Socket.io alerts" }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "FastAPI", "Random Forest", "Redis", "Socket.io"]
  },
  journey: [
    {
      year: "Jun 2026 – Jul 2026",
      title: "Full Stack Web Development Intern",
      organization: "Strydo Technologies Pvt. Ltd. (India)",
      description: "Integrated LLM APIs (OpenAI SDK, Groq Llama 3.3 70B) in 5 backend controllers: AI mentor, interview prep, resume analysis. Implemented JWT and Google OAuth 2.0 login and a webcam-proctored exam flow with face detection and integrity scoring.",
      badge: "Full Stack & AI",
      points: [
        "Integrated LLM APIs (OpenAI SDK, Groq Llama 3.3 70B) in 5 backend controllers: AI mentor, interview prep, resume analysis.",
        "Implemented JWT and Google OAuth 2.0 login and a webcam-proctored exam flow with face detection and integrity scoring."
      ],
      skills: ["OpenAI SDK", "Groq Llama 3.3 70B", "JWT", "Google OAuth 2.0", "Face Detection", "Full Stack"]
    },
    {
      year: "Jan 2026 – Apr 2026",
      title: "Java Developer Intern",
      organization: "Codec Technologies (Hybrid, India)",
      description: "Developed an ERP backend (Java 21, Spring Boot 3): 115 REST endpoints, 20 controllers, 10 services, 28 JPA repositories. Designed 29 JPA entities in MySQL and secured endpoints using JWT, Spring Security and 8 roles (38 @PreAuthorize guards). Built STOMP WebSocket live updates and containerized the backend, frontend and MySQL 8 with Docker Compose. Generated a test dataset of 4,440 students, 423 faculty and 444,000 attendance records across 25 departments.",
      badge: "Java & Enterprise",
      points: [
        "Developed an ERP backend (Java 21, Spring Boot 3): 115 REST endpoints, 20 controllers, 10 services, 28 JPA repositories.",
        "Designed 29 JPA entities in MySQL and secured endpoints using JWT, Spring Security and 8 roles (38 @PreAuthorize guards).",
        "Built STOMP WebSocket live updates and containerized backend, frontend and MySQL 8 with Docker Compose.",
        "Generated a test dataset of 4,440 students, 423 faculty and 444,000 attendance records across 25 departments."
      ],
      skills: ["Java 21", "Spring Boot 3", "Spring Security", "JPA / MySQL", "STOMP WebSockets", "Docker Compose"]
    },
    {
      year: "Nov 2025 – Dec 2025",
      title: "Frontend Development Intern",
      organization: "CodeAlpha (Chennai, Tamil Nadu)",
      description: "Designed a responsive React 19 and Tailwind CSS portfolio with 10 sections and 10 reusable components. Implemented Framer Motion animations in 15 files; the production build is 138 kB gzipped JS and 13 kB gzipped CSS.",
      badge: "Frontend Architecture",
      points: [
        "Designed a responsive React 19 and Tailwind CSS portfolio with 10 sections and 10 reusable components.",
        "Implemented Framer Motion animations in 15 files; the production build is 138 kB gzipped JS and 13 kB gzipped CSS."
      ],
      skills: ["React 19", "Tailwind CSS", "Framer Motion", "UI Components", "Bundle Optimization"]
    },
    {
      year: "2023 – 2027 (Expected)",
      title: "B.Tech. – Information Technology",
      organization: "M.P.N.M.J. Engineering College (Erode, Tamil Nadu)",
      description: "Pursuing undergraduate degree in Information Technology with an outstanding academic record of 8.7 / 10 CGPA. Specialized in Data Structures and Algorithms, Object-Oriented Programming (Java), Database Management Systems, System Design, and Web Engineering.",
      badge: "CGPA: 8.7 / 10",
      points: [
        "B.Tech Information Technology — M.P.N.M.J. Engineering College with 8.7 / 10 CGPA.",
        "Core focus on DSA, Java OOP, DBMS, System Design, and Full Stack Development."
      ],
      skills: ["B.Tech IT (8.7 CGPA)", "DSA", "Java OOP", "MySQL", "DBMS", "System Design"]
    },
    {
      year: "2021 – 2023",
      title: "Higher Secondary Certificate (HSC)",
      organization: "Nellorepet Government Boys Higher Secondary School (Vellore, Tamil Nadu)",
      description: "Completed Higher Secondary Certificate with 85% percentage under Tamil Nadu State Board, excelling in Mathematics, Computer Science, and Physics.",
      badge: "Percentage: 85%",
      points: [
        "Scored 85% overall aggregate in HSC Board Examinations.",
        "Strong foundation in Mathematics, Computer Science, and Scientific Computing."
      ],
      skills: ["HSC (85%)", "Mathematics", "Computer Science", "Physics"]
    },
    {
      year: "2021",
      title: "Secondary School Leaving Certificate (SSLC)",
      organization: "Nellorepet Government Boys Higher Secondary School (Vellore, Tamil Nadu)",
      description: "Completed SSLC with a perfect 100% percentage score, showcasing consistent dedication to academic excellence.",
      badge: "Percentage: 100%",
      points: [
        "Achieved a perfect 100% score in the SSLC Board Examination.",
        "Recognized for top academic achievement and foundational discipline."
      ],
      skills: ["SSLC (100%)", "Academic Excellence", "Core Foundations"]
    }
  ],
  contact: {
    heading: "Have an opportunity or project?\nLet's connect.",
    subheading: "Whether you're looking for an agile Software Engineer / Full Stack Developer, a Java & React specialist, or want to collaborate on innovative projects — my inbox is always open!",
    email: "sanjaibtechit.official@gmail.com",
    phone: "+91 9363595834",
    github: "https://github.com/sanjaitechdev",
    portfolio: "https://sanjaitechiee.vercel.app/",
    leetcode: "https://leetcode.com/u/UzgPSXw4ae/",
    linkedin: "https://www.linkedin.com/in/sanjaiit/",
    location: "Vellore, Tamil Nadu, India"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/sanjaitechdev", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sanjaiit/", icon: "Linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/UzgPSXw4ae/", icon: "Leetcode" },
    { name: "Portfolio", url: "https://sanjaitechiee.vercel.app/", icon: "Globe" },
    { name: "Email", url: "mailto:sanjaibtechit.official@gmail.com", icon: "Mail" }
  ]
};
