import { Children, useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkSupSub, { supSubHandlers } from '../lib/remarkSupSub'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import companyHistoryMarkdownEN from '../../assets/en/company/company_history.md?raw'
import companyOverviewMarkdownEN from '../../assets/en/company/company_overview.md?raw'
import companyMarkdownStylesEN from '../../assets/en/company/styles.css?url'
import companyHistoryMarkdownKO from '../../assets/ko/company/company_history.md?raw'
import companyOverviewMarkdownKO from '../../assets/ko/company/company_overview.md?raw'
import companyMarkdownStylesKO from '../../assets/ko/company/styles.css?url'
import { useLanguage } from '../context/LanguageContext'

const companyTabs = [
  {
    id: 'overview',
    label: {
      en: 'Company Overview',
      ko: '회사 개요',
    },
    markdown: {
      en: companyOverviewMarkdownEN,
      ko: companyOverviewMarkdownKO,
    },
  },
  {
    id: 'history',
    label: {
      en: 'Company History',
      ko: '회사 연혁',
    },
    markdown: {
      en: companyHistoryMarkdownEN,
      ko: companyHistoryMarkdownKO,
    },
  },
  {
    id: 'direction',
    label: {
      en: 'Location & Directions',
      ko: '찾아오시는 길',
    },
  },
]

const title = {
  en: 'Company Info',
  ko: '회사 소개',
}

function Company() {
  const [activeTab, setActiveTab] = useState('overview')
  const { language } = useLanguage()

  const activeContent = useMemo(() => companyTabs.find((tab) => tab.id === activeTab), [activeTab])
  const markdownContent = activeContent?.markdown?.[language]
  const markdownStyleUrl = language === 'ko' ? companyMarkdownStylesKO : companyMarkdownStylesEN
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
    const linkId = 'company-markdown-style'
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
        {companyTabs.map((tab) => (
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
      {activeContent ? (
        activeTab === 'direction' ? (
          <div className="tab-panel direction-panel">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.1649032748959!2d126.97745779902576!3d37.41160083608959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f16b02faccf%3A0xfea05eacda8163a3!2sD%20TECH%20TOWER!5e0!3m2!1sko!2skr!4v1764059456594!5m2!1sko!2skr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ) : (
          <div className="tab-panel image-only company-content-panel">
            {markdownContent ? (
              <div className="company-markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkSupSub]}
                  remarkRehypeOptions={{ handlers: supSubHandlers }}
                  components={markdownComponents}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            ) : null}
          </div>
        )
      ) : null}
    </main>
  )
}

export default Company
