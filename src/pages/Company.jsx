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
      <HeroGallery />
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.1649032748959!2d126.97745779902576!3d37.41160083608959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f16b02faccf%3A0xfea05eacda8163a3!2sD%20TECH%20TOWER!5e0!3m2!1sko!2skr!4v1764059456594!5m2!1sko!2skr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            {/* <div className="tab-info">
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
            </div> */}
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
