import { SectionHeading } from "@/components/sections/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Systems with a point of view."
          description="Three technical explorations across security, cloud economics, and environmental data."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
