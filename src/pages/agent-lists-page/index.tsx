import { useState } from 'react'
import PageHeaderComponent from '../../components/Page-Header'

type Tab = {
  id: string
  label: string
}

const tabs: Tab[] = [
  { id: 'profile', label: 'Q/A Agents' },
  { id: 'dashboard', label: 'Appointment Agents' },
]

const tabContent: Record<string, string> = {
  profile:
    'This is some placeholder content for the Q/A Agents tab. You can add real agent data here.',
  dashboard:
    'This is some placeholder content for the Appointment Agents tab. You can render appointments here.',
}

const AgentListsPage = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')

  return (
    <>
      <PageHeaderComponent />

      <div className="m-4 bg-white rounded-md">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {tabs.map((tab) => (
            <li className="me-2" key={tab.id} role="presentation">
              <button
                className={`h-20 w-full inline-block p-4 rounded-t-lg ${
                  activeTab === tab.id
                    ? 'border-primary text-primary border-b-2'
                    : ''
                }`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-4">
        <div className="p-4">
          <p>{tabContent[activeTab]}</p>
        </div>
      </div>
    </>
  )
}

export default AgentListsPage
