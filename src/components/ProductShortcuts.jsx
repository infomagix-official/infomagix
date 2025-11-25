import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import coastdown from '../../assets/product_shortcut_coastdown.png'
import performance from '../../assets/product_shortcut_performance.png'
import gpscan from '../../assets/product_shortcut_gpscan.png'
import vms3400 from '../../assets/product_shortcut_vms3400.png'
import adboard from '../../assets/product_shortcut_adboard.png'
import pedalRobot from '../../assets/product_shortcut_pedalrobot.png'
import vlog from '../../assets/product_shortcut_vlog.png'
import vcd5 from '../../assets/product_shortcut_vcd5.png'
import vms from '../../assets/product_shortcut_vms.png'
import testBench from '../../assets/product_shortcut_testbench.png'
import software from '../../assets/product_shortcut_software.png'

const shortcuts = [
  { name: 'Coastdown Test System', image: coastdown, slug: 'vms-coastdown-testing' },
  { name: 'Performance Test System', image: performance, slug: 'gps-vms-test-system' },
  { name: 'GPS + CAN Speed Sensor', image: gpscan, slug: 'gps-speed-sensor-vsd' },
  { name: 'APS driver controller VMS3400', image: vms3400, slug: 'aps-drive-controller-vms3400' },
  { name: 'A/D BOARD', image: adboard, slug: 'b2-daq-ad-board' },
  { name: 'Pedal Robot', image: pedalRobot, slug: 'pedal-robot' },
  { name: 'VLOG Data Logger', image: vlog, slug: 'vlog-data-logger' },
  { name: 'VCD5 OBD Display, Perf. test', image: vcd5, slug: 'vcd-can-display' },
  { name: 'VMS Measurement system', image: vms, slug: 'vms-vehicle-daq' },
  { name: 'Test Bench', image: testBench, slug: 'test-bench' },
  { name: 'Software', image: software, slug: 'active-software' },
]

function ProductShortcuts() {
  const [itemsPerView, setItemsPerView] = useState(6)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth
      if (width < 560) setItemsPerView(2)
      else if (width < 820) setItemsPerView(3)
      else if (width < 1080) setItemsPerView(4)
      else setItemsPerView(6)
    }
    updateItems()
    window.addEventListener('resize', updateItems)
    return () => window.removeEventListener('resize', updateItems)
  }, [])

  const totalPages = useMemo(() => Math.max(1, Math.ceil(shortcuts.length / itemsPerView)), [itemsPerView])

  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages - 1))
  }, [totalPages])

  const visibleItems = useMemo(() => {
    const start = page * itemsPerView
    return shortcuts.slice(start, start + itemsPerView)
  }, [page, itemsPerView])

  return (
    <section className="shortcut-section">
      <div className="shortcut-carousel">
        <button
          type="button"
          className="shortcut-arrow"
          aria-label="Previous shortcuts"
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          ‹
        </button>
        <div className="shortcut-track">
          {visibleItems.map((item) => (
            <Link key={item.slug} to={`/product/${item.slug}`} className="shortcut-card">
              <img src={item.image} alt={item.name} />
              <div className="shortcut-name">{item.name}</div>
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="shortcut-arrow"
          aria-label="Next shortcuts"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page >= totalPages - 1}
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default ProductShortcuts
