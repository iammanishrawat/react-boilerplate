import { useState } from 'react'
import logo from '../../assets/images/pacific-health-logo.png'
import './style.scss'
import { Link } from 'react-router-dom'
const SidebarComponent = ({ isOpen }: any) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleSubmenu = (menuKey: string) => {
    setOpenMenu((prev) => (prev === menuKey ? null : menuKey))
  }
  return (
    <>
      <div
        className={`h-full px-3 py-4 overflow-y-auto sidebar transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <img src={logo} alt="" className="logo" />
        <ul className="space-y-2 font-medium mt-6">
          <li>
            <Link
              to={'/dashboard'}
              className="flex items-center p-3 rounded-lg group text-gray-600 hover:bg-primary hover:text-white cursor-pointer justify-between"
            >
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="whitespace-nowrap">Dashboard</span>
              </div>
            </Link>
          </li>

          <li>
            <div className="flex items-center p-3 rounded-lg group text-gray-600 hover:bg-primary hover:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Agents</span>
              <svg
                onClick={() => toggleSubmenu('agents')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4 hover:text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={openMenu === 'agents' ? 'M5 10h10' : 'M10 5v10m5-5H5'}
                />
              </svg>
            </div>
            {/* Submenu */}
            {openMenu === 'agents' && (
              <ul
                className={`ml-10 mt-1 space-y-1 text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  openMenu === 'agents'
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <li>
                  <Link
                    to={'/agent-lists'}
                    className="block py-1 cursor-pointer hover:text-primary"
                  >
                    Agent lists
                  </Link>
                </li>
                <li>
                  <Link
                    to={''}
                    className="block py-1 cursor-pointer hover:text-primary"
                  >
                    Subscribed agents
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div className="flex items-center p-3 rounded-lg group text-gray-600 hover:bg-primary hover:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Chatbot</span>
              <svg
                onClick={() => toggleSubmenu('chatbot')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4 hover:text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={openMenu === 'chatbot' ? 'M5 10h10' : 'M10 5v10m5-5H5'}
                />
              </svg>
            </div>
            {/* Submenu */}
            {openMenu === 'chatbot' && (
              <ul
                className={`ml-10 mt-1 space-y-1 text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  openMenu === 'chatbot'
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <li>
                  <Link
                    to={''}
                    className="block py-1 cursor-pointer hover:text-primary"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to={''}
                    className="block py-1 cursor-pointer hover:text-primary"
                  >
                    All chatbots
                  </Link>
                </li>
                <li>
                  <Link
                    to={''}
                    className="block py-1 cursor-pointer hover:text-primary"
                  >
                    Associated agents
                  </Link>
                </li>
                <li>
                  <Link
                    to={''}
                    className="block py-1 cursor-pointer hover:text-primary"
                  >
                    Chatbot configuration
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}

export default SidebarComponent
