import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, MenuOutlined } from '@ant-design/icons';

export function WorkOrderHeader() {
  const navigate = useNavigate();

  return (
    <div className="wo-header">
      <button
        type="button"
        className="wo-header-icon-btn"
        aria-label="Back"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftOutlined />
      </button>
      <h1 className="wo-header-title">Work Order Tracking</h1>
      <button
        type="button"
        className="wo-header-icon-btn"
        aria-label="More"
        onClick={() => {}}
      >
        <MenuOutlined />
      </button>
    </div>
  );
}
