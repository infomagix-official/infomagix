import { useEffect, useMemo, useState } from 'react'
import slide01 from '../../assets/main/slider/main_slider_01.png'
import slide02 from '../../assets/main/slider/main_slider_02.png'
import slide03 from '../../assets/main/slider/main_slider_03.png'
import slide04 from '../../assets/main/slider/main_slider_04.png'
import slide05 from '../../assets/main/slider/main_slider_05.png'
import slide06 from '../../assets/main/slider/main_slider_06.png'
import slide07 from '../../assets/main/slider/main_slider_07.png'
import slide08 from '../../assets/main/slider/main_slider_08.png'
import slide09 from '../../assets/main/slider/main_slider_09.png'
import slide10 from '../../assets/main/slider/main_slider_10.png'
import slide11 from '../../assets/main/slider/main_slider_11.png'
import slide12 from '../../assets/main/slider/main_slider_12.png'
import slide13 from '../../assets/main/slider/main_slider_13.png'
import slide14 from '../../assets/main/slider/main_slider_14.png'
import slide15 from '../../assets/main/slider/main_slider_15.png'
import slide16 from '../../assets/main/slider/main_slider_16.png'
import slide17 from '../../assets/main/slider/main_slider_17.png'
import slide18 from '../../assets/main/slider/main_slider_18.png'

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
