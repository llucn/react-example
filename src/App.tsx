import { Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { ProtectedRoute } from './app/auth/ProtectedRoute';
import { useConfigureApiClient } from './app/auth/useConfigureApiClient';
import { AppLayout } from './app/layouts/AppLayout';
import { HomePage } from './app/pages/HomePage';
import { ProfilePage } from './app/pages/ProfilePage';
import { PublishIssuePage } from './app/pages/PublishIssuePage';
import { IssueListPage } from './app/pages/IssueListPage';
import { IssueDetailPage } from './app/pages/IssueDetailPage';
import { ThemeProvider, useTheme } from './app/theme/ThemeContext';

function AppInner() {
  useConfigureApiClient();
  const { theme: appTheme } = useTheme();
  const algorithm = appTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <ConfigProvider theme={{ algorithm }}>
      <ProtectedRoute>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/publish" element={<PublishIssuePage />} />
            <Route path="/issues" element={<IssueListPage />} />
            <Route path="/issues/:id" element={<IssueDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </AppLayout>
      </ProtectedRoute>
    </ConfigProvider>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
