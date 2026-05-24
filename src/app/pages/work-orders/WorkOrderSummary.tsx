import type { WorkOrder } from './mockData';

interface WorkOrderSummaryProps {
  workOrder: WorkOrder;
}

export function WorkOrderSummary({ workOrder }: WorkOrderSummaryProps) {
  return (
    <div className="wo-summary">
      <div className="wo-summary-heading">
        <div className="wo-summary-id">#{workOrder.id}</div>
        <div className="wo-summary-title">{workOrder.title}</div>
      </div>
      <dl className="wo-summary-grid">
        <div className="wo-summary-row">
          <dt className="wo-summary-label">Description</dt>
          <dd className="wo-summary-value">{workOrder.description}</dd>
        </div>
        <div className="wo-summary-row">
          <dt className="wo-summary-label">Status</dt>
          <dd className="wo-summary-value">
            <span className="wo-summary-value-main">{workOrder.status}</span>
            <span className="wo-summary-value-aux">{workOrder.statusDate}</span>
          </dd>
        </div>
        <div className="wo-summary-row">
          <dt className="wo-summary-label">Asset#</dt>
          <dd className="wo-summary-value">{workOrder.asset}</dd>
        </div>
        <div className="wo-summary-row">
          <dt className="wo-summary-label">Asset Details</dt>
          <dd className="wo-summary-value">{workOrder.assetDetails}</dd>
        </div>
        <div className="wo-summary-row">
          <dt className="wo-summary-label">Location Details</dt>
          <dd className="wo-summary-value">{workOrder.location}</dd>
        </div>
        <div className="wo-summary-row">
          <dt className="wo-summary-label">Created by…</dt>
          <dd className="wo-summary-value">
            <span className="wo-summary-value-main">{workOrder.createdBy}</span>
            <span className="wo-summary-value-aux">{workOrder.createdAt}</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
