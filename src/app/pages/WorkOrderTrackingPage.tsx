import { WorkOrderHeader } from './work-orders/WorkOrderHeader';
import { WorkOrderActionBar } from './work-orders/WorkOrderActionBar';
import { WorkOrderSummary } from './work-orders/WorkOrderSummary';
import { WorkOrderTabs } from './work-orders/WorkOrderTabs';
import { WorkOrderTaskCard } from './work-orders/WorkOrderTaskCard';
import { sampleWorkOrder } from './work-orders/mockData';

export function WorkOrderTrackingPage() {
  const wo = sampleWorkOrder;

  const tasksPanel = (
    <div className="wo-task-list">
      {wo.tasks.map((task) => (
        <WorkOrderTaskCard key={task.id} task={task} />
      ))}
    </div>
  );

  const attachmentsPanel = (
    <div className="wo-tab-empty">
      {wo.attachments.length} attachment{wo.attachments.length === 1 ? '' : 's'} (preview not implemented).
    </div>
  );

  const historyPanel = (
    <div className="wo-history-list">
      {wo.history.map((entry) => (
        <div className="wo-history-item" key={entry.id}>
          <div className="wo-history-meta">{entry.at} · {entry.actor}</div>
          <div className="wo-history-action">{entry.action}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="wo-page">
      <WorkOrderHeader />
      <WorkOrderActionBar />
      <WorkOrderSummary workOrder={wo} />
      <WorkOrderTabs
        taskCount={wo.tasks.length}
        attachmentCount={wo.attachments.length}
        tasksPanel={tasksPanel}
        attachmentsPanel={attachmentsPanel}
        historyPanel={historyPanel}
      />
    </div>
  );
}
