export function StatusLegend() {
  return (
    <div className="status-legend" aria-label="Project status legend">
      <span>
        <i className="status-completed" /> Completed
      </span>
      <span>
        <i className="status-in-progress" /> In progress
      </span>
      <span>
        <i className="status-planned" /> Planned
      </span>
      <span>
        <i className="status-unknown" /> Unknown
      </span>
    </div>
  );
}
