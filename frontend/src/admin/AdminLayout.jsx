import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import logo from '../assets/images/logo-header.png'
import './admin.css'

function AdminLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <img src={logo} alt="Vany Clean" className="admin-sidebar__logo" />
        <nav>
          <NavLink to="/admin/consultas" className={({ isActive }) => (isActive ? 'active' : '')}>
            Consultas
          </NavLink>
          <NavLink to="/admin/usuarios" className={({ isActive }) => (isActive ? 'active' : '')}>
            Usuarios
          </NavLink>
        </nav>
        <button className="admin-sidebar__logout" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
