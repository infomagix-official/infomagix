import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import coastdown from '../../assets/en/shortcut/product_shortcut_coastdown.png'
import performance from '../../assets/en/shortcut/product_shortcut_performance.png'
import gpscan from '../../assets/en/shortcut/product_shortcut_gpscan.png'
import vms3400 from '../../assets/en/shortcut/product_shortcut_vms3400.png'
import adboard from '../../assets/en/shortcut/product_shortcut_adboard.png'
import pedalRobot from '../../assets/en/shortcut/product_shortcut_pedalrobot.png'
import vlog from '../../assets/en/shortcut/product_shortcut_vlog.png'
import vcd5 from '../../assets/en/shortcut/product_shortcut_vcd5.png'
import vms from '../../assets/en/shortcut/product_shortcut_vms.png'
import testBench from '../../assets/en/shortcut/product_shortcut_testbench.png'
import software from '../../assets/en/shortcut/product_shortcut_software.png'
import { useLanguage } from '../context/LanguageContext'

const shortcuts = [
  { name: {
    en: 'Coastdown Test System',
    ko: '코스트다운 테스트 시스템'
  }, image: coastdown, slug: 'vms-coastdown-testing' },
  { name: {
    en: 'Performance Test System',
    ko: '성능 테스트 시스템'
  }, image: performance, slug: 'gps-vms-test-system' },
  { name: {
    en: 'GPS + CAN Speed Sensor',
    ko: 'GPS + CAN 속도 센서'
  }, image: gpscan, slug: 'gps-speed-sensor-vsd' },
  { name: {
    en: 'APS driver controller VMS3400',
    ko: 'APS 드라이버 컨트롤러 VMS3400'
  }, image: vms3400, slug: 'aps-drive-controller-vms3400' },
  { name: {
    en: 'A/D BOARD',
    ko: 'A/D 보드'
  }, image: adboard, slug: 'b2-daq-ad-board' },
  { name: {
    en: 'Pedal Robot',
    ko: '페달 로봇'
  }, image: pedalRobot, slug: 'pedal-robot' },
  { name: {
    en: 'VLOG Data Logger',
    ko: 'VLOG 데이터 로거'
  }, image: vlog, slug: 'vlog-data-logger' },
  { name: {
    en: 'VCD5 OBD Display, Perf. test',
    ko: 'VCD5 OBD 디스플레이, 성능. 테스트'
  }, image: vcd5, slug: 'vcd-can-display' },
  { name: {
    en: 'VMS Measurement system',
    ko: 'VMS 측정 시스템'
  }, image: vms, slug: 'vms-vehicle-daq' },
  { name: {
    en: 'Test Bench',
    ko: '테스트 벤치'
  }, image: testBench, slug: 'test-bench' },
  { name: {
    en: 'Software',
    ko: '소프트웨어'
  }, image: software, slug: 'active-software' },
]

function ProductShortcuts() {
  const [itemsPerView, setItemsPerView] = useState(6)
  const [page, setPage] = useState(0);
  const {language, _} = useLanguage();

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
              <div className="shortcut-name">{item.name[language]}</div>
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
