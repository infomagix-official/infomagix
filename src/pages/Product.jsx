import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'


import nvdsEN from '../../assets/en/product/nvds.png'
import pedalRobotEN from '../../assets/en/product/pedalrobot.png'
import gpsSpeedSensorVsdEN from '../../assets/en/product/gpsspeedsensorvsd.png'
import gpsVmsTestSystemEN from '../../assets/en/product/gpsvmstestsystem.png'
import apsDriveControllerEN from '../../assets/en/product/aps(drive)controllervms3400.png'
import vmsCoastdownTestingEN from '../../assets/en/product/vmscoastdowntesting.png'
import vmsVehicleDaqEN from '../../assets/en/product/vmsvehicledaq.png'
import vehicleDriveTestSystemEN from '../../assets/en/product/vehicledrivetestsystem.png'
import vlogDataLoggerEN from '../../assets/en/product/vlogdatalogger.png'
import vcdCanDisplayEN from '../../assets/en/product/vcdcandisplay.png'
import b2DaqAdBoardEN from '../../assets/en/product/b2daqadboard.png'
import activeSoftwareEN from '../../assets/en/product/activesoftware.png'
import activeeyeSoftwareEN from '../../assets/en/product/activeeyesoftware.png'
import chamberControlBaqEN from '../../assets/en/product/chambercontroldaq.png'
import testBenchEN from '../../assets/en/product/testbench.png'
import costDownTestServiceEN from '../../assets/ko/product/costdowntestservice.png'

import nvdsKO from '../../assets/ko/product/nvds.png'
import pedalRobotKO from '../../assets/ko/product/pedalrobot.png'
import gpsSpeedSensorVsdKO from '../../assets/ko/product/gpsspeedsensorvsd.png'
import gpsVmsTestSystemKO from '../../assets/ko/product/gpsvmstestsystem.png'
import apsDriveControllerKO from '../../assets/ko/product/aps(drive)controllervms3400.png'
import vmsCoastdownTestingKO from '../../assets/ko/product/vmscoastdowntesting.png'
import vmsVehicleDaqKO from '../../assets/ko/product/vmsvehicledaq.png'
import vehicleDriveTestSystemKO from '../../assets/ko/product/vehicledrivetestsystem.png'
import vlogDataLoggerKO from '../../assets/ko/product/vlogdatalogger.png'
import vcdCanDisplayKO from '../../assets/ko/product/vcdcandisplay.png'
import b2DaqAdBoardKO from '../../assets/ko/product/b2daqadboard.png'
import activeSoftwareKO from '../../assets/ko/product/activesoftware.png'
import activeeyeSoftwareKO from '../../assets/ko/product/activeeyesoftware.png'
import chamberControlBaqKO from '../../assets/ko/product/chambercontroldaq.png'
import testBenchKO from '../../assets/ko/product/testbench.png'
import costDownTestServiceKO from '../../assets/ko/product/costdowntestservice.png'

import vmsCostdownFile from '../../assets/file/251002인포매직스 주행저항시험 안내.pdf'

import { useLanguage } from '../context/LanguageContext'

const products = [
  { 
    id: 'nvds',
    name: {
      en: 'NVDS',
      ko: 'NVDS'
    }, 
    image: {
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
    image: {
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
    image: {
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
      {
        name: '251002인포매직스 주행저항시험 안내.pdf',
        file: vmsCostdownFile
      }
    ]
  },
  {
    id: 'coastdown-test-service',
    name: {
      en: 'costdown test service',
      ko: '주행저항시험용역',
    },
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
            <img src={activeProduct.image[language]} alt={activeProduct.name[language]} className="product-visual" />
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
