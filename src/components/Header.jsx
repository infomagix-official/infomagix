import { Link, NavLink } from 'react-router-dom'
import headerLogo from '../../assets/en/logo/logo_header.png'
import { useLanguage } from '../context/LanguageContext'

const navItems = [
  { label: 'Company', to: '/company' },
  { label: 'Business Introduction', to: '/business' },
  { label: 'Product', to: '/product' },
  { label: 'Contact', to: '/contact' },
  { label: 'Community', to: '/community' },
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
              {item.label}
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
