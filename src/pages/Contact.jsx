import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import contactImageEN from '../../assets/en/contact/contact.png'
import contactImageKO from '../../assets/ko/contact/contact.png'
import { useLanguage } from '../context/LanguageContext'

const title = {
  en: 'Contact',
  ko: '견적문의'
}

const image = {
  en: contactImageEN,
  ko: contactImageKO
}

function Contact() {
  const { language, _ } = useLanguage();
  return (
    <main className="content">
      <HeroGallery />
      <PageTitleBar title={title[language]} />
      <div className="single-visual">
        <img src={image[language]} alt="Contact information" />
      </div>
    </main>
  )
}

export default Contact
