import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import communityImageEN from '../../assets/en/community/community.png'
import communityImageKO from '../../assets/ko/community/community.png'
import { useLanguage } from '../context/LanguageContext'

const title = {
  en: 'Community',
  ko: '커뮤니티',
}

const image = {
  en: communityImageEN,
  ko: communityImageKO
}

function Community() {
  const { language, _ } = useLanguage();
  return (
    <main className="content">
      <HeroGallery />
      <PageTitleBar title={title[language]} />
      <div className="single-visual">
        <img src={image[language]} alt="Community" />
      </div>
    </main>
  )
}

export default Community
