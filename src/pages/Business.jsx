import { useMemo, useState } from 'react'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'

import keyTechnologyEN from '../../assets/en/business/keytechnology.png'
import technologyStackEN from '../../assets/en/business/technologystack.png'
import salesRecordsEN from '../../assets/en/business/salesrecords.png'

import keyTechnologyKO from '../../assets/ko/business/keytechnology.png'
import technologyStackKO from '../../assets/ko/business/technologystack.png'
import salesRecordsKO from '../../assets/ko/business/salesrecords.png'

import { useLanguage } from '../context/LanguageContext'
import BusinessProductDescription from '../components/BusinessProductDescription'

const text = 'fdafssaf';

const businessTabs = [
  { 
    id: 'key-technology', 
    label: {
      en: 'Key technology',
      ko: '보유인력현황'
    }, 
    image: {
      en: keyTechnologyEN,
      ko: keyTechnologyKO
    }, 
    alt: 'Key technology' 
  },
  { 
    id: 'technology-stack', 
    label: {
      en: 'Technology stack', 
      ko: '보유기술현황'
    },
    image: {
      en: technologyStackEN,
      ko: technologyStackKO,
    }, 
    alt: 'Technical staff' 
  },
  { 
    id: 'sales-records',
    label: {
      en: 'Sales Records',
      ko: '납품실적 현황',
    }, 
    image: {
      en: salesRecordsEN,
      ko: salesRecordsKO,
    }, 
    alt: 'Sales records' 
  },
  {
    id: 'product',
    label: {
      ko: '주요품목'
    },
    alt: '주요 품목'
  }
]

const title = {
  en: 'Business Introduction',
  ko: '사업소개'
}

function Business() {
  const [activeTab, setActiveTab] = useState('key-technology')
  const activeContent = useMemo(() => businessTabs.find((tab) => tab.id === activeTab), [activeTab])
  const { language, _ } = useLanguage();

  return (
    <main className="content">
      <HeroGallery />
      <PageTitleBar title={title[language]} />
      <div className="tabs">
        {businessTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-button${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label[language]}
          </button>
        ))}
      </div>
      {
        !activeContent ? (
          null
        ) :
          activeTab !== 'product' ? (
          <div className="tab-panel image-only">
            <img src={activeContent.image[language]} alt={activeContent.alt} className="tab-visual" />
          </div>
        )
        : (
          <BusinessProductDescription />
        )
      }  
    </main>
  )
}

export default Business
