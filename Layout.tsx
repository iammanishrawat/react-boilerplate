import { Outlet } from 'react-router-dom'
import SidebarComponent from './src/components/Sidebar'
import TopBarComponent from './src/components/Topbar'
import { useState } from 'react'

const LayoutComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarComponent isOpen={sidebarOpen} />
      </div>
      <div
        className={`transition-all ${
          sidebarOpen ? 'sm:ml-64' : 'ml-0'
        } bg-gray-100 h-screen`}
      >
        <TopBarComponent onToggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </>
  )
}

export default LayoutComponent
