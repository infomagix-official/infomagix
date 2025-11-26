import { Link, NavLink } from 'react-router-dom'
import headerLogo from '../../assets/en/logo/logo_header.png'
import { useLanguage } from '../context/LanguageContext'

const navItems = [
  { 
    label: {
      en: 'Company',
      ko: '회사소개'
    },
    to: '/company' 
  },
  { 
    label: {
      en: 'Business Introduction',
      ko: '사업소개'
    }, 
    to: '/business' 
  },
  { 
    label: {
      en: 'Product', 
      ko: '제품소개'
    },
    to: '/product' 
  },
  { 
    label: {
      en: 'Contact',
      ko: '견적문의'
    }, 
    to: '/contact' },
  { 
    label: {
      en: 'Community',
      ko: '커뮤니티'
    }, 
    to: '/community' 
  },
]

function Header() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="site-header">
      <div className="inner">
        <Link to="/" className="brand">
          <img src={headerLogo} alt="Infomagix logo" />
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label[language]}
            </NavLink>
          ))}
          <button type="button" className="lang-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'English' : 'Korean'}
          </button>
        </nav>
        
      </div>
    </header>
  )
}

export default Header
