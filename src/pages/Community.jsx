import HeroGallery from '../components/HeroGallery'
import PageTitleBar from '../components/PageTitleBar'
import communityImage from '../../assets/en/community/community.png'

function Community() {
  return (
    <main className="content">
      <HeroGallery title="Community" subtitle="Community" />
      <PageTitleBar title="Community" />
      <div className="single-visual">
        <img src={communityImage} alt="Community" />
      </div>
    </main>
  )
}

export default Community
