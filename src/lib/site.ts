export type LinkTarget = {
  label: string;
  href: string;
};

export type ProjectStatus = "completed" | "in-progress" | "planned";

export type ProjectFeature = {
  name: string;
  status: ProjectStatus;
  description?: string;
};

export type ProjectMilestone = {
  name: string;
  status: ProjectStatus;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  summary: string;
  accent: "cyan" | "violet" | "lime";
  status: string;
  progress: number | null;
  technologies: string[];
  features: ProjectFeature[];
  milestones: ProjectMilestone[];
  problem: string;
  solution: string;
  howItWorks: string;
  keyTechnicalDecisions: string;
  architecture: string[] | null;
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  liveUrl: string;
};

export const siteConfig = {
  name: "Aarish Sharma",
  logo: "AS_",
  title: "Aarish Sharma | Backend & Full-Stack Developer",
  description:
    "Portfolio of Aarish Sharma — B.Tech CSE student building backend systems, cloud applications, AI-powered products, and full-stack software.",
  links: {
    github: { label: "GitHub", href: "https://github.com/AarishSharmaComp" },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aarish-sharma-dev/?isSelfProfile=true",
    },
    resume: { label: "Resume", href: "/#contact" },
    email: { label: "Email", href: "mailto:aarishcomp@gmail.com" },
    leetcode: { label: "LeetCode", href: "https://leetcode.com/u/aarishcomp/" },
    repository: {
      label: "LeetHub repository",
      href: "https://github.com/AarishSharmaComp/LeetCode-Solution",
    },
  },
};

const milestonesFromFeatures = (
  features: ProjectFeature[],
): ProjectMilestone[] => features.map(({ name, status }) => ({ name, status }));

const nyayaFeatures: ProjectFeature[] = [
  {
    name: "Blockchain Provenance",
    status: "completed",
    description:
      "Hyperledger Fabric with SHA-256 hashing creates tamper-evident document provenance.",
  },
  {
    name: "Document Versioning",
    status: "completed",
    description:
      "Tracks critical document versions with hashes and blockchain transaction records.",
  },
  {
    name: "Secure Document Management",
    status: "completed",
    description:
      "Controlled document access, audit trails, RBAC/ABAC, and digital signatures.",
  },
  {
    name: "AI Document Intelligence",
    status: "completed",
    description:
      "OCR, semantic search, RAG, and AI summarization support evidence discovery.",
  },
  {
    name: "Secure Storage",
    status: "completed",
    description: "AWS S3 with Object Lock protects document storage.",
  },
  {
    name: "Forensic Chain Intelligence",
    status: "completed",
    description:
      "Connects cases, documents, users, versions, and blockchain records in a unified provenance trail.",
  },
  { name: "Automatic Evidence Timeline", status: "in-progress" },
  { name: "Evidence Integrity Monitor", status: "in-progress" },
  { name: "Forensic Chain Intelligence / Evidence Graph", status: "planned" },
  { name: "Automated Chain-of-Custody Engine", status: "planned" },
];

const costPilotFeatures: ProjectFeature[] = [
  {
    name: "React, Java, Spring Boot, PostgreSQL, AWS, and Python/LangGraph architecture",
    status: "completed",
    description:
      "Established the React, Java, Spring Boot, PostgreSQL, AWS, and Python/LangGraph architecture.",
  },
  {
    name: "IAM, EC2, APIs, and database configuration",
    status: "completed",
    description: "Configured IAM, EC2, APIs, and the database.",
  },
  {
    name: "Backend tested with actual database records and API",
    status: "completed",
    description:
      "Tested the backend against actual database records and the API.",
  },
  {
    name: "Git repository structure",
    status: "completed",
    description: "Established the Git repository structure.",
  },
  {
    name: "Eventual optimization design",
    status: "completed",
    description: "Designed for eventual optimization, not execution.",
  },
  {
    name: "AWS billing data FinOps",
    status: "in-progress",
    description: "Developing AWS billing data and FinOps capabilities.",
  },
  {
    name: "FastAPI and LangGraph",
    status: "in-progress",
    description: "Developing the FastAPI and LangGraph layer.",
  },
  {
    name: "Terraform automation layer",
    status: "in-progress",
    description: "Developing the Terraform automation layer.",
  },
  {
    name: "Frontend API wiring",
    status: "in-progress",
    description: "Connecting the frontend to the APIs.",
  },
  {
    name: "Security hardening",
    status: "in-progress",
    description: "Hardening application security.",
  },
  { name: "Autonomous FinOps Agent", status: "planned" },
  { name: "Cost Anomaly Detection", status: "planned" },
  { name: "AI Cost Forecasting", status: "planned" },
  { name: "Automated Resource Optimization", status: "planned" },
  { name: "AI Root-Cause Analysis", status: "planned" },
  {
    name: "Terraform execution integration",
    status: "planned",
    description:
      "Planned Terraform execution integration despite the automation layer being in progress.",
  },
  {
    name: "Human Approval & Safety Layer",
    status: "planned",
    description: "Planned human approval before safety-sensitive actions.",
  },
  {
    name: "Real-Time FinOps Dashboard",
    status: "planned",
    description:
      "Shows costs, utilization, anomalies, savings, and recommendations.",
  },
  {
    name: "Natural-Language FinOps Copilot",
    status: "planned",
    description:
      "Lets users ask questions about their AWS infrastructure and costs.",
  },
  {
    name: "Observe, analyze, recommend, approve, execute, verify loop",
    status: "planned",
    description:
      "Planned workflow from observation through verified execution.",
  },
];

const cleanRouteFeatures: ProjectFeature[] = [
  {
    name: "OSRM car, Valhalla walk/cycle, alternatives, and geometry",
    status: "completed",
    description:
      "Supports OSRM car routes, Valhalla walking and cycling routes, alternatives, and geometry.",
  },
  {
    name: "OpenMeteo route sampling",
    status: "completed",
    description: "Samples OpenMeteo data along routes.",
  },
  {
    name: "FASTEST, CLEANEST, and BALANCED ranking",
    status: "completed",
    description: "Ranks routes as FASTEST, CLEANEST, or BALANCED.",
  },
  {
    name: "Truthful coverage, provenance, and missing data",
    status: "completed",
    description:
      "Communicates coverage, provenance, and missing data truthfully.",
  },
  {
    name: "Auth, saved routes, places, history, notifications, and preferences",
    status: "completed",
    description:
      "Includes authentication and saved routes, places, history, notifications, and preferences.",
  },
  {
    name: "React Leaflet",
    status: "completed",
    description: "Uses React Leaflet for map interaction.",
  },
  {
    name: "Docker, Spring Boot, PostgreSQL, and providers",
    status: "completed",
    description:
      "Includes Docker, Spring Boot, PostgreSQL, and route or data providers.",
  },
  {
    name: "Backend and frontend tests with real API verification",
    status: "completed",
    description: "Tests the backend and frontend with real API verification.",
  },
  {
    name: "Synced Git repository",
    status: "completed",
    description: "Keeps the project synchronized in Git.",
  },
  { name: "Route Intelligence & Comparison", status: "in-progress" },
  { name: "Improved Map Visualization", status: "in-progress" },
  { name: "Better Environmental Insights", status: "in-progress" },
  { name: "Final Frontend UX Refinement", status: "in-progress" },
  { name: "Future Production Hardening", status: "in-progress" },
  { name: "Pollution Prediction", status: "in-progress" },
  { name: "AI Route Advisor", status: "planned" },
  { name: "Real-time Pollution-aware Rerouting", status: "planned" },
  { name: "Pollution Heatmap", status: "planned" },
  { name: "Personal Exposure Prediction", status: "planned" },
  { name: "Time-aware Route Planning", status: "planned" },
  { name: "Multi-objective Route Optimization", status: "planned" },
  { name: "Historical Pollution Intelligence", status: "planned" },
  { name: "Weather-aware Routing", status: "planned" },
  { name: "Green-route Learning", status: "planned" },
  { name: "Community Environmental Reports", status: "planned" },
];

export const projects: Project[] = [
  {
    slug: "nyaya-setu",
    number: "01",
    title: "Nyaya Setu",
    tagline: "Secure Digital Legal & Investigation Platform",
    category: "Secure legal & investigation platform",
    summary:
      "A secure digital platform designed for managing legal and investigation documents with emphasis on integrity, provenance, access control, auditability, and intelligent document processing.",
    accent: "cyan",
    status: "IN PROGRESS",
    progress: 90,
    technologies: [
      "React / Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Hyperledger Fabric",
      "SHA256",
      "S3 Object Lock",
      "OCR",
      "Semantic search",
      "RAG",
      "RBAC",
      "ABAC",
      "Digital signatures",
    ],
    features: nyayaFeatures,
    milestones: milestonesFromFeatures(nyayaFeatures),
    problem:
      "Legal and investigation evidence needs integrity, provenance, controlled access, and an auditable history.",
    solution:
      "Nyaya Setu combines Fabric SHA256 provenance, protected storage, access controls, document intelligence, and forensic tracking.",
    howItWorks:
      "Documents are processed with OCR and search capabilities, protected with hashes and S3 Object Lock, and tracked through access, audit, signature, and provenance records.",
    keyTechnicalDecisions:
      "Fabric SHA256 provenance, versioning hashes and transactions, RBAC and ABAC, signatures, OCR, RAG, and S3 Object Lock were selected for integrity, control, and document analysis.",
    architecture: [
      "Document processing and search provide OCR, semantic search, RAG, and summarization.",
      "Fabric records SHA256 provenance, versions, hashes, and transactions.",
      "RBAC, ABAC, signatures, and audit logging control and record access.",
      "S3 Object Lock protects stored evidence.",
      "Forensic timeline, integrity monitoring, and provenance tracking organize evidence history.",
    ],
    challenges: [
      "Blockchain implementation and blockchain-based audit logging.",
    ],
    learnings: [
      "Learned how Hyperledger Fabric can be used for this type of system and how to implement blockchain-based functionality.",
    ],
    githubUrl: "https://github.com/Utkarshya24/nyayasetu",
    liveUrl: "",
  },
  {
    slug: "costpilot",
    number: "02",
    title: "CostPilot",
    tagline: "AWS FinOps & AI Cost Optimization Agent",
    category: "AWS FinOps & AI cost optimization agent",
    summary:
      "An AWS-focused FinOps platform designed to monitor cloud resources, identify inefficient usage, analyze potential cost issues, and assist with infrastructure optimization.",
    accent: "violet",
    status: "IN PROGRESS",
    progress: 45,
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Python",
      "FastAPI",
      "LangGraph",
      "AWS billing data",
      "IAM",
      "EC2",
      "Terraform",
      "Docker",
    ],
    features: costPilotFeatures,
    milestones: milestonesFromFeatures(costPilotFeatures),
    problem:
      "AWS costs need usable billing visibility, FinOps analysis, and a controlled path from recommendations to infrastructure action.",
    solution:
      "CostPilot combines a tested application foundation with AWS billing and FinOps work, a FastAPI/LangGraph layer, and a Terraform automation layer.",
    howItWorks:
      "The React frontend connects to the Spring Boot API and PostgreSQL data layer, while Python, FastAPI, and LangGraph support the developing analysis workflow and Terraform is intended for controlled execution.",
    keyTechnicalDecisions:
      "The completed React, Java, Spring Boot, PostgreSQL, AWS, and Python/LangGraph architecture separates the application foundation from the in-progress FastAPI, LangGraph, and Terraform automation work.",
    architecture: [
      "React frontend presents cost and FinOps information.",
      "Spring Boot provides the application API.",
      "PostgreSQL stores application data.",
      "AWS billing data supports FinOps analysis.",
      "Python, FastAPI, and LangGraph provide the developing analysis workflow.",
      "Terraform provides the developing automation layer and planned execution integration.",
    ],
    challenges: [
      "Understanding AWS deeply and implementing LangGraph and agentic AI functionality.",
    ],
    learnings: [
      "Learned how to build an agentic AI system and how to work toward deploying a full-stack/cloud project.",
    ],
    githubUrl: "https://github.com/AarishSharmaComp/CostPilot/",
    liveUrl: "",
  },
  {
    slug: "clean-route",
    number: "03",
    title: "Clean Route",
    tagline: "Pollution-Aware Route Optimization",
    category: "Pollution-aware route optimization",
    summary:
      "A route-planning application designed to help users find routes while considering air pollution and environmental conditions, particularly for runners and cyclists.",
    accent: "lime",
    status: "IN PROGRESS",
    progress: 63,
    technologies: [
      "OSRM",
      "Valhalla",
      "Open-Meteo Air Quality API",
      "Open-Meteo Weather API",
      "React",
      "Leaflet",
      "Docker",
      "Spring Boot",
      "PostgreSQL",
    ],
    features: cleanRouteFeatures,
    milestones: milestonesFromFeatures(cleanRouteFeatures),
    problem:
      "People need route choices that make the tradeoff between travel time, route cleanliness, and environmental conditions explicit.",
    solution:
      "Clean Route combines route providers, weather sampling, route ranking, truthful data coverage, and saved-user features for pollution-aware planning.",
    howItWorks:
      "OSRM and Valhalla provide route options and geometry, OpenMeteo is sampled along routes, and the application ranks options as FASTEST, CLEANEST, or BALANCED while reporting provenance and missing data.",
    keyTechnicalDecisions:
      "Different providers support car, walking, and cycling routes; React Leaflet handles map presentation; Spring Boot and PostgreSQL support the application; traffic is not integrated.",
    architecture: [
      "OSRM and Valhalla provide route options, alternatives, and geometry.",
      "OpenMeteo supplies sampled weather data along routes.",
      "Spring Boot and PostgreSQL support backend data and user features.",
      "React Leaflet presents route maps and comparisons.",
      "Docker packages the application and its providers.",
    ],
    challenges: ["Training the model to predict pollution."],
    learnings: [
      "Learned how to integrate multiple APIs so they work together and how to work with multiple datasets for model training.",
    ],
    githubUrl: "https://github.com/AarishSharmaComp/CleanRoute/",
    liveUrl: "",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["C++", "Java", "Python", "JavaScript"] },
  {
    label: "Backend",
    items: ["Spring Boot", "FastAPI", "REST APIs", "Hibernate", "JWT"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "JavaScript"],
  },
  { label: "Databases", items: ["PostgreSQL", "Redis", "pgvector"] },
  {
    label: "Cloud / DevOps",
    items: ["AWS", "Docker", "Terraform", "EC2", "S3", "IAM"],
  },
  { label: "AI", items: ["LangGraph", "RAG", "LLMs", "Embeddings"] },
  { label: "Other", items: ["Git", "GitHub", "Hyperledger Fabric"] },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNavigation(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next:
      index >= 0 && index < projects.length - 1
        ? projects[index + 1]
        : undefined,
  };
}
