import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import nvds from '../../assets/en/product/nvds.png'
import pedalRobot from '../../assets/en/product/pedalrobot.png'
import gpsSpeedSensorVsd from '../../assets/en/product/gpsspeedsensorvsd.png'
import gpsVmsTestSystem from '../../assets/en/product/gpsvmstestsystem.png'
import apsDriveController from '../../assets/en/product/aps(drive)controllervms3400.png'
import vmsCoastdownTesting from '../../assets/en/product/vmscoastdowntesting.png'
import vmsVehicleDaq from '../../assets/en/product/vmsvehicledaq.png'
import vehicleDriveTestSystem from '../../assets/en/product/vehicledrivetestsystem.png'
import vlogDataLogger from '../../assets/en/product/vlogdatalogger.png'
import vcdCanDisplay from '../../assets/en/product/vcdcandisplay.png'
import b2DaqAdBoard from '../../assets/en/product/b2daqadboard.png'
import activeSoftware from '../../assets/en/product/activesoftware.png'
import activeeyeSoftware from '../../assets/en/product/chanbercontroldaq.png'
import testBench from '../../assets/en/product/testbench.png'

const products = [
  { id: 'nvds', name: 'NVDS', image: nvds },
  { id: 'pedal-robot', name: 'Pedal Robot', image: pedalRobot },
  { id: 'gps-speed-sensor-vsd', name: 'GPS speed sensor VSD', image: gpsSpeedSensorVsd },
  { id: 'gps-vms-test-system', name: 'GPS+VMS Test system', image: gpsVmsTestSystem },
  { id: 'aps-drive-controller-vms3400', name: 'APS(Drive) controller VMS3400', image: apsDriveController },
  { id: 'vms-coastdown-testing', name: 'VMS Coastdown testing', image: vmsCoastdownTesting },
  { id: 'vms-vehicle-daq', name: 'VMS Vehicle DAQ', image: vmsVehicleDaq },
  { id: 'vehicle-drive-test-system', name: 'Vehicle Drive Test System', image: vehicleDriveTestSystem },
  { id: 'vlog-data-logger', name: 'VLOG Data logger', image: vlogDataLogger },
  { id: 'vcd-can-display', name: 'VCD CAN display', image: vcdCanDisplay },
  { id: 'b2-daq-ad-board', name: 'B2-DAQ AD Board', image: b2DaqAdBoard },
  { id: 'active-software', name: 'Active software', image: activeSoftware },
  { id: 'activeeye-software', name: 'Activeeye software', image: activeeyeSoftware },
  { id: 'test-bench', name: 'Test bench', image: testBench },
]

function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState(products[0].id)

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
      <PageTitleBar title="Product" />
      <div className="product-buttons">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            className={`product-button${activeId === product.id ? ' active' : ''}`}
            onClick={() => handleSelect(product.id)}
          >
            {product.name}
          </button>
        ))}
      </div>
      {activeProduct ? (
        <div className="product-panel">
          <img src={activeProduct.image} alt={activeProduct.name} className="product-visual" />
        </div>
      ) : null}
    </main>
  )
}

export default Product
