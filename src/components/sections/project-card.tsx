"use client";

import { useState } from "react";
import Link from "next/link";

import type { Project } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Reveal delay={index * 80}>
      <article
        className={`project-card accent-${project.accent} ${expanded ? "expanded" : ""}`}
      >
        <div className="project-main">
          <div className="project-info">
            <div className="project-topline">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
              <span className="project-arrow">
                <Icon name="arrow" size={18} />
              </span>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="project-title-link"
            >
              <h3>{project.title}</h3>
            </Link>
            <p>{project.summary}</p>
            <div className="tag-list">
              {project.technologies.slice(0, 5).map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
              <span className="tag-more">
                +{project.technologies.length - 5}
              </span>
            </div>
            <div className="project-actions">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Icon name="external" size={14} />
                </a>
              ) : (
                <span
                  className="action-disabled"
                  title="GitHub URL not configured"
                >
                  GitHub <small>add URL</small>
                </span>
              )}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <Icon name="external" size={14} />
                </a>
              ) : (
                <span
                  className="action-disabled"
                  title="Live demo URL not configured"
                >
                  Live demo <small>add URL</small>
                </span>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="case-study-link"
              >
                Open project <Icon name="arrow" size={14} />
              </Link>
              <button
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? "Close case study" : "View case study"}
                <Icon name={expanded ? "close" : "arrow"} size={14} />
              </button>
            </div>
          </div>
          <ProjectVisual project={project} />
        </div>
        {expanded && <ProjectDetails project={project} />}
      </article>
    </Reveal>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual">
      <div className="visual-noise" />
      <div className="visual-window">
        <div className="visual-header">
          <span>{project.slug}.system</span>
          <i />
          <i />
          <i />
        </div>
        {project.slug === "nyaya-setu" && (
          <>
            <div className="doc-stack">
              <div className="doc-card back">
                <span>CASE_014</span>
                <b>••••••••••</b>
                <b>••••••••••</b>
              </div>
              <div className="doc-card front">
                <span className="doc-lock">⌁</span>
                <strong>evidence</strong>
                <small>verified / 04.21.25</small>
                <i />
              </div>
            </div>
            <div className="visual-footer">
              <span>integrity</span>
              <strong>verified</strong>
            </div>
          </>
        )}
        {project.slug === "costpilot" && (
          <div className="cost-visual">
            <div className="cost-total">
              <small>COST SIGNAL</small>
              <strong>
                FINOPS<span> / AI</span>
              </strong>
              <em>resource analysis workspace</em>
            </div>
            <div className="bar-chart">
              {[44, 68, 52, 84, 62, 92, 71, 77, 54, 88].map((height, i) => (
                <i key={i} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="visual-footer">
              <span>agent status</span>
              <strong>monitoring</strong>
            </div>
          </div>
        )}
        {project.slug === "clean-route" && (
          <div className="map-visual">
            <div className="map-grid" />
            <div className="route route-one" />
            <div className="route route-two" />
            <div className="route route-three" />
            <span className="map-pin pin-one">A</span>
            <span className="map-pin pin-two">B</span>
            <div className="route-legend">
              <span>
                <i className="lime-dot" /> cleanest
              </span>
              <span>
                <i className="violet-dot" /> fastest
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="project-details">
      <div className="detail-column">
        <span className="detail-label">01 / Problem</span>
        <p>{project.problem}</p>
      </div>
      <div className="detail-column">
        <span className="detail-label">02 / Solution</span>
        <p>{project.solution}</p>
      </div>
      {project.architecture && (
        <div className="detail-column architecture-column">
          <span className="detail-label">03 / Architecture</span>
          <div className="architecture-flow">
            {project.architecture.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
                {index < project.architecture!.length - 1 && <b>↓</b>}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="detail-column">
        <span className="detail-label">04 / Key features</span>
        <ul>
          {project.features.map((feature) => (
            <li key={feature.name}>
              <span
                className={`status-mark status-${feature.status}`}
                aria-label={feature.status}
              />
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="detail-column">
        <span className="detail-label">05 / Challenges</span>
        <p>{project.challenges.join(" ")}</p>
      </div>
      <div className="detail-column">
        <span className="detail-label">06 / What I learned</span>
        <p>{project.learnings.join(" ")}</p>
      </div>
      <div className="detail-stack">
        <span className="detail-label">Technology stack</span>
        <div className="tag-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
