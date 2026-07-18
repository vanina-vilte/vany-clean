import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo-header.png'
import './Header.css'

const LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Contacto', to: '/contacto' },
]

function Header() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={scrollTop}>
          <img src={logo} alt="Vany Clean" className="header__logo-img" />
          <div className="header__logo-text">
          </div>
        </Link>
        <nav className="header__nav">
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={scrollTop}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
