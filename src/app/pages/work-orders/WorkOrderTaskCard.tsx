import type { WorkOrderTaskItem } from './mockData';

interface WorkOrderTaskCardProps {
  task: WorkOrderTaskItem;
}

export function WorkOrderTaskCard({ task }: WorkOrderTaskCardProps) {
  return (
    <div className="wo-task-card">
      <div className="wo-task-card-title">{task.title}</div>
      <div className="wo-task-card-fields">
        {task.fields.slice(0, 6).map((field, idx) => (
          <div className="wo-task-card-field" key={`${task.id}-${idx}`}>
            <div className="wo-task-card-field-label">{field.label}</div>
            <div className="wo-task-card-field-value">{field.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
