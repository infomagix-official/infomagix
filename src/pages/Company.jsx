import { useMemo, useState } from 'react'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import companyHistoryImage from '../../assets/company/company_history.png'
import companyOverviewImage from '../../assets/company/company_overview.png'

const companyTabs = [
  {
    id: 'overview',
    label: 'Company Overview',
    image: companyOverviewImage,
    alt: 'Infomagix company overview montage',
  },
  {
    id: 'history',
    label: 'Company History',
    image: companyHistoryImage,
    alt: 'Infomagix company history collage',
  },
  {
    id: 'direction',
    label: 'Direction',
  },
]

function Company() {
  const [activeTab, setActiveTab] = useState('overview')

  const activeContent = useMemo(() => companyTabs.find((tab) => tab.id === activeTab), [activeTab])

  return (
    <main className="content">
      <HeroGallery title="Company" subtitle="About Infomagix" />
      <PageTitleBar title="Company Info" />
      <div className="tabs">
        {companyTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-button${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeContent ? (
        activeTab === 'direction' ? (
          <div className="tab-panel direction-panel">
            <div className="map-wrapper">
              <iframe
                title="Infomagix Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.670014856684!2d126.9931133153123!3d37.42754753981695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b637e5f21d829%3A0x2d71b24e9497edc9!2sGwacheon%20dae-ro%207-gil%2033%2C%20Gwacheon-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1700000000000!5m2!1sen!2skr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="tab-info">
              <h3>Visit Our HQ</h3>
              <p>Gwacheon-daero 7-gil 33, Gwacheon-si, Gyeonggi-do</p>
              <p>5 minutes walk from Government Complex Gwacheon Station.</p>
              <button
                type="button"
                className="btn btn-primary direction-btn"
                onClick={() =>
                  window.open(
                    'https://maps.google.com/?q=Gwacheon-daero+7-gil+33,+Gwacheon-si,+Gyeonggi-do',
                    '_blank',
                  )
                }
              >
                View on Google Maps
              </button>
            </div>
          </div>
        ) : (
          <div className="tab-panel image-only">
            <img src={activeContent.image} alt={activeContent.alt} className="tab-visual" />
          </div>
        )
      ) : null}
    </main>
  )
}

export default Company
