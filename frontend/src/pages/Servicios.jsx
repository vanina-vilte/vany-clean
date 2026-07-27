import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import servOficina from '../assets/images/serv-oficina.png'
import servSalud from '../assets/images/serv-salud.png'
import servConsorcio from '../assets/images/serv-consorcio.png'
import servConcesionaria from '../assets/images/serv-concesionaria.png'
import servCocheras from '../assets/images/serv-cocheras.png'
import proceRelevamiento from '../assets/images/proce-relevamiento.svg'
import procePropuesta from '../assets/images/proce-propuesta.svg'
import proceEjecucion from '../assets/images/proce-ejecucion.svg'
import aniosExp from '../assets/images/anios-exp.svg'
import produCalidad from '../assets/images/produ-calidad.svg'
import supervEfic from '../assets/images/superv-efic.svg'
import atenPers from '../assets/images/aten-pers.svg'
import listoIcon from '../assets/images/listo.svg'
import './Servicios.css'

const SERVICIOS = [
  { title: 'Limpieza de oficinas', text: 'Ambientes de trabajo limpios, saludables y productivos.', foto: servOficina, posicion: 'center 5%' },
  { title: 'Limpieza en área de salud', text: 'Hospitales, sanatorios y clínicas, bajo protocolos de bioseguridad e higiene.', foto: servSalud, posicion: 'center 10%' },
  { title: 'Consorcios', text: 'Espacios comunes de edificios, con planes de mantenimiento a medida.', foto: servConsorcio, posicion: 'center 30%' },
  { title: 'Concesionarias de autos', text: 'Showrooms y sectores de exhibición, cuidando la imagen de cada marca.', foto: servConcesionaria, posicion: 'center 23%' },
  { title: 'Cocheras y estacionamientos', text: 'Limpieza de playas de estacionamiento y garages, cuidando la seguridad y el orden.', foto: servCocheras, posicion: 'center 30%' },
]

const PASOS = [
  { n: '1', title: 'Relevamiento', text: 'Analizamos tus necesidades y características del espacio.', icon: proceRelevamiento },
  { n: '2', title: 'Propuesta personalizada', text: 'Diseñamos un plan de limpieza a medida y enviamos nuestra propuesta.', icon: procePropuesta },
  { n: '3', title: 'Ejecución y seguimiento', text: 'Ejecutamos el servicio con estándares de calidad y seguimiento constante.', icon: proceEjecucion },
]

const RAZONES = [
  { title: 'Personal capacitado', text: 'Equipo entrenado en técnicas de limpieza y seguridad.', icon: aniosExp },
  { title: 'Productos de calidad', text: 'Productos profesionales que garantizan higiene y cuidado.', icon: produCalidad },
  { title: 'Supervisión eficiente', text: 'Supervisores que aseguran el cumplimiento de los estándares.', icon: supervEfic },
  { title: 'Atención personalizada', text: 'Siempre disponibles para atender consultas y necesidades.', icon: atenPers },
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
                <img src={s.foto} alt={s.title} style={{ objectPosition: s.posicion }} />
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
                  <span className="proceso__paso-icon">
                    <img src={p.icon} alt="" />
                  </span>
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
                <span className="porque__icon">
                  <img src={r.icon} alt="" />
                </span>
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
            <span className="servicios-cta__icon">
              <img src={listoIcon} alt="" />
            </span>
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
