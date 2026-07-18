import './Features.css'
import experienciaIcon from '../assets/images/experiencia.svg'
import confianzaIcon from '../assets/images/confianza.svg'
import atencionIcon from '../assets/images/atencion-per.svg'
import calidadIcon from '../assets/images/calidad-serv.svg'

const FEATURES = [
  {
    title: 'Experiencia',
    text: 'Más de 25 años brindando soluciones de limpieza profesional',
    icon: experienciaIcon,
  },
  {
    title: 'Confianza',
    text: 'Personal capacitado, protocolos seguros y compromiso con la calidad',
    icon: confianzaIcon,
  },
  {
    title: 'Atención personalizada',
    text: 'Nos adaptamos a las necesidades de cada cliente y cada espacio',
    icon: atencionIcon,
  },
  {
    title: 'Calidad de servicio',
    text: 'Utilizamos productos y equipos de primera línea para resultados impecables',
    icon: calidadIcon,
  },
]

function Features() {
  return (
    <section className="features">
      <div className="container features__grid">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-card__icon">
              <img src={f.icon} alt="" width="28" height="28" />
            </div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
