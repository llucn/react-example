import type { ReactNode } from 'react';
import { Badge, Tabs } from 'antd';

interface WorkOrderTabsProps {
  taskCount: number;
  attachmentCount: number;
  tasksPanel: ReactNode;
  attachmentsPanel: ReactNode;
  historyPanel: ReactNode;
}

export function WorkOrderTabs({
  taskCount,
  attachmentCount,
  tasksPanel,
  attachmentsPanel,
  historyPanel,
}: WorkOrderTabsProps) {
  return (
    <Tabs
      defaultActiveKey="tasks"
      className="wo-tabs"
      items={[
        {
          key: 'tasks',
          label: (
            <span className="wo-tab-label">
              Tasks
              <Badge
                count={taskCount}
                showZero
                color="#1677ff"
                className="wo-tab-badge"
              />
            </span>
          ),
          children: tasksPanel,
        },
        {
          key: 'attachments',
          label: (
            <span className="wo-tab-label">
              Attachments
              <Badge
                count={attachmentCount}
                showZero
                color="#1677ff"
                className="wo-tab-badge"
              />
            </span>
          ),
          children: attachmentsPanel,
        },
        {
          key: 'history',
          label: <span className="wo-tab-label">History</span>,
          children: historyPanel,
        },
        {
          key: 'tab-4',
          label: <span className="wo-tab-label">Tab label</span>,
          children: <div className="wo-tab-empty">No content.</div>,
        },
        {
          key: 'tab-5',
          label: <span className="wo-tab-label">Tab label</span>,
          children: <div className="wo-tab-empty">No content.</div>,
        },
      ]}
    />
  );
}
