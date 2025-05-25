import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import AgentListPage from './pages/agent-lists-page/index.tsx'
import LayoutComponent from '../Layout.tsx'
import DashboardPage from './pages/dashboard-page/index.tsx'
import LoginPage from './pages/Auth/login-page/index.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Redirect root (/) to /login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Public route - no layout */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes - with layout */}
          <Route path="/" element={<LayoutComponent />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="agent-lists" element={<AgentListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
