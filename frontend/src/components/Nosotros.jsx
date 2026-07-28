import PageBanner from './PageBanner'
import oficinaNosotros from '../assets/images/oficina-nosotros.webp'
import calendarIcon from '../assets/images/calendar.svg'
import businessIcon from '../assets/images/business.svg'
import protocoloIcon from '../assets/images/protocolo.svg'
import equipoIcon from '../assets/images/equipo.svg'
import './Nosotros.css'

const STATS = [
  { title: '+25 años', text: 'de experiencia', icon: calendarIcon },
  { title: 'Empresas y espacios', text: 'de trabajo', icon: businessIcon },
  { title: 'Protocolos seguros', text: 'y eficientes', icon: protocoloIcon },
  { title: 'Equipo capacitado', text: 'y comprometido', icon: equipoIcon },
]

const VALORES = [
  {
    title: 'Misión',
    text: 'Brindar soluciones confiables, profesionales y rápidas de limpieza y maestranza, respondiendo a la gran necesidad actual de mantener el orden y la higiene.',
  },
  {
    title: 'Propósito',
    text: 'Resolver problemas de limpieza de manera eficiente, aportando a los clientes tranquilidad, bienestar y espacios cuidados. Buscamos además generar puestos de trabajo y capacitar a personas del rubro.',
  },
]

function Nosotros() {
  return (
    <section className="nosotros">
      <PageBanner title="Nosotros" subtitle="Compromiso, experiencia y calidad en cada servicio." />

      <div className="container nosotros__grid">
        <div className="nosotros__image">
          <img src={oficinaNosotros} alt="Equipo de Vany Clean en una oficina" />
        </div>

        <div className="nosotros__content">
          <span className="nosotros__eyebrow">QUIÉNES SOMOS</span>
          <h2>
            <span className="highlight">Vany Clean</span>, un nombre con historia
          </h2>
          <p>
            Vany Clean nace a partir del esfuerzo, la experiencia y los conocimientos adquiridos
            a lo largo de más de 25 años en el sector de la limpieza y maestranza, donde
            desarrollamos experiencia técnica y una comprensión profunda de las necesidades del
            cliente, la responsabilidad y la calidad del servicio.
          </p>
          <p>
            A partir de esa base sólida, decidimos dar un paso adelante y fundar una empresa
            propia, con identidad y compromiso.
          </p>

          <div className="nosotros__stats">
            {STATS.map((s) => (
              <div className="nosotros__stat" key={s.title}>
                <span className="nosotros__stat-icon">
                  <img src={s.icon} alt="" />
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="nosotros__valores">
        <div className="container">
          <span className="nosotros__eyebrow nosotros__eyebrow--center">NUESTROS VALORES</span>
          <div className="nosotros__valores-grid">
            {VALORES.map((v) => (
              <div className="valor-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
                <span className="valor-card__underline" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
