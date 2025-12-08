import { useEffect, useMemo, useState } from 'react'
import slide01 from '../../assets/en/main/slider/Active_Software.png'
import slide02 from '../../assets/en/main/slider/ADAS_Test_System_VDTS_DGPS.png'
import slide03 from '../../assets/en/main/slider/APS_Control_Pedal_Actuator_SBW_Shift.png'
import slide04 from '../../assets/en/main/slider/B2_DAQ_Board.png'
import slide05 from '../../assets/en/main/slider/Coastdown_Test_System_GPS100Hz.png'
import slide06 from '../../assets/en/main/slider/Drive_Recorder_CAN_Display.png'
import slide07 from '../../assets/en/main/slider/GPS_Data_logger_CAN_Display.png'
import slide08 from '../../assets/en/main/slider/GPS_Test_Data_logger.png'
import slide09 from '../../assets/en/main/slider/GPS100Hz_CAN_Vehicle_Speed_Sensor1.png'
import slide10 from '../../assets/en/main/slider/GPS100Hz_CAN_Vehicle_Speed_Sensor2.png'
import slide11 from '../../assets/en/main/slider/GPS100Hz_PedalRobot_Test_System.png'
import slide12 from '../../assets/en/main/slider/Measurement_System_VMS.png'
import slide13 from '../../assets/en/main/slider/Pedal_Robot_System_PDA.png'
import slide14 from '../../assets/en/main/slider/Test_Bench.png'
import slide15 from '../../assets/en/main/slider/Test_System.png'
import slide16 from '../../assets/en/main/slider/Vehicle_Drive_Test_System.png'
import slide17 from '../../assets/en/main/slider/Vehicle_Drive_Test_System(VDTS).png'
import slide18 from '../../assets/en/main/slider/VLOG_DATA_logger_Driver_Display.png'

const slides = [
  slide01,
  slide02,
  slide03,
  slide04,
  slide05,
  slide06,
  slide07,
  slide08,
  slide09,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
  slide17,
  slide18,
]

function Slider() {
  const [index, setIndex] = useState(0)

  const visibleSlide = useMemo(() => slides[index], [index])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (next) => {
    setIndex((prev) => {
      const nextIndex = prev + next
      if (nextIndex < 0) return slides.length - 1
      if (nextIndex >= slides.length) return 0
      return nextIndex
    })
  }

  return (
    <section className="hero-slider">
      <div className="slide">
        <img src={visibleSlide} alt="Infomagix product showcase" />
        <div className="slider-controls">
          <button type="button" className="slider-button" aria-label="Previous slide" onClick={() => goTo(-1)}>
            ‹
          </button>
          <button type="button" className="slider-button" aria-label="Next slide" onClick={() => goTo(1)}>
            ›
          </button>
        </div>
        <div className="slider-dots">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              className={`slider-dot${index === dotIndex ? ' active' : ''}`}
              aria-label={`Go to slide ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
