import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  const scrollTop = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={scrollTop}>
          <img src={logo} alt="Vany Clean" className="header__logo-img" />
        </Link>

        <button
          type="button"
          className={`header__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
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
