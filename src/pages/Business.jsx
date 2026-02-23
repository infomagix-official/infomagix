import { Children, useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import keyTechnologyMarkdownEN from '../../assets/en/business/keytechnology.md?raw'
import technologyStackMarkdownEN from '../../assets/en/business/technologystack.md?raw'
import salesRecordsMarkdownEN from '../../assets/en/business/salesrecords.md?raw'
import businessMarkdownStylesEN from '../../assets/en/business/styles.css?url'
import keyTechnologyMarkdownKO from '../../assets/ko/business/keytechnology.md?raw'
import technologyStackMarkdownKO from '../../assets/ko/business/technologystack.md?raw'
import salesRecordsMarkdownKO from '../../assets/ko/business/salesrecords.md?raw'
import businessMarkdownStylesKO from '../../assets/ko/business/styles.css?url'
import { useLanguage } from '../context/LanguageContext'
import BusinessProductDescription from '../components/BusinessProductDescription'

const businessTabs = [
  {
    id: 'key-technology',
    label: {
      en: 'Key Technology',
      ko: '보유기술',
    },
    markdown: {
      en: keyTechnologyMarkdownEN,
      ko: keyTechnologyMarkdownKO,
    },
  },
  {
    id: 'technology-stack',
    label: {
      en: 'Technology Stack',
      ko: '기술 분야',
    },
    markdown: {
      en: technologyStackMarkdownEN,
      ko: technologyStackMarkdownKO,
    },
  },
  {
    id: 'sales-records',
    label: {
      en: 'Sales Records',
      ko: '납품 실적',
    },
    markdown: {
      en: salesRecordsMarkdownEN,
      ko: salesRecordsMarkdownKO,
    },
  },
  {
    id: 'product',
    label: {
      en: 'Main Products',
      ko: '주요 품목',
    },
  },
]

const title = {
  en: 'Business Introduction',
  ko: '사업 소개',
}

function Business() {
  const [activeTab, setActiveTab] = useState('key-technology')
  const activeContent = useMemo(() => businessTabs.find((tab) => tab.id === activeTab), [activeTab])
  const { language } = useLanguage()
  const markdownContent = activeContent?.markdown?.[language]
  const markdownStyleUrl = language === 'ko' ? businessMarkdownStylesKO : businessMarkdownStylesEN
  const markdownComponents = useMemo(
    () => ({
      td: ({ children, ...props }) => {
        const nodes = Children.toArray(children)
        const rendered = []

        nodes.forEach((node, nodeIndex) => {
          if (typeof node !== 'string') {
            rendered.push(node)
            return
          }

          const chunks = node
            .split(';')
            .map((chunk) => chunk.trim())
            .filter((chunk) => chunk.length > 0)

          if (chunks.length <= 1) {
            rendered.push(node)
            return
          }

          chunks.forEach((chunk, chunkIndex) => {
            rendered.push(chunk)
            if (chunkIndex < chunks.length - 1) {
              rendered.push(<br key={`br-${nodeIndex}-${chunkIndex}`} />)
            }
          })
        })

        return <td {...props}>{rendered}</td>
      },
    }),
    [],
  )

  useEffect(() => {
    const linkId = 'business-markdown-style'
    const existing = document.getElementById(linkId)

    if (!markdownContent) {
      if (existing) existing.remove()
      return
    }

    const link = existing ?? document.createElement('link')
    if (!existing) {
      link.rel = 'stylesheet'
      link.id = linkId
      document.head.appendChild(link)
    }
    link.href = markdownStyleUrl

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link)
    }
  }, [markdownContent, markdownStyleUrl])

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
      {!activeContent ? null : activeTab !== 'product' ? (
        <div className="tab-panel image-only business-content-panel">
            {markdownContent ? (
              <div className="business-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {markdownContent}
                </ReactMarkdown>
              </div>
            ) : null}
          </div>
      ) : (
        <BusinessProductDescription />
      )}
    </main>
  )
}

export default Business
