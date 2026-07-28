const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'
const TOKEN_KEY = 'vaniclean_admin_token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token)
export const clearToken = () => localStorage.removeItem(TOKEN_KEY)

async function request(path, options = {}) {
  const token = getToken()
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  })

  if (res.status === 401 || res.status === 403) {
    clearToken()
    window.location.href = '/admin/login'
    throw new Error('No autorizado')
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.mensaje || 'Error en la solicitud')
  }

  if (res.status === 204) return null
  return res.json()
}

export const login = (email, password) =>
  fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then(async (res) => {
    if (!res.ok) throw new Error('Credenciales inválidas')
    return res.text()
  })

export const getContactos = () => request('/contactos')
export const actualizarEstadoContacto = (id, estado) =>
  request(`/contactos/${id}/estado`, { method: 'PATCH', body: JSON.stringify({ estado }) })
export const eliminarContacto = (id) => request(`/contactos/${id}`, { method: 'DELETE' })

export const getUsuarios = () => request('/usuarios')
export const crearUsuario = (usuario) =>
  request('/usuarios', { method: 'POST', body: JSON.stringify(usuario) })
export const actualizarUsuario = (id, usuario) =>
  request(`/usuarios/${id}`, { method: 'PUT', body: JSON.stringify(usuario) })
export const eliminarUsuario = (id) => request(`/usuarios/${id}`, { method: 'DELETE' })
