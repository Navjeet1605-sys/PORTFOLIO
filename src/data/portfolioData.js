export const personalInfo = {
  name: "Navjeet Sinha",
  role: "Python & Backend Developer",
  subRoles: [
    "Backend & Distributed Systems",
    "AI/ML & Autonomous Agents",
    "Generative AI Explorer",
    "Full-Stack Developer"
  ],
  tagline: "Engineering robust backend systems, distributed architectures & autonomous AI agents.",
  bio: "Motivated second-year Computer Science & Engineering student at MGMCET Noida with a strong passion for Python, FastAPI microservices, distributed workflows, and autonomous AI swarms. I bridge backend engineering rigor with modern reactive frontends and AI-driven solutions.",
  location: "Noida, Delhi NCR, India",
  phone: "+91-9560105318",
  email: "getjeet16@gmail.com",
  github: "https://github.com/Navjeet1605-sys",
  linkedin: "https://www.linkedin.com/in/navjeet-sinha-a8b60a37a/",
  resumeUrl: "/Navjeet_Sinha_Resume.pdf",
  avatarUrl: "/navjeet-avatar.jpg",
  stats: [
    { label: "Internship Tasks Completed", value: "3+", detail: "Datheon FastAPI Backend" },
    { label: "AI Model Hit-Rate", value: "80%", detail: "NER-Vision Landslide Prediction" },
    { label: "Fetch AI-Thon 3.0", value: "Round 2", detail: "Team Echelon Lead" },
    { label: "College Academic SGPA", value: "8.50", detail: "MGMCET Noida (AKTU)" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Advanced", tag: "CORE" },
      { name: "TypeScript", level: "Proficient", tag: "LANG" },
      { name: "JavaScript (ESNext)", level: "Proficient", tag: "LANG" },
      { name: "C", level: "Foundational", tag: "LANG" },
      { name: "C++", level: "Foundational", tag: "LANG" },
      { name: "SQL", level: "Proficient", tag: "DATA" }
    ]
  },
  {
    category: "Backend & Microservices",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: "Advanced", tag: "BACKEND" },
      { name: "RESTful APIs", level: "Advanced", tag: "API" },
      { name: "Pydantic", level: "Advanced", tag: "VALIDATION" },
      { name: "JWT & RBAC", level: "Proficient", tag: "SECURITY" },
      { name: "Node.js & Express", level: "Proficient", tag: "BACKEND" },
      { name: "Background Tasks", level: "Proficient", tag: "ASYNC" },
      { name: "Rate Limiting", level: "Proficient", tag: "PERF" }
    ]
  },
  {
    category: "Distributed Systems & Queues",
    icon: "Network",
    skills: [
      { name: "Redis Streams", level: "Proficient", tag: "DISTRIBUTED" },
      { name: "BullMQ", level: "Proficient", tag: "QUEUES" },
      { name: "DAG Task Orchestration", level: "Proficient", tag: "SYSTEMS" },
      { name: "WebSockets (Sub-50ms)", level: "Proficient", tag: "REALTIME" },
      { name: "Event-Driven Architecture", level: "Proficient", tag: "ARCH" }
    ]
  },
  {
    category: "AI, ML & Autonomous Agents",
    icon: "Brain",
    skills: [
      { name: "Autonomous AI Agents", level: "Proficient", tag: "AGENTS" },
      { name: "Fetch.ai uAgents", level: "Proficient", tag: "AGENTS" },
      { name: "scikit-learn (RandomForest)", level: "Proficient", tag: "ML" },
      { name: "Generative AI & LLMs", level: "Proficient", tag: "GENAI" },
      { name: "Groq & OpenAI APIs", level: "Proficient", tag: "LLM" },
      { name: "Agentverse & ASI:One", level: "Proficient", tag: "PROTOCOL" },
      { name: "Docling PDF Synthesis", level: "Intermediate", tag: "SYNTHESIS" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Proficient", tag: "RDBMS" },
      { name: "Supabase", level: "Proficient", tag: "BAAS" },
      { name: "Redis", level: "Proficient", tag: "CACHE" },
      { name: "SQLite", level: "Advanced", tag: "EMBEDDED" },
      { name: "SQLAlchemy", level: "Proficient", tag: "ORM" }
    ]
  },
  {
    category: "Frontend & UI Engineering",
    icon: "Layout",
    skills: [
      { name: "React 19 / 18", level: "Proficient", tag: "UI" },
      { name: "Tailwind CSS", level: "Advanced", tag: "STYLING" },
      { name: "Vite", level: "Advanced", tag: "TOOLING" },
      { name: "Three.js (WebGL)", level: "Intermediate", tag: "3D" },
      { name: "Leaflet.js", level: "Proficient", tag: "GIS" },
      { name: "Responsive UI/UX", level: "Advanced", tag: "DESIGN" }
    ]
  },
  {
    category: "DevOps, Tools & Workflow",
    icon: "Wrench",
    skills: [
      { name: "Docker (Multi-stage)", level: "Proficient", tag: "DEVOPS" },
      { name: "Git & GitHub", level: "Advanced", tag: "VCS" },
      { name: "GitHub Actions / CI", level: "Intermediate", tag: "CI/CD" },
      { name: "VS Code", level: "Advanced", tag: "IDE" },
      { name: "Postman", level: "Proficient", tag: "API" },
      { name: "Vercel & Netlify", level: "Proficient", tag: "DEPLOY" }
    ]
  }
];

export const experienceData = [
  {
    title: "Python + FastAPI Backend Development Intern",
    company: "Datheon",
    location: "Remote",
    period: "Verified Internship Program",
    badge: "Completed",
    type: "Internship",
    description: "Built modular, production-ready backend services and REST APIs with asynchronous execution, validation schemas, and containerization.",
    tasks: [
      {
        title: "Task 1: BookStore REST API",
        details: "Engineered an asynchronous CRUD BookStore API utilizing FastAPI and strict Pydantic schemas. Implemented query filtering (author, genre, max_price), HTTP 422 validation, and clean RESTful status codes (201, 200, 204, 404)."
      },
      {
        title: "Task 2: User Authentication & Role-Based Access Control (RBAC)",
        details: "Implemented secure user registration, bcrypt password hashing, and JWT token issuance (30-minute expiry). Enforced role-based access control protecting administrative routes (/admin/users) from standard users with HTTP 401 and 403 handling."
      },
      {
        title: "Task 3: Notification Microservice with Background Tasks & Docker",
        details: "Architected a decoupled email notification microservice using FastAPI BackgroundTasks. Designed sliding-window IP rate limiting (5 req/min, 429 Retry-After), asynchronous job status tracking (queued, sending, sent, failed), and packaged the service using a multi-stage Docker build."
      }
    ],
    tech: ["Python", "FastAPI", "Pydantic", "JWT", "Bcrypt", "BackgroundTasks", "Docker", "REST API"],
    github: "https://github.com/Navjeet1605-sys/Datheon_Python_-_FastAPI_Backend_Development_Internship"
  }
];

export const projectsData = [
  {
    id: "ner-vision",
    name: "NER-Vision — AI Landslide Guardian",
    category: "AI & ML",
    filterTag: "ai",
    featured: true,
    shortDesc: "AI-based landslide risk monitoring & early-warning system developed for SIH 2026 Problem Statement 26001 (Ministry of DoNER).",
    problem: "The North Eastern Region (NER) experiences recurrent, devastating monsoon landslides due to steep terrain, heavy rain, and isolated communication channels, causing loss of life and blocked lifelines.",
    contribution: "End-to-end prototype developer. Trained the ML risk classifier, built the Flask microservice, designed the Leaflet GIS risk map, and implemented the NetworkX evacuation router.",
    solution: "A working early-warning system featuring a RandomForestClassifier trained on physical sensor telemetry (soil moisture, rainfall, slope, vegetation, historical events) with 80% backtest accuracy. Features live GIS heatmaps, offline rule-based fallback, crowdsourced hazard pins, and risk-weighted Dijkstra evacuation routing.",
    tech: ["Python", "Flask", "scikit-learn (RandomForest)", "Leaflet.js", "NetworkX", "SQLite", "GIS"],
    features: [
      "RandomForest risk engine scoring 80% accuracy on classic landslide scenarios",
      "Interactive Leaflet GIS heatmap auto-refreshing village risk scores",
      "Multi-channel automated alerts (SMS, WhatsApp, and push simulation)",
      "Independent offline rule-based fallback running without ML connectivity",
      "NetworkX Dijkstra evacuation router avoiding high-risk road corridors",
      "Interactive What-If scenario simulator adjusting rainfall/soil sliders"
    ],
    status: "Working Prototype (SIH PS 26001)",
    github: "https://github.com/Navjeet1605-sys/SIH-PS-26001",
    liveDemo: null
  },
  {
    id: "devflow",
    name: "DevFlow — Distributed DAG Workflow Engine",
    category: "Backend & Systems",
    filterTag: "backend",
    featured: true,
    shortDesc: "High-throughput, fault-tolerant distributed DAG workflow orchestrator & CI/CD pipeline engine with sub-50ms real-time WebSockets.",
    problem: "Traditional CI/CD engines suffer from heavy in-memory state lock-in, sluggish worker rebalancing during crashes, and poor UI rendering performance on large workflow dependency graphs.",
    contribution: "Core architect & engineer. Designed the event-driven Pipeline Engine, Redis Streams worker pool, heartbeat watchdog, and virtualized UI graph visualization.",
    solution: "Stateless Pipeline Engine and Event Bus decoupling workflow state. Features pull-based worker pools with Redis Streams consumer groups, automatic job reassignment on heartbeat loss, room-scoped sub-50ms WebSockets, and 60 FPS rendering of 10,000+ nodes.",
    tech: ["Node.js", "TypeScript", "Express", "BullMQ", "Redis Streams", "PostgreSQL", "React", "Tailwind CSS"],
    features: [
      "Stateless execution core with Redis Streams consumer groups for horizontal worker scaling",
      "Heartbeat-based worker monitoring with deterministic failure recovery and task reassignment",
      "Room-scoped real-time WebSockets supporting 300+ concurrent clients with sequence reconnection",
      "60 FPS viewport-virtualized rendering for 10,000+ DAG workflow graph nodes",
      "Comprehensive test suites and full automated CI/CD pipeline"
    ],
    status: "Production Architecture",
    github: "https://github.com/Navjeet1605-sys/DevFlow",
    liveDemo: "https://docs-devflow.vercel.app/"
  },
  {
    id: "omnis",
    name: "O.M.N.I.S — Multi-Agent Intelligence Swarm",
    category: "AI & ML",
    filterTag: "ai",
    featured: true,
    shortDesc: "Autonomous multi-agent cognitive swarm and desktop HUD built on Fetch.ai uAgents, Agentverse cloud, and ASI:One protocol for Fetch AI-Thon 3.0.",
    problem: "General-purpose LLM interfaces lack domain specialization, cannot coordinate autonomously, and have no decentralized execution protocol for economic tasks.",
    contribution: "Team Echelon Leader & Lead Agent Developer. Implemented the semantic DMM intent router, FinanceAgent, WebSearchAgent, and Agentverse ACP cloud server.",
    solution: "An autonomous multi-agent swarm where an intent router delegates user tasks to specialized uAgents. Includes live crypto/economic reasoning via FinanceAgent, real-time DDGS/Wikipedia web scraping, Groq LLM integration, and direct conversational connection via ASI:One.",
    tech: ["Python", "Fetch.ai uAgents", "Agentverse", "ASI:One", "Groq API", "DuckDuckGo API", "WebHUD"],
    features: [
      "Semantic DMM routing dynamically delegating tasks across autonomous uAgents",
      "FinanceAgent protocol delivering live market tickers and financial reasoning",
      "WebSearchAgent protocol for factual research and real-time query optimization",
      "Agentverse cloud-native deployment with Almanac contract registration and ASI:One protocol",
      "High-tech futuristic Web HUD and voice-activated desktop automation pipeline"
    ],
    status: "Selected for Round 2 (Fetch AI-Thon 3.0)",
    github: "https://github.com/Navjeet1605-sys/fetch-a-thon",
    liveDemo: null
  },
  {
    id: "campus-finder",
    name: "CampusFinder — College Lost & Found Portal",
    category: "Full-Stack",
    filterTag: "fullstack",
    featured: true,
    shortDesc: "Domain-restricted campus item recovery portal for MGMCET Noida with secret hint verification and live handover tracking.",
    problem: "Students and faculty at MGMCET had no secure or centralized platform to trace lost student IDs, electronics, and study resources across campus buildings.",
    contribution: "Full-stack creator. Designed the authentication rules, Supabase database schemas, anti-fraud secret hints, and responsive React frontend.",
    solution: "A tailored web portal requiring official @coet.in institutional domain authentication. Integrates anti-fraud secret questions for item ownership validation, real-time founder-to-claimant live messaging, and digital handover slips.",
    tech: ["React 19", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "Vite", "Netlify"],
    features: [
      "Domain-restricted institutional auth restricting registrations to verified @coet.in addresses",
      "Anti-fraud secret verification hints ensuring only rightful owners claim found belongings",
      "In-app real-time messaging between finders and owners",
      "Proctor handover audit slip generator with CSV export for campus security office",
      "Mobile-first responsive design for rapid on-campus reporting"
    ],
    status: "Deployed & Operational",
    github: "https://github.com/Navjeet1605-sys/Campus-Finder",
    liveDemo: null
  },
  {
    id: "datheon-suite",
    name: "Datheon Backend Microservice Architecture",
    category: "Backend & Systems",
    filterTag: "backend",
    featured: false,
    shortDesc: "Complete suite of 3 production-grade FastAPI microservices covering BookStore CRUD, JWT RBAC security, and Docker background notifications.",
    problem: "Real-world web APIs require decoupled components, strict input validation, resilient auth tokens, and non-blocking background workers.",
    contribution: "Sole backend engineer during the Datheon internship.",
    solution: "Created three decoupled service repositories: BookStore API with async Pydantic validation, JWT Authentication & Role-Based Access Control service, and a rate-limited background notification service packaged with a multi-stage Dockerfile.",
    tech: ["Python 3.10+", "FastAPI", "Pydantic", "JWT", "Bcrypt", "Docker", "Uvicorn"],
    features: [
      "Async CRUD operations with automatic OpenAPI Swagger documentation",
      "Role-based authorization separating standard users and admin endpoints",
      "FastAPI BackgroundTasks for asynchronous email notification dispatch",
      "Sliding-window IP rate limiting returning HTTP 429 with Retry-After header",
      "Multi-stage Docker containerization for minimal production image footprint"
    ],
    status: "Completed Internship Suite",
    github: "https://github.com/Navjeet1605-sys/Datheon_Python_-_FastAPI_Backend_Development_Internship",
    liveDemo: null
  },
  {
    id: "ai-news-pipeline",
    name: "Smart Library Assistant & Document Synthesis Pipeline",
    category: "AI & ML",
    filterTag: "ai",
    featured: false,
    shortDesc: "Automated multi-source media scraping, PDF parsing via Docling, and LLM-assisted knowledge extraction pipeline.",
    problem: "Engineering students and researchers face overwhelming volumes of textbook PDFs, syllabi, and technical videos without concise synthesis.",
    contribution: "Designed and built the ingestion and extraction pipeline in Python.",
    solution: "Asynchronous processing pipeline that extracts transcripts from technical videos, parses complex PDFs using Docling, and generates structured study briefs with OpenAI/Groq models validated by Pydantic schemas and persisted in SQLAlchemy.",
    tech: ["Python 3.12", "FastAPI", "OpenAI API", "Docling", "SQLAlchemy", "Docker"],
    features: [
      "Multi-modal data ingestion from RSS, PDFs, and YouTube audio transcripts",
      "Structured LLM summarization with Pydantic validation",
      "SQLAlchemy relational persistence for historical document retrieval",
      "REST endpoints for query-driven knowledge retrieval"
    ],
    status: "Active Development",
    github: "https://github.com/Navjeet1605-sys",
    liveDemo: null
  }
];

export const hackathonsData = [
  {
    title: "Smart India Hackathon (SIH) 2026",
    role: "Team Prototype Developer",
    organization: "Ministry of Development of North Eastern Region (Govt. of India)",
    problemStatement: "Problem Statement 26001: AI-based landslide risk monitoring & early-warning system for the North Eastern Region",
    description: "Developed 'NER-Vision — AI Landslide Guardian', a working, runnable prototype covering every P0 requirement from the PRD. Trained a RandomForest classifier achieving 80% backtest accuracy, built an offline rule-based fallback, Leaflet GIS heatmap dashboard, and dynamic Dijkstra evacuation route planner.",
    badge: "SIH 2026 Prototype",
    verifiedStatus: "Fully functional working prototype submitted for SIH PS 26001",
    github: "https://github.com/Navjeet1605-sys/SIH-PS-26001"
  },
  {
    title: "Fetch AI-Thon 3.0",
    role: "Team Echelon Leader & Lead Agent Developer",
    organization: "Fetch.ai & Galgotias College of Engineering and Technology",
    problemStatement: "Autonomous Multi-Agent Systems & Decentralized Swarm Intelligence",
    description: "Led Team Echelon to Round 2 qualification at Galgotias College. Built 'O.M.N.I.S' (Omni-Modal Network Intelligence Swarm) using Fetch.ai uAgents (v0.25+), Agentverse cloud hosting, and ASI:One protocol. Designed a semantic DMM router for autonomous delegation between finance, web search, and automation agents.",
    badge: "Selected for Round 2",
    verifiedStatus: "Qualified for Round 2 at Galgotias College of Engineering & Technology",
    github: "https://github.com/Navjeet1605-sys/fetch-a-thon"
  },
  {
    title: "First-Year Technical Quiz Competition",
    role: "Individual Participant",
    organization: "MGM College of Engineering and Technology",
    problemStatement: "Computer Science Fundamentals, Data Structures & Logic",
    description: "Secured 3rd Position among first-year engineering students testing proficiency in C programming, algorithms, computer architecture, and computational problem-solving.",
    badge: "3rd Position 🏆",
    verifiedStatus: "Verified College Achievement",
    github: null
  }
];

export const educationData = [
  {
    institution: "Mahatma Gandhi Mission's College of Engineering and Technology (MGMCET)",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    location: "Noida, Sector 62, Uttar Pradesh",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    period: "2024 – 2028 (Currently in 2nd Year)",
    highlights: [
      "First Semester SGPA: 8.50",
      "Second Semester SGPA: 8.46",
      "Strong academic focus on Data Structures, Algorithms, Operating Systems & Database Management",
      "Active participant in collegiate hackathons and coding societies"
    ]
  }
];

export const extracurricularData = [
  {
    title: "OSCode Technical Club",
    role: "Graphics Design Team Member",
    organization: "MGMCET Noida",
    details: [
      "Designed visual resources, branding, and promo materials for college coding events and tech workshops.",
      "Collaborated with student developers to create UI assets and presentation slide decks for hackathons.",
      "Combines UI/UX aesthetic principles with engineering concepts for developer tooling."
    ]
  }
];

