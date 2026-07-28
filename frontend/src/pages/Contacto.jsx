import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import contTel from '../assets/images/cont-tel.svg'
import contMail from '../assets/images/cont-mail.svg'
import contMap from '../assets/images/cont-map.png'
import atenPers from '../assets/images/aten-pers.svg'
import './Contacto.css'

const API_URL = 'http://localhost:8080/api/contactos'

const INITIAL_FORM = {
  nombre: '',
  empresa: '',
  telefono: '',
  email: '',
  mensaje: '',
}

function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('request failed')
      setForm(INITIAL_FORM)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageBanner title="Contacto" subtitle="Estamos para ayudarte con tu próximo servicio de limpieza." />

      <section className="contacto">
        <div className="container contacto__grid">
          <form className="contacto__form" onSubmit={handleSubmit}>
            <h2>Envíanos tu consulta</h2>
            <p>
              Completá el formulario y nos pondremos en contacto a la brevedad
              para ofrecerte la mejor solución.
            </p>

            <div className="contacto__row">
              <label>
                Nombre completo
                <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
              </label>
              <label>
                Empresa
                <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de tu empresa" />
              </label>
            </div>

            <div className="contacto__row">
              <label>
                Teléfono
                <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Tu teléfono" required />
              </label>
              <label>
                Correo electrónico
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" required />
              </label>
            </div>

            <label>
              Mensaje
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Contanos sobre tus necesidades de limpieza..."
                rows={5}
                required
              />
            </label>

            <button type="submit" className="contacto__submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Enviando...' : 'Solicitar presupuesto'}
            </button>

            {status === 'success' && (
              <p className="contacto__msg contacto__msg--ok">¡Consulta enviada! Te contactaremos a la brevedad.</p>
            )}
            {status === 'error' && (
              <p className="contacto__msg contacto__msg--error">No pudimos enviar tu consulta. Intentá nuevamente.</p>
            )}

            <span className="contacto__privacy">🔒 Tu información está protegida. No compartimos tus datos.</span>
          </form>

          <div className="contacto__info">
            <div className="contacto__card">
              <span className="contacto__icon contacto__icon--square-blue">
                <img src={contTel} alt="" />
              </span>
              <div>
                <span className="contacto__label">Teléfono</span>
                <strong>11 6033-1521</strong>
                <p>Lunes a viernes de 8 a 18 hs.</p>
              </div>
            </div>

            <div className="contacto__card">
              <span className="contacto__icon contacto__icon--square-blue">
                <img src={contMail} alt="" />
              </span>
              <div>
                <span className="contacto__label">Email</span>
                <strong>vvilte@vanyclean.com.ar</strong>
                <p>Respondemos a la brevedad.</p>
              </div>
            </div>

            <div className="contacto__card contacto__card--wide">
              <div className="contacto__cobertura">
                <h3>Área de cobertura</h3>
                <strong>Buenos Aires / CABA y alrededores</strong>
                <p>Brindamos servicios de limpieza profesional en CABA y zonas aledañas.</p>
              </div>
              <div className="contacto__map">
                <img src={contMap} alt="Mapa del área de cobertura en CABA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contacto-cta">
        <div className="container contacto-cta__inner">
          <div className="contacto-cta__text">
            <span className="contacto-cta__icon">
              <span className="contacto-cta__icon-mask" style={{ WebkitMaskImage: `url(${atenPers})`, maskImage: `url(${atenPers})` }} />
            </span>
            <div>
              <strong>¿Tenés dudas o necesitás un servicio personalizado?</strong>
              <p>Nuestro equipo está listo para asesorarte y ofrecerte una propuesta a medida.</p>
            </div>
          </div>
          <a
            className="contacto-cta__btn"
            href="https://wa.me/5491160331521"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

export default Contacto
