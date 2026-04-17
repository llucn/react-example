import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Spin, message } from 'antd';
import { fetchIssueById, type Issue } from '../auth/api-client';
import { BaiduMapView } from '../components/BaiduMapView';

export function IssueDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [issue, setIssue] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchIssueById(id)
      .then(setIssue)
      .catch((err) => {
        if (err?.response?.status === 404) {
          setNotFound(true);
        } else {
          message.error('Error when load issue detail');
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">Issue not found</h1>
        </div>
        <Button onClick={() => navigate('/issues')}>Issues List</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Issue Detail</h1>
        <Button onClick={() => navigate('/issues')}>Issues List</Button>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="meta-grid">
            <div className="meta-item">
              <span className="meta-label">ID</span>
              <span className="meta-value">{issue?.id}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Title</span>
              <span className="meta-value">{issue?.title}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Description</span>
              <span className="meta-value">{issue?.description}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Address</span>
              <span className="meta-value">{issue?.address ?? '-'}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Deadline</span>
              <span className="meta-value">
                {issue?.deadline ? new Date(issue.deadline).toLocaleString() : '-'}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Recruit Count</span>
              <span className="meta-value">{issue?.recruitCount ?? '-'}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Skill Requirement</span>
              <span className="meta-value">{issue?.skillRequirement ?? '-'}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Created By</span>
              <span className="meta-value">{issue?.createdBy}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Created At</span>
              <span className="meta-value">
                {issue?.createdAt ? new Date(issue.createdAt).toLocaleString() : '-'}
              </span>
            </div>
          </div>
        </div>
      </div>
      {issue && (
        <div className="card" style={{ marginTop: 20 }}>
          <div className="card-head">
            <span className="card-head-title">Location</span>
          </div>
          <div className="card-body" style={{ padding: 0 }}>
            <BaiduMapView longitude={issue.longitude} latitude={issue.latitude} />
          </div>
        </div>
      )}
    </div>
  );
}
