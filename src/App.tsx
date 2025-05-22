import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AgentListPage from './pages/agent-lists-page/index.tsx'
import LayoutComponent from '../Layout.tsx'
import DashboardPage from './pages/dashboard-page/index.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/agent-lists" element={<AgentListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
