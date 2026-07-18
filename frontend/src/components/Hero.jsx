import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__eyebrow">SERVICIOS DE LIMPIEZA PROFESIONAL</span>
          <h1 className="hero__title">
            Cuidamos cada espacio<br />
            con responsabilidad y<br />
            experiencia
          </h1>
          <p className="hero__subtitle">
            Brindamos soluciones integrales de limpieza y mantenimiento
            con altos estándares de calidad, adaptadas a las necesidades
            de cada cliente
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
