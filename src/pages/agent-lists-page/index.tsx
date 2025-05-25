import { useState } from 'react';
import './style.scss'
import PageHeaderComponent from '../../components/Page-Header';
import clientAvatar from '../../assets/images/clinets.png'

type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: 'profile', label: 'Q/A Agents' },
  { id: 'dashboard', label: 'Appointment Agents' },
];

const AgentListsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <PageHeaderComponent />

      <div className='p-4'>
        <ul className="flex flex-wrap text-sm font-medium text-center bg-white rounded-lg">
          {tabs.map((tab) => (
            <li className="me-2" key={tab.id} role="presentation">
              <button
                className={`h-20 w-full inline-block p-4 rounded-t-lg ${activeTab === tab.id
                  ? 'border-primary text-primary border-b-2'
                  : 'hover:text-primary'
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
        <div className="mt-4">
          {activeTab === 'profile' && (
            <div className="agent-cards">
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent One</h5>
                      <p>Q/A agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribed-btn' type='button'>Subscribed</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Two</h5>
                      <p>Q/A agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribed-btn' type='button'>Subscribed</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Three</h5>
                      <p>Q/A agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribe-btn' type='button'>Subscribe</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Four</h5>
                      <p>Q/A agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribe-btn' type='button'>Subscribe</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Five</h5>
                      <p>Q/A agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribe-btn' type='button'>Subscribe</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Six</h5>
                      <p>Q/A agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribe-btn' type='button'>Subscribe</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="agent-cards">
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent One</h5>
                      <p>Appointment agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribe-btn' type='button'>Subscribe</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Two</h5>
                      <p>Appointment agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribed-btn' type='button'>Subscribed</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Three</h5>
                      <p>Appointment agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribe-btn' type='button'>Subscribe</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Four</h5>
                      <p>Appointment agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribed-btn' type='button'>Subscribed</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Five</h5>
                      <p>Appointment agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribed-btn' type='button'>Subscribed</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="card-header">
                  <div className="agent-info-area">
                    <img src="https://avatar.iran.liara.run/public" alt="Agent Avatar" />
                    <div>
                      <h5>Agent Six</h5>
                      <p>Appointment agent</p>
                    </div>
                  </div>
                  <div className="agent-subscribe-area">
                    <button className='subscribe-btn' type='button'>Subscribe</button>
                  </div>
                </div>
                <div className="pricing-area">
                  <div className="left-area">
                    <h5>Start Date: <span>02-05-2024</span></h5>
                    <h5>End Date: <span>02-06-2024</span></h5>
                  </div>
                  <div className="right-area">
                    <p>Pricing</p>
                    <h6>$15k</h6>
                  </div>
                </div>
                <div className="about-agent-area">
                  <p>
                    I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person
                  </p>
                </div>
                <hr />
                <div className="client-lists-area">
                  <div className="left-area">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                      </svg>20 Members
                    </p>
                  </div>
                  <div className="right-area">
                    <img src={clientAvatar} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default AgentListsPage;
