import { Link, NavLink } from 'react-router-dom'
import headerLogo from '../../assets/en/logo/logo_header.png'

const navItems = [
  { label: 'Company', to: '/company' },
  { label: 'Business Introduction', to: '/business' },
  { label: 'Product', to: '/product' },
  { label: 'Contact', to: '/contact' },
  { label: 'Community', to: '/community' },
]

function Header() {
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
        </nav>
      </div>
    </header>
  )
}

export default Header
