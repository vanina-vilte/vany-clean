import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-footer.png'
import './Footer.css'

const NAVEGACION = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Contacto', to: '/contacto' },
]

const SERVICIOS = [
  'Limpieza de oficinas',
  'Limpieza en área de salud',
  'Consorcios',
  'Concesionarias de autos',
  'Cocheras y estacionamientos',
]

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Vany Clean" className="footer__logo" />
          <p>Brindamos servicios de limpieza y mantenimiento con compromiso, responsabilidad y calidad.</p>
        </div>

        <div className="footer__col">
          <h3>Navegación</h3>
          <ul>
            {NAVEGACION.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Servicios</h3>
          <ul>
            {SERVICIOS.map((s) => (
              <li key={s}>
                <Link to="/servicios">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contacto</h3>
          <ul className="footer__contacto">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>11 6033-1521</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" opacity="0" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span>vvilte@vanyclean.com.ar</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Buenos Aires, Argentina</span>
            </li>
          </ul>
        </div>

        <div className="footer__col footer__col--redes">
          <h3>Seguinos</h3>
          <a
            className="footer__social"
            href="https://www.linkedin.com/company/vany-clean"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Vany Clean"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {anio} Vany Clean. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
