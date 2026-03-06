import { useEffect, useMemo, useState, Children, isValidElement } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkSupSub, { supSubHandlers } from '../lib/remarkSupSub'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'


import nvdsEN from '../../assets/en/product/nvds.md?raw'
import pedalRobotEN from '../../assets/en/product/pedalrobot.md?raw'
import gpsSpeedSensorVsdEN from '../../assets/en/product/gpsspeedsensorvsd.png'
import gpsVmsTestSystemEN from '../../assets/en/product/gpsvmstestsystem.png'
import apsDriveControllerEN from '../../assets/en/product/aps(drive)controllervms3400.md?raw'
import vmsCoastdownTestingEN from '../../assets/en/product/vmscoastdowntesting.png'
import vmsVehicleDaqEN from '../../assets/en/product/vmsvehicledaq.png'
import vehicleDriveTestSystemMdEN from '../../assets/en/product/vehicledrivetestsystem.md?raw'
import vehicleDriveTestSystemEN from '../../assets/en/product/vehicledrivetestsystem.png'
import vlogDataLoggerEN from '../../assets/en/product/vlogdatalogger.md?raw'
import vcdCanDisplayEN from '../../assets/en/product/vcdcandisplay.md?raw'
import b2DaqAdBoardEN from '../../assets/en/product/b2daqadboard.png'
import activeSoftwareEN from '../../assets/en/product/activesoftware.png'
import activeeyeSoftwareEN from '../../assets/en/product/activeeyesoftware.png'
import chamberControlBaqEN from '../../assets/en/product/chambercontroldaq.md?raw'
import testBenchEN from '../../assets/en/product/testbench.md?raw'
import costDownTestServiceEN from '../../assets/en/product/coastdowntestservice.md?raw'
import productMarkdownStylesEN from '../../assets/en/product/styles.css?url'

import nvdsKO from '../../assets/ko/product/nvds.md?raw'
import pedalRobotKO from '../../assets/ko/product/pedalrobot.md?raw'
import gpsSpeedSensorVsdKO from '../../assets/ko/product/gpsspeedsensorvsd.png'
import gpsVmsTestSystemKO from '../../assets/ko/product/gpsvmstestsystem.png'
import apsDriveControllerKO from '../../assets/ko/product/aps(drive)controllervms3400.md?raw'
import vmsCoastdownTestingKO from '../../assets/ko/product/vmscoastdowntesting.png'
import vmsVehicleDaqKO from '../../assets/ko/product/vmsvehicledaq.png'
import vehicleDriveTestSystemMdKO from '../../assets/ko/product/vehicledrivetestsystem.md?raw'
import vehicleDriveTestSystemKO from '../../assets/ko/product/vehicledrivetestsystem.png'
import vlogDataLoggerKO from '../../assets/ko/product/vlogdatalogger.md?raw'
import vcdCanDisplayKO from '../../assets/ko/product/vcdcandisplay.md?raw'
import b2DaqAdBoardKO from '../../assets/ko/product/b2daqadboard.png'
import activeSoftwareKO from '../../assets/ko/product/activesoftware.png'
import activeeyeSoftwareKO from '../../assets/ko/product/activeeyesoftware.png'
import chamberControlBaqKO from '../../assets/ko/product/chambercontroldaq.md?raw'
import testBenchKO from '../../assets/ko/product/testbench.md?raw'
import costDownTestServiceKO from '../../assets/ko/product/coastdowntestservice.md?raw'
import productMarkdownStylesKO from '../../assets/ko/product/styles.css?url'

import vmsCostdownFile from '../../assets/file/251002인포매직스 주행저항시험 안내.pdf'

import { useLanguage } from '../context/LanguageContext'

const baseUrl = import.meta.env.BASE_URL ?? '/'
const resolveMarkdownSrc = (src) => {
  if (!src || typeof src !== 'string' || !src.startsWith('/')) return src
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  return `${normalizedBase}${src.replace(/^\/+/, '')}`
}

const isFiniteNumber = (value) => typeof value === 'number' && Number.isFinite(value)

const toPercent = (value) => {
  if (isFiniteNumber(value)) return `${value}%`
  if (typeof value === 'string' && value.trim().length > 0) return value
  return undefined
}

const parseMarkdownImageAlt = (alt) => {
  const rawAlt = typeof alt === 'string' ? alt.trim() : ''
  if (!rawAlt) {
    return {
      altText: '',
      caption: '',
      widthValue: null,
    }
  }

  const segments = rawAlt.split('|').map((segment) => segment.trim()).filter(Boolean)
  const options = {
    altText: segments[0] ?? '',
    caption: '',
    widthValue: null,
  }

  const extractLegacyWidth = (text) => {
    const widthMatch = text.match(/\bw=([0-9]+(?:\.[0-9]+)?)%?\b/i)
    if (!widthMatch) return text.trim()
    options.widthValue = options.widthValue ?? `${widthMatch[1]}%`
    return text.replace(widthMatch[0], '').replace(/\s{2,}/g, ' ').trim()
  }

  options.altText = extractLegacyWidth(options.altText)

  for (let index = 1; index < segments.length; index += 1) {
    const segment = segments[index]
    const optionMatch = segment.match(/^([a-z][\w-]*)\s*=\s*(.+)$/i)

    if (!optionMatch) {
      options.altText = [options.altText, extractLegacyWidth(segment)].filter(Boolean).join(' ').trim()
      continue
    }

    const [, key, rawValue] = optionMatch
    const value = rawValue.trim()

    if (key.toLowerCase() === 'caption') {
      options.caption = value
      continue
    }

    if (key.toLowerCase() === 'w') {
      const widthMatch = value.match(/^([0-9]+(?:\.[0-9]+)?)%?$/)
      if (widthMatch) options.widthValue = `${widthMatch[1]}%`
    }
  }

  return options
}

const parseDiagramDefinition = (source) => {
  if (typeof source !== 'string') return null

  try {
    const parsed = JSON.parse(source)
    if (!parsed || typeof parsed !== 'object') return null
    if (!Array.isArray(parsed.items)) return null
    return parsed
  } catch {
    return null
  }
}

function DiagramBlock({ definition }) {
  const hasBaseImage = typeof definition.baseImage === 'string' && definition.baseImage.trim().length > 0
  const baseImageSrc = hasBaseImage ? resolveMarkdownSrc(definition.baseImage) : null
  const aspectRatio = typeof definition.aspectRatio === 'string' ? definition.aspectRatio : '16 / 9'
  const figureStyle = {
    aspectRatio,
    background: typeof definition.background === 'string' ? definition.background : undefined,
    border: typeof definition.border === 'string' ? definition.border : undefined,
  }
  const defaultImageFit = typeof definition.imageFit === 'string' ? definition.imageFit : 'contain'
  const defaultImagePosition = typeof definition.imagePosition === 'string' ? definition.imagePosition : 'center'
  const items = Array.isArray(definition.items) ? definition.items : []
  const arrows = items.filter((item) => item?.type === 'arrow')
  const layers = items.filter((item) => item?.type !== 'arrow')

  return (
    <figure className="md-diagram" style={figureStyle}>
      {hasBaseImage ? <img className="md-diagram-base" src={baseImageSrc} alt={definition.alt ?? ''} /> : null}
      <div className="md-diagram-overlay">
        {layers.map((item, index) => {
          const style = {
            left: toPercent(item.x) ?? '0%',
            top: toPercent(item.y) ?? '0%',
            width: toPercent(item.w),
            height: toPercent(item.h),
            zIndex: isFiniteNumber(item.z) ? item.z : undefined,
          }
          const className = `${item.className ?? ''}`.trim()

          if (item.type === 'image') {
            const imageStyle = {
              ...style,
              objectFit: typeof item.fit === 'string' ? item.fit : defaultImageFit,
              objectPosition: typeof item.position === 'string' ? item.position : defaultImagePosition,
            }

            return (
              <img
                key={`diagram-image-${index}`}
                className={`md-diagram-item md-diagram-image ${className}`.trim()}
                style={imageStyle}
                src={resolveMarkdownSrc(item.src)}
                alt={item.alt ?? ''}
              />
            )
          }

          return (
            <div
              key={`diagram-text-${index}`}
              className={`md-diagram-item md-diagram-text ${className}`.trim()}
              style={style}
            >
              {item.text ?? ''}
            </div>
          )
        })}
        {arrows.length > 0 ? (
          <svg className="md-diagram-arrows" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              {arrows.map((arrow, index) => {
                const color = typeof arrow.color === 'string' ? arrow.color : '#e61b1b'
                const rawHeadSize = Number(arrow.headSize)
                const headScale = Number.isFinite(rawHeadSize) && rawHeadSize > 0 ? rawHeadSize : 0.375
                const markerW = 8 * headScale
                const markerH = 8 * headScale
                const refX = 4 * headScale
                const refY = 4 * headScale
                const markerId = `md-diagram-arrow-${index}`
                return (
                  <marker
                    key={`diagram-arrow-marker-${index}`}
                    id={markerId}
                    markerWidth={markerW}
                    markerHeight={markerH}
                    refX={refX}
                    refY={refY}
                    orient="auto"
                    markerUnits="userSpaceOnUse"
                  >
                    <path d={`M 0 0 L ${8 * headScale} ${4 * headScale} L 0 ${8 * headScale} z`} fill={color} />
                  </marker>
                )
              })}
            </defs>
            {arrows.map((arrow, index) => {
              const x1 = Number(arrow.x1)
              const y1 = Number(arrow.y1)
              const x2 = Number(arrow.x2)
              const y2 = Number(arrow.y2)
              if (![x1, y1, x2, y2].every(Number.isFinite)) return null

              const stroke = typeof arrow.color === 'string' ? arrow.color : '#e61b1b'
              const width = Number.isFinite(Number(arrow.width)) ? Number(arrow.width) : 0.55
              const rawHeadSize = Number(arrow.headSize)
              const headScale = Number.isFinite(rawHeadSize) && rawHeadSize > 0 ? rawHeadSize : 0.375
              const headOffset = 4 * headScale
              const dx = x2 - x1
              const dy = y2 - y1
              const length = Math.hypot(dx, dy)
              const shorten = length > 0 ? Math.min(headOffset, length) : 0
              const adjustedX2 = length > 0 ? x2 - (dx / length) * shorten : x2
              const adjustedY2 = length > 0 ? y2 - (dy / length) * shorten : y2
              const markerId = `md-diagram-arrow-${index}`

              return (
                <line
                  key={`diagram-arrow-${index}`}
                  x1={x1}
                  y1={y1}
                  x2={adjustedX2}
                  y2={adjustedY2}
                  stroke={stroke}
                  strokeWidth={width}
                  markerEnd={`url(#${markerId})`}
                />
              )
            })}
          </svg>
        ) : null}
      </div>
      {definition.caption ? <figcaption className="md-diagram-caption">{definition.caption}</figcaption> : null}
    </figure>
  )
}

const products = [
  { 
    id: 'nvds',
    name: {
      en: 'NVDS',
      ko: 'NVDS'
    }, 
    markdown: {
      en: nvdsEN,
      ko: nvdsKO
    },
    file: []
  },
  { 
    id: 'pedal-robot',
    name: {
      en: 'Pedal Robot',
      ko: 'Pedal Robot'
    },
    markdown: {
      en: pedalRobotEN,
      ko: pedalRobotKO
    },
    file: []
      
  },
  { 
    id: 'gps-speed-sensor-vsd',
    name: {
      en: 'GPS speed sensor VSD',
      ko: 'GPS speed sensor VSD'
    },
    image: {
      en: gpsSpeedSensorVsdEN,
      ko: gpsSpeedSensorVsdKO
    },
    file: []
  },
  { 
    id: 'gps-vms-test-system', 
    name: {
      en: 'GPS+VMS Test system',
      ko: 'GPS+VMS Test system',
    },
    image: {
      en: gpsVmsTestSystemEN,
      ko: gpsVmsTestSystemKO
    },
    file: []
  },
  { 
    id: 'aps-drive-controller-vms3400', 
    name: {
      en: 'APS(Drive) controller VMS3400',
      ko: 'APS(Drive) controller VMS3400'
    }, 
    markdown: {
      en: apsDriveControllerEN,
      ko: apsDriveControllerKO 
    },
    file: []
  },
  { 
    id: 'vms-coastdown-testing', 
    name: {
      en: 'VMS Coastdown testing',
      ko: 'VMS 연비 코스트다운시험'
    }, 
    image: {
      en: vmsCoastdownTestingEN,
      ko: vmsCoastdownTestingKO
    },
    file: [
      //{
      //  name: '251002인포매직스 주행저항시험 안내.pdf',
      //  file: vmsCostdownFile
      //}
    ]
  },
  {
    id: 'coastdown-test-service',
    name: {
      en: 'costdown test service',
      ko: '주행저항시험용역',
    },
    markdown: {
      en: costDownTestServiceEN,
      ko: costDownTestServiceKO
    },
    file: []
  },
  { 
    id: 'vms-vehicle-daq', 
    name: {
      en: 'VMS Vehicle DAQ',
      ko: 'VMS Vehicle DAQ'
    }, 
    image: {
      en: vmsVehicleDaqEN,
      ko: vmsVehicleDaqKO,
    },
    file: []
  },
  { 
    id: 'vehicle-drive-test-system',
    name: {
      en: 'Vehicle Drive Test System',
      ko: '주행검사장비'
    },
    markdown: {
      en: vehicleDriveTestSystemMdEN,
      ko: vehicleDriveTestSystemMdKO
    },
    image: {
      en: vehicleDriveTestSystemEN,
      ko: vehicleDriveTestSystemKO
    },
    file: []
  },
  { 
    id: 'vlog-data-logger', 
    name: {
      en: 'VLOG Data logger',
      ko: 'VLOG Data logger',
    }, 
    markdown: {
      en: vlogDataLoggerEN,
      ko: vlogDataLoggerKO
    },
    file: []
  },
  { 
    id: 'vcd-can-display', 
    name: {
      en: 'VCD CAN display',
      ko: 'VCD CAN display',
    }, 
    markdown: {
      en: vcdCanDisplayEN,
      ko: vcdCanDisplayKO
    },
    file: []
  },
  { 
    id: 'b2-daq-ad-board', 
    name: {
      en: 'B2-DAQ AD Board',
      ko: 'B2-DAQ AD Board'
    }, 
    image: {
      en: b2DaqAdBoardEN,
      ko: b2DaqAdBoardKO,
    },
    file: []
  },
  { 
    id: 'active-software', 
    name: {
      en: 'Active software',
      ko: 'Active software'
    }, 
    image: {
      en: activeSoftwareEN,
      ko: activeSoftwareKO
    },
    file: []
  },
  { 
    id: 'activeeye-software',
    name: {
      en: 'Activeeye Software',
      ko: 'Activeeye Software'
    }, 
    image: {
      en: activeeyeSoftwareEN,
      ko: activeeyeSoftwareKO
    },
    file: []
   },
  {
    id: 'chamber-control-daq',
    name: {
      en: 'Chamber control & DAQ',
      ko: '챔버컨트롤 & DAQ',
    },
    markdown: {
      en: chamberControlBaqEN,
      ko: chamberControlBaqKO
    },
    file: []
  },
  { 
    id: 'test-bench', 
    name: {
      en: 'Test bench',
      ko: 'Test bench'
    }, 
    markdown: {
      en: testBenchEN,
      ko: testBenchKO
    },
    file: []
  },
]

const title = {
  en: 'Product',
  ko: '제품소개'
}

function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState(products[0].id)
  const { language, _ } = useLanguage();

  useEffect(() => {
    if (productId) {
      const exists = products.some((p) => p.id === productId)
      if (exists) setActiveId(productId)
    } else {
      setActiveId(products[0].id)
    }
  }, [productId])

  const activeProduct = useMemo(() => products.find((p) => p.id === activeId), [activeId])
  const markdownContent = activeProduct?.markdown?.[language]
  const markdownStyleUrl = language === 'ko' ? productMarkdownStylesKO : productMarkdownStylesEN

  const markdownComponents = useMemo(() => ({
    p: ({ children, ...props }) => {
      const nodes = Children.toArray(children)
      const isImageNode = (node) => {
        if (!isValidElement(node)) return false
        if (node.type === 'img' || node.props?.node?.tagName === 'img') return true
        return typeof node.type === 'string' && node.type === 'figure' && node.props?.className?.includes('md-figure')
      }
      const hasOnlyImages = nodes.length > 0 && nodes.every((node) => {
        if (typeof node === 'string') return node.trim() === ''
        return isImageNode(node)
      })
      const imageCount = nodes.filter(isImageNode).length

      if (hasOnlyImages && imageCount > 1) {
        return <div className="md-image-row">{nodes}</div>
      }

      return <p {...props}>{children}</p>
    },
    img: ({ alt, ...props }) => {
      const { altText, caption, widthValue } = parseMarkdownImageAlt(alt)
      const scaledWidth = widthValue ? `calc(${widthValue} / 1.1111)` : undefined
      const style = caption
        ? { width: 'calc(100% / 1.1111)', maxWidth: 'calc(100% / 1.1111)' }
        : scaledWidth
          ? { width: scaledWidth, maxWidth: scaledWidth }
          : undefined
      const className = `${props.className ?? ''}${widthValue ? ' md-image-centered' : ''}`.trim()
      const resolvedSrc = resolveMarkdownSrc(props.src)
      const image = <img {...props} src={resolvedSrc} alt={altText} style={style} className={className || undefined} />

      if (!caption) return image

      return (
        <figure className="md-figure" style={widthValue ? { width: widthValue, maxWidth: widthValue } : undefined}>
          {image}
          <figcaption className="md-figure-caption">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ inline, className, children, ...props }) => {
      const languageMatch = /language-([\w-]+)/.exec(className ?? '')
      const rawCode = String(children ?? '').replace(/\n$/, '')

      if (!inline && languageMatch?.[1] === 'diagram') {
        const definition = parseDiagramDefinition(rawCode)
        if (!definition) {
          return (
            <pre className="md-diagram-error">
              <code>{'Invalid diagram block: expected JSON with items[]'}</code>
            </pre>
          )
        }
        return <DiagramBlock definition={definition} />
      }

      if (inline) {
        return (
          <code {...props} className={className}>
            {children}
          </code>
        )
      }

      return (
        <pre>
          <code {...props} className={className}>
            {children}
          </code>
        </pre>
      )
    },
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
  }), [])

  useEffect(() => {
    const linkId = 'product-markdown-style'
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

  const handleSelect = (id) => {
    setActiveId(id)
    navigate(`/product/${id}`)
  }

  return (
    <main className="content">
      <HeroGallery />
      <PageTitleBar title={title[language]} />
      <div className="product-buttons">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            className={`product-button${activeId === product.id ? ' active' : ''}`}
            onClick={() => handleSelect(product.id)}
          >
            {product.name[language]}
          </button>
        ))}
      </div>
      {  
        activeProduct ? (
          <div className="product-panel">
            {markdownContent ? (
              <div className="product-markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkSupSub]}
                  remarkRehypeOptions={{ handlers: supSubHandlers }}
                  components={markdownComponents}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            ) : (
              activeProduct.image?.[language] ? (
                <img src={activeProduct.image[language]} alt={activeProduct.name[language]} className="product-visual" />
              ) : null
            )}
            {activeProduct.file && activeProduct.file.length > 0 ? (
              <div className="product-files">
                <div className="product-files-label">첨부파일</div>
                {activeProduct.file.map((file) => (
                  <a key={file.name} className="product-file" href={file.file} download>
                    { file.name }
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null
      }
    </main>
  )
}

export default Product
