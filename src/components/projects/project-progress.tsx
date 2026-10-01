import type { ProjectMilestone, ProjectStatus } from "@/lib/site";
import { StatusLegend } from "@/components/ui/status-legend";

const statusSymbols: Record<ProjectStatus, string> = {
  completed: "✓",
  "in-progress": "◐",
  planned: "○",
};

const statusLabels: Record<ProjectStatus, string> = {
  completed: "COMPLETED",
  "in-progress": "IN PROGRESS",
  planned: "PLANNED",
};

export function ProjectProgress({
  progress,
  milestones,
}: {
  progress: number | null;
  milestones: ProjectMilestone[];
}) {
  return (
    <section
      className="detail-panel progress-panel"
      aria-labelledby="progress-title"
    >
      <div className="detail-panel-heading">
        <span className="detail-label">Development progress</span>
        <span className="progress-value">
          {progress === null ? "?" : `${progress}%`}
        </span>
      </div>
      <StatusLegend />
      <div
        className="progress-track"
        aria-label={
          progress === null
            ? "Progress needs confirmation"
            : `${progress}% complete`
        }
      >
        <span style={{ width: `${progress ?? 0}%` }} />
      </div>
      {progress === null && (
        <p className="unknown-note">
          Completion percentage needs confirmation before it can be displayed.
        </p>
      )}
      <div className="milestone-list" id="progress-title">
        {milestones.map((milestone) => (
          <div className="milestone" key={milestone.name}>
            <span
              className={`status-symbol status-${milestone.status}`}
              aria-label={statusLabels[milestone.status]}
            >
              {statusSymbols[milestone.status]}
            </span>
            <span>{milestone.name}</span>
            <small>{statusLabels[milestone.status]}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
