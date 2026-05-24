export interface WorkOrderTaskItemField {
  label: string;
  value: string;
}

export interface WorkOrderTaskItem {
  id: string;
  title: string;
  fields: WorkOrderTaskItemField[];
}

export interface WorkOrderAttachment {
  id: string;
  name: string;
  sizeKb: number;
  uploadedAt: string;
}

export interface WorkOrderHistoryEntry {
  id: string;
  at: string;
  actor: string;
  action: string;
}

export interface WorkOrder {
  id: string;
  title: string;
  description: string;
  status: string;
  statusDate: string;
  asset: string;
  assetDetails: string;
  location: string;
  createdBy: string;
  createdAt: string;
  tasks: WorkOrderTaskItem[];
  attachments: WorkOrderAttachment[];
  history: WorkOrderHistoryEntry[];
}

export const sampleWorkOrder: WorkOrder = {
  id: '1027',
  title: 'Water Treatment For Cooling Tower',
  description:
    'Water treatment for cooling tower Water treatment for cooling tower Water treatment for cooling tower',
  status: 'Assigned',
  statusDate: '4/25/24 11:49 AM',
  asset: '10263',
  assetDetails: 'XXXXXXXXXXXXXXX',
  location: 'Garden St 20',
  createdBy: 'Gregory K',
  createdAt: '8/31/23 11:49 AM',
  tasks: [
    {
      id: 't-1',
      title: 'Inspect cooling tower intake',
      fields: [
        { label: 'Assignee', value: 'Gregory K' },
        { label: 'Due', value: '4/26/24 09:00 AM' },
        { label: 'Priority', value: 'High' },
        { label: 'Status', value: 'In Progress' },
        { label: 'Estimated Hours', value: '2.5' },
        { label: 'Last Updated', value: '4/25/24 11:49 AM' },
      ],
    },
    {
      id: 't-2',
      title: 'Sample water chemistry',
      fields: [
        { label: 'Assignee', value: 'Maria L' },
        { label: 'Due', value: '4/26/24 11:00 AM' },
        { label: 'Priority', value: 'Medium' },
        { label: 'Status', value: 'Pending' },
        { label: 'Estimated Hours', value: '1.0' },
        { label: 'Last Updated', value: '4/25/24 12:14 PM' },
      ],
    },
    {
      id: 't-3',
      title: 'Apply biocide treatment',
      fields: [
        { label: 'Assignee', value: 'Alex P' },
        { label: 'Due', value: '4/26/24 02:00 PM' },
        { label: 'Priority', value: 'High' },
        { label: 'Status', value: 'Blocked' },
        { label: 'Estimated Hours', value: '3.0' },
        { label: 'Last Updated', value: '4/25/24 03:08 PM' },
      ],
    },
    {
      id: 't-4',
      title: 'Verify discharge readings',
      fields: [
        { label: 'Assignee', value: 'Gregory K' },
        { label: 'Due', value: '4/27/24 10:00 AM' },
        { label: 'Priority', value: 'Low' },
        { label: 'Status', value: 'Not Started' },
        { label: 'Estimated Hours', value: '0.5' },
        { label: 'Last Updated', value: '4/25/24 04:42 PM' },
      ],
    },
  ],
  attachments: [
    {
      id: 'a-1',
      name: 'cooling-tower-spec.pdf',
      sizeKb: 482,
      uploadedAt: '4/25/24 09:12 AM',
    },
    {
      id: 'a-2',
      name: 'site-photo.jpg',
      sizeKb: 1830,
      uploadedAt: '4/25/24 09:14 AM',
    },
  ],
  history: [
    {
      id: 'h-1',
      at: '4/25/24 11:49 AM',
      actor: 'Gregory K',
      action: 'Assigned work order to Gregory K',
    },
    {
      id: 'h-2',
      at: '8/31/23 11:49 AM',
      actor: 'Gregory K',
      action: 'Work order created',
    },
  ],
};
