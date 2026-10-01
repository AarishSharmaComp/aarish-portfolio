import Link from "next/link";

import { projects } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <main className="section shell">
      <div className="section-kicker">
        <span>03</span>
        <i />
        Selected work
      </div>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
