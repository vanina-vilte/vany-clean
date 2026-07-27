import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

function RequireAuth() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />
}

export default RequireAuth
