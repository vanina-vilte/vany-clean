import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './Servicios.css'

const SERVICIOS = [
  { title: 'Limpieza de oficinas', text: 'Ambientes de trabajo limpios, saludables y productivos.', photo: 'Foto: oficina limpia' },
  { title: 'Limpieza comercial', text: 'Espacios comerciales impecables que reflejan profesionalismo.', photo: 'Foto: local comercial' },
  { title: 'Maestranza', text: 'Servicio integral de limpieza diaria para empresas e instituciones.', photo: 'Foto: maestranza en acción' },
  { title: 'Mantenimiento de espacios comunes', text: 'Cuidado de halles, escaleras, ascensores y áreas compartidas.', photo: 'Foto: espacios comunes' },
  { title: 'Limpieza profunda', text: 'Eliminamos suciedad acumulada en profundidad para renovar cada ambiente.', photo: 'Foto: limpieza profunda' },
  { title: 'Servicios a medida', text: 'Diseñamos planes de limpieza a la medida de cada cliente y necesidad.', photo: 'Foto: plan a medida' },
]

const PASOS = [
  { n: '1', title: 'Relevamiento', text: 'Analizamos tus necesidades y características del espacio.' },
  { n: '2', title: 'Propuesta personalizada', text: 'Diseñamos un plan de limpieza a medida y enviamos nuestra propuesta.' },
  { n: '3', title: 'Ejecución y seguimiento', text: 'Ejecutamos el servicio con estándares de calidad y seguimiento constante.' },
]

const RAZONES = [
  { title: 'Personal capacitado', text: 'Equipo entrenado en técnicas de limpieza y seguridad.', shape: 'circle-blue' },
  { title: 'Productos de calidad', text: 'Productos profesionales que garantizan higiene y cuidado.', shape: 'diamond-lime' },
  { title: 'Supervisión eficiente', text: 'Supervisores que aseguran el cumplimiento de los estándares.', shape: 'shield-blue' },
  { title: 'Atención personalizada', text: 'Siempre disponibles para atender consultas y necesidades.', shape: 'circle-lime' },
]

function Servicios() {
  return (
    <>
      <PageBanner title="Servicios" subtitle="Soluciones de limpieza y mantenimiento adaptadas a cada espacio." />

      <section className="servicios">
        <div className="container servicios__grid">
          {SERVICIOS.map((s) => (
            <div className="servicio-card" key={s.title}>
              <div className="servicio-card__photo">
                <span>{s.photo}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="proceso">
        <div className="container">
          <span className="proceso__eyebrow">¿CÓMO TRABAJAMOS?</span>
          <h2>Un proceso simple y eficiente</h2>
          <div className="proceso__pasos">
            {PASOS.map((p, i) => (
              <Fragment key={p.n}>
                <div className="proceso__paso">
                  <span className="proceso__paso-icon" />
                  <div>
                    <strong>{p.n}. {p.title}</strong>
                    <p>{p.text}</p>
                  </div>
                </div>
                {i < PASOS.length - 1 && <span className="proceso__connector" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="porque">
        <div className="container">
          <span className="proceso__eyebrow porque__eyebrow--center">¿POR QUÉ ELEGIRNOS?</span>
          <h2 className="porque__title">Compromiso, calidad y confianza</h2>
          <div className="porque__grid">
            {RAZONES.map((r) => (
              <div className="porque__item" key={r.title}>
                <span className={`porque__icon porque__icon--${r.shape}`} />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="servicios-cta">
        <div className="container servicios-cta__inner">
          <div className="servicios-cta__text">
            <span className="servicios-cta__icon" />
            <div>
              <strong>¿Listo para mejorar la limpieza de tu empresa o espacio?</strong>
              <p>Solicitá tu presupuesto sin cargo y descubrí la solución ideal para vos.</p>
            </div>
          </div>
          <div className="servicios-cta__actions">
            <Link to="/contacto" className="btn btn--solid">Solicitar presupuesto</Link>
            <Link to="/contacto" className="btn btn--outline">Contactanos</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicios
