import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import contactImage from '../../assets/contact/contact.png'

function Contact() {
  return (
    <main className="content">
      <HeroGallery title="Contact" subtitle="Contact" />
      <PageTitleBar title="Contact" />
      <div className="single-visual">
        <img src={contactImage} alt="Contact information" />
      </div>
    </main>
  )
}

export default Contact
