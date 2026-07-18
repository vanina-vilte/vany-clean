import './WhyUs.css'
import edificio from '../assets/images/edificio.png'
import aniosExpIcon from '../assets/images/anios-exp.svg'

function WhyUs() {
  return (
    <section className="whyus">
      <div className="container whyus__grid">
        <div className="whyus__image">
          <img src={edificio} alt="Edificio corporativo" />
          <div className="whyus__badge">
            <img src={aniosExpIcon} alt="" width="34" height="34" />
            <span className="whyus__badge-number">25+</span>
            <span className="whyus__badge-label">AÑOS DE EXPERIENCIA</span>
            <span className="whyus__badge-text">en el sector de limpieza y mantenimiento</span>
          </div>
        </div>
        <div className="whyus__content">
          <span className="whyus__eyebrow">¿POR QUÉ ELEGIRNOS?</span>
          <h2>
            Más de <span className="highlight">25 años</span> de experiencia
            en limpieza profesional
          </h2>
          <p>
            Contamos con amplio conocimiento operativo, supervisión y gestión
            de equipos de trabajo. Planificamos, controlamos y garantizamos
            servicios eficientes, seguros y sostenibles
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
