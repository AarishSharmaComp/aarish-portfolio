import Link from "next/link";

import type { Project } from "@/lib/site";
import { getProjectNavigation } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { ExternalAction } from "@/components/ui/external-action";
import { ProjectProgress } from "@/components/projects/project-progress";

const statusSymbols = {
  completed: "✓",
  "in-progress": "◐",
  planned: "○",
  unknown: "?",
} as const;

export function ProjectDetail({ project }: { project: Project }) {
  const navigation = getProjectNavigation(project.slug);

  return (
    <main className={`project-detail-page accent-${project.accent}`}>
      <section className="project-detail-hero section-grid">
        <div className="shell">
          <Reveal>
            <Link className="back-link" href="/#projects">
              <Icon name="arrow" size={15} /> Back to projects
            </Link>
            <div className="detail-hero-grid">
              <div>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span>{project.category}</span>
                </div>
                <p className="detail-eyebrow">
                  Project case study / {project.slug}
                </p>
                <h1>{project.title}</h1>
                <p className="detail-tagline">{project.tagline}</p>
                <p className="detail-summary">{project.summary}</p>
                <div className="detail-status">
                  <span className="pulse-dot" /> {project.status}
                </div>
                <div className="detail-actions">
                  <ExternalAction href={project.githubUrl} label="GitHub">
                    <span>
                      View on GitHub <Icon name="external" size={14} />
                    </span>
                  </ExternalAction>
                  {project.liveUrl && (
                    <ExternalAction href={project.liveUrl} label="Live demo">
                      <span>
                        Live demo <Icon name="external" size={14} />
                      </span>
                    </ExternalAction>
                  )}
                </div>
              </div>
              <div className="detail-hero-mark">
                <span>{project.number}</span>
                <strong>{project.slug.replace("-", "_")}</strong>
                <i />
              </div>
            </div>
            <div className="tag-list detail-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section project-overview-section">
        <div className="shell">
          <div className="detail-content-grid">
            <Reveal>
              <ProjectProgress
                progress={project.progress}
                milestones={project.milestones}
              />
            </Reveal>
            <Reveal delay={100}>
              <DetailTextBlock
                label="Project overview"
                title="The context"
                text={project.summary}
              />
              <DetailTextBlock
                label="Problem"
                title="What it is trying to solve"
                text={project.problem}
              />
              <DetailTextBlock
                label="Solution"
                title="The intended approach"
                text={project.solution}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section project-data-section section-grid">
        <div className="shell">
          <div className="detail-content-grid">
            <Reveal>
              <div className="detail-panel">
                <div className="detail-panel-heading">
                  <span className="detail-label">Features</span>
                  <span className="panel-count">
                    {project.features.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="feature-list">
                  {project.features.map((feature) => (
                    <div className="feature-row" key={feature.name}>
                      <span
                        className={`status-symbol status-${feature.status}`}
                      >
                        {statusSymbols[feature.status]}
                      </span>
                      <span>{feature.name}</span>
                      <small>{feature.status.replace("-", " ")}</small>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="detail-panel">
                <div className="detail-panel-heading">
                  <span className="detail-label">Technology stack</span>
                  <span className="panel-count">STACK</span>
                </div>
                <div className="tag-list detail-stack-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
              {project.architecture ? (
                <ArchitectureBlock architecture={project.architecture} />
              ) : (
                <div className="detail-panel">
                  <span className="detail-label">Architecture</span>
                  <p className="unknown-note">
                    Architecture details need confirmation before a diagram can
                    be shown.
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section case-study-section">
        <div className="shell">
          <div className="case-study-grid">
            <Reveal>
              <DetailTextBlock
                label="How it works"
                title="From idea to workflow"
                text={project.howItWorks}
              />
              <DetailTextBlock
                label="Key technical decisions"
                title="Why these building blocks"
                text={project.keyTechnicalDecisions}
              />
            </Reveal>
            <Reveal delay={100}>
              <DetailListBlock label="Challenges" items={project.challenges} />
              <DetailListBlock
                label="What I learned"
                items={project.learnings}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="project-navigation">
        <div className="shell">
          <Link className="back-link" href="/#projects">
            <Icon name="arrow" size={15} /> Back to projects
          </Link>
          <div className="project-nav-grid">
            {navigation.previous ? (
              <Link href={`/projects/${navigation.previous.slug}`}>
                <small>Previous project</small>
                <strong>{navigation.previous.title}</strong>
                <Icon name="arrow" size={18} />
              </Link>
            ) : (
              <span />
            )}
            {navigation.next ? (
              <Link href={`/projects/${navigation.next.slug}`}>
                <small>Next project</small>
                <strong>{navigation.next.title}</strong>
                <Icon name="arrow" size={18} />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailTextBlock({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="detail-text-block">
      <span className="detail-label">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function DetailListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="detail-text-block">
      <span className="detail-label">{label}</span>
      <ul className="case-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ArchitectureBlock({ architecture }: { architecture: string[] }) {
  return (
    <div className="detail-panel architecture-panel">
      <span className="detail-label">Architecture</span>
      <div className="architecture-diagram">
        {architecture.map((item, index) => (
          <div className="architecture-node" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            {index < architecture.length - 1 && <b>↓</b>}
          </div>
        ))}
      </div>
    </div>
  );
}
