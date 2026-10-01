export type LinkTarget = {
  label: string;
  href: string;
};

export type ProjectStatus = "completed" | "in-progress" | "planned" | "unknown";

export type ProjectFeature = {
  name: string;
  status: ProjectStatus;
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
    github: { label: "GitHub", href: "" },
    linkedin: { label: "LinkedIn", href: "" },
    resume: { label: "Resume", href: "" },
    email: { label: "Email", href: "" },
    leetcode: { label: "LeetCode", href: "" },
    repository: { label: "LeetHub repository", href: "" },
  },
};

const unknown = (name: string): ProjectFeature => ({ name, status: "unknown" });

const unknownMilestones = (names: string[]): ProjectMilestone[] =>
  names.map((name) => ({ name, status: "unknown" }));

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
    status: "Current development status needs confirmation",
    progress: null,
    technologies: [
      "React / Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Hyperledger Fabric",
      "OCR",
      "AI / RAG",
      "RBAC / ABAC",
    ],
    features: [
      unknown("Secure document management"),
      unknown("Document versioning"),
      unknown("OCR"),
      unknown("Document search"),
      unknown("Audit trails"),
      unknown("Digital signatures"),
      unknown("Blockchain-based integrity / provenance"),
      unknown("RBAC / ABAC access control"),
      unknown("AI / RAG capabilities"),
      unknown("Cross-department workflow"),
    ],
    milestones: unknownMilestones([
      "Core Architecture",
      "Backend",
      "Database",
      "Authentication",
      "Core Features",
      "AI Integration",
      "Deployment",
    ]),
    problem: "Project problem statement needs confirmation from Aarish.",
    solution: "Project solution details need confirmation from Aarish.",
    howItWorks: "The end-to-end workflow needs confirmation from Aarish.",
    keyTechnicalDecisions:
      "Key technical decisions need confirmation from Aarish.",
    architecture: null,
    challenges: ["Project challenges need confirmation from Aarish."],
    learnings: ["Project learnings need confirmation from Aarish."],
    githubUrl: "",
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
    status: "Current development status needs confirmation",
    progress: null,
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Python",
      "FastAPI",
      "LangGraph",
      "AWS",
      "Terraform",
      "Docker",
    ],
    features: [
      unknown("AWS resource monitoring"),
      unknown("Cost analysis"),
      unknown("FinOps insights"),
      unknown("Infrastructure analysis"),
      unknown("AI agent"),
      unknown("LangGraph workflow"),
      unknown("Terraform-based infrastructure actions"),
      unknown("Cloud optimization"),
    ],
    milestones: unknownMilestones([
      "React frontend",
      "Spring Boot API",
      "PostgreSQL data layer",
      "FastAPI + LangGraph agent",
      "Terraform actions",
      "AWS integration",
      "Deployment",
    ]),
    problem: "Project problem statement needs confirmation from Aarish.",
    solution: "Project solution details need confirmation from Aarish.",
    howItWorks:
      "The React → Spring Boot → PostgreSQL and FastAPI + LangGraph workflow was provided as a target architecture; implementation details need confirmation.",
    keyTechnicalDecisions:
      "The reasons behind the Java, Python, LangGraph, AWS, and Terraform boundaries need confirmation from Aarish.",
    architecture: [
      "React frontend",
      "Spring Boot API",
      "PostgreSQL",
      "Python FastAPI + LangGraph agent",
      "AWS / Terraform controlled execution",
    ],
    challenges: ["Project challenges need confirmation from Aarish."],
    learnings: ["Project learnings need confirmation from Aarish."],
    githubUrl: "",
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
    status: "Current development status needs confirmation",
    progress: null,
    technologies: [
      "React",
      "APIs",
      "Maps",
      "AQI",
      "Weather data",
      "Traffic data",
      "Historical data",
      "Route scoring",
      "Pollution prediction",
    ],
    features: [
      unknown("Cleanest route"),
      unknown("Fastest route"),
      unknown("Normal route"),
      unknown("AQI-aware route scoring"),
      unknown("Pollution analysis"),
      unknown("Route comparison"),
      unknown("Environmental reasoning"),
      unknown("User routes"),
      unknown("Notifications"),
    ],
    milestones: unknownMilestones([
      "Route planning",
      "Maps integration",
      "AQI data",
      "Weather data",
      "Traffic data",
      "Pollution prediction",
      "Notifications",
    ]),
    problem: "Project problem statement needs confirmation from Aarish.",
    solution: "Project solution details need confirmation from Aarish.",
    howItWorks:
      "The route-planning workflow and external APIs need confirmation from Aarish.",
    keyTechnicalDecisions:
      "The routing, scoring, and data-source decisions need confirmation from Aarish.",
    architecture: null,
    challenges: ["Project challenges need confirmation from Aarish."],
    learnings: ["Project learnings need confirmation from Aarish."],
    githubUrl: "",
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
