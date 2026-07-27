import { useEffect, useState } from 'react'
import { getContactos, actualizarEstadoContacto, eliminarContacto } from './api'
import './admin.css'

const ESTADOS = ['PENDIENTE', 'RESPONDIDA', 'CERRADA']

function formatFecha(iso) {
  const date = new Date(iso)
  return date.toLocaleDateString('es-AR') + ' ' + date.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
}

function EstadoSelect({ contacto, onChange }) {
  return (
    <select
      className={`admin-estado admin-estado--${contacto.estado.toLowerCase()}`}
      value={contacto.estado}
      onChange={(e) => onChange(contacto.id, e.target.value)}
      onClick={(e) => e.stopPropagation()}
    >
      {ESTADOS.map((estado) => (
        <option key={estado} value={estado}>{estado}</option>
      ))}
    </select>
  )
}

function AdminConsultas() {
  const [consultas, setConsultas] = useState([])
  const [filtro, setFiltro] = useState('TODOS')
  const [loading, setLoading] = useState(true)
  const [confirmarId, setConfirmarId] = useState(null)
  const [detalle, setDetalle] = useState(null)

  const cargar = async () => {
    setLoading(true)
    try {
      const data = await getContactos()
      setConsultas(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cargar()
  }, [])

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setDetalle(null)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  const handleEstadoChange = async (id, estado) => {
    const actualizado = await actualizarEstadoContacto(id, estado)
    setConsultas((prev) => prev.map((c) => (c.id === id ? actualizado : c)))
    setDetalle((prev) => (prev && prev.id === id ? actualizado : prev))
  }

  const handleEliminar = async (id) => {
    await eliminarContacto(id)
    setConsultas((prev) => prev.filter((c) => c.id !== id))
    setConfirmarId(null)
    setDetalle((prev) => (prev && prev.id === id ? null : prev))
  }

  const visibles = filtro === 'TODOS' ? consultas : consultas.filter((c) => c.estado === filtro)

  return (
    <div className="admin-page">
      <h1>Consultas</h1>
      <p className="admin-page__subtitle">{consultas.length} mensajes recibidos desde el formulario de contacto</p>

      <div className="admin-toolbar">
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="TODOS">Todos los estados</option>
          {ESTADOS.map((estado) => (
            <option key={estado} value={estado}>{estado}</option>
          ))}
        </select>
      </div>

      <div className="admin-card">
        {loading ? (
          <p className="admin-empty">Cargando...</p>
        ) : visibles.length === 0 ? (
          <p className="admin-empty">No hay consultas para mostrar.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Empresa</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Mensaje</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {visibles.map((c) => (
                <tr key={c.id} className="admin-table__row-clickable" onClick={() => setDetalle(c)}>
                  <td>{formatFecha(c.creadoEn)}</td>
                  <td>{c.empresa || '-'}</td>
                  <td>{c.nombre}</td>
                  <td>{c.telefono}</td>
                  <td>{c.email}</td>
                  <td className="admin-table__mensaje admin-table__mensaje--truncado">{c.mensaje}</td>
                  <td>
                    <EstadoSelect contacto={c} onChange={handleEstadoChange} />
                  </td>
                  <td>
                    {c.estado === 'CERRADA' && (
                      confirmarId === c.id ? (
                        <span className="admin-confirm" onClick={(e) => e.stopPropagation()}>
                          <button onClick={() => handleEliminar(c.id)}>Sí</button>
                          <button onClick={() => setConfirmarId(null)}>No</button>
                        </span>
                      ) : (
                        <button
                          className="admin-icon-btn"
                          title="Eliminar consulta"
                          onClick={(e) => {
                            e.stopPropagation()
                            setConfirmarId(c.id)
                          }}
                        >
                          🗑️
                        </button>
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {detalle && (
        <div className="admin-modal-backdrop" onClick={() => setDetalle(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <button className="admin-modal__close" onClick={() => setDetalle(null)} aria-label="Cerrar">
              ✕
            </button>

            <span className="admin-modal__fecha">{formatFecha(detalle.creadoEn)}</span>
            <h2>{detalle.nombre}</h2>

            <div className="admin-modal__grid">
              <div>
                <span className="admin-modal__label">Empresa</span>
                <strong>{detalle.empresa || '-'}</strong>
              </div>
              <div>
                <span className="admin-modal__label">Teléfono</span>
                <strong>{detalle.telefono}</strong>
              </div>
              <div>
                <span className="admin-modal__label">Email</span>
                <strong>{detalle.email}</strong>
              </div>
              <div>
                <span className="admin-modal__label">Estado</span>
                <EstadoSelect contacto={detalle} onChange={handleEstadoChange} />
              </div>
            </div>

            <span className="admin-modal__label">Mensaje</span>
            <p className="admin-modal__mensaje">{detalle.mensaje}</p>

            {detalle.estado === 'CERRADA' && (
              <div className="admin-modal__acciones">
                {confirmarId === detalle.id ? (
                  <span className="admin-confirm">
                    <button onClick={() => handleEliminar(detalle.id)}>Sí, eliminar</button>
                    <button onClick={() => setConfirmarId(null)}>Cancelar</button>
                  </span>
                ) : (
                  <button className="admin-btn admin-btn--danger" onClick={() => setConfirmarId(detalle.id)}>
                    🗑️ Eliminar consulta
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminConsultas
