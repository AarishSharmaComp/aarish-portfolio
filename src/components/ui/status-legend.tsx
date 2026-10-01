export function StatusLegend() {
  return (
    <div className="status-legend" aria-label="Project status legend">
      <span>
        <i className="status-completed" /> COMPLETED
      </span>
      <span>
        <i className="status-in-progress" /> IN PROGRESS
      </span>
      <span>
        <i className="status-planned" /> PLANNED
      </span>
    </div>
  );
}
