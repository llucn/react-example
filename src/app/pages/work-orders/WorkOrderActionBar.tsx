import { Button, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

export function WorkOrderActionBar() {
  return (
    <div className="wo-action-bar">
      <Space wrap size={12}>
        <Button onClick={() => {}}>Action 1</Button>
        <Button onClick={() => {}}>Action 2</Button>
        <Button onClick={() => {}}>Action 3</Button>
        <Button
          aria-label="More actions"
          icon={<MoreOutlined />}
          onClick={() => {}}
        />
      </Space>
      <Button type="primary" onClick={() => {}}>
        Update Work
      </Button>
    </div>
  );
}
