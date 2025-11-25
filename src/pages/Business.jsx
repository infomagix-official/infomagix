import { useMemo, useState } from 'react'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import keyTechnology from '../../assets/en/business/keytechnology.png'
import technicalStaff from '../../assets/en/business/technicalstaff.png'
import salesRecords from '../../assets/en/business/salesrecords.png'

const businessTabs = [
  { id: 'key-technology', label: 'Key technology', image: keyTechnology, alt: 'Key technology' },
  { id: 'technical-staff', label: 'Technical staff', image: technicalStaff, alt: 'Technical staff' },
  { id: 'sales-records', label: 'Sales Records', image: salesRecords, alt: 'Sales records' },
]

function Business() {
  const [activeTab, setActiveTab] = useState('key-technology')
  const activeContent = useMemo(() => businessTabs.find((tab) => tab.id === activeTab), [activeTab])

  return (
    <main className="content">
      <HeroGallery title="Business Introduction" subtitle="Business Introduction" />
      <PageTitleBar title="Business Introduction" />
      <div className="tabs">
        {businessTabs.map((tab) => (
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
        <div className="tab-panel image-only">
          <img src={activeContent.image} alt={activeContent.alt} className="tab-visual" />
        </div>
      ) : null}
    </main>
  )
}

export default Business
