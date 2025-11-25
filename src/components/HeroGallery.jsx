import heroImage from '../../assets/en/common/HeroGallery.png'

function HeroGallery({ title = '', subtitle = ''}) {
  return (
    <section className="hero-gallery">
      <img src={heroImage} alt="Infomagix hero background" />
      <div className="hero-overlay">
        {subtitle ? <p className="hero-kicker">{subtitle}</p> : null}
        <h1 className="hero-title">{title}</h1>
      </div>
    </section>
  )
}

export default HeroGallery
