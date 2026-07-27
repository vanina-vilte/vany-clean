import { useEffect, useState } from 'react'
import { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } from './api'
import './admin.css'

const FORM_VACIO = { id: null, email: '', password: '', rol: 'ADMIN' }

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(FORM_VACIO)
  const [editando, setEditando] = useState(false)
  const [confirmarId, setConfirmarId] = useState(null)
  const [error, setError] = useState('')

  const cargar = async () => {
    setLoading(true)
    try {
      const data = await getUsuarios()
      setUsuarios(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cargar()
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleNuevo = () => {
    setForm(FORM_VACIO)
    setEditando(true)
    setError('')
  }

  const handleEditar = (usuario) => {
    setForm({ id: usuario.id, email: usuario.email, password: '', rol: usuario.rol })
    setEditando(true)
    setError('')
  }

  const handleCancelar = () => {
    setForm(FORM_VACIO)
    setEditando(false)
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (form.id) {
        const actualizado = await actualizarUsuario(form.id, { email: form.email, password: form.password, rol: form.rol })
        setUsuarios((prev) => prev.map((u) => (u.id === form.id ? actualizado : u)))
      } else {
        const creado = await crearUsuario({ email: form.email, password: form.password, rol: form.rol })
        setUsuarios((prev) => [...prev, creado])
      }
      handleCancelar()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleEliminar = async (id) => {
    await eliminarUsuario(id)
    setUsuarios((prev) => prev.filter((u) => u.id !== id))
    setConfirmarId(null)
  }

  return (
    <div className="admin-page">
      <h1>Usuarios</h1>
      <p className="admin-page__subtitle">{usuarios.length} usuarios administradores</p>

      <div className="admin-toolbar">
        {!editando && (
          <button className="admin-btn" onClick={handleNuevo}>+ Nuevo usuario</button>
        )}
      </div>

      {editando && (
        <form className="admin-card admin-form" onSubmit={handleSubmit}>
          <div className="admin-form__row">
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Contraseña {form.id && <span>(dejar vacío para no cambiar)</span>}
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required={!form.id}
              />
            </label>
            <label>
              Rol
              <select name="rol" value={form.rol} onChange={handleChange}>
                <option value="ADMIN">ADMIN</option>
              </select>
            </label>
          </div>
          {error && <p className="admin-login__error">{error}</p>}
          <div className="admin-form__actions">
            <button type="submit" className="admin-btn">{form.id ? 'Guardar cambios' : 'Crear usuario'}</button>
            <button type="button" className="admin-btn admin-btn--secondary" onClick={handleCancelar}>Cancelar</button>
          </div>
        </form>
      )}

      <div className="admin-card">
        {loading ? (
          <p className="admin-empty">Cargando...</p>
        ) : usuarios.length === 0 ? (
          <p className="admin-empty">No hay usuarios para mostrar.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Rol</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.email}</td>
                  <td>{u.rol}</td>
                  <td className="admin-table__acciones">
                    <button className="admin-icon-btn" title="Editar" onClick={() => handleEditar(u)}>✏️</button>
                    {confirmarId === u.id ? (
                      <span className="admin-confirm">
                        <button onClick={() => handleEliminar(u.id)}>Sí</button>
                        <button onClick={() => setConfirmarId(null)}>No</button>
                      </span>
                    ) : (
                      <button className="admin-icon-btn" title="Eliminar" onClick={() => setConfirmarId(u.id)}>🗑️</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default AdminUsuarios
