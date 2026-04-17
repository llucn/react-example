export function HomePage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">System Informantion</h1>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="meta-grid">
            <div className="meta-item">
              <span className="meta-label">System Name</span>
              <span className="meta-value">System Name</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">English Name</span>
              <span className="meta-value">English Name</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Organization Name</span>
              <span className="meta-value">Organization Name</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Version</span>
              <span className="meta-value">1.0.0</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Tech Stack</span>
              <span className="meta-value">React + Vite + Ant Design + Spring Boot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
